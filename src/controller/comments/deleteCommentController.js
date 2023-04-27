const { deleteCommentQuery } = require('../../database');

const deleteCommentController = (req, res, next) => {
    const { commentId } = req.body;
    deleteCommentQuery(commentId)
        .then(() => {
            res.json({
                error: false,
                data: {
                    message: 'Comment deleted successfully',
                },
            });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { deleteCommentController };
