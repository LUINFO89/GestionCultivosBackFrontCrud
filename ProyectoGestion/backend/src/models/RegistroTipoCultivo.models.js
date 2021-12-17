const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const TipoCultivoSchema = new Schema({

    idcultivo:String,
    nombre:String,
    descripciondelcultivo:String,
    date:{type:Date,default:Date.now}


})
module.exports=mongoose.model('TipoCultivo', TipoCultivoSchema)