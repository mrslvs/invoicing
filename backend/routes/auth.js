const express = require('express');
const router = express.Router();
const { registerUser, confirmEmail } = require('../controllers/registerController');

router.post('/register', (req, res) => registerUser(req, res));

router.post('/login', (req, res) => {
    res.send('login');
});

module.exports = router;
