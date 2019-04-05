// Cargamos el módulo de mongoose
const mongoose =  require('mongoose');

// Usaremos los esquemas
const Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
const TareaSchema = Schema({
   nombre: {type: String, required: true},
   descripción: {type: String, required: true},
   estado: Boolean
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Tarea', TareaSchema);