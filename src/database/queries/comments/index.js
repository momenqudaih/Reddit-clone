const { getPostCommentsQuery } = require('./getPostCommentsQuery');
const { createCommentQuery } = require('./createCommentQuery');
const { deleteCommentQuery } = require('./deleteCommentQuery');

module.exports = {
    getPostCommentsQuery,
    createCommentQuery,
    deleteCommentQuery,
};
