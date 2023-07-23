import Formulario from "../components/Formulario";

export default function ErrorPage() {
  const dataFormulario = [
    {
      label: "Nombre:",
      placeholder: "Ingrese el nombre del producto",
      name: "nombre",
      type: "text",
    },
    {
      label: "Precio costo:",
      placeholder: "Ingrese el precio costo",
      name: "precioCosto",
      type: "number",
    },
    {
      label: "Precio venta:",
      placeholder: "Ingrese el precio venta",
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
      placeholder: "Ingrese una descripcion del producto",
      name: "descripcion",
      type: "text",
    },
  ];

  return <Formulario />;
}
