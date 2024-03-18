const bcrypt = require('bcrypt')
const User = require('../models/User')
// const Session = require('../models/Session')
const Session = require('../models/Session')

// const isEmailTaken = async (email) => {
//     const user = await User.findAll({
//         where: {
//             email: email,
//         },
//     })
//     return user.length === 0 ? false : true
// }

const getUserByEmail = async (email) => {
    return await User.findOne({
        where: {
            email: email,
        },
    })
}

const registerUser = async (req, res) => {
    const { email, pwd, phone } = req.body

    if (!email || !pwd || !phone) {
        res.status(404).json('missing register inputs')
        return
    }

    const emailTaken = await getUserByEmail(email)

    if (emailTaken) {
        res.status(409).send('email already used')
        return
    }

    let errMsg = ''
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10)

        const newUser = User.build({
            email: email,
            password: hashedPwd,
            phone: phone,
            verified: false,
        })

        await newUser.save()
    } catch (err) {
        // if (err.name === 'SequelizeUniqueConstraintError') {
        //     console.log('Trying to save duplicate user')
        //     errMsg = 'This email is already being used'
        // } else {
        //     console.log('Unknown error when trying to save user into DB')
        //     errMsg = 'Server error'
        // }
        errMsg = err
        console.log(errMsg)
    }

    errMsg
        ? res.status(500).send(errMsg.message)
        : res.status(201).send('Registered with controller')
    // else {
    // const userFromDatabase = await User.findOne({
    //     where: {
    //         email: email,
    //     },
    // })

    // const newSession = Session.build({
    //     user_id: userFromDatabase.id,
    //     session_id: sessionID,
    //     expires_at: new Date(req.session.cookie.expires),
    // })

    // await newSession.save()

    // res.cookie('test', 'testing')

    // }
}

const loginUser = async (req, res) => {
    const { email, pwd } = req.body

    if (!email || !pwd) {
        console.log('missing login input')
        res.status(404).json('missing login inputs')
        return
    }

    const userExists = await getUserByEmail(email)

    if (!userExists) {
        console.log('email does not exist')
        res.status(404).json('User not found')
        return
    }

    const isPasswordCorrect = await bcrypt.compare(pwd, userExists.password)

    if (!isPasswordCorrect) {
        res.status(401).json('Wrong password')
        return
    }

    try {
        const newSession = Session.build({
            user_id: userExists.id,
            session_id: req.sessionID,
            expires_at: req.session.cookie._expires,
        })

        await newSession.save()
        res.status(200).json('nice')
    } catch (err) {
        console.log(err)
        res.status(500).json('error in login')
        return
    }

    res.status(200)
}

// const authenticateUser = async (req, res) => {
//     const currentDate = new Date()
//     const sessionID = req.sessionID

//     console.log(sessionID)
//     if (sessionID) {
//         console.log('ok got the session id')
//         const ses = await Session.findOne({
//             where: {
//                 session_id: sessionID,
//             },
//         })

//         if (ses) {
//             // console.log(typeof ses.dataValues.expires_at)
//             if (currentDate <= ses.dataValues.expires_at) {
//                 res.status(200).json({ userId: ses.dataValues.user_id })
//             } else {
//                 res.status(401).json('session expired')
//             }
//         } else {
//             res.status(401).json('no session ID')
//         }
//     } else {
//         res.status(401).json('no session ID')
//     }
// }

const logoutUser = async (req, res) => {
    const sessionID = req.sessionID

    if (sessionID) {
        const sessionToDelete = await Session.destroy({
            where: {
                session_id: sessionID,
            },
        })
        console.log('deleted session')
    } else {
        res.status(400).json('no session id')
    }
    res.status(201).json('logged out')
}

module.exports = { registerUser, loginUser, logoutUser }
