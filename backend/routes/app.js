const express = require('express')
const router = express.Router()
const { sessionIsValid } = require('../controller/auth')
const { getActionItemsForUser } = require('../controller/dash')
const { twoFactor } = require('../controller/auth')

router.get('/', (req, res) => sessionIsValid(req, res))
router.post('/twofa', (req, res) => twoFactor(req, res))
router.get('/dash/actions', (req, res) => getActionItemsForUser(req, res))

module.exports = router
