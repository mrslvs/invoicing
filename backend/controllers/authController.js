const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
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

const confirmEmail = async (req, res, token) => {
    try {
        const { userId } = jwt.verify(token, process.env.MAILER_TOKEN_SECRET);

        await User.update(
            { verified: 1 },
            {
                where: {
                    id: userId,
                },
            }
        );

        res.send('verified!!');
    } catch (err) {
        console.log(err);
        res.send('error hppnd');
    }
};

const loginUser = async (req, res) => {
    const { username, pwd } = req.body;

    const user = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!user) {
        return res.status(400).send(`User doesn't exist`);
    }

    console.log(pwd + ' : ' + user.password);
    const success = await bcrypt.compare(pwd, user.password);

    console.log('SUCCESS = ' + success);

    if (success) {
        // prettier-ignore
        const accessToken = jwt.sign(
            { username: user.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s'}
        );

        const refreshToken = jwt.sign(
            { username: user.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1h' }
        );

        await User.update(
            { refresh_token: refreshToken },
            {
                where: {
                    username: user.username,
                },
            }
        );

        console.log('SENDING COOKIE!');
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 1 * 60 * 60 * 1000 });
        return res.json({ accessToken });
    } else {
        res.status(401).send('Wrong password');
    }
};

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.status(401);
    }

    const refreshToken = cookies.jwt;

    const user = await User.findOne({
        where: {
            refresh_token: refreshToken,
        },
    });

    if (!user) {
        return res.status(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err || user.username !== decoded.username) {
            return res.status(403);
        }

        const accessToken = jwt.sign(
            { username: decoded.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );

        res.json({ accessToken });
    });
};

module.exports = { registerUser, confirmEmail, loginUser, handleRefreshToken };
