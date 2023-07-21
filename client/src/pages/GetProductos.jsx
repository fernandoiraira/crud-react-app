import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Modal_test from "../components/Modal_test";

function Productos() {
  const [productosLista, setProductos] = useState([]);
  const [productoBuscado, setBuscado] = useState("");
  const [editar, setEditar] = useState(false);
  const [productoEditado, setEditado] = useState({});

  const handleEditar = (elem) => {
    setEditar(true);
    setEditado(elem);
  };

  const handleClose = () => {
    setEditar(false);
  };

  const handleChange = (event) => {
    setBuscado(event.target.value);
    console.log(productoBuscado);
  };

  const getProductos = () => {
    axios.get("http://localhost:3001/get/productos").then((response) => {
      setProductos(response.data);
    });
  };

  const update = () => {
    console.log("PRODUCTO EDITADO A ENVIAR AL SERVER:", productoEditado);
    axios
      .put("http://localhost:3001/update/producto/", productoEditado) // Envía el objeto completo en la solicitud PUT
      .then(() => {
        getProductos();
        alert("updated!!!");
      });
  };

  useEffect(() => {
    getProductos();
  }, []);

  // Función para filtrar los productos por el nombre buscado
  const filtrarProductos = () => {
    return productosLista.filter((producto) =>
      producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
    );
  };

  const deleteProd = (id) => {
    axios.delete("http://localhost:3001/delete/producto/" + id).then(() => {
      getProductos();
    });
  };

  return (
    <div className="container">
      <div className="container">
        <Modal_test
          onOk={(res) => {
            console.log("PRODUCTO RECIEN RECIBIDO: " + res);
            setEditado(res);
            update();
            handleClose();
          }}
          onClose={handleClose}
          isOpen={editar}
          editado={productoEditado}
        />

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Menú
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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Buscar:
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
              //value={formData.nombre}
            />
          </div>
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
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtrarProductos().map((elem, key) => {
                return (
                  <tr key={key}>
                    <td>{elem.id}</td>
                    <td>{elem.nombre} </td>
                    <td>{elem.precio_costo}</td>
                    <td>{elem.precio_venta} </td>
                    <td>{elem.stock} </td>
                    <td>{elem.descripcion} </td>
                    <td>{elem.fecha_compra} </td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={() => {
                            handleEditar(elem);
                          }}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteProd(elem.id);
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
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
