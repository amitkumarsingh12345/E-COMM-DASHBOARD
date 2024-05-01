
// ------------------Product Api Schema-------------------------------

const mongoose = require('./dbconnection');
const addProduct = new mongoose.mongoose.Schema({
    Name: {
        type: String
    },
    Price: {
        type: Number
    },    
    Category: {
        type: String
    },
    UserId: {
        type: String
    },
    Company: {
        type: String
    }
});
const Product = new mongoose.model('products',addProduct);
module.exports = Product;