const GestioncultivoCtrl ={}
const RegistroGestionCultivos = require('../models/RegistroGestionCultivos.models')


GestioncultivoCtrl.crear = async(req,res)=>{
    const {
        idpredio,
        idpropietario,
        cantidadhectareas,
        ubicacion,
        latitudylongitud,
        date
         
    } = req.body
    const NuevoUsuario = new RegistroGestionCultivos({
        idpredio,
        idpropietario,
        cantidadhectareas,
        ubicacion,
        latitudylongitud,
        date

    })

     const respuesta = await NuevoUsuario.save()
     res.json({

        mensaje : 'Registro Cultivo Creado',
        respuesta
     })

}
//lista de peticiones




// listar por id 
GestioncultivoCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await RegistroGestionCultivos.findById({_id:id})
    res.json(respuesta)
}


GestioncultivoCtrl.UsuariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await RegistroGestionCultivos.find({roles:id})

}
// ver 
GestioncultivoCtrl.listar = async(req,res)=>{
    const respuesta = await RegistroGestionCultivos.find()
    res.json(respuesta)
}
//eliminar
GestioncultivoCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await RegistroGestionCultivos.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Registro Eliminado'
        
    })

}
//actualizar
GestioncultivoCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await RegistroGestionCultivos.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:' Registro Actualizado'
    })

}
// buscar
GestioncultivoCtrl.buscarUsuarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await RegistroGestionCultivos.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=GestioncultivoCtrl
