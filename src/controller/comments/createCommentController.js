const { createCommentQuery } = require('../../database');

const createCommentController = (req, res, next) => {
    const { content, userId, postId } = req.body;
    createCommentQuery(content, userId, postId)
        .then((data) => {
            res.json({
                error: false,
                data: {
                    message: 'Comment created successfully',
                },
            });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { createCommentController };
