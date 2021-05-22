const db = require('./config/db');

let query_str = `
	CREATE TABLE IF NOT EXISTS HR_EMPLOYEES
	(	
		hrID VARCHAR ,
		name VARCHAR,
		password VARCHAR,
		PRIMARY KEY (hrID)
	);
	CREATE TABLE IF NOT EXISTS EMPLOYEES
	(
		employeeID VARCHAR,
		joinedOn DATE,
		leftOn DATE DEFAULT NULL,
		yearHours VARCHAR(365),
		PRIMARY KEY (employeeID)
	);
`;
db
	.query(query_str)
	.then(res => {
		console.log('Query was a success');
	})
	.catch(err => {
		console.log(err.stack);
		console.log('Query was a failure');
	});
