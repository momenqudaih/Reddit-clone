const { getUserByUsernameQuery } = require('../../database/queries');

const getUserDataController = (req, res, next) => {
    const { username } = req.params;
    getUserByUsernameQuery(username)
        .then((data) => res.json(data.rows))
        .catch((err) => next(err));
};

module.exports = { getUserDataController };
