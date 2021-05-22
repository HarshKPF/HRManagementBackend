const Pool = require('pg').Pool;
const env = require('dotenv').config();
const pool = new Pool({
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host:process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
	ssl: {
		rejectUnauthorized: false
	} 
});

pool
.connect()
.then(() => console.log('Database Connected'))
.catch(err => console.error('Error Connecting to DB: ', err.stack));

module.exports = {
  query: (text, params) => pool.query(text, params),
	pool
};
