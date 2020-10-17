import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import productRoutes from './routes/productRoutes'

dotenv.config()
const connectionString = process.env.MONGODB_URL
// const localConnectionString = 'mongodb://127.0.0.1:27017/golden-shoe'

let port = process.env.PORT
if (port == null || port === '') {
  port = 5000
}

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api/products', productRoutes)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log(
      "MongoDB connection didn't work, error below. (maybe check your IP address is whitelisted !)",
    )
    console.log(error.reason)
  })

const { connection } = mongoose
connection.once('open', () => {
  console.log('MongoDB connection successful :)')
})

app.listen(port, () => {
  console.log('Server started at http://localhost:5000')
})
