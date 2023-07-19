const mysql = require("mysql");
const user_data = require("./user_data.js");

const db = mysql.createConnection({
  host: user_data.getInfo().host,
  user: user_data.getInfo().user,
  password: user_data.getInfo().password,
  database: user_data.getInfo().database,
});

module.exports = db;
