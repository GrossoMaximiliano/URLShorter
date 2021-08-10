const {Client} = require('pg');

const connectionString = 'postgres://yourdata'

const db = new Client({ connectionString })
db.connect((err, dbRes) => {
	if (!err) console.log("Base de datos conectada!");
} );

db.query("CREATE TABLE IF NOT EXISTS URLs ( id TEXT UNIQUE NOT NULL, url TEXT ) ");

exports.db = db;  