const express = require("express");
const app = express();
const port = 3001;
const mysql = require("./mysql_connector");

app.use(express.json());
app.use(cors());

app.post("/create/empleado", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const antiguedad = req.body.antiguedad;
});

app.listen(port, (req, res) => {
  console.log("Servidor corriendo en el puerto " + port);
});
