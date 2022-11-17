//Cargando las dependencias
let appConfig = require("../../config");
let dbConnector = require("../dbConector");
//creando variables de configuracion
let collectionName = "usuarios";

//Funciones
//Funcion para crear un usuario
async function createUsuario(usuario) {
    try {
        let db = dbConnector.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let result = await collection.insertOne(usuario);
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}
//Funcion para obtener todos los usuarios
async function getAllUsuarios() {
    try {
        let db = dbConnector.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let result = [];
        let cursor = collection.find({});
        let currentUsuario = await cursor.next();
        while (currentUsuario != null) {
            result.push(currentUsuario);
            currentUsuario = await cursor.next();
        }
        return result;
    } catch (ex) {
        console.log(ex);
        return [];
    }
}

module.exports = {
    collectionName,
    createUsuario,
    getAllUsuarios,
};