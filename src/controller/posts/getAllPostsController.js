const { getAllPostsQuery } = require('../../database');

const getAllPostsController = (req, res, next) => {
    getAllPostsQuery()
        .then((data) => res.json(data.rows))
        .catch((err) => next(err));
};

module.exports = { getAllPostsController };
