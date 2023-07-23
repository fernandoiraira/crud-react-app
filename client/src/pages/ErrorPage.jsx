import Formulario from "../components/Formulario";

export default function ErrorPage() {
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

  return <Formulario titulo="CARGA DE CLIENTES" atributos={dataFormulario} />;
}
