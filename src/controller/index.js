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
} = require('./posts');

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
};
