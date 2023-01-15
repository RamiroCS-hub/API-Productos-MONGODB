const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json( { 
        get: '/api/products',
        getByid: '/api/products/:id',
        post: '/api/make',
        put: '/api/update/:id',
        delete: '/api/delete/:id'
    } )
});

module.exports = router;