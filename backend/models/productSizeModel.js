import mongoose from 'mongoose';

const productSizeSchema = new mongoose.Schema({
    size: Number,
    countInStock: Number
});

const productSizeModel = mongoose.model('ProductSize', productSchema);

export default productSizeModel;