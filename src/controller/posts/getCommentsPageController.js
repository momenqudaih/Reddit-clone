const path = require('path');

const getCommentsPageController = (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            '..',
            '..',
            '..',
            'public',
            'html',
            'comments.html',
        ),
    );
};

module.exports = { getCommentsPageController };
