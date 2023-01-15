const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json( { 
        get: '/api/products',
        post: '/api/make',
        put: '/api/update',
        delete: '/api/delete'
    } )
});

module.exports = router;