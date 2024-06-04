const User = require('../model/User')
const { getUserBySessionId } = require('./userController')

const getActionItemsForUser = async (req, res) => {
    console.log('\x1b[35m%s\x1b[0m', `Getting actions for user ${req.user.email}`)

    const actionItems = ['test1', 'test2', 'test3', 'test4', 'test5']

    if (!req.user.verified) actionItems.push('2FA')
    if (true) actionItems.push('set up company')

    setTimeout(() => {
        res.status(200).json({
            actionItems: actionItems,
        })
    }, 3000)
}

module.exports = { getActionItemsForUser }
