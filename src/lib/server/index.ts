import mongoose from 'mongoose'
import { MONGO_URL } from '$env/static/private'
import type { Quotation } from '$lib/types'

mongoose.set("strictQuery", false)
let isConnected = false

export const initMongo = async () => {
    if(!MONGO_URL) throw 'no mongo url'
    if(!isConnected) await mongoose.connect(MONGO_URL)
    isConnected = true
    return mongoose
}

export const parseForm = async (request: Request): Promise<Quotation> => {
    await initMongo()
    const data = await request.formData()
    const id = data.get('id')?.toString().trim()
    const foreign = data.get('foreign')?.toString().trim()
    const caption = data.get('caption')?.toString().trim()
    const author = data.get('author')?.toString().trim()
    if(!(caption && author)) throw 'no caption or author'
    const content: Quotation = { russian: {caption, author}}
    if(id) content.id = id
    if(typeof foreign === 'string' && foreign.trim()) content.foreign = foreign
    return content
}
