const productSchema = require('../Models/product');

module.exports = {
  updateProducts: ( body, id ) => {
    return new Promise ((res, rej) => {
      productSchema.findByIdAndUpdate( id, body, { new:true } )
        .then( data => res (data) )
        .catch( err => rej (err) );
    });
  }
}