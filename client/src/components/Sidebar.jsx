import "./Sidebar.css";
import { Link } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
