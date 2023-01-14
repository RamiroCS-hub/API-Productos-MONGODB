const mongoose = require('mongoose');

const connection = (uri) =>{
  mongoose.set({ strictQuery: true});

  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => console.log('Conexión exitosa') )
  .catch( err => console.error('Ocurrio un error:', err) );
  
};

module.exports = connection;