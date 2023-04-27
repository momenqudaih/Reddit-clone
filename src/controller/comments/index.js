const { getPostCommentsController } = require('./getPostCommentsController');

const { createCommentController } = require('./createCommentController');

const { deleteCommentController } = require('./deleteCommentController');

module.exports = {
    getPostCommentsController,
    createCommentController,
    deleteCommentController,
};
