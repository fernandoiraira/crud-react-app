# crud-react-app

Primera aplicacion de react CRUD

NOTA: se debe crear un archivo user_data.js para que el archivo server.js tenga la informacion de login a la base de datos

Plantilla de archivo:

const user = "username";
const password = "password";
const database = "database_name";
const host = "localhost";

const getInfo = () => {
  return {
    user: user,
    password: password,
    database: database,
    host: host,
  };
};

module.exports = getInfo;

