const {Router} = require('express')
const router = Router()
const RolesCtrl = require('../controller/Roles.controller') 

router.post('/crear',RolesCtrl.crearRoles)
router.post('/login',RolesCtrl.login)

module.exports = router