import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import productRoutes from './routes/productRoutes';

const PORT = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/golden-shoe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection successful :)");
});

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});