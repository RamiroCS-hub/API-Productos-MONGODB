const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        name: string
 *        price: integer
 *        cant: integer
 *    required:
 *      - name,
 *      - price,
 *      - cant
 */

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    cant: {
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model('Product', productSchema);