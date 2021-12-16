const mongoose = require ('mongoose')
const {Schema} = mongoose

const RolesSchema = new Schema({
    nombre:String,
    correo:String,
    contrasena:String,
    date:{type:Date,default:Date.now}
    //Convertirlo a un modelo y exportar
    

})
module.exports = mongoose.model('Roles', RolesSchema)
