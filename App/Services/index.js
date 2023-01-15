const { getAll, getByCant, getByName, getByPrice, updateProduct, deleteProduct } = require('./productService');

module.exports = {
    getAll: getAll,
    getByCant: getByCant,
    getByName: getByName,
    getByPrice: getByPrice,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
}