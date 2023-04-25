const { Pool } = require('pg');

require('dotenv').config();

const { DEV_DB_URL, DATABASE_URL, NODE_ENV } = process.env;

const options = {
    connectionString: NODE_ENV === 'development' ? DEV_DB_URL : DATABASE_URL,
    ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(options);

module.exports = connection;
