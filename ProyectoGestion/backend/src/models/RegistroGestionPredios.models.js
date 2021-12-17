const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const GestionPrediosSchema = new Schema({

    idpredio:String,
    idpropietario:String,
    cantidadhectareas:String,
    ubicacion:String,
    latitudylongitud:String,
    usuariogestion:String,
    date:{type:Date,default:Date.now}


})
module.exports=mongoose.model('GestionPredios', GestionPrediosSchema)