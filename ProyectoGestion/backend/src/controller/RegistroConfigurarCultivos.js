const ConfigurarCultivosCTRL ={}
const ConfigurarCultivos = require ('../models/RegistroConfigurarCultivos.models')


ConfigurarCultivosCTRL.crear = async(req,res)=>{
    const {
        
        idcultivo,
        nombrecultivo,
        cantidadsemillas,
        areadestinada,
        tiempodecultivo,
        cantidadm3,
        cantidadfertilizante,
        tiempoespera,
        fechasiembra,
        fecharecogida,
        date

    } = req.body
    const NuevoCultivo = new ConfigurarCultivos({
        
    
    idcultivo,
    nombrecultivo,
    cantidadsemillas,
    areadestinada,
    tiempodecultivo,
    cantidadm3,
    cantidadfertilizante,
    tiempoespera,
    fechasiembra,
    fecharecogida,
    date

    })
        // crud 
        // CREAR
     const respuesta = await NuevoCultivo.save()
     res.json({

        mensaje : 'Cultivo Creado',
        respuesta
     })

     
     


}

// listar por id 
// CAMBIAR POR EL NOMBRE DE LA CLASE EJEMPLO ConfigurarCultivosCTRL
ConfigurarCultivosCTRL.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await ConfigurarCultivos.findById({_id:id}) // despues del await colocar le valor de la busqueda
    res.json(respuesta)
}


ConfigurarCultivosCTRL.UsuariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await ConfigurarCultivos.find({roles:id})

}
// ver 
ConfigurarCultivosCTRL.listar = async(req,res)=>{
    const respuesta = await ConfigurarCultivos.find()
    res.json(respuesta)
}
//eliminar
ConfigurarCultivosCTRL.eliminar = async(req,res)=>{
    const id = req.params.id
    await ConfigurarCultivos.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Persona eliminada'
    })

}
//actualizar
ConfigurarCultivosCTRL.actualizar = async(req,res)=>{
    const id = req.params.id
    await ConfigurarCultivos.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Persona actualizada'
    })

}
// buscar
ConfigurarCultivosCTRL.buscarUsuarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await ConfigurarCultivos.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=ConfigurarCultivosCTRL