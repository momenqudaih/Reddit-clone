const joi = require('joi');

const createPostSchema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
});

module.exports = { createPostSchema };
