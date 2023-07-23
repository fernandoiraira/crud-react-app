import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Modalreact from "../components/Modal-react";

function Buscador({
  encabezado,
  titulo,
  placeholder,
  getPath,
  delPath,
  updatePath,
}) {
  const [itemsLista, setItemsLista] = useState([]);
  const [itemBuscado, setItemBuscado] = useState("");
  const [editar, setEditar] = useState(false);
  const [itemEditado, setItemEditado] = useState({});

  const handleEditar = (elem) => {
    setEditar(true);
    setItemEditado(elem);
  };

  const handleClose = () => {
    setEditar(false);
  };

  const handleChange = (event) => {
    setItemBuscado(event.target.value);
    console.log(itemBuscado);
  };

  useEffect(() => {
    getProductos();
  }, []);

  // Función para filtrar los productos por el nombre buscado
  const filtrarProductos = () => {
    return itemsLista.filter((producto) =>
      producto.nombre.toLowerCase().includes(itemBuscado.toLowerCase())
    );
  };

  //HANDLE DELETE
  const deleteProd = (id) => {
    axios.delete(delPath + id).then(() => {
      getProductos();
    });
  };

  //HANDLE GET
  const getProductos = () => {
    axios.get(getPath).then((response) => {
      setItemsLista(response.data);
    });
  };

  //HANDLE UPDATE
  const update = (res) => {
    console.log("PRODUCTO EDITADO A ENVIAR AL SERVER:", res);
    axios
      .put(updatePath, res) // Envía el objeto completo en la solicitud PUT
      .then(() => {
        getProductos();
        alert("updated!!!");
      });
  };

  return (
    <div className="container">
      <div className="container">
        <Modalreact
          onOk={(res) => {
            setItemEditado(res);
            update(res);
            handleClose();
          }}
          onClose={handleClose}
          isOpen={editar}
          editado={itemEditado}
        />
      </div>
      <div className="card text-center mt-5">
        <div className="card-header">{titulo}</div>
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
              placeholder={placeholder}
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
                {encabezado.map((elem) => {
                  return <th scope="col">{elem}</th>;
                })}
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

export default Buscador;
