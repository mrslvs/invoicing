const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logoutUser } = require('../controller/auth')

router.post('/register', (req, res) => registerUser(req, res))
router.post('/login', (req, res) => loginUser(req, res))
router.post('/logout', (req, res) => logoutUser(req, res))

module.exports = router
