const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const transpoerter = require('./config/mailer');

const registerUser = async (req, res) => {
    // handle registration
    const { username, usermail, pwd, pwd_repeat } = req.body;

    if (!username || !usermail || !pwd || !pwd_repeat) {
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

    await newUser.save();

    const emailToken = jwt.sign(
        {
            user: newUser.id,
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
    <p>Please confirm your email address by clicking on <a href="${process.env.API_ENDPOINT}/auth/confirm/${emailToken}">this link</a></p>
    `,
    };

    transpoerter.sendMail(message, (error, info) => {
        if (error) {
            console.log('erro occured while sending email:');
            console.log(error.message);
        }

        console.log('message has been sent');
        transpoerter.close();
    });

    res.status(201).send('Successfully registered new user.');
};

const confirmEmail = (req, res, token) => {};

module.exports = { registerUser };
