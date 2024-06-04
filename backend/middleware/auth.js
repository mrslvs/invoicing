const Session = require('../model/Session')
const { getUserById } = require('../controller/userController')

const authenticateSession = async (req, res, next) => {
    const currentDate = new Date()
    const sessionID = req.sessionID

    console.log('\x1b[36m%s\x1b[0m', 'Auth Middleware intercepted request')

    if (sessionID) {
        console.log('\x1b[36m%s\x1b[0m', 'Moving along Auth middleware')
        const ses = await Session.findOne({
            where: {
                session_id: sessionID,
            },
        })

        if (ses) {
            if (currentDate <= ses.dataValues.expires_at) {
                const user = await getUserById(ses.dataValues.user_id)
                console.log('\x1b[36m%s\x1b[0m', 'AUTH MIDDLEWARE: valid request')
                req.user = user
                next()
            } else {
                console.log('\x1b[36m%s\x1b[0m', 'AUTH MIDDLEWARE: session expired')
                res.status(401).json('session expired')
            }
        } else {
            console.log('\x1b[36m%s\x1b[0m', 'AUTH MIDDLEWARE: session not in database')
            res.status(401).json('this session ID does not exist in DB')
        }
    } else {
        console.log('\x1b[36m%s\x1b[0m', 'AUTH MIDDLEWARE: did not receive a session ID')
        res.status(401).json('no session ID')
    }
}

module.exports = { authenticateSession }
