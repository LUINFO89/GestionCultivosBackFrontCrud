const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema = new Schema({

    nombre:{type:String,required:[true,'Nombre obligatorio']},
    apellidos:String,
    ciudad:String,
    rol:String,
    date:{type:Date,default:Date.now}


})
module.exports=mongoose.model('Usuarios', UsuariosSchema)