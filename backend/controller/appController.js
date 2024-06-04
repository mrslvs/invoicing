const User = require('../model/User')
const { getUserBySessionId } = require('../controller/userController')

const getActionItemsForUser = async (req, res) => {
    // const user = req.user
    // const ses = req.sessionID
    console.log(`APP CONTROLLER: session id: ${req.sessionID}`)
    const user = await getUserBySessionId(req.sessionID)

    res.status(200).json({
        userko: user.id,
    })

    // setTimeout(() => {
    //     res.status(205).json({
    //         userko: user,
    //     })
    // }, 3000)
}

module.exports = { getActionItemsForUser }
