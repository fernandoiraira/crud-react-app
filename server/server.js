// Importación de módulos necesarios
const express = require("express"); // Importar el módulo Express para crear el servidor
const app = express(); // Crear una instancia de la aplicación Express
const port = 3001; // Definir el número de puerto en el que se ejecutará el servidor
const db = require("./mysql_connector"); // Importar el módulo personalizado para la conexión a la base de datos MySQL
const cors = require("cors"); // Importar el módulo CORS para permitir solicitudes de origen cruzado

// Configuración de middlewares
app.use(express.json()); // Permitir el análisis de solicitudes en formato JSON
app.use(cors()); // Habilitar el acceso a la API desde diferentes dominios

// Definición de rutas y sus respectivas funciones de manejo de solicitudes

// Ruta para crear un nuevo cliente mediante una solicitud POST
app.post("/create/cliente", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const fecha_nacimiento = req.body.fecha_nacimiento;
  const email = req.body.email;
  const telefono = req.body.telefono;
  const fecha_registro = req.body.fecha_registro;

  // Ejecutar una consulta SQL para insertar los datos en la tabla de clientes
  db.query(
    "INSERT INTO clientes (nombre,apellido,fecha_nacimiento,email,telefono,fecha_registro) VALUES (?,?,?,?,?,?)",
    [nombre, apellido, fecha_nacimiento, email, telefono, fecha_registro],
    (err, result) => {
      if (err) throw err; // Si hay un error, enviar una respuesta con el error
      res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser el ID del nuevo cliente)
    }
  );
});

// Ruta para obtener todos los clientes mediante una solicitud GET
app.get("/get/clientes", (req, res) => {
  // Ejecutar una consulta SQL para seleccionar todos los registros de la tabla de clientes
  db.query("SELECT * FROM clientes", (err, result) => {
    if (err) throw err; // Si hay un error, enviar una respuesta con el error
    res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser un arreglo de objetos de clientes)
  });
});

// Ruta para crear un nuevo empleado mediante una solicitud POST
app.post("/create/empleado", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const antiguedad = req.body.antiguedad;

  // Ejecutar una consulta SQL para insertar los datos en la tabla de empleados
  db.query(
    "INSERT INTO empleados (nombre,edad,pais,cargo,antiguedad) VALUES (?,?,?,?,?)",
    [nombre, edad, pais, cargo, antiguedad],
    (err, result) => {
      if (err) throw err; // Si hay un error, enviar una respuesta con el error
      res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser el ID del nuevo empleado)
    }
  );
});

// Ruta para obtener todos los empleados mediante una solicitud GET
app.get("/get/empleados", (req, res) => {
  // Ejecutar una consulta SQL para seleccionar todos los registros de la tabla de empleados
  db.query("SELECT * FROM empleados", (err, result) => {
    if (err) throw err; // Si hay un error, enviar una respuesta con el error
    res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser un arreglo de objetos de empleados)
  });
});

// Ruta para crear un nuevo producto mediante una solicitud POST
app.post("/create/producto", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud
  const nombre = req.body.nombre;
  const precioCosto = req.body.precioCosto;
  const precioVenta = req.body.precioVenta;
  const stock = req.body.stock;
  const descripcion = req.body.descripcion;
  const fechaCompra = req.body.fechaCompra;

  // Ejecutar una consulta SQL para insertar los datos en la tabla de productos
  db.query(
    "INSERT INTO productos (nombre,precio_costo,precio_venta,stock,descripcion,fecha_compra) VALUES (?,?,?,?,?,?)",
    [nombre, precioCosto, precioVenta, stock, descripcion, fechaCompra],
    (err, result) => {
      if (err) throw err; // Si hay un error, enviar una respuesta con el error
      res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser el ID del nuevo producto)
    }
  );
});

// Ruta para obtener todos los productos mediante una solicitud GET
app.get("/get/productos", (req, res) => {
  // Ejecutar una consulta SQL para seleccionar todos los registros de la tabla de productos
  db.query("SELECT * FROM productos", (err, result) => {
    if (err) throw err; // Si hay un error, enviar una respuesta con el error
    res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser un arreglo de objetos de productos)
  });
});

// Ruta para actualizar un producto mediante una solicitud PUT
app.put("/update/producto", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud
  const id = req.body.id;
  const nombre = req.body.nombre;
  const precioCosto = req.body.precioCosto;
  const precioVenta = req.body.precioVenta;
  const stock = req.body.stock;
  const descripcion = req.body.descripcion;
  const fecha = req.body.fecha_compra;

  console.log("TODO: " + req.body);

  console.log(id, nombre, precioCosto, precioVenta, stock, descripcion, fecha);

  // Ejecutar una consulta SQL para actualizar el producto en la tabla de productos
  db.query(
    "UPDATE productos SET nombre=?,precio_costo=?,precio_venta=?,stock=?,descripcion=?,fecha_compra=? WHERE id=?",
    [nombre, precioCosto, precioVenta, stock, descripcion, fecha, id],
    (err, result) => {
      if (err) throw err; // Si hay un error, enviar una respuesta con el error
      res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser el número de filas afectadas)
    }
  );
});

// Ruta para eliminar un producto mediante una solicitud DELETE
app.delete("/delete/producto/:id", (req, res) => {
  // Obtener el ID del producto a eliminar de los parámetros de la solicitud
  const id = req.params.id;

  // Ejecutar una consulta SQL para eliminar el producto de la tabla de productos
  db.query("DELETE FROM productos WHERE id=?", id, (err, result) => {
    if (err) throw err; // Si hay un error, enviar una respuesta con el error
    res.send(result); // Enviar una respuesta con el resultado de la consulta (puede ser el número de filas afectadas)
  });
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(port, (req, res) => {
  console.log("Servidor corriendo en el puerto " + port); // Mostrar un mensaje en la consola cuando el servidor se inicia con éxito
});
