const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

router.get('/', controller.getAll);

router.get('/:param/:value', controller.getByProperty);

module.exports = router;