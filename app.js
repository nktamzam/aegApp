var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var tareas_routes = require('./routes/routes'); 
//cargar middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req , res , next) {
res.header('Access-Control-Allow-Origin', "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type');
next ();
})

// Cargamos las rutas
app.use('/api', tareas_routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;