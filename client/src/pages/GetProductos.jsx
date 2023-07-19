import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Productos() {
  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
    precioCosto: null,
    precioVenta: null,
    stock: null,
    descripcion: "",
    fechaCompra: null,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const add = () => {
    axios
      .post("http://localhost:3001/create/producto", {
        nombre: formData.nombre,
        precioCosto: formData.precioCosto,
        precioVenta: formData.precioVenta,
        stock: formData.stock,
        descripcion: formData.descripcion,
      })
      .then(() => {
        alert("Producto registrado!");
      });
  };

  return (
    <div className="container">
      <div className="container">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Acciones
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/productos">
              Cargar nuevo producto
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/get/productos">
              Todos los productos
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="card text-center mt-5">
        <div className="card-header">VER PRODUCTOS</div>
        <div className="card-body">
          
        </div>
        <div className="card-footer text-muted">
          <button onClick={add} className="btn btn-success mx-2">
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productos;
