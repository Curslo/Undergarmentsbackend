import {Router} from "express"

import { create } from "../controllers/product.controller"

const router = Router()


router.post('/', (req, res) => {
    //Extract product from req
    const createProduct = req.body
    //Call product controller to crreate
    const newProduct = create(createProduct)
    //Res back to user
    res.status(201).json( newProduct)
})

router.get('/', (req, res) => res.send("Getting all products"))

router.put('/:id', (req, res) => res.send("Update product by id"))

router.delete('/:id', (req, res) => res.send("Delete product by id"))

router.patch('/:id', (req, res) => res.send("Update product by id"))

export default router