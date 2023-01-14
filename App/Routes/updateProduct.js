const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const msgError = 'No se pudo actualizar el producto';

    controller.updateProduct( body, id )
    .then( data => res.json({ success: true, data: data }) )
    .catch( err => res.json({succes: false, data: msgError }) );
});


module.exports = router;