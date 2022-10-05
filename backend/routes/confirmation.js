const express = require('express');
const router = express.Router();
const cors = require('cors');
const { confirmEmail } = require('../controllers/authController');

router.get('/:token', cors(), (req, res) => confirmEmail(req, res, req.params.token));

module.exports = router;