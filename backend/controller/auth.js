const bcrypt = require('bcrypt')
const User = require('../model/User')
const Session = require('../model/Session')
const { getUserByEmail } = require('./userController')

const registerUser = async (req, res) => {
    const { email, pwd } = req.body

    if (!email || !pwd) {
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
            verified: false,
        })

        await newUser.save()
    } catch (err) {
        errMsg = err
        console.log(errMsg)
    }

    errMsg
        ? res.status(500).send(errMsg.message)
        : res.status(201).send('Registered with controller')
}

const loginUser = async (req, res) => {
    const { email, pwd } = req.body

    if (!email || !pwd) {
        console.log('missing login input')
        setTimeout(() => {
            res.status(404).json('missing login inputs')
        }, 3000)
        return
    }

    const userExists = await getUserByEmail(email)

    if (!userExists) {
        console.log('email does not exist')
        setTimeout(() => {
            res.status(404).json('Wrong credentials')
        }, 3000)
        return
    }

    const isPasswordCorrect = await bcrypt.compare(pwd, userExists.password)

    if (!isPasswordCorrect) {
        setTimeout(() => {
            res.status(401).json('Wrong credentials')
        }, 3000)
        return
    }

    try {
        const newSession = Session.build({
            user_id: userExists.id,
            session_id: req.sessionID,
            expires_at: req.session.cookie._expires,
        })

        await newSession.save()
        setTimeout(() => {
            res.status(200).json({
                userId: userExists.id,
                role: userExists.role,
                verified: userExists.verified,
            })
        }, 3000)
    } catch (err) {
        console.log(err)
        setTimeout(() => {
            res.status(500).json('Server error')
        }, 3000)
        return
    }

    // setTimeout(() => {
    //     res.status(200);
    // }, 3000);
}

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

const sessionIsValid = (req, res) => {
    console.log('\x1b[33m%s\x1b[0m', `AUTHCONTROLLER RECEIVED USER FROM MIDDLEWARE`)
    res.status(200).json({
        userId: req.user.dataValues.id,
        role: null,
        verified: req.user.dataValues.verified,
    })
}

const twoFactor = (req, res) => {
    const { phone } = req.body
    console.log('\x1b[35m', `Received 2fa from user[${req.user.id}] with phone ${phone}`)
    res.status(200).json({ phone: phone })
}

module.exports = { registerUser, loginUser, logoutUser, sessionIsValid, twoFactor }
