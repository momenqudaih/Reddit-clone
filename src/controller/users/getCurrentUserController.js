const jwt = require('jsonwebtoken');
const { CustomError } = require('../../utils');

const { SECRET_KEY } = process.env;

const getCurrentUserController = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                next(err);
            } else {
                res.status(200).json(decoded);
            }
        });
    } else {
        // res.status(401).json({ message: 'Missing token.' });
        next(new CustomError(401, 'Missing token.'));
    }
};

module.exports = { getCurrentUserController };
