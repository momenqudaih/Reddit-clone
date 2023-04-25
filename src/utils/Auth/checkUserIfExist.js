const { getUserByEmailQuery } = require('../../database');
const { getUserByUsernameQuery } = require('../../database');

const checkUserIfExist = (username, email) => {
    return Promise.all([
        getUserByEmailQuery(email),
        getUserByUsernameQuery(username),
    ]);
};

module.exports = { checkUserIfExist };
