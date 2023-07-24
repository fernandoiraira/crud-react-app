import Buscador from "../components/Buscador";

function GetClientes() {
  const getPath = "http://localhost:3001/get/clientes";
  const delPath = "http://localhost:3001/delete/cliente";
  const updatePath = "http://localhost:3001/update/cliente";

  const dataEncabezado = [
    "ID",
    "Nombre",
    "Apellido",
    "Fecha Nacimiento",
    "Email",
    "Teléfono",
    "Fecha Registro",
  ];

  return (
    <Buscador
      titulo="BUSCAR CLIENTES"
      placeholder="Ingrese el nombre del cliente"
      getPath={getPath}
      delPath={delPath}
      updatePath={updatePath}
      encabezado={dataEncabezado}
    />
  );
}
export default GetClientes;
