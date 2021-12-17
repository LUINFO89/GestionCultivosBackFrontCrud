const {Router} = require('express')
const router = Router()
const TiposdeCultivoCtrl = require ('../controller/RegistroTipoCultivo.controller')

router.post('/crear',TiposdeCultivoCtrl.crear)
router.get('/ver',TiposdeCultivoCtrl.listar)
router.get('/listar/:id',TiposdeCultivoCtrl.listarId)
router.get('/listarporid/:id',TiposdeCultivoCtrl.buscarUsuarios)
router.delete('/eliminar/:id',TiposdeCultivoCtrl.eliminar)
router.put('/actualizar/:id',TiposdeCultivoCtrl.actualizar)
router.get('/listarTiposdeCultivoCtrl',TiposdeCultivoCtrl.UsuariosConRoles)

module.exports = router