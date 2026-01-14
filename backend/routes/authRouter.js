const authController  = require('../controllers/authControllers')
const router = require("express").Router()

router.post('/admin-login',authController.admin_login)

module.exports = router