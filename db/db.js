//------------------------------------------------------------------------------------//
//-----------------Importing required libraries into our file ------------------------//
//------------------------------------------------------------------------------------//
const mongoose = require('mongoose');
const config = require('../config/keys');

//-------------------------------------------------------------------------------//
//---------------------------- Connecting to Our DataBase------------------------//
//-------------------------------------------------------------------------------//
mongoose
  .connect(config.mongoURI, config.monoCFG)
  .catch(() => {
    console.log('no connection', error);
  })
  .then(() => {
    console.log('CONNECTED');
  });

//-------------------------------------------------------------------------------//
// -------------Using Schema constructor, create a ProductSchema ----------------//
//-------------------------------------------------------------------------------//
var ProductSchema = new mongoose.Schema({
  userID: Number,
  description: String,
  updateDate: {
    type: Date,
    default: Date.now
  }
});

//-------------------------------------------------------------------------------//
// ----- Creating a model from the schema to use it in insertion .. exrt---------//
//-------------------------------------------------------------------------------//
var Product = mongoose.model('Product', ProductSchema);

//-------------------------------------------------------------------------------------//
//----------------- function to save the new value for this item dicription -----------//
//-------------------------------------------------------------------------------------//
var save = function(data) {
  var newProduct = new Product(data);
  newProduct.save((error, product) => {
    if (error) {
      console.log('error', err);
    } else {
      console.log(product);
    }
  });
};
//----------------------------------------------------------------------------------------//
//------------------a function to find the disciption of this item------------------------//
//----------------------------------------------------------------------------------------//
var findOne = function(obj, callback) {
  Product.findOne(obj, 'disciption', function(err, person) {
    if (err) console.log(err, 'this a database error');
    else console.log('%s %s is a %s.', Product.disciption);
  });
};

//------------------------------------------------------------------------------------------------------//
//------------------Exporting all needed Sechemas and functions to be used later -----------------------//
//------------------------------------------------------------------------------------------------------//
module.exports.Product = Product;
module.exports.save = save;
module.exports.findOne = findOne;
