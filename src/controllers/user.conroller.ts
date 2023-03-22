import User from '../models/user.model'

export interface IUser {
    name : string
    pass : string
    email : string
}
export const create = (createUser: IUser) => {
    //Create new user using the mongoose model
    try {
        const user = new User(createUser)
    //Save the new created user
    user.save()
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