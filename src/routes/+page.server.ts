import lineByLine from 'n-readlines'
import type { EnglishRussian } from '$lib/types.js'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { createClient } from 'redis'
import shortid from 'shortid'
import { QUOTATIONS_PATH } from '$env/static/private'

const client = createClient({ url: process.env.REDIS_URL ? process.env.REDIS_URL : 'redis://localhost:6379' })
await client.connect()

let qPath = `${QUOTATIONS_PATH}/quotations.txt`
if(!existsSync(qPath)) qPath = '.db/quotations.txt'

const liner = new lineByLine(qPath)
const LAST_LINE = `${QUOTATIONS_PATH}/LAST_LINE`

if(existsSync(LAST_LINE)){
    let chunk: false | Buffer
    let lastLine = readFileSync(LAST_LINE).toString('utf8').trim()
    while(chunk = liner.next()){
         if(chunk.toString('utf8').trim() === lastLine) break
    }
}

const readQuotation = (): EnglishRussian => {
    let chunk: false | Buffer
    const buff_ru: string[] = []
    const buff_en: string[] = []

    const reg = /^\d\d\d\d-\d\d-\d\d.*GMT$/

    const spliceAuthor = (arr: string[]) => {
        let [ author ] = arr.splice(-1)
        if(author && !author.startsWith('-- ')) author = `-- ${author}`
        return [...arr, author]
    }

    const arrayToString = (arr: string[]) => spliceAuthor(arr)
        .join('\n').trim()
        .replaceAll('—', '–')
        .replace(/\s+\-\s+/g, ' – ')

    while(chunk = liner.next()){
        const line = chunk.toString('utf8').trim()
        if(reg.test(line)) {
            writeFileSync(LAST_LINE, line)
            const russian = arrayToString(buff_ru)
            if(!russian) throw 'russian is required'
            const english = arrayToString(buff_en)
            return  english ? {russian, english} : { russian }
        }
        if(!line.trim()) continue
        if(/[А-Яа-яЁё]/.test(line)) buff_ru.push(`${line.trim()}\n`)
        else buff_en.push(`${line.trim()}\n\n`)
    }
    throw 'No such line'
}

let first = true

export function load(){
    const quotation = first ? readQuotation() : null
    first = false 
    return quotation
}

export const actions = {
    next: function() {
        return readQuotation()
    },

    save: async function({ request }){
        const data = await request.formData()
        const english = data.get('english')?.toString().trim()
        const russian = data.get('russian')?.toString().trim()
        if(russian || english) {
            if(!client.isOpen) await client.connect()
            const key = `quotation:${shortid()}`
            if(!russian) throw 'russian is required'
            await client.json.set(key, '$', english ? {russian, english} : {russian})
        } 
        return readQuotation()
    }
}
