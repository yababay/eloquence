import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';
import type { Quotation } from '$lib/types'

const QUOTATION = 'Quotation'

const MongoCaptionWithAuthor = new Schema({
    caption: { type: String, required: true },
    author: { type: String, required: true }
})

const MongoSchema = new Schema(
    {
        foreign: {type: String},
        russian: {type: MongoCaptionWithAuthor, required: true},
        used: {type: Boolean, default: false}
    },
    { timestamps: true }
);

export default mongoose.models[QUOTATION] ?? model<Quotation>(QUOTATION, MongoSchema);
