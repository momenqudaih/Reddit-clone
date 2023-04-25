const bcrypt = require('bcrypt');

const { getUserByEmailQuery } = require('../../database');

const { signinSchema, CustomError, tokenSigner } = require('../../utils');

const signinController = (req, res, next) => {
    const { email, password } = req.body;

    signinSchema
        .validateAsync({ email, password }, { abortEarly: false })
        .then((data) => {
            return getUserByEmailQuery(email);
        })
        .then((user) => {
            // console.log('Myuser======', user.rows);
            if (!user.rows[0]) {
                throw new CustomError('Invalid email or password', 400);
            }
            req.user = user.rows[0];
            return bcrypt.compare(password, user.rows[0].password);
        })
        .then((isPasswordValid) => {
            if (!isPasswordValid) {
                throw new CustomError('Invalid email or password', 400);
            }
        })
        .then(() => {
            const { id, username, email } = req.user;
            return tokenSigner({ id, username, email }, process.env.SECRET, {
                expiresIn: '1d',
            });
        })
        .then((token) => {
            const { id, username, email } = req.user;
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
            }).json({
                error: false,
                data: {
                    message: 'Successfully logged in',
                    user: { id, username, email },
                },
            });
        })
        .catch((err) => next(err));
};

module.exports = { signinController };
