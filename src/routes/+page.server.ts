import { getRepository, getClient } from "$lib/server"

const USED_QUOTATIONS = 'used_quotations'

export async function load(){
    const repo = await getRepository()
    const client = await getClient()
    let keys = await repo.search().return.allKeys()
    keys = Array.from(keys)
    let used: string[] = []
    if(await client.exists(USED_QUOTATIONS)){
        if(used.length === keys.length) await client.del(USED_QUOTATIONS)
        else used = await client.sMembers(USED_QUOTATIONS)
    }
    const unused = keys.filter(key => !used.includes(key))
    const i = Math.floor(unused.length * Math.random())
    const id = unused[i] 
    await client.sAdd(USED_QUOTATIONS, id)
    const { russian, english } = await repo.fetch(id.replace('quotations:', ''))
    return { russian, english }
}
