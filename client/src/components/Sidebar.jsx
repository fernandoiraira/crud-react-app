import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/productos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="box">Productos</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/ventas" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Ventas</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/clientes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Clientes</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/proveedores" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="truck">Proveedores</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
