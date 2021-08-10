const {db} = require("../Database/dataBase")

async function addUrl(req, res)
{
    const {url} = req.body;
    const id = generateKey();

    db.run("INSERT INTO URLs VALUES (?, ?)", [id, url], (err, reply) => {
        let success = "" + id;
        res.status((err ? 401 : 200)).send( {err, success} );
    });
}

function getUrl(req, res)
{
    
    db.get("SELECT * FROM URLs WHERE id=?", [req.params.id], (err, row) => {
        if ( !row ) return res.send({err: "Url no encontrada"});
        else res.send({ err, success: row.url })
    })
}

function alreadyAdded(key) 
{
    db.get("SELECT * FROM URLs WHERE id=?", [key], (err, row) => {
        return ( !row ? false : true );
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