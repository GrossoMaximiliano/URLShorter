const express = require('express');
const app = express();
const URL = require("../controllers/URL");
const cors = require('cors');
const express_port = 4000;

app.use(cors());
app.use(express.json());

app.listen( express_port, () => {
    console.log(`Corriendo la aplicación en el puerto ${express_port}`);
});

const defineRoutes = () => {

    app.post("/add", (req, res) => { URL.add(req, res) })
    app.post("/get/:id", (req, res)  => { URL.get(req, res) })
}


exports.defineRoutes = defineRoutes;