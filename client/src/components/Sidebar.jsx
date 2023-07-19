import "./Sidebar.css";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="min-vh-100 bg-dark">
          <div className="my-3">
            <Link to="/" className="text-decoration-none">
              <h2 className="text-white mx-4 text-decoration-none">BRAND</h2>
            </Link>
          </div>

          <ul>
            <i>
              <Link to="/productos" className="nav-link px-2 text-white">
                <i className="bi-box-seam">
                  <span className="ms-3 d-none d-sm-inline text-white">
                    Productos
                  </span>
                </i>
              </Link>
            </i>

            <i>
              <Link to="/ventas" className="nav-link px-2 text-white">
                <i className="bi-coin">
                  <span className="ms-3 d-none d-sm-inline text-white">
                    Ventas
                  </span>
                </i>
              </Link>
            </i>

            <i>
              <Link to="/clientes" className="nav-link px-2 text-white">
                <i className="bi-person">
                  <span className="ms-3 d-none d-sm-inline text-white">
                    Clientes
                  </span>
                </i>
              </Link>
            </i>

            <i>
              <Link to="/proveedores" className="nav-link px-2 text-white">
                <i className="bi-truck">
                  <span className="ms-3 d-none d-sm-inline text-white">
                    Proveedores
                  </span>
                </i>
              </Link>
            </i>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
