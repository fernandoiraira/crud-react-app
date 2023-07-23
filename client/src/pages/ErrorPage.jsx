import Buscador from "../components/Buscador";

export default function ErrorPage() {
  const getPath = "http://localhost:3001/get/productos";
  const delPath = "http://localhost:3001/delete/producto";
  const updatePath = "http://localhost:3001/update/producto";

  const dataEncabezado = [
    "ID",
    "Nombre",
    "Precio Costo",
    "Precio Venta",
    "Stock",
    "Descripcion",
    "Fecha de Compra",
  ];

  return (
    <Buscador
      titulo="LISTA DE PRODUCTOS TEST"
      placeholder="Ingrese el nombre del producto test"
      encabezado={dataEncabezado}
      getPath={getPath}
      updatePath={updatePath}
      delPath={delPath}
    />
  );
}
