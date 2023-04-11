import User from '../models/user.model'

import jwt from 'jsonwebtoken'

import cookieParser from 'cookie-parser'

export interface IUser {
    fname : string
    sname : string
    pass : string
    email : string
    birth : Date
}

const maxAge = 3*24*60*60

const createToken= (id: any) => {
    return jwt.sign({id}, '12062000Curslo', {expiresIn: maxAge})
}

export const create = (createUser: IUser) => {
    //Create new user using the mongoose model
    try {
        const user = new User(createUser)
    //Save the new created user
    user.save()
    //JWT token
    const token = createToken(user._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
    //Respond back to the new user
    return user
    } catch (error: any) {
        throw new Error(error.message)
    }
    
} 

export const findAll = async () => {
    //Get all users using the mongoose model
    //Respond back to the new user
    const users = await User.find()
    return users

}

export const findOne = async (id: string) => {
    //Get user by ID
    const user = await User.findById(id)
    return user
}