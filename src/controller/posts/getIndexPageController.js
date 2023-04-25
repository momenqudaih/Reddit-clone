const path = require('path');

const getIndexPageController = (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', '..', '..', 'public', 'html', 'index.html'),
    );
};

module.exports = { getIndexPageController };
