import Product from '../models/product.model'

interface IProduct {
    name : string
    size : number
    material : string
    cost : number
}
export const create = (createProduct: IProduct) => {
    //Create new product using the mongoose model
    const product = new Product(createProduct)
    //Save the new created user
    product.save()
    //Respond back to the new user
    return product
} 
