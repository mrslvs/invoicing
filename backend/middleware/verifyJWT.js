const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        console.log('verify JWT: authheader missing');
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1]; // "bearer token"

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log('verify JWT: invalid access token: ' + token);
            return res.sendStatus(403); // invalid token
        }

        console.log('verify JWT: success');
        req.user = decoded.username;
        next();
    });
};

module.exports = verifyJWT;
