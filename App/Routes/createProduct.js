const express = require('express');
const router = express.Router();
const productSchema = require('../Models/product');

/**
 * @swagger
 * /make
 *  post:
 *    summary: Create new product
 *    tags: [Create Product]
 *    requestBody:
 *      required: true
 *      content:
 *        aplication/json
 *          schema:
 *           type: object
 *           $ref: '../Models/product.js/components/schemas/Product'
 */
router.post('/', (req, res) => {
    const user = productSchema(req.body);
    user.save()
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.error('El error fue:', err);
    })
});

module.exports = router;