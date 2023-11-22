import { Schema } from 'redis-om'
import { getRepository as _getRepository } from '@yababay67/sveltekit-components/redis'
export { getClient } from '@yababay67/sveltekit-components/redis'

const SCHEMA_NAME = 'quotations'

const quotationsSchema = new Schema (SCHEMA_NAME, {
    russian: {type: 'text'},
    english: {type: 'text'}
})

export const getRepository = async () => await _getRepository(SCHEMA_NAME, quotationsSchema)
