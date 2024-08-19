import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/Header/HeaderNav";

function LayoutDefault() {
  return (
    <div className="layout-default">
      <HeaderNav />

      <main className="layout-default__main">
        <Container className="py-4">
          <Outlet />
        </Container>
      </main>

      
      <Footer />
    </div>
  );
}

export default LayoutDefault;
