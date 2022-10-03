const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
    // handle registration
    const { username, pwd, pwd_repeat } = req.body;

    if (!username || !pwd || !pwd_repeat) {
        res.status(400).send('One of the parameters not received.');
        return;
    }

    if (pwd !== pwd_repeat) {
        res.status(400).send('Passwords do not match!');
        return;
    }

    const userExists = await User.findAll({
        where: {
            username: username,
        },
    });

    if (userExists.length !== 0) {
        res.status(409).send('Conflict! User already exists!');
        return;
    }

    const newUser = User.build({
        username: username,
        password: pwd,
    });

    newUser.save();

    res.status(201).send('Successfully registered new user.');
};

module.exports = { registerUser };
