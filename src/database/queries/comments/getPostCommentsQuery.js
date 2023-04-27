const { connection } = require('../../config');

const getPostCommentsQuery = (postId) => {
    const sql = {
        // eslint-disable-next-line max-len
        text: 'SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.post_id = $1 ORDER BY comments.created_at DESC;',
        values: [postId],
    };
    return connection.query(sql);
};

module.exports = { getPostCommentsQuery };
