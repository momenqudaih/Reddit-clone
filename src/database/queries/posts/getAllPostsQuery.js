const connection = require('../../config/connection');

const getAllPostsQuery = () =>
    connection.query(
        // eslint-disable-next-line max-len
        'SELECT posts.user_id, username, posts.image, content, posts.created_at FROM users INNER JOIN posts ON users.id = posts.user_id',
    );

module.exports = { getAllPostsQuery };
