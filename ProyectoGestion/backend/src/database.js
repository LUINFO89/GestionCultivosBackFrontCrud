//crear base de datos
const mongoose = require('mongoose')
URI=('mongodb://localhost/bdGestion')// se conecta a la base de datos

mongoose.connect(URI,{

    useNewUrlParser:true,
    useUnifiedTopology:true,

})
.then (db => console.log('Base de datos conectada', db.connection.name))
.catch(error => console.log(error))

module.exports = mongoose

