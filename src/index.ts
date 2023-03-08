import express from 'express';

const app = express();

app.get('/', (req, res) => res.send("Welcome to my API"))

const PORT = 3000;

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));