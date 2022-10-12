const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        console.log('handleRefreshToken: jwt missing (no refresh token present)');
        return res.sendStatus(401);
    }

    const refreshToken = cookies.jwt;
    console.log('This is refreshToken received from client: ' + refreshToken);

    const user = await User.findOne({
        where: {
            refresh_token: refreshToken,
        },
    });

    if (!user) {
        console.log('handleRefreshToken: user with such refresh token does not exist');
        return res.status(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err || user.username !== decoded.username) {
            console.log('handleRefreshToken: user and refresh tokens do not match');
            return res.status(403);
        }

        const accessToken = jwt.sign(
            { username: decoded.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );

        console.log('handleRefreshToken: sending new accessToken');
        res.json({ accessToken });
    });
};

module.exports = handleRefreshToken;
