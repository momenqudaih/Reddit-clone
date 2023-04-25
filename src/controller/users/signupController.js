const bcrypt = require('bcrypt');

const { signupQuery } = require('../../database');
const {
    signupSchema,
    tokenSigner,
    checkUserIfExist,
    CustomError,
} = require('../../utils');

const signupController = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;

    signupSchema
        .validateAsync(
            { username, email, password, confirmPassword },
            { abortEarly: false },
        )
        .then((data) => {
            checkUserIfExist(username, email).then((data) => {
                if (data[0].rows.length > 0) {
                    next(new CustomError('Email already exists', 400));
                }
                if (data[1].rows.length > 0) {
                    next(new CustomError('Username already exists', 400));
                }
            });
        })
        .then((data) => {
            return bcrypt.hash(password, 10);
        })
        .then((hash) => ({ username, email, password: hash }))
        .then((data) => signupQuery(data))
        .then((data) => data.rows[0])
        .then((data) => {
            req.user = data;
            return tokenSigner(data, { expiresIn: '1d' });
        })
        .then((token) => {
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
            }).json({
                error: false,
                data: {
                    message: 'User created successfully',
                    user: req.user,
                },
            });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { signupController };
