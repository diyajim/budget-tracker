// import pool
const {Pool} = require("pg");

// load env vars
require("dotenv").config();

// makes a connection pool with credentials
const pool = new Pool({
    user: process.env.BUDGET_USERNAME,
    host: process.env.BUDGET_HOST,
    database: process.env.BUDGET_DATABASE,
    password: process.env.BUDGET_PASSWORD,
    port: 5432
});

// export pool
module.exports = pool;