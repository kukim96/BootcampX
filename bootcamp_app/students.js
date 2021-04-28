const { Pool } = require('pg');

const pool = new Pool({
  users: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});