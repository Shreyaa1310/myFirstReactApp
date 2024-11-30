import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBarComp() {
  const navigate = useNavigate();
  const redirectToSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <Navbar expand="lg" className="bg-color">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="link">NavBar</Nav.Link>
            <Nav.Link className="link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="/tourism">
              Tourism
            </Nav.Link>
            <Nav.Link className="link" href="/food">
              Food
            </Nav.Link>
            <Nav.Link className="link" href="/festival">
              Festivals
            </Nav.Link>
            <Nav.Link className="link" href="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link className="link" href="/aboutus">
              About Us
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <div style={{ float: "right" }}>
            <Button
              style={{ borderRadius: "50px" }}
              variant="light"
              onClick={redirectToSignUp}
            >
              Login / Sign up
            </Button>{" "}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
