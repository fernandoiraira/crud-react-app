const mysql = require("mysql");
const user_data = require("./user_data");

const db = mysql.createConnection({
  host: user_data.host,
  user: user_data.user,
  password: user_data.password,
  database: user_data.database,
});