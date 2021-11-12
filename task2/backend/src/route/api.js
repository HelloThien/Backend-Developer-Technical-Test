const express = require('express')
var router = express.Router()

const controllUsers = require('../model/users')
const controllFamily = require('../model/family')

router.get('/users',controllUsers.getUsers)
router.post('/users',controllUsers.insertUsers)
router.post('/setuser',controllUsers.setUser)
router.post('/deluser',controllUsers.delUser)
router.get('/family',controllFamily.getFamily)
router.post('/family',controllFamily.setFamily)
router.get('/familyjson',controllFamily.getJsonFamily)
module.exports = router