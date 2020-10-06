import express from 'express'
import Product from '../models/productModel'

const router = express.Router()

/* Create */
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description,
    properties: req.body.properties,
    sizesAvailable: req.body.sizesAvailable,
  })
  const newProduct = await product.save()
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New product created', data: newProduct })
  }
  return res.status(500).send({ message: 'Error in creating product' })
})

/* Retrieve all */
router.get('/', async (req, res) => {
  const products = await Product.find({})
  res.send(products)
})

/* Retrieve specific */
router.get('/:id', async (req, res) => {
  const productId = req.params.id
  const product = await Product.findById(productId)
  if (product) {
    return res.send(product)
  }
  return res.status(500).send({ message: 'Error in retrieving product' })
})

/* Update */
router.put('/:id', async (req, res) => {
  const productId = req.params.id
  const product = await Product.findById(productId)
  if (product) {
    product.name = req.body.name
    product.image = req.body.image
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    product.properties = req.body.properties
    product.sizesAvailable = req.body.sizesAvailable
    const updatedProduct = await product.save().catch((error) => {
      console.log(error.message)
    })
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product updated', data: updatedProduct })
    }
  }
  return res.status(500).send({ message: 'Error in updating product' })
})

/* Delete */
router.delete('/:id', async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id)
  if (deletedProduct) {
    await deletedProduct.remove()
    res.send({ message: 'Product deleted' })
  } else {
    res.send('Error in deleting product')
  }
})

export default router
