import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, },
    city: { type: String, },
    type: { type: String, },
    discription: { type: String, },
    rooms: { type: Number, },
    bath: { type: String, },
    gen: { type: String, },
}, { timestamps: true })
export const productModel = mongoose.model('products', productSchema)