const { tokenVerifier } = require('../utils');

const isLogged = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next();
    }

    tokenVerifier(token)
        .then((data) => {
            res.redirect('/');
        })
        .catch((err) => {
            return next();
        });
};

module.exports = { isLogged };
