const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./router');
const compression = require('compression');
require('dotenv').config();

const { clientError, serverError } = require('./controller');

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port || 3000);

app.disable('x-powered-by');
app.use(
    express.json(),
    express.urlencoded({ extended: false }),
    cookieParser(),
    compression(),
);

app.use(express.static('public'));
app.use(router);

app.use(clientError);
app.use(serverError);

module.exports = app;
