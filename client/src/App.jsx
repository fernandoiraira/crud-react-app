import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import Ventas from "./pages/Ventas";
import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import GetProductos from "./pages/GetProductos";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <div className="col-2 px-0 vh-100">
            <Sidebar />
          </div>
          <div className="col-10 px-0">
            <div className="container text-center">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/ventas" element={<Ventas />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/get/productos" element={<GetProductos />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/proveedores" element={<Proveedores />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
