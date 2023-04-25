const { sign } = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const tokenSigner = (payload, options) => {
    return new Promise((resolve, reject) => {
        sign(payload, SECRET_KEY, options, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
};

module.exports = tokenSigner;
