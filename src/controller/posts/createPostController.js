const { createPostQuery } = require('../../database');

const createPostController = (req, res, next) => {
    const { content, urlImage, userId } = req.body;

    createPostQuery(content, urlImage, userId)
        .then(() => {
            res.status(201).json({
                message: 'Post created successfully',
            });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { createPostController };
