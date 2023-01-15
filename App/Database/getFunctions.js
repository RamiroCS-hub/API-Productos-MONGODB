const productSchema = require('../Models/product');

const getAllProducts = () => {
  return new Promise ( (res, rej) => {
    productSchema.find()
      .then( data => res(data) )
      .catch( err => rej(data) );
  });
};
  
const getProductsByCant = ( value ) => {
  return new Promise ( (res, rej) => {
    productSchema.find({ cant: { $lte: value } })
      .then( data => {
        if (data == '') throw 'No existen productos con esas características'
        res (data) 
      })
      .catch( err => rej (err) )
  });
}
  
const getProductsByName = ( value ) => {
  return new Promise ((res, rej) => {
    productSchema.find({ name: value })
      .then( data => {
        if (data == '') throw 'No existen productos con esas características'
        res(data)
      })
      .catch( err => rej(err))
  });
}
const getProductsByPrice = ( value ) => {
  return new Promise ( (res, rej) => {
    productSchema.find({ price: { $lte: value } })
      .then( data => {
        if (data == '') throw 'No existen productos con esas características'
        res (data)
      })
      .catch( err => rej (err))
  });
};

module.exports = {
  getAllProducts,
  getProductsByCant,
  getProductsByName,
  getProductsByPrice,
}