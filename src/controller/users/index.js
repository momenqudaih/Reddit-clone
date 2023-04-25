const { signupController } = require('./signupController');
const { signinController } = require('./signinController');
const { logoutController } = require('./logoutController');
const { getUserDataController } = require('./getUserDataController');
const { getProfilePageController } = require('./getProfilePageController');
const { getCurrentUserController } = require('./getCurrentUserController');

module.exports = {
    signupController,
    signinController,
    logoutController,
    getUserDataController,
    getProfilePageController,
    getCurrentUserController,
};
