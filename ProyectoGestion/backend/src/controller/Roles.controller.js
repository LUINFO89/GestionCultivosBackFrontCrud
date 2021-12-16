const  RolesCtrl = {}
const Roles = require('../models/Roles.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

RolesCtrl.crearRoles = async(req,res) =>{

    const{nombre,correo,contrasena} = req.body
    const NuevoRol = new Roles({
        nombre,
        correo,
        contrasena
    })

    const correoRol = await Roles.findOne({correo:correo})// crear un rol 
    if (correoRol) // si el correo esta creado pasa 
    {
        res.json({
            mensaje:'El correo ya existe'           
        })
    }
    else{
        NuevoRol.contrasena = await bcrypt.hash(contrasena,10)// si no esta en el sistema crea la contraseña y la encripta
        const token = jwt.sign({_id: NuevoRol._id},"Secreto")
        await NuevoRol.save()
        res.json({
            mensaje:'Bienvenido',
            id: NuevoRol._id,
            nombre: NuevoRol.nombre,
            token

        })
    }
}

RolesCtrl.login = async(req,res)=>{
    const {correo,contrasena}= req.body
    const roles = await Roles.findOne({correo:correo})
    if (!roles){

        return res.json({
            mensaje: 'correo incorrecto'
        })

    }
    const match = await bcrypt.compare(contrasena,roles.contrasena)
    if (match){
        const token = jwt.sign({_id: roles._id},"Secreto")
        res.json({
            mensaje:'Bienvenido',
            id: roles.id,
            nombre:roles.nombre,
            token
        })
    }
    else {
        res.json({
            mensaje:'Contrasena incorrecta'
        })
    }
}

module.exports = RolesCtrl