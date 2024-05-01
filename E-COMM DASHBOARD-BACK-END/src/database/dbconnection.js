
// ------------------Mongodb Nodejs Connection(Dtabase Creation)-------------------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DISKTASK').
   then( () => console.log("DB Connected!!")).
       catch( () => console.log("Connection Failed!!"));
           module.exports = mongoose;