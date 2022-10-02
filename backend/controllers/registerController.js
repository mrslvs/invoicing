const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    // handle registration
    const { username, pwd, pwd_repeat } = req.body;

    console.log(username + ' ' + pwd + ' ' + pwd_repeat);
};

module.exports = { registerUser };
