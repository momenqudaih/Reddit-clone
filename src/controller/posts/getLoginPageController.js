const path = require('path');

const getLoginPageController = (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', '..', '..', 'public', 'html', 'login.html'),
    );
};

module.exports = { getLoginPageController };
