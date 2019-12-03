const mongoose = require('mongoose')
const Product = require('./models/productSchema')
// #5 Change URL to your local mongodb
const url = "";
// ===============================

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

function getAllProducts(req, res) {

    Product.find({}, function (err, data) {   
        if(err){
            res.status(500).json({ status: "error", message: err});
        }     
        res.json(data);
    });
}

function getProductById(req, res) {
    var pid = req.params.pid;    
    // #6 Get a product by ID

    // ===============================
}

function updateProductById(req, res) {
    var payload = req.body
    var pid = req.params.pid;    
    // #7 Update a product by ID (findByIdAndUpdate)

    // ===============================
}

function deleteProductById(req, res) {
    var pid = req.params.pid;    
    // #8 Delete a product by ID (findByIdAndDelete)

    // ===============================
}

function addProduct(req, res) {
    var payload = req.body
    // #9 Add a new product 

    // ===============================
}

module.exports = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    addProduct: addProduct,
    updateProductById: updateProductById,
    deleteProductById, deleteProductById
};