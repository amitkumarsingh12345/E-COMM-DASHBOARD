
// ------------------SignUp Api Schema-------------------------------

const mongoose = require('./dbconnection');
const schema = new mongoose.mongoose.Schema({
    UserName: {
        type: String
    },
    Password: {
        type: Number
    },    
    Email: {
        type: String
    }
});
const model = new mongoose.model('disk',schema);
module.exports = model;