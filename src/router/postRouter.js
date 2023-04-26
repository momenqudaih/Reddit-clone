const {
    getAllPostsController,
    createPostController,
    getSinglePostController,
} = require('../controller');

const { checkAuth } = require('../middlewares');
// eslint-disable-next-line new-cap
const postRouter = require('express').Router();

postRouter.get('/', getAllPostsController);

postRouter.get('/:post_id', getSinglePostController);

postRouter.post('/create', checkAuth, createPostController);

module.exports = { postRouter };
