import { Modal, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState, useEffect } from "react";

function ModalEdClientes({ onOk, onClose, isOpen, editado }) {
  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
    apellido: "",
    fecha_nacimiento: null,
    email: "",
    telefono: "",
    fecha_reg: null,
  });

  const handleChange = (event) => {
    console.log(
      "Target name: " +
        event.target.name +
        " | Target value: " +
        event.target.value
    );
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  useEffect(() => {
    setFormData({
      id: editado.id,
      nombre: editado.nombre,
      apellido: editado.apellido,
      fecha_nacimiento: editado.fecha_nacimiento,
      email: editado.email,
      telefono: editado.telefono,
      fecha_reg: editado.fecha_registro,
    });
  }, [editado]);

  return (
    <>
      <Modal overflow={true} open={isOpen} backdrop={true}>
        <Modal.Body>
          <div className="card text-center">
            <div className="card-header">Editar Cliente</div>
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
                  placeholder="Ingrese el nombre del cliente"
                  aria-label="Nombre"
                  aria-describedby="basic-addon1"
                  name="nombre"
                  onChange={handleChange}
                  defaultValue={editado.nombre}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Apellido:
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el apellido del cliente"
                  aria-label="Apellido"
                  aria-describedby="basic-addon1"
                  name="apellido"
                  onChange={handleChange}
                  defaultValue={editado.apellido}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Fecha Nacimiento:
                  </span>
                </div>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Ingrese la fecha de nacimiento"
                  aria-label="FechaNac"
                  aria-describedby="basic-addon1"
                  name="fecha_nacimiento"
                  onChange={handleChange}
                  defaultValue={editado.fecha_nacimiento}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Email:
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese el email del cliente"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="email"
                  onChange={handleChange}
                  defaultValue={editado.email}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Telefono:
                  </span>
                </div>
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Ingrese el teléfono del cliente"
                  aria-label="Teléfono"
                  aria-describedby="basic-addon1"
                  name="telefono"
                  onChange={handleChange}
                  defaultValue={editado.telefono}
                />
              </div>
            </div>
            <div className="card-footer text-muted"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            appearance="primary"
            onClick={() => {
              onOk(formData);
            }}
          >
            Aceptar
          </Button>
          <Button appearance="subtle" onClick={onClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdClientes;
