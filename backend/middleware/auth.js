const Session = require('../model/Session');
const { getUserById } = require('../controller/userController');

const authenticateSession = async (req, res, next) => {
    const currentDate = new Date();
    const sessionID = req.sessionID;

    console.log('my middleware - sessionID:' + sessionID);

    if (sessionID) {
        console.log('ok got the session id');
        const ses = await Session.findOne({
            where: {
                session_id: sessionID,
            },
        });

        if (ses) {
            if (currentDate <= ses.dataValues.expires_at) {
                const user = await getUserById(ses.dataValues.user_id);

                res.status(200).json({ userId: ses.dataValues.user_id, role: user.role });
            } else {
                res.status(401).json('session expired');
            }
        } else {
            res.status(401).json('no session ID');
        }
    } else {
        res.status(401).json('no session ID');
    }

    next();
};

module.exports = { authenticateSession };
