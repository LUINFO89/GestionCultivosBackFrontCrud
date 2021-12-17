const {Router} = require('express')
const router = Router()
const GestioncultivoCtrl = require ( '../controller/RegistroGestionCultivos.controller' )

router.post('/crear',GestioncultivoCtrl.crear)
router.get('/ver',GestioncultivoCtrl.listar)
router.get('/listar/:id',GestioncultivoCtrl.listarId)
router.get('/listarporid/:id',GestioncultivoCtrl.buscarUsuarios)
router.delete('/eliminar/:id',GestioncultivoCtrl.eliminar)
router.put('/actualizar/:id',GestioncultivoCtrl.actualizar)
router.get('/listarUsuariosRoles',GestioncultivoCtrl.UsuariosConRoles)




module.exports = router