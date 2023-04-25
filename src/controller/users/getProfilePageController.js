const { getUserByUsernameQuery } = require('../../database');
const { join } = require('path');

const getProfilePageController = (req, res) => {
    const { username } = req.params;

    getUserByUsernameQuery(username).then((data) => {
        if (data.rowCount > 0) {
            res.sendFile(
                join(
                    __dirname,
                    '..',
                    '..',
                    '..',
                    'public',
                    'html',
                    'profile.html',
                ),
            );
        } else {
            res.sendFile(
                join(__dirname, '..', '..', '..', 'public', 'html', '404.html'),
            );
        }
    });
};

module.exports = { getProfilePageController };
