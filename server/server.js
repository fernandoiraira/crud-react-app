const express = require("express");
const app = express();
const port = 3001;
const db = require("./mysql_connector");
const cors = require("cors");

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
      res.send(result);
    }
  );
});

app.get("/get/empleados", (req, res) => {
  db.query("SELECT * FROM empleados", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/create/producto", (req, res) => {
  const nombre = req.body.nombre;
  const precioCosto = req.body.precioCosto;
  const precioVenta = req.body.precioVenta;
  const stock = req.body.stock;
  const descripcion = req.body.descripcion;
  const fecha = new Date();

  db.query(
    "INSERT INTO productos (nombre,precio_costo,precio_venta,stock,descripcion,fecha_compra) VALUES (?,?,?,?,?,?)",
    [nombre, precioCosto, precioVenta, stock, descripcion, fecha],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.get("/get/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/update/producto", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const precioCosto = req.body.precioCosto;
  const precioVenta = req.body.precioVenta;
  const stock = req.body.stock;
  const descripcion = req.body.descripcion;
  const fecha = new Date();

  db.query(
    "UPDATE productos SET nombre=?, precio_costo=?,precio_venta=?,stock=?,descripcion=?,fecha_compra=? WHERE id=?",
    [nombre, precioCosto, precioVenta, stock, descripcion, fecha, id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.delete("/delete/producto/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM productos WHERE id=?", id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, (req, res) => {
  console.log("Servidor corriendo en el puerto " + port);
});
