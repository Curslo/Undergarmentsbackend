import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {type : String, required : true},
    size : {type : Number, required : true},
    material : {type : String, required : true},
    cost :{type : Number, required : true}
})

const Product = mongoose.model("Product", productSchema)

export default Product