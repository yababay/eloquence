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
        const quot = await client.json.get(key)
        const { russian } = quot
        if(!russian.includes('1917')) continue
        quots.push(russian)
    }
    catch(ex){
        console.error(`${key}: ${ex}`)
    }
}

writeFileSync('.db/1917.json', JSON.stringify(quots))
