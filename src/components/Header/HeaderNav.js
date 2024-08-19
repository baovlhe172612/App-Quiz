import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookies } from "../../helpers/cookie";
function HeaderNav() {
  const token = getCookies("token");
  const fullName = getCookies("fullName");
  const isLogin = useSelector((state) => state.loginReducer);
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Quiz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
              {token && (
                <>
                  <Nav.Link as={NavLink} to="/topic">
                    Topic
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/answers">
                    Answers
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="ms-auto">
              {token ? (
                <NavDropdown
                  title={`Hello, ${fullName}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/logout">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Button
                    as={NavLink}
                    to="/login"
                    variant="outline-light"
                    className="me-2"
                  >
                    Đăng nhập
                  </Button>
                  <Button as={NavLink} to="/register" variant="light">
                    Đăng kí
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
