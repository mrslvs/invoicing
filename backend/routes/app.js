const express = require('express')
const router = express.Router()
const { sessionIsValid } = require('../controller/auth')
const { getActionItemsForUser } = require('../controller/dash')

router.get('/', (req, res) => sessionIsValid(req, res))
router.get('/dash/actions', (req, res) => getActionItemsForUser(req, res))

module.exports = router
