import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.module.css";
import Button from "react-bootstrap/Button";
import toothLogo from "../assets/image/toothLogo.png";

export default function NavBar() {
  return (
    <Navbar expand="lg" className={styles.NavBar}>
      <Container className={styles.navContainer}>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={toothLogo}
            width="60"
            height="60"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.navLinks}`}>
            <Nav.Link className={styles.link} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.link} href="#about">
              About
            </Nav.Link>
            <Nav.Link className={styles.link} href="#services">
              Services
            </Nav.Link>
            <Nav.Link className={styles.link} href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className={styles.link} href="#testimonials">
              Testimonials
            </Nav.Link>
            <Button className={styles.navButton}>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
