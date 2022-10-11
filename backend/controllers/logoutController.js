const User = require('../models/User');
const jwt = require('jsonwebtoken');

const logoutUser = async (req, res) => {
    // delete access token on client

    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.status(204);
    }

    const refreshToken = cookies.jwt;

    const user = await User.findOne({
        where: {
            refresh_token: refreshToken,
        },
    });

    if (!user) {
        // we have cookie but not user
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.status(403);
    }

    await User.update(
        { refresh_token: null },
        {
            where: {
                username: user.username,
            },
        }
    );

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // secure: true - only on HTTPS
    res.sendStatus(204);
};

module.exports = logoutUser;
