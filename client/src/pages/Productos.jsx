import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="container">
      <div className="card text-center mt-5">
        <div className="card-header">GESTIÓN DE PRODUCTOS</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Nombre:
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el nombre del producto"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="nombre"
              value={formData.nombre}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Precio costo:
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el precio costo"
              aria-label="PrecioCosto"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="precioCosto"
              value={formData.precioCosto}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Precio venta:
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el precio de venta"
              aria-label="PrecioVenta"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="precioVenta"
              value={formData.precioVenta}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Stock:
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el stock del producto"
              aria-label="Stock"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="stock"
              value={formData.stock}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Descripción:
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese una descripcion del producto"
              aria-label="Descripcion"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="descripcion"
              value={formData.descripcion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
