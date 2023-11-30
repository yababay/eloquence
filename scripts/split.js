import { readFileSync, writeFileSync } from "fs"
const quots = JSON.parse(readFileSync('.db/quotations.json', 'utf8'))
.sort(() => Math.random() - .5)
.sort(() => Math.random() - .5)
.sort(() => Math.random() - .5)

console.log(quots.length)

let count = 0

const getCount = () => {
    let suff = `${++count}`
    while(suff.length < 3) suff = `0${suff}`
    return suff
}

while(quots.length > 0){
    const slice = quots.splice(0, 100)
    writeFileSync(`static/quotations-${getCount()}.json`, JSON.stringify(slice))
}
