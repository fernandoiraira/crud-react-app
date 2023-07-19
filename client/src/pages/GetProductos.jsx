import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Productos() {
  const [productosLista, setProductos] = useState([]);

  const getProductos = () => {
    axios.get("http://localhost:3001/get/productos").then((response) => {
      setProductos(response.data);
    });
  };

  useEffect(() => {
    getProductos();
  }, []);

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
        <div className="card-header">LISTA DE PRODUCTOS</div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio Costo</th>
                <th scope="col">Precio Venta</th>
                <th scope="col">Stock</th>
                <th scope="col">Descr.</th>
                <th scope="col">Fecha Compra</th>
              </tr>
            </thead>
            <tbody>
              {productosLista.map((elem, key) => {
                return (
                  <tr>
                    <th>{elem.id}</th>
                    <th>{elem.nombre} </th>
                    <th>{elem.precio_costo}</th>
                    <th>{elem.precio_venta} </th>
                    <th>{elem.stock} </th>
                    <th>{elem.descripcion} </th>
                    <th>{elem.fecha_compra} </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
}

export default Productos;
