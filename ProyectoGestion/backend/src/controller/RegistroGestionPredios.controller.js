const GestionprediosCtrl ={}
const GestionPredios = require('../models/RegistroGestionPredios.models')

GestionprediosCtrl.crear = async(req,res)=>{
    const {
        idpredio,
        idpropietario,
        cantidadhectareas,
        ubicacion,
        latitudylongitud,
        usuariogestion,
        date
         
    } = req.body
    const NuevoUsuario = new GestionPredios({
        idpredio,
        idpropietario,
        cantidadhectareas,
        ubicacion,
        latitudylongitud,
        usuariogestion,
        date

    })

     const respuesta = await NuevoUsuario.save()
     res.json({

        mensaje : 'Elemento  Creado',
        respuesta
     })

}
//lista de peticiones




// listar por id 
GestionprediosCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await GestionPredios.findById({_id:id})
    res.json(respuesta)
}


GestionprediosCtrl.UsuariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await GestionPredios.find({roles:id})

}
// ver 
GestionprediosCtrl.listar = async(req,res)=>{
    const respuesta = await GestionPredios.find()
    res.json(respuesta)
}
//eliminar
GestionprediosCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await GestionPredios.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Elemento eliminado'
    })

}
//actualizar
GestionprediosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await GestionPredios.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Elemento Actualizado'
    })

}
// buscar
GestionprediosCtrl.buscarUsuarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await GestionPredios.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=GestionprediosCtrl
