import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Modalreact from "../components/ModalEdProductos";

function GetClientes() {
  const [clientesLista, setProductos] = useState([]);
  const [clienteBuscado, setBuscado] = useState("");
  const [editar, setEditar] = useState(false);
  const [clienteEditado, setEditado] = useState({});

  const handleEditar = (elem) => {
    setEditar(true);
    setEditado(elem);
  };

  const handleClose = () => {
    setEditar(false);
  };

  const handleChange = (event) => {
    setBuscado(event.target.value);
    console.log(clienteBuscado);
  };

  const getProductos = () => {
    axios.get("http://localhost:3001/get/clientes").then((response) => {
      setProductos(response.data);
    });
  };

  const update = (res) => {
    console.log("CLIENTE EDITADO A ENVIAR AL SERVER:", res);
    axios
      .put("http://localhost:3001/update/cliente/", res) // Envía el objeto completo en la solicitud PUT
      .then(() => {
        getProductos();
        alert("updated!!!");
      });
  };

  useEffect(() => {
    getProductos();
  }, []);

  // Función para filtrar los clientes por el nombre buscado
  const filtrarClientes = () => {
    return clientesLista.filter((cliente) =>
      cliente.nombre.toLowerCase().includes(clienteBuscado.toLowerCase())
    );
  };

  const deleteCliente = (id) => {
    axios.delete("http://localhost:3001/delete/cliente/" + id).then(() => {
      getProductos();
    });
  };

  return (
    <div className="container">
      <div className="container">
        <Modalreact
          onOk={(res) => {
            setEditado(res);
            update(res);
            handleClose();
          }}
          onClose={handleClose}
          isOpen={editar}
          editado={clienteEditado}
        />
      </div>
      <div className="card text-center mt-5">
        <div className="card-header">BUSCAR CLIENTES</div>
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
              placeholder="Ingrese el nombre del cliente"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              onChange={handleChange}
              name="nombre"
            />
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Fecha de Nacimiento</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Fecha Registro</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtrarClientes().map((elem, key) => {
                return (
                  <tr key={key}>
                    <td>{elem.id}</td>
                    <td>{elem.nombre} </td>
                    <td>{elem.apellido}</td>
                    <td>{elem.fecha_nacimiento} </td>
                    <td>{elem.email} </td>
                    <td>{elem.telefono} </td>
                    <td>{elem.fecha_registro} </td>
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
                            deleteCliente(elem.id);
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
export default GetClientes;
