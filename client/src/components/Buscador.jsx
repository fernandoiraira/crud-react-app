import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Modalreact from "../components/ModalEdProductos";

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
    getItems();
  }, []);

  // Función para filtrar los productos por el nombre buscado
  const filtrarItems = () => {
    return itemsLista.filter((item) =>
      item.nombre.toLowerCase().includes(itemBuscado.toLowerCase())
    );
  };

  //HANDLE DELETE
  const handleDelete = (id) => {
    axios.delete(delPath + id).then(() => {
      getItems();
    });
  };

  //HANDLE GET
  const getItems = () => {
    axios.get(getPath).then((response) => {
      setItemsLista(response.data);
    });
  };

  //HANDLE UPDATE
  const update = (res) => {
    axios
      .put(updatePath, res) // Envía el objeto completo en la solicitud PUT
      .then(() => {
        getItems();
        alert("updated!!!");
      });
  };

  const destructure = (elem) => {
    const result = Object.keys(elem);

    Object.keys(elem).forEach((clave) => {
      console.log("Clave: " + clave);
    });

    console.log(result);

    return result;
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
              {filtrarItems().map((elem, key) => {
                const atributos = destructure(elem);

                return (
                  <tr key={key}>
                    {atributos.map((atributo) => (
                      <td key={atributo}>{elem[atributo]}</td>
                    ))}
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
                            handleDelete(elem.id);
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
