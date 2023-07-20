import { Modal, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";

function Modal_test({ titulo, onOk, onClose, isOpen, editado }) {
  const [formData, setFormData] = useState({
    nombre: "",
    precio_costo: null,
    precio_venta: null,
    stock: null,
    descripcion: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Modal overflow={true} open={isOpen} backdrop={true}>
        <Modal.Header>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card text-center">
            <div className="card-header">Editar Producto</div>
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
                  name="nombre"
                  onChange={handleChange}
                  value={editado.nombre}
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
                  name="precioCosto"
                  value={editado.precio_costo}
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
                  name="precioVenta"
                  value={editado.precio_venta}
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
                  name="stock"
                  value={editado.stock}
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
                  name="descripcion"
                  value={editado.descripcion}
                />
              </div>
            </div>
            <div className="card-footer text-muted"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={onOk}>
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

export default Modal_test;
