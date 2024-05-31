const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
        const { name, image, model, brand, year, mileage, description } = req.body;
        const newProduct = new Product({ name, image, model, brand, year, mileage, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

module.exports = {
    addProduct,
    getProducts,
};
