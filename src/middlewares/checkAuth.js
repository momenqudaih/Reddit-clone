const { tokenVerifier } = require('../utils');

const checkAuth = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        res.redirect('/home');
    }

    tokenVerifier(token)
        .then((decoded) => {
            req.user = decoded;
            next();
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { checkAuth };
