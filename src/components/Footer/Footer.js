import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="layout-default__footer bg-dark text-white py-5 mt-5">
      <Container>
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-3 mb-4 mb-md-0">
            <Navbar.Brand as={Link} to="/" className="text-white">
              Quiz App
            </Navbar.Brand>
            <p className="mt-2">
              Quiz App là nền tảng để học tập, kiểm tra kiến thức và giải trí
              với các câu hỏi đa dạng. Tham gia ngay để trải nghiệm!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 mb-md-0">
  <h5>Liên kết nhanh</h5>
  <Nav className="flex-column text-left">
    <Nav.Link as={NavLink} to="/privacy" className="text-white">
      Privacy Policy
    </Nav.Link>
    <Nav.Link as={NavLink} to="/terms" className="text-white">
      Terms of Service
    </Nav.Link>
    <Nav.Link as={NavLink} to="/about" className="text-white">
      Về chúng tôi
    </Nav.Link>
    <Nav.Link as={NavLink} to="/contact" className="text-white">
      Liên hệ
    </Nav.Link>
  </Nav>
</div>


          {/* Social Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Theo dõi chúng tôi</h5>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Liên hệ</h5>
            <p>Email: contact@quizapp.com</p>
            <p>Điện thoại: +84 123 456 789</p>
            <p>Địa chỉ: 123 Đường ABC, TP. HCM</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 Quiz App. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
