const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
