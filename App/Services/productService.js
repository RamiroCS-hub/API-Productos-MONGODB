const dbFunctions = require('../Database/index');

const getAll = () => {
  return new Promise ( (res, rej) =>{
    dbFunctions.getAllProducts()
      .then( data => res (data) )
      .catch( err => rej (err) );
  });
};

const getByCant = ( value ) => {
  return new Promise( (res, rej) => {
    dbFunctions.getProductsByCant ( value )
      .then( data => res (data) )
      .catch( err => rej (err) )
  });
};

const getByName = ( value ) => {
  return new Promise( (res, rej) => {
    dbFunctions.getProductsByName ( value )
      .then( data => res (data) )
      .catch( err => rej (err) )
  });
};

const getByPrice = ( value ) => {
  return new Promise( (res, rej) => {
    dbFunctions.getProductsByPrice ( value )
      .then( data => res (data) )
      .catch( err => rej (err) )
  });
}

const updateProduct = ( body, id ) => {
  return new Promise ( (res, rej) => {
    dbFunctions.updateProducts ( body, id )
    .then( data => res (data) )
    .catch( err => rej (err) ); 
  });
}

const deleteProduct = ( id ) => {
  return new Promise ( (res, rej) => {
    dbFunctions.deleteProducts ( id )
    .then( data => res (data) )
    .catch( err => rej (err) );
  });
}

module.exports = {
  getAll,
  getByCant,
  getByName,
  getByPrice,
  updateProduct,
  deleteProduct,
}