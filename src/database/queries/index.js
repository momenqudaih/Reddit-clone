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

module.exports = {
    signupQuery,
    getUserByEmailQuery,
    getUserByUsernameQuery,
    getAllPostsQuery,
    createPostQuery,
    getSinglePostQuery,
};
