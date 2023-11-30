import { getQuotationModel } from '$lib/server'
import type { Quotation } from '$lib/types'

let ids: string[] | undefined

export async function load(): Promise<Quotation>{
    const model = await getQuotationModel()
    if(!ids){
        ids = (await model.find({ used: false }).distinct('_id'))
        .map((id: any) => id.toString())
        .sort((a: any, b: any) => Math.random() - .5)
        console.log(ids)
    }
    if(!(ids && ids.length)){
        console.log('All records are used!')
        await model.updateMany({ used: false })
        ids = undefined
        return await load()
    }
    const id = ids.pop()
    const quotation =  await model.findById(id)
    quotation.used = true
    await quotation.save()
    if(!quotation) throw 'no quotation'
    const { russian, foreign } = quotation
    const { author, caption } = russian
    return { russian: { caption, author }, foreign }
}

export const actions = {
    next: async () => null
}
