// import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

export const ProductoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    colours: [
        {
            name : String,
            colour: String
        }
    ]
})

export interface IProducto extends Document {
    name: string,
    description: string,
    quantity: number,
    price: number,
    colours: []
}