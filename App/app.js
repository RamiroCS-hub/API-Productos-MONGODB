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
/*-------------------------- Rutas -------------------------------*/

// app.get("/id/:param",(req,res) => console.log("se hizo una peticion:",req.params))
/*  READ */
app.use('/products', getRequest);

/* CREATE */
app.use('/make', createProduct);

/* UPDATE */
app.use('/update', updateProduct);

/* DELETE */
app.use('/delete', deleteProduct);

const dbConnection = require('./Database/db');

app.listen(process.env.PORT, () =>{
  console.log('Server listening on port:', process.env.PORT);
  dbConnection(process.env.DB_URI);
});