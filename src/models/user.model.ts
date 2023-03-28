import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
    },
    email : {
        type : String, 
        required : true,
        unique : true
    },
    pass : {
        type : String, 
        required : true,
        minlength : 8,
    }
})

//fire a function after doc is saved to db
userSchema.post('save', (doc, next) => {
    console.log('New user was created and saved', doc);
    next();
})

//fire a function before doc is saved to db
userSchema.pre('save', function (next) {
    console.log('User about to be saved to the db', this)
})
const User = mongoose.model("User", userSchema)

export default User