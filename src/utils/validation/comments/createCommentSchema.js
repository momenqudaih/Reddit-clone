const joi = require('joi');

const createCommentSchema = joi.object({
    content: joi.string().required(),
});

module.exports = { createCommentSchema };
