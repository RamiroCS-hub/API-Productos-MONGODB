const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    controller.deleteProduct(id)
    .then( data => res.json (data) )
    .catch( err => res.send (err) );
});

module.exports = router;