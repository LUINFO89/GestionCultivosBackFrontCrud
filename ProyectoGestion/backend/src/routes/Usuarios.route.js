const {Router} = require('express')
const router = Router()
const UsuariosCtrl = require ('../controller/Usuarios.controller')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, UsuariosCtrl.crear)
router.get('/listarUsuarios',Auth.verificarToken,UsuariosCtrl.listar)
router.get('/listar/:id',Auth.verificarToken,UsuariosCtrl.listarId)
router.get('/listarporid/:id',Auth.verificarToken,UsuariosCtrl.buscarUsuarios)
router.delete('/eliminar/:id',Auth.verificarToken,UsuariosCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificarToken,UsuariosCtrl.actualizar)
router.get('/listarUsuariosRoles',Auth.verificarToken,UsuariosCtrl.UsuariosConRoles)




module.exports = router