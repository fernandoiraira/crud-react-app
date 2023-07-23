import Buscador from "../components/Buscador";
import axios from "axios";

export default function ErrorPage() {
  const getPath = "http://localhost:3001/get/clientes";
  const delPath = "http://localhost:3001/delete/cliente";
  const updatePath = "http://localhost:3001/update/cliente";

  const dataEncabezado = [
    "ID",
    "Nombre",
    "Precio Costo",
    "Precio Venta",
    "Stock",
    "Descripcion",
    "Fecha de Compra",
  ];

  const handleGet = () => {};

  const handleUpdate = () => {};
  const handleDelete = () => {};

  return (
    <Buscador
      titulo="LISTA DE PRODUCTOS TEST"
      placeholder="Ingrese el nombre del producto test"
      encabezado={dataEncabezado}
      handleGet={handleGet}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
}
