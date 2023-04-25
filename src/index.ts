import express from 'express';

import userRouter from './routes/user.routes';

import productRouter from './routes/product.routes'

import bodyparser from 'body-parser'

import mongoose from 'mongoose';

import cookieParser from 'cookie-parser';

//connecting to database
mongoose.connect("mongodb+srv://richardkisivii:-U2PR5nfaS.XRMY@cluster0.ank6thj.mongodb.net/ecomm?retryWrites=true&w=majority").then(() => console.log('Connected to database'))

//Initializing express
const app = express();


app.use(cookieParser());

app.use(bodyparser.json())

app.get('/', (req, res) => res.send("Welcome to my API"))

app.use('/users', userRouter)

app.use('/products', productRouter)


//Server
const PORT = 3000;

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));

//cookies
app.get('/set-cookies', (req, res) => {
    //res.setHeader('set-Cookie', 'newUser=true');
    res.cookie('newUser', false, {maxAge: 1000*60*60*24, httpOnly: true});
    res.cookie('isEmployee', true, {maxAge: 1000*60*60*24, httpOnly: true});
    res.send('You got the cookie');
});

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies.newUser);

    res.json(cookies);
})