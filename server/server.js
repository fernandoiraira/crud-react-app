const express = require("express");
const app = express();
const port = 3001;
const db = require("./mysql_connector");

app.use(express.json());
app.use(cors());

app.post("/create/empleado", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const antiguedad = req.body.antiguedad;

  db.query(
    "INSERT INTO empleados (nombre,edad,pais,cargo,antiguedad) VALUES (?,?,?,?,?)",
    [nombre, edad, pais, cargo, antiguedad],
    (err, result) => {
      if (err) throw err;
      res.send("Empleado registrado con exito");
    }
  );
});

app.listen(port, (req, res) => {
  console.log("Servidor corriendo en el puerto " + port);
});
