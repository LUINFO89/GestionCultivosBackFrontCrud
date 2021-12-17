const {Router} = require('express')
const router = Router()
const GestionparametrosCtrl = require ('../controller/RegistroParametrosCultivos.controller')

router.post('/crear',GestionparametrosCtrl.crear)
router.get('/ver',GestionparametrosCtrl.listar)
router.get('/listar/:id',GestionparametrosCtrl.listarId)
router.get('/listarporid/:id',GestionparametrosCtrl.buscarUsuarios)
router.delete('/eliminar/:id',GestionparametrosCtrl.eliminar)
router.put('/actualizar/:id',GestionparametrosCtrl.actualizar)
router.get('/listarGestionparametrosCtrl',GestionparametrosCtrl.UsuariosConRoles)

module.exports = router