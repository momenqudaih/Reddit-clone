const { getPostCommentsQuery } = require('../../database');

const getPostCommentsController = (req, res, next) => {
    const { postId } = req.params;
    getPostCommentsQuery(postId)
        .then((data) => {
            res.json(data.rows);
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { getPostCommentsController };
