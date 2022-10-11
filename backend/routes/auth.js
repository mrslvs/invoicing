const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/registerController');
const loginUser = require('../controllers/authController');
const handleRefreshToken = require('../controllers/refreshTokenController');
const logoutUser = require('../controllers/logoutController');

router.post('/register', (req, res) => registerUser(req, res));

router.post('/login', (req, res) => loginUser(req, res));

router.get('/refresh', (req, res) => handleRefreshToken(req, res));

router.get('/logout', (req, res) => logoutUser(req, res));

module.exports = router;
