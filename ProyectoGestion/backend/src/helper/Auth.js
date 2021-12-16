const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verificarToken = (req,res,next)=>{
    if (!req.headers.autorizacion){

        return res.json({
            mensaje : 'No estas autorizado 1'
        })
    }


    const token = req.headers.autorizacion
    if(token === null){

    return res.json({
        mensaje:'No esta autorizado 2'

    })
    
    }

    next();
}
module.exports = Auth





