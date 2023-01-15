const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

router.put('/:id', controller.updateProduct );

module.exports = router;