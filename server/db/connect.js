require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'bank_account'
});

const getClient = async () => {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { pool, getClient };
