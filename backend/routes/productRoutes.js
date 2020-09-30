import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

/* Create */ // note here the isAuth isAdmin arguments passed in on the practice app - implement that!
router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({message: "New product created", data: newProduct});
    } else {
        return res.status(500).send({message: "Error in creating product"});
    }
});

/* Retrieve all */
router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

/* Retrieve specific */
router.get("/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        res.send(product);
    } else {
        return res.status(500).send({message: "Error in retrieving product"});
    }
});

/* Update */ // same here
router.put("/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        product.name = req.body.name;
        product.image = req.body.image;
        product.price = req.body.price;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save().catch(error => {
            console.log(error.message);
        });
        if (updatedProduct) {
            return res.status(200).send({message: "Product updated", data: updatedProduct});
        }
    }
    return res.status(500).send({message: "Error in updating product"});
});

/* Delete */ // same here
router.delete("/:id", async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({message: "Product deleted"});
    } else {
        res.send("Error in deleting product");
    }
});

export default router;