import lineByLine from 'n-readlines'
import type { EnglishRussian } from '$lib/types.js'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { getRepository } from '$lib/server'

const liner = new lineByLine('./quotations.txt')
const LAST_LINE = 'LAST_LINE'

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
            const repo = await getRepository()
            if(!russian) throw 'russian is required'
            await repo.save(english ? {russian, english} : {russian})
        } 
        return readQuotation()
    }
}
