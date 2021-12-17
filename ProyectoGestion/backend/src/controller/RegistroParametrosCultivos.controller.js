const GestionparametrosCtrl ={}
const ParametrosCultivo = require('../models/RegistroParametrosCultivos.models')

GestionparametrosCtrl.crear = async(req,res)=>{
    const {
        idparametrocultivo,
        idcultivo,
        valorsemilla,
        valorm3agua,
        valorkgfertilizante,
        date
         
    } = req.body
    const NuevoUsuario = new ParametrosCultivo({
        idparametrocultivo,
        idcultivo,
        valorsemilla,
        valorm3agua,
        valorkgfertilizante,
        date

    })

     const respuesta = await NuevoUsuario.save()
     res.json({

        mensaje : 'Usuario Creado',
        respuesta
     })

}
//lista de peticiones




// listar por id 
GestionparametrosCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await ParametrosCultivo.findById({_id:id})
    res.json(respuesta)
}


GestionparametrosCtrl.UsuariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await ParametrosCultivo.find({roles:id})

}
// ver 
GestionparametrosCtrl.listar = async(req,res)=>{
    const respuesta = await ParametrosCultivo.find()
    res.json(respuesta)
}
//eliminar
GestionparametrosCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await ParametrosCultivo.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Persona eliminada'
    })

}
//actualizar
GestionparametrosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await ParametrosCultivo.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Persona actualizada'
    })

}
// buscar
GestionparametrosCtrl.buscarUsuarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await ParametrosCultivo.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=GestionparametrosCtrl
