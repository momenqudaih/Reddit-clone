const { getAllPostsController } = require('../controller');

// eslint-disable-next-line new-cap
const postRouter = require('express').Router();

postRouter.get('/', getAllPostsController);

module.exports = { postRouter };
