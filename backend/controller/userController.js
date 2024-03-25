const User = require('../model/User');

const getUserByEmail = async (email) => {
    return await User.findOne({
        where: {
            email: email,
        },
    });
};

module.exports = { getUserByEmail };
