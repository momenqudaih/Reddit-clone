/* eslint-disable camelcase */
const { connection } = require('../../config');

const createCommentQuery = (content, user_id, post_id) => {
    const sql = {
        // eslint-disable-next-line max-len
        text: 'INSERT INTO comments (content, user_id, post_id) VALUES ($1, $2, $3) RETURNING *',
        values: [content, user_id, post_id],
    };
    return connection.query(sql);
};

module.exports = { createCommentQuery };
