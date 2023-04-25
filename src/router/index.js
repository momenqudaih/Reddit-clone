const { userRouter } = require('./userRouter');
const { postRouter } = require('./postRouter');
const viewsRouter = require('./viewsRouter');

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use(viewsRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);

module.exports = router;
