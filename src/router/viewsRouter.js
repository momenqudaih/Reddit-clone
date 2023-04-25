const {
    getIndexPageController,
    getLoginPageController,
    getSignUpPageController,
    getHomePageController,
    getCommentsPageController,
} = require('../controller');
const { isLogged, checkAuth } = require('../middlewares');

// eslint-disable-next-line new-cap
const viewsRouter = require('express').Router();

viewsRouter.get('/', checkAuth, getIndexPageController);
viewsRouter.get('/home', isLogged, getHomePageController);

viewsRouter.get('/login', isLogged, getLoginPageController);
viewsRouter.get('/signup', isLogged, getSignUpPageController);
viewsRouter.get('/comments/:post_id', getCommentsPageController);

module.exports = viewsRouter;
