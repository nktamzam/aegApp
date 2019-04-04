var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var user_routes = require('./routes/routes'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req , res , next) {
res.header('Access-Control-Allow-Origin', "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type');
next ();
})

// Cargamos las rutas
app.use('/api', user_routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;