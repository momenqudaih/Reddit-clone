const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const { CustomError } = require('../../utils');
const path = require('path');

const serverError = (err, req, res, next) => {
    switch (true) {
    case err instanceof ValidationError:
        return res.status(400).json({
            error: true,
            data: {
                details: err.details,
            },
        });
    case err instanceof JsonWebTokenError:
        return res.status(401).redirect('/home');
    case err instanceof CustomError:
        return res.status(err.status).json({
            error: true,
            data: {
                message: err.message,
                from: 'CustumError',
            },
        });
    default:
        return res
            .status(500)
            .sendFile(
                path.join(
                    __dirname,
                    '..',
                    '..',
                    '..',
                    'public',
                    'html',
                    '500.html',
                ),
            );
    }
};

module.exports = { serverError };
