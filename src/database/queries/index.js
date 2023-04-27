const {
    signupQuery,
    getUserByEmailQuery,
    getUserByUsernameQuery,
} = require('./users');

const {
    getAllPostsQuery,
    createPostQuery,
    getSinglePostQuery,
} = require('./posts');

const {
    getPostCommentsQuery,
    createCommentQuery,
    deleteCommentQuery,
} = require('./comments');

module.exports = {
    signupQuery,
    getUserByEmailQuery,
    getUserByUsernameQuery,
    getAllPostsQuery,
    createPostQuery,
    getSinglePostQuery,
    getPostCommentsQuery,
    createCommentQuery,
    deleteCommentQuery,
};
