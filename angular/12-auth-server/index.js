const express = require('express');
const cors = require('cors');
const { dbConection, dbConnection } = require('./db/config');
require('dotenv').config();

//console.log(process.env);
//Crear el sevidor/aplicacion de expres
const app=express();
//Base de datos
dbConnection();
//Directorio Público
app.use( express.static('public') );

//Cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use( '/api/auth', require('./routes/auth'));

app.listen(process.env.PORT ,() => {
    console.log(`Siuuuuuuuuu Servidor corriendo en puerto ${process.env.PORT}`);
});
