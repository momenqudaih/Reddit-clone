const viewsRouter = require('./viewsRouter');
const { userRouter } = require('./userRouter');
const { postRouter } = require('./postRouter');
const { commentRouter } = require('./commentRouter');

// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use(viewsRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);

module.exports = router;
