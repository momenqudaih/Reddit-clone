const joi = require('joi');

const createPostSchema = joi.object({
    content: joi.string().required(),
    image: joi.string().allow(null, ''),
});

module.exports = { createPostSchema };
