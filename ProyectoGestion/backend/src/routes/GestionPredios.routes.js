const {Router} = require('express')
const router = Router()
const GestionprediosCtrl = require('../controller/RegistroGestionPredios.controller')

router.post('/crear',GestionprediosCtrl.crear)
router.get('/ver',GestionprediosCtrl.listar)
router.get('/listar/:id',GestionprediosCtrl.listarId)
router.get('/listarporid/:id',GestionprediosCtrl.buscarUsuarios)
router.delete('/eliminar/:id',GestionprediosCtrl.eliminar)
router.put('/actualizar/:id',GestionprediosCtrl.actualizar)
router.get('/listarGestionprediosCtrl',GestionprediosCtrl.UsuariosConRoles)




module.exports = router