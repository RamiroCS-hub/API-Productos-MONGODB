const productSchema = require('../Models/product');

module.exports = {
  deleteProducts: ( id ) => {
    return new Promise ( (res, rej) => {
      productSchema.findByIdAndDelete( id )
        .then( data => res (data) )
        .catch( err => rej (err) );
      });
  }
}
