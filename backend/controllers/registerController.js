const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const transpoerter = require('../config/mailer');

const registerUser = async (req, res) => {
    // handle registration
    const { username, usermail, pwd, pwd_repeat } = req.body;

    if (!username || !usermail || !pwd || !pwd_repeat) {
        return res.status(400).send('All parameters are required.');
    }

    if (pwd !== pwd_repeat) {
        return res.status(400).send('Passwords do not match.');
    }

    const userExists = await User.findAll({
        where: {
            username: username,
        },
    });

    if (userExists.length !== 0) {
        return res.status(409).send('Conflict! User already exists!');
    }

    const hashedPwd = await bcrypt.hash(pwd, 10);

    const newUser = User.build({
        username: username,
        password: hashedPwd,
    });

    await newUser.save();

    const emailToken = jwt.sign(
        {
            userId: newUser.id,
        },
        process.env.MAILER_TOKEN_SECRET,
        {
            expiresIn: '1h',
        }
    );

    const message = {
        to: `${username} <${usermail}>`,
        subject: 'Confirm registration',
        text: `Dear ${username},`,
        html: `
    <p>I would like to welcome you to my unique project of invoicing application.</p>
    <p>Please confirm your email address by clicking on <a href="${process.env.API_ENDPOINT}/confirmation/${emailToken}">this link</a></p>
    `,
    };

    transpoerter.sendMail(message, (error, info) => {
        if (error) {
            console.log('error occured while sending email:');
            console.log(error.message);
        }

        console.log('message has been sent');
        transpoerter.close();
    });

    res.status(201).send('Successfully registered new user.');
};

module.exports = registerUser;
