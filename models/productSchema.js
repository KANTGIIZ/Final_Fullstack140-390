const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  serialno:  String,  
  name:  String,
  category: String,
  price: Number,
  photo: String
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel