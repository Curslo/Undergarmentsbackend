import User from '../models/user.model'

interface IUser {
    name : string
    pass : string
    email : string
}
export const create = (createUser: IUser) => {
    //Create new user using the mongoose model
    const user = new User(createUser)
    //Save the new created user
    user.save()
    //Respond back to the new user
    return user
} 
