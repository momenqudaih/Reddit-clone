const {
    getPostCommentsController,
    createCommentController,
    deleteCommentController,
} = require('../controller');

// eslint-disable-next-line new-cap
const commentRouter = require('express').Router();

commentRouter.get('/:postId', getPostCommentsController);

commentRouter.post('/create', createCommentController);

commentRouter.post('/delete', deleteCommentController);

module.exports = { commentRouter };
