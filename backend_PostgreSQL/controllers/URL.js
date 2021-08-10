const {db} = require("../Database/dataBase")

async function addUrl(req, res)
{
    const {url} = req.body;
    const id = generateKey();

	const query = {
	  text: 'INSERT INTO URLs(id, url) VALUES($1, $2)',
	  values: [id, url],
	}

	db.query(query, (err, dbRes) => {
        let success = "" + id;
        res.status((err ? 401 : 200)).send( {err, success} );
	  return ( !dbRes.rows[0] ? false : true );
	})
}

function getUrl(req, res)
{
	const query = {
	  text: 'SELECT * FROM URLs WHERE id= $1',
	  values: [req.params.id],
	}
	db.query(query, (err, dbRes) => {
		if (err) {
		return res.send({err: "Url no encontrada"});
	  } else {
		res.send({ err, success: dbRes.rows[0].url })
	  }
	})

	
}

function alreadyAdded(key) 
{
	const query = {
	  text: 'SELECT * FROM URLs WHERE id= $1',
	  values: [key],
	}

	db.query(query, (err, dbRes) => {
	  return ( !dbRes.rows[0] ? false : true );
	})
}

function generateKey()
{
    var id = Math.random().toString(36).slice(-5);
    if ( alreadyAdded(id) ) generateKey();
    return id;
}

exports.add = addUrl;
exports.get = getUrl; 