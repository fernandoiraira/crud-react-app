import { Modal, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState, useEffect } from "react";

function Modal_test({ onOk, onClose, isOpen, editado }) {
  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
    precio_costo: null,
    precio_venta: null,
    stock: null,
    descripcion: "",
    fecha_compra: null,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  useEffect(() => {
    setFormData({
      id: editado.id,
      nombre: editado.nombre,
      precioCosto: editado.precio_costo,
      precioVenta: editado.precio_venta,
      stock: editado.stock,
      descripcion: editado.descripcion,
      fecha_compra: editado.fecha_compra,
    });
  }, [editado]);

  const atributos = [
    {
      label: "Nombre",
      placeholder: "Ingrese el nombre del producto",
      name: "nombre",
      type: "text",
    },
    {
      label: "Precio Costo",
      placeholder: "Ingrese el precio costo del producto",
      name: "precioCosto",
      type: "number",
    },
    {
      label: "Precio Venta",
      placeholder: "Ingrese el precio venta del producto",
      name: "precioVenta",
      type: "number",
    },
    {
      label: "Stock",
      placeholder: "Ingrese el stock del producto",
      name: "stock",
      type: "number",
    },
    {
      label: "Descripcion",
      placeholder: "Ingrese la descripcion del producto",
      name: "descripcion",
      type: "text",
    },
    {
      label: "Fecha Compra",
      placeholder: "Ingrese la fecha de compra del producto",
      name: "fechaCompra",
      type: "date",
    },
  ];

  return (
    <>
      <Modal overflow={true} open={isOpen} backdrop={true}>
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
                  defaultValue={editado.nombre}
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
                  onChange={handleChange}
                  defaultValue={editado.precio_costo}
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
                  onChange={handleChange}
                  defaultValue={editado.precio_venta}
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
                  onChange={handleChange}
                  defaultValue={editado.stock}
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
                  onChange={handleChange}
                  defaultValue={editado.descripcion}
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
              console.log("MODAL: " + formData);
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

export default Modal_test;
