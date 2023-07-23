import Formulario from "../components/Formulario";
import { useState } from "react";
import axios from "axios";

function Clientes() {
  const dataFormulario = [
    {
      label: "Nombre:",
      placeholder: "Ingrese el nombre del cliente",
      name: "nombre",
      type: "text",
    },
    {
      label: "Apellido:",
      placeholder: "Ingrese el apellido del cliente",
      name: "apellido",
      type: "text",
    },
    {
      label: "Fecha de nacimiento",
      placeholder: "Ingrese la fecha de nacimiento",
      name: "fechaNacimiento",
      type: "date",
    },
    {
      label: "Email",
      placeholder: "Ingrese el mail del cliente",
      name: "email",
      type: "email",
    },
    {
      label: "Telefono",
      placeholder: "Ingrese el telefono del cliente",
      name: "telefono",
      type: "tel",
    },
    {
      label: "Fecha de registro",
      placeholder: "Ingrese la fecha de registro",
      name: "fechaRegistro",
      type: "date",
    },
  ];

  const [inputData, setInputData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: null,
    email: "",
    telefono: null,
    fechaRegistro: null,
  });

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const resetInputData = () => {
    setInputData({
      nombre: "",
      apellido: "",
      fechaNacimiento: null,
      email: "",
      telefono: null,
      fechaRegistro: null,
    });
  };

  const handleAdd = () => {
    const nombre = inputData.nombre;
    const apellido = inputData.apellido;
    const fechaNacimiento = inputData.fechaNacimiento;
    const email = inputData.email;
    const telefono = inputData.telefono;
    const fechaRegistro = inputData.fechaRegistro;

    axios
      .post(
        "INSERT INTO clientes (nombre,apellido,fecha_nacimiento,email,telefono,fecha_registro) VALUES (?,?,?,?,?,?,)",
        [nombre, apellido, fechaNacimiento, email, telefono, fechaRegistro]
      )
      .then(
        alert(() => {
          "Cliente registrado con exito!";
          resetInputData();
        })
      );
  };

  return (
    <Formulario
      titulo="CARGA DE CLIENTES"
      atributos={dataFormulario}
      handleChange={handleChange}
      handleAdd={handleAdd}
    />
  );
}

export default Clientes;
