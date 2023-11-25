import lineByLine from 'n-readlines'
import type { EnglishRussian } from '$lib/types.js'
import { existsSync, readFileSync } from 'fs'
import { getClient } from '$lib/server'
import { QUOTATIONS_PATH } from '$env/static/private'
//import { EntityId } from 'redis-om'

let qPath = `${QUOTATIONS_PATH}/quotations.txt`

let isScrolled = false
let liner: any
const LAST_LINE = 'quotations_last_line'

const scrollDown = async () => {
    const client = await getClient()
    const llPath = `${QUOTATIONS_PATH}/LAST_LINE`
    if(existsSync(llPath)){
        const ll = readFileSync(llPath, 'utf8')
        await client.set(LAST_LINE, ll.trim()) 
    }
    /*const expPath = `${QUOTATIONS_PATH}/export.json`
    if(existsSync(expPath)){
        const quots = JSON.parse(readFileSync(expPath, 'utf8'))
        const repo = await getRepository()
        await Promise.all(quots.map((quot: EnglishRussian) => repo.save(quot))) 
    }*/
    liner = new lineByLine(qPath)
    if(await client.exists(LAST_LINE)){
        let chunk: false | Buffer
        let lastLine = await client.get(LAST_LINE)
        if(lastLine) lastLine = lastLine.trim()
        while(chunk = liner.next()){
            if(chunk.toString('utf8').trim() === lastLine) break
        }
    }
}

const readQuotation = async (): Promise<EnglishRussian> => {
    if(!isScrolled) await scrollDown()
    isScrolled = true
    let chunk: false | Buffer
    const buff_ru: string[] = []
    const buff_en: string[] = []

    const reg = /^\d\d\d\d-\d\d-\d\d.*GMT$|^---$/

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
            (await getClient()).set(LAST_LINE, line)
            const russian = arrayToString(buff_ru)
            if(typeof russian !== 'string') throw 'russian is required 1'
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

export async function load(){
    const quotation = first ? await readQuotation() : null
    first = false 
    return quotation
}

export const actions = {
    next: async function() {
        return await readQuotation()
    },

    save: async function({ request }){
        const data = await request.formData()
        const english = data.get('english')?.toString().trim()
        const russian = data.get('russian')?.toString().trim()
        /*if(russian || english) {
            const repo = await getRepository()
            if(!russian) throw 'russian is required 2'
            const entity = await repo.save(english ? {russian, english} : {russian})
            console.log(entity[EntityId])
        } */
        return await readQuotation()
    }
}
