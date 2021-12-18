const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const ConfigurarCultivoSchema = new Schema({

    
    nombrecultivo:String,
    cantidadsemillas:String,
    areadestinada: String,
    tiempodecultivo:String,
    cantidadm3:String,
    cantidadfertilizante:String,
    tiempoespera:String,
    fechasiembra:Date,
    fecharecogida:Date,
    date:{type:Date,default:Date.now},

    
    

})
module.exports=mongoose.model('ConfigurarCultivo', ConfigurarCultivoSchema)