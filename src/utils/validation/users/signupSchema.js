const joi = require('joi');

const signupSchema = joi
    .object({
        username: joi.string().min(3).max(30).required().messages({
            'string.base': 'Username should be a string',
            'string.empty': 'Username cannot be empty',
            'string.min': 'Username should have a minimum length of {#limit}',
            'string.max': 'Username should have a maximum length of {#limit}',
            'any.required': 'Username is required',
        }),
        email: joi.string().email().required().messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),
        password: joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required()
            .messages({
                'string.pattern.base':
                    // eslint-disable-next-line max-len
                    'Password should be at least 3 characters long and contain only letters and numbers',
                'any.required': 'Password is required',
            }),
        confirmPassword: joi
            .any()
            .valid(joi.ref('password'))
            .required()
            .messages({
                'any.only': 'Passwords do not match',
                'any.required': 'Confirm password is required',
            })
            .label('Confirm password'),
    })
    .messages({
        'any.required': '{{#label}} is required',
        'any.invalid': '{{#label}} is invalid',
        'string.empty': '{{#label}} cannot be empty',
        'string.min': '{{#label}} should have a minimum length of {#limit}',
        'string.max': '{{#label}} should have a maximum length of {#limit}',
    });
module.exports = signupSchema;
