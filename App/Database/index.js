const { dbConnection} = require('./db');
const { getAllProducts, getProductsByCant, getProductsByName, getProductsByPrice} = require('./getFunctions');
const { updateProducts } = require('./updateFunctions');
const { deleteProducts } = require('./deleteFunctions');

module.exports = {
    dbConnection: dbConnection,
    getAllProducts: getAllProducts,
    getProductsByCant: getProductsByCant,
    getProductsByName: getProductsByName,
    getProductsByPrice: getProductsByPrice,
    updateProducts: updateProducts,
    deleteProducts: deleteProducts,
}