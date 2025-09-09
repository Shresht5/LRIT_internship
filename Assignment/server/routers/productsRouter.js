import express from 'express';
import { productModel } from '../models/productModel.js';
const Router = express.Router();

Router.post('/create', async (req, res) => {
    try {
        const product = req.body;
        const testproduct = await productModel.findOne({ name: product.name })
        if (testproduct) {
            return res.status(400).json({ success: false, message: "products already exist" })
        }
        const newProduct = new productModel(product);
        await newProduct.save();
        return res.status(201).json({ success: true, message: "product genreted", product })
    } catch (err) {
        return res.status(500).json({ success: false, message: "server error", messafe: err.message })
    }
})

Router.get('/showall', async (req, res) => {
    try {
        const products = await productModel.find();
        if (!products) {
            return res.status(400).json({ success: false, message: "products not found" })
        }
        return res.status(200).json({ success: true, message: " All products", products })
    } catch (err) {
        return res.status(500).json({ success: false, message: "server error", err })
    }
});

Router.get('/productsearch', async (req, res) => {
    try {
        const product = req.query;
        const products = await productModel.find(product);
        if (product.length < 1) {
            return res.status(400).json({ success: false, message: "products not found" })
        }
        return res.status(200).json({ success: true, message: "product", products })
    } catch (err) {
        return res.status(500).json({ success: false, message: "server error", err })
    }
});

Router.get('/single/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(400).json({ success: false, message: "products not found" })
        }
        return res.status(200).json({ success: true, message: "product", product })
    } catch (err) {
        return res.status(500).json({ success: false, message: "server error", err })
    }
});

Router.put('/update/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = req.body;
        const dbProduct = await productModel.findByIdAndUpdate(productId, product)
        if (!dbProduct) {
            return res.status(400).json({ success: false, message: "products doesn't exist" })
        }
        return res.status(200).json({ success: true, message: "product updated", product })
    } catch (err) {
        return res.status(500).json({ success: false, message: "server error", err })
    }
})

Router.delete('/delete/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await productModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(400).json({ success: false, message: "products doesn't exist" })
        }
        return res.status(200).json({ success: true, message: "product deleted", product: deletedProduct })
    } catch (err) {
        return res.status(500).json({ success: false, message: "server error", err })
    }
})
export default Router;