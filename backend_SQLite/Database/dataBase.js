const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./Database/Database.db");

db.serialize( () => {
    db.run("CREATE TABLE IF NOT EXISTS URLs ( id TEXT UNIQUE NOT NULL, url TEXT ) ")
});

exports.db = db;  