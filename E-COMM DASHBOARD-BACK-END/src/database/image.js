
// ------------------Image Api Schema-------------------------------

const mongoose = require('./dbconnection');
const imageschema = new mongoose.mongoose.Schema({
    Name: {
        type: String
    },   
    Category: {
        type: String
    },
    Company: {
        type: String
    },
    ImageName: {
        type: String
    }
});
const image = new mongoose.model('image',imageschema);
module.exports = image;