import { writeFileSync } from 'fs'
import redis from 'redis'

const client = redis.createClient()
await client.connect()
const quots = []

const keys = await client.keys('quotations:*')
for(const key of keys){
    if(key.includes(':index:')) continue
    console.log(key)
    try {
     quots.push(await client.json.get(key))
    }
    catch(ex){
        console.error(`${key}: ${ex}`)
    }
}

writeFileSync('.db/export.json', JSON.stringify(quots))
