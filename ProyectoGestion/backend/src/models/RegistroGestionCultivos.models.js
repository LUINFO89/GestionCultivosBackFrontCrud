const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const RegistroGestionCultivosSchema = new Schema({
    
    idpredio:String,
    idpropietario:String,
    cantidadhectareas:String,
    ubicacion:String,
    latitudylongitud:String,
    date:{type:Date,default:Date.now}


})
module.exports=mongoose.model('RegistroGestionCultivos', RegistroGestionCultivosSchema)