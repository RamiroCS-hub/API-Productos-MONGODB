const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

router.get('/', (req, res) => {
    controller.getAll()
    .then( (data) => res.json (data) )
    .catch( err => res.send (err) );
});

router.get('/:param/:value', (req, res) => {
    
  let param = req.params.param;
  const value = req.params.value;

  const msgError = 'No se encontro productos con esa propiedad';

  switch( param ){
    case "name":
      controller.getByName (value)
      .then( (data) => res.json (data) )
      .catch( err => res.send (err) );
      break;

    case "price":
      controller.getByPrice (value)
      .then( (data) => res.json (data) )
      .catch( err => res.send (err) );
      break;

    case "cant":
      controller.getByCant (value)
      .then( (data) => res.json (data) )
      .catch( err => res.send (err) );
      break;

    default:
      res.status(404).send("No existe esa propiedad");
  };

  return;

});

module.exports = router;