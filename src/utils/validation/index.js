const { signupSchema, signinSchema } = require('./users');
const { createPostSchema } = require('./posts');
const { createCommentSchema } = require('./comments');

module.exports = {
    signupSchema,
    signinSchema,
    createPostSchema,
    createCommentSchema,
};
