const productSchema = require('../Models/product');

module.exports = {

    getAll: () => {
        return new Promise( (res, rej) => {
            productSchema.find()
            .then( data => res (data))
            .catch( err => rej (err));
        });     
    },

    getByCant: (value) => {
        return new Promise ((res, rej) => {
            productSchema.find({ cant: { $lte: value } })
            .then( data => res (data) )
            .catch( err => rej (data) )
        });
    },

    getByName: (value) => {
        return new Promise ((res, rej) => {
            productSchema.find({ name: value })
            .then( data => res(data))
            .catch( err => rej(data))
        });
    },

    getByPrice: (value) => {
        return new Promise ( (res, rej) => {
            productSchema.find({ price: { $lte: value } })
            .then( data => res(data))
            .catch( err => rej(data))
        });
    },

    updateProduct: (body, id) => {
        return new Promise ((res, rej) => {
            productSchema.findByIdAndUpdate( id, body, { new:true } )
            .then( data => res (data) )
            .catch( err => rej (err) );
        });
    },
    
    deleteProduct: (id) => {
        return new Promise ( (res, rej) => {
            productSchema.findByIdAndDelete( id )
            .then( data => res (data) )
            .catch( err => rej (err) );
        });
    }
}