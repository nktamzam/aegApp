const app = require('./app' );
const mongoose = require('mongoose')

const mongodbRoute = 'mongodb+srv://eneka:5pHxEJGuHBiipkOA@clustereneka-ji1jl.mongodb.net/DirtyBrainDB?retryWrites=true'
const port = process.env.PORT || 3001;

/*MONGODB*/
const options = {
socketTimeoutMS: 0,
keepAlive: true,
reconnectTries: 30,
useNewUrlParser: true
};

mongoose.Promise = global.Promise
mongoose.connect(mongodbRoute , options , ( err ) => {
if (err) {
return console.log(`Error al conectar a la base de datos: ${err}`)
}
app.listen(port, () => {
    console.log(`Servidor up en ${port}`);
});
console.log(`Conexión con Mongo correcta.`)
})
