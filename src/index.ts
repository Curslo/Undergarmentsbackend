import express from 'express';

import userRouter from './routes/user.routes';

import productRouter from './routes/product.routes'

import bodyparser from 'body-parser'

import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://richardkisivii:-U2PR5nfaS.XRMY@cluster0.ank6thj.mongodb.net/ecomm?retryWrites=true&w=majority").then(() => console.log('Connected to database'))

const app = express();

app.use(bodyparser.json())

app.get('/', (req, res) => res.send("Welcome to my API"))

app.use('/users', userRouter)


app.use('/products', productRouter)

const PORT = 3000;

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));