const { connection } = require('../../config');

const createPostQuery = (content, image, userId) => {
    return connection.query(
        // eslint-disable-next-line max-len
        'INSERT INTO posts (content, image, user_id) VALUES($1, $2, $3) RETURNING * ;', [content, image, userId],
    );
};

module.exports = { createPostQuery };
