import { Schema } from 'redis-om'
//import { getRepository as _getRepository } from '@yababay67/sveltekit-components/redis'
export { getClient } from '@yababay67/sveltekit-components/redis'
//import isaac from 'isaac'
//import { factory } from 'ulid'

let seed = 1967 * 4 * 26

//function random() {
//    var x = Math.sin(seed++) * 10000;
//    return x - Math.floor(x);
//}

//const ulid = factory(random)

const SCHEMA_NAME = 'quotations'

/*const quotationsSchema = new Schema (SCHEMA_NAME, {
    russian: {type: 'text'},
    english: {type: 'text'},
    
}, {idStrategy: async () => ulid()})
*/
//export const getRepository = async () => await _getRepository(SCHEMA_NAME, quotationsSchema)
