const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const ParametrosCultivoSchema = new Schema({

    idparametrocultivo:String,
    idcultivo:String,
    valorsemilla:String,
    valorm3agua:String,
    valorkgfertilizante:String,
    date:{type:Date,default:Date.now}


})
module.exports=mongoose.model('ParametrosCultivo', ParametrosCultivoSchema)