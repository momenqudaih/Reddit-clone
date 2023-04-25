const { connection } = require('../../config');

const getUserByUsernameQuery = (username) => {
    const sql = {
        text: 'SELECT * FROM users WHERE username = $1',
        values: [username],
    };
    return connection.query(sql);
};

module.exports = { getUserByUsernameQuery };
