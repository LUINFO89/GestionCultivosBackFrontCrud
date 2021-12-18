const {Router} = require('express')
const router = Router()
const ConfigurarCultivosCTRL = require ('../controller/RegistroConfigurarCultivos')
const Auth = require('../helper/Auth')

router.post('/crear',ConfigurarCultivosCTRL.crear)
router.get('/ver',ConfigurarCultivosCTRL.listar)
router.get('/listar/:id',ConfigurarCultivosCTRL.listarId)
router.get('/listarporid/:id',ConfigurarCultivosCTRL.buscarUsuarios)
router.delete('/eliminar/:id', Auth.verificarToken,ConfigurarCultivosCTRL.eliminar)
router.put('/actualizar/:id',ConfigurarCultivosCTRL.actualizar)
router.get('/listarUsuariosRoles',ConfigurarCultivosCTRL.UsuariosConRoles)

module.exports = router