const { verify } = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const tokenVerifier = (token) => {
    return new Promise((resolve, reject) => {
        verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
};

module.exports = tokenVerifier;
