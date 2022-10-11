const User = require('../models/User');
const jwt = require('jsonwebtoken');

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

module.exports = confirmEmail;
