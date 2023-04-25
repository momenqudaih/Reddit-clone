const {
    signupController,
    signinController,
    getProfilePageController,
    getUserDataController,
    getCurrentUserController,
} = require('../controller');
const { logoutController } = require('../controller/users/logoutController');

// eslint-disable-next-line new-cap
const userRouter = require('express').Router();

userRouter.post('/signup', signupController);

userRouter.post('/signin', signinController);

userRouter.get('/logout', logoutController);

userRouter.get('/:username', getProfilePageController);

userRouter.get('/:username/data', getUserDataController);

userRouter.get('/', getCurrentUserController);

module.exports = { userRouter };
