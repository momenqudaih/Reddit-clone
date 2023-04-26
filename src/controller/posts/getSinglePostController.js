const { getSinglePostQuery } = require('../../database');

const getSinglePostController = (req, res, next) => {
    // eslint-disable-next-line camelcase
    const { post_id } = req.params;
    getSinglePostQuery(post_id)
        .then((data) => {
            res.json(data.rows[0]);
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { getSinglePostController };
