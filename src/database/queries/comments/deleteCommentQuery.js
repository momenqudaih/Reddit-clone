const { connection } = require('../../config');

const deleteCommentQuery = (commentId) => {
    const sql = {
        text: 'DELETE FROM comments WHERE id = $1;',
        values: [commentId],
    };
    return connection.query(sql);
};

module.exports = { deleteCommentQuery };
