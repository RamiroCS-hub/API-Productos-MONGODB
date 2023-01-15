const productService = require('../Services/index');

const getAll = (req, res) => {
  productService.getAll()
      .then( data => res.send(data) )
      .catch( err => res.status(404).json ( { 
        status: 'Not Found', 
        body: 'No se encontraron productos'
      } ));
}

const getByProperty = (req, res) => {
  let param = req.params.param;
  const value = req.params.value;
  
  switch( param ) {
    case "name":
      productService.getByName ( value )
        .then( data => res.json (data) )
        .catch( err => res.status(404).send (err) );
      break;

    case "price":
      productService.getByPrice ( value )
        .then( data => res.json (data) )
        .catch( err => res.status(404).send (err) );
      break;

    case "cant":
      productService.getByCant ( value )
        .then( data  => res.json (data) )
        .catch( err => res.status(404).send (err) );
      break;

    default:
      res.status(404).json( {
        status: 'Not Found',
        body: 'No existe ninguna propiedad con ese nombre'
      } );
  };
}
 
const updateProduct = ( req, res ) => {
  const id = req.params.id;
  const body = req.body;

  productService.updateProduct( body, id )
    .then( data => res.json (data) )
    .catch( err => res.status(404).json ( { 
      status: 'Not Found', 
      body: 'No se encontraron productos'
    } ));
}

const deleteProduct = ( req, res ) => {
  const id = req.params.id;

  productService.deleteProduct ( id )
    .then( data => res.json (data) )
    .catch( err => res.status(404).json ( { 
      status: 'Not Found', 
      body: 'No se encontraron productos'
    } ));

}

module.exports = {

  getAll: getAll,

  getByProperty: getByProperty,
  
  updateProduct: updateProduct,
  
  deleteProduct: deleteProduct,
}