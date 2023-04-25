const path = require('path');

const getHomePageController = (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', '..', '..', 'public', 'html', 'home.html'),
    );
};

module.exports = { getHomePageController };
