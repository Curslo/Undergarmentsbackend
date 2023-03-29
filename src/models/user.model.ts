import mongoose from "mongoose";

//import validater from 'validater'

import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    fname : {
        type : String, 
        required : [true, 'Please enter your first name']
    },
    sname : {
        type : String, 
        required : [true, 'Please enter your second name']
    },
    birth : {
        type : Date,
        required : true
    },
    email : {
        type : String, 
        required : [true, 'Please enter an email'],
        unique : true
    },
    pass : {
        type : String, 
        required : true,
        minlength : 8,
    }
})

//fire a function after doc is saved to db
/*userSchema.post('save', (doc, next) => {
    console.log('New user was created and saved', doc);
    next();
})*/

//fire a function before doc is saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.pass = await bcrypt.hash(this.pass, salt)
    next()
})
const User = mongoose.model("User", userSchema)

export default User