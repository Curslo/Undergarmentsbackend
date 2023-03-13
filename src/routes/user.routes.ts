import {Router} from "express"

import { create } from "../controllers/user.conroller"

const router = Router()


router.post('/', (req, res) => {
    //Extract user from req
    const createUser = req.body
    //Call user controller to crreate
    const newUser = create(createUser)
    //Res back to user
    res.status(201).json( newUser)
})

router.get('/', (req, res) => res.send("Getting all user"))

router.put('/:id', (req, res) => res.send("Update user by id"))

router.delete('/:id', (req, res) => res.send("Delete user by id"))

router.patch('/:id', (req, res) => res.send("Update user by id"))

export default router