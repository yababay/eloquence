import { Schema } from 'redis-om'
import { getRepository as _getRepository } from '@yababay67/sveltekit-components/redis'
export { getClient } from '@yababay67/sveltekit-components/redis'
import shortid from 'shortid'

const SCHEMA_NAME = 'quotations'

const quotationsSchema = new Schema (SCHEMA_NAME, {
    russian: {type: 'text'},
    english: {type: 'text'},
    
}, {idStrategy: async () => shortid()})

export const getRepository = async () => await _getRepository(SCHEMA_NAME, quotationsSchema)
