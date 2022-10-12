const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
            { expiresIn: '15s'}
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
        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            maxAge: 1 * 60 * 60 * 1000,
            // maxAge: 30 * 1000,
            sameSite: 'None',
            secure: true,
        });
        return res.json({ accessToken });
    } else {
        res.status(401).send('Wrong password');
    }
};

module.exports = loginUser;
