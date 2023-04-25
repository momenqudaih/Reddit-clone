const {
    signupQuery,
    getUserByEmailQuery,
    getUserByUsernameQuery,
} = require('./users');

const { getAllPostsQuery } = require('./posts');
module.exports = {
    signupQuery,
    getUserByEmailQuery,
    getUserByUsernameQuery,
    getAllPostsQuery,
};
