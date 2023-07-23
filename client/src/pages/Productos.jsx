import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import Formulario from "../components/Formulario";

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

  const resetFormData = () => {
    setFormData({
      id: null,
      nombre: "",
      precioCosto: null,
      precioVenta: null,
      stock: null,
      descripcion: "",
      fechaCompra: null,
    });
  };

  const add = () => {
    axios
      .post("http://localhost:3001/create/producto", {
        nombre: formData.nombre,
        precioCosto: formData.precioCosto,
        precioVenta: formData.precioVenta,
        stock: formData.stock,
        descripcion: formData.descripcion,
        fechaCompra: formData.fechaCompra,
      })
      .then(() => {
        alert("Producto registrado!");
        resetFormData();
      });
  };

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
    <div className="container">
      <Formulario
        titulo="CARGA DE PRODUCTOS"
        atributos={atributos}
        handleChange={handleChange}
        handleAdd={add}
      />
    </div>
  );
}

export default Productos;
