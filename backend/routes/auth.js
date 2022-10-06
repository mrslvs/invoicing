const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    handleRefreshToken,
    handleLogout,
} = require('../controllers/authController');

router.post('/register', (req, res) => registerUser(req, res));

router.post('/login', (req, res) => loginUser(req, res));

router.get('/refresh', (req, res) => handleRefreshToken(req, res));

router.get('/logout', (req, res) => handleLogout(req, res));

module.exports = router;
