const { getSignUpPageController } = require('./getSignUpPageController');
const { getLoginPageController } = require('./getLoginPageController');
const { getHomePageController } = require('./getHomePageController');
const { getIndexPageController } = require('./getIndexPageController');
const { getCommentsPageController } = require('./getCommentsPageController');
const { getAllPostsController } = require('./getAllPostsController');
const { createPostController } = require('./createPostController');
const { getSinglePostController } = require('./getSinglePostController');

module.exports = {
    getSignUpPageController,
    getLoginPageController,
    getHomePageController,
    getIndexPageController,
    getCommentsPageController,
    getAllPostsController,
    createPostController,
    getSinglePostController,
};
