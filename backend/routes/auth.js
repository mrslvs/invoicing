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

router.get('/refresh', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    handleRefreshToken(req, res);
});

router.get('/logout', (req, res) => handleLogout(req, res));

module.exports = router;
