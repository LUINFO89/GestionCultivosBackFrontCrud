const UsuariosCtrl ={}
const Usuarios = require ('../models/Usuarios.models')

UsuariosCtrl.crear = async(req,res)=>{
    const {
        nombre,apellidos,rol,date 
    } = req.body
    const NuevoUsuario = new Usuarios({
        nombre,
        apellidos,
        rol,
        date 

    })

     const respuesta = await NuevoUsuario.save()
     res.json({

        mensaje : 'Usuario Creado',
        respuesta
     })

}
//lista de peticiones
UsuariosCtrl.listar = async(req,res)=>{
    const respuesta = await Usuarios.find()
    res.json(respuesta)
}
UsuariosCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Usuarios.findById({_id:id})
    res.json(respuesta)
}


UsuariosCtrl.UsuariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Usuarios.find({roles:id})

}

UsuariosCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Usuarios.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Persona eliminada'
    })

}
UsuariosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Usuarios.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Persona actualizada'
    })

}
UsuariosCtrl.buscarUsuarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Usuarios.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=UsuariosCtrl
