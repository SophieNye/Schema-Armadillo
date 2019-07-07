const { Pool } = require('pg');

const pool = new Pool({
  user: 'armadillo',
  host: 'localhost',
  database: 'schema-armadillo',
  password: 'pink',
  port: 5432,
});

pool.query(
  'CREATE TABLE IF NOT EXISTS users(user_id SERIAL PRIMARY KEY, username VARCHAR(50), password VARCHAR(50), team_id INT)',
  (err, result) => {
    if (err) return console.error(err);
    console.log('CREATE TABLE users', result);
  },
);

module.exports = pool;