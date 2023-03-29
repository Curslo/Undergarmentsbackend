import {Router} from "express"

import { create, findAll, findOne } from "../controllers/user.conroller"

const router = Router()


router.post('/', (req, res) => {
    //Extract user from req
    try {
        const createUser = req.body
    //Call user controller to crreate
    const newUser = create(createUser)
    //Res back to user
    res.status(201).json({msg: 'User has been created succesfully'})
    } catch (error) {
        res.status(500).send(error)
    }
    
})

router.get('/', async (req, res) => {
    //Extract user from req
    //Call user controller to fetch all users
    try {
        const users = await findAll()
        //Res back to user
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error)
    }
   
})
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await findOne(id)
    res.status(200).json(user)
    } catch (error) {
        
    }
})//res.send("User ID"))

router.put('/:id', (req, res) => res.send("Update user by id"))

router.delete('/:id', (req, res) => res.send("Delete user by id"))

router.patch('/:id', (req, res) => res.send("Update user by id"))

export default router