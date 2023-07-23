import Buscador from "../components/Buscador";

export default function ErrorPage() {
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
    />
  );
}
