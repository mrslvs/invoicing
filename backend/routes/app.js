const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../controller/auth')

router.post('/register', (req, res) => registerUser(req, res))
router.post('/login', (req, res) => loginUser(req, res))
router.get('/authenticate', (req, res) => authenticateUser(req, res))

module.exports = router
