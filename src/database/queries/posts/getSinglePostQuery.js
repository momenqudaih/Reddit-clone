const { connection } = require('../../config');

const getSinglePostQuery = (postId) => {
    return connection.query(
        // eslint-disable-next-line max-len
        'SELECT posts.user_id, username, posts.image, content, posts.created_at FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.id = $1;', [postId],
    );
};

module.exports = { getSinglePostQuery };
