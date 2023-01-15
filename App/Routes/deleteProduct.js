const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

router.delete('/:id', controller.deleteProduct );

module.exports = router;