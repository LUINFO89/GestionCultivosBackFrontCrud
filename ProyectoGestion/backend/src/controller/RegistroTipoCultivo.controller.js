const TiposdeCultivoCtrl ={}
const TipoCultivo = require('../models/RegistroTipoCultivo.models')

TiposdeCultivoCtrl.crear = async(req,res)=>{
    const {
        
        idcultivo,
        nombre,
        descripciondelcultivo,
        date
         
    } = req.body
    const NuevoUsuario = new TipoCultivo({
        
        idcultivo,
        nombre,
        descripciondelcultivo,
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
TiposdeCultivoCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await TipoCultivo.findById({_id:id})
    res.json(respuesta)
}


TiposdeCultivoCtrl.UsuariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await TipoCultivo.find({roles:id})

}
// ver 
TiposdeCultivoCtrl.listar = async(req,res)=>{
    const respuesta = await TipoCultivo.find()
    res.json(respuesta)
}
//eliminar
TiposdeCultivoCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await TipoCultivo.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Persona eliminada'
    })

}
//actualizar
TiposdeCultivoCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await TipoCultivo.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Persona actualizada'
    })

}
// buscar
TiposdeCultivoCtrl.buscarUsuarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await TipoCultivo.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=TiposdeCultivoCtrl
