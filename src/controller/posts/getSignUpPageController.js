const path = require('path');

const getSignUpPageController = (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', '..', '..', 'public', 'html', 'signup.html'),
    );
};

module.exports = { getSignUpPageController };
