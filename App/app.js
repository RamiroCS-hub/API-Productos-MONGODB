const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ 
  path: '.env'
});
/* Creamos la app */
const app = express();

/* Configuraciones de la app */
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Configuraciones de middleware */
app.use(morgan('dev'));
app.use(express.json());

/* Importación de rutas */
const getRequest = require('./Routes/getRequest.js');
const createProduct = require('./Routes/createProduct');
const updateProduct = require('./Routes/updateProduct');
const deleteProduct = require('./Routes/deleteProduct');
const apiDocs = require('./Routes/apiDocs');

/*-------------------------- Rutas -------------------------------*/

// app.get("/id/:param",(req,res) => console.log("se hizo una peticion:",req.params))
/*  READ */
app.use('/api/products', getRequest );

/* CREATE */
app.use('/api/make', createProduct );

/* UPDATE */
app.use('/api/update', updateProduct );

/* DELETE */
app.use('/api/delete', deleteProduct );

/* DOCUMENTACIÓN */
app.use('/api/docs', apiDocs );

/* DB connection */
const { dbConnection } = require('./Database/db');

/* Error handling */
app.use(( req, res, next ) => {
  res.status(500).json( { 
    status: 'Server Error', 
    body: 'Ah ocurrido un error con el servidor, no se ah encontrado la ruta solicitada',
    redirect: process.env.API_URI,
  } );
});

app.listen(process.env.PORT, () =>{
  console.log('Server listening on port:', process.env.PORT);
  dbConnection(process.env.DB_URI);
});
//Comentario para ver si me acuerdo como usar git