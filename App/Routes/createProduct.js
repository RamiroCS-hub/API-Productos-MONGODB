const express = require('express');
const router = express.Router();
const productSchema = require('../Models/product');

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