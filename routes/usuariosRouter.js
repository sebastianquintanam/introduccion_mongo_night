//cargamos las dependencias de DB
let dbUsuarios = require("../db/entities/dbUsuarios");
// inicializamos el router
let router = require("express").Router();

// Para procesar PETICIONES necesitamos 3 cosas
// METODO HTTP (Verbos HTTP)
// RUTA VIRTUAL
// ALGORITMO de procesamiento de la peticion (es decir, el algoritmo que me genera el response)

//Para obtener un usuario
router.get("/", function (req, res) {
    res.send("Hellow world");
});

//Para obtener TODOS los usuarios
router.get("/all", async function (req, res) {
    let result = await dbUsuarios.getAllUsuarios();
    res.json(result);
});

module.exports = router;