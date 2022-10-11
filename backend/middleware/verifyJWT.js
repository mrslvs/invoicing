const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    console.log('using middleware verifyJWT');
    const authHeader = req.headers['authorization'];
    console.log('these are the headers:');
    console.log(req.headers);

    if (!authHeader) {
        console.log('authheader missing');
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1]; // "bearer token"

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.sendStatus(403); // invalid token
        }

        console.log('apparently succes in veryfing jwt (middleware)');
        req.user = decoded.username;
        next();
    });
};

module.exports = verifyJWT;
