const joi = require('joi');

const signinSchema = joi
    .object({
        email: joi.string().email().required().messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),
        password: joi.string().required().messages({
            'any.required': 'Password is required',
        }),
    })
    .messages({
        'any.required': '{{#label}} is required',
        'any.invalid': '{{#label}} is invalid',
        'string.empty': '{{#label}} cannot be empty',
    });

module.exports = signinSchema;
