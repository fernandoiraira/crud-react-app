import { Modal, Toggle, Button, ButtonToolbar, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function Modal_test({ titulo, onOk, onClose, isOpen }) {
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
                />
              </div>
            </div>
            <div className="card-footer text-muted"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={onOk}>
            Ok
          </Button>
          <Button appearance="subtle" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_test;
