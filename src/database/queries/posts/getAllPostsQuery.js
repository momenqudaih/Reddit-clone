const connection = require('../../config/connection');

const getAllPostsQuery = () =>
    connection.query(
        // eslint-disable-next-line max-len
        'SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id ORDER BY posts.created_at DESC',
    );

module.exports = { getAllPostsQuery };
