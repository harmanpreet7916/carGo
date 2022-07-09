const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title: String,
    price: String,
    disc: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Product = mongoose.model('dataofproducts', ProductSchema);

module.exports =  Product;