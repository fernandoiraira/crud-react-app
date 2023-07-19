import "./Sidebar.css";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  {
    /* <div className="container-fluid">
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
    </div> */
  }
}

export default Sidebar;
