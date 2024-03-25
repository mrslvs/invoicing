const User = require('../model/User');

const getUserByEmail = async (email) => {
    return await User.findOne({
        where: {
            email: email,
        },
    });
};

const getUserById = async (id) => {
    return await User.findOne({
        where: {
            id: id,
        },
    });
};

const userRoles = [
    {
        id: 1,
        role: 'Business Owner',
    },
    {
        id: 2,
        role: 'Chief Financial Officer',
    },
    {
        id: 3,
        role: 'Accountant',
    },
];

module.exports = { getUserByEmail, getUserById, userRoles };
