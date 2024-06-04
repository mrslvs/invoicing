const User = require('../model/User')
const { getUserBySessionId } = require('./userController')

const getActionItemsForUser = async (req, res) => {
    console.log('\x1b[35m%s\x1b[0m', `Getting actions for user ${req.user.email}`)

    const actionItems = [
        // 'app-action-pay-invoice',
        // 'app-action-pay-invoice',
        // 'app-action-pay-invoice',
        // 'app-action-pay-invoice',
        'app-action-pay-invoice',
    ]

    if (!req.user.verified) actionItems.push('app-action-2fa')
    if (true) actionItems.push('app-action-setup-profile')

    setTimeout(() => {
        res.status(200).json({
            actionItems: actionItems,
        })
    }, 3000)
}

module.exports = { getActionItemsForUser }
