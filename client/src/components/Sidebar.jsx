import { Sidenav, Nav } from "rsuite";
import { useState } from "react";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import CouponIcon from "@rsuite/icons/Coupon";
import "rsuite/dist/rsuite.min.css";
import TrendIcon from "@rsuite/icons/Trend";
import PeoplesIcon from "@rsuite/icons/Peoples";
import { Link } from "react-router-dom";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");
  return (
    <div style={{ width: 240 }}>
      <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />} as={Link} to="/">
              GESTIÓN
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="3"
              title="Productos"
              icon={<CouponIcon />}
            >
              <Nav.Item eventKey="3-1" as={Link} to="/productos">
                Cargar Producto
              </Nav.Item>
              <Nav.Item eventKey="3-2" as={Link} to="/get/productos">
                Consultar Productos
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Clientes"
              icon={<PeoplesIcon />}
            >
              <Nav.Item eventKey="4-1">Cargar Cliente</Nav.Item>
              <Nav.Item eventKey="4-2">Consultar Clientes</Nav.Item>
              {/* <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu> */}
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="5"
              title="Ventas"
              icon={<TrendIcon />}
            >
              <Nav.Item eventKey="5-1">Cargar Venta</Nav.Item>
              <Nav.Item eventKey="5-2">Consultar Ventas</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        />
      </Sidenav>
    </div>
  );
}

export default Sidebar;
