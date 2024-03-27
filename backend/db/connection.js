const User = require('../model/User');
const Session = require('../model/Session');
const Business = require('../model/Business');
const Address = require('../model/Address');

const databaseStart = () => {
    Business.belongsTo(Address, { as: 'address', foreignKey: 'addressId' });
    User.sync({ force: false });
    Session.sync({ force: true });
    Address.sync({ force: false });
    Business.sync({ force: true });
};

module.exports = { databaseStart };
