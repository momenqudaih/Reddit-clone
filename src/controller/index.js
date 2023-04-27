const {
    signupController,
    signinController,
    logoutController,
    getUserDataController,
    getProfilePageController,
    getCurrentUserController,
} = require('./users');
const { clientError, serverError } = require('./errors');
const {
    getSignUpPageController,
    getLoginPageController,
    getHomePageController,
    getIndexPageController,
    getCommentsPageController,
    getAllPostsController,
    createPostController,
    getSinglePostController,
} = require('./posts');

const {
    getPostCommentsController,
    createCommentController,
    deleteCommentController,
} = require('./comments');

module.exports = {
    signupController,
    signinController,
    logoutController,
    clientError,
    serverError,
    getSignUpPageController,
    getLoginPageController,
    getHomePageController,
    getIndexPageController,
    getCommentsPageController,
    getUserDataController,
    getProfilePageController,
    getCurrentUserController,
    getAllPostsController,
    createPostController,
    getSinglePostController,
    getPostCommentsController,
    createCommentController,
    deleteCommentController,
};
