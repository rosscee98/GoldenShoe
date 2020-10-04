import mongoose from 'mongoose';
//import productSizeModel from './productSizeModel';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    properties: [{type: String}],
    sizesAvailable: [{
        size: Number,
        countInStock: Number
    }]
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;