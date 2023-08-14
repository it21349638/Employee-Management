import {Navbar,Nav,Container} from "react-bootstrap";
import logo from "../images/C&C Logo.png";
import cart from "../images/cart.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="basic-Navbar-Nav" />
        <Navbar.Collapse id="basic-Navbar-Nav">
          
            <Link to="#home">
            <img src={logo} alt="logo" width={150} height={50}></img>
            </Link>
            <Nav className="justify-content" style={{ width: "100%" }}>
            <Nav.Link to="">Profile</Nav.Link>
            <Nav.Link to="/showsal">Salary</Nav.Link>
            <Nav.Link to="/showemp">Employee</Nav.Link>
            <Nav.Link to="/showatt">Attendance</Nav.Link>
            <Nav.Link to="#home">About</Nav.Link>
            </Nav>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link to ="/order">Order Now</Nav.Link>
            <Nav.Link to="/cart"><img src={cart} alt="cart" width={35} height={35}></img></Nav.Link>
            <Nav.Link to ="/login">Log in</Nav.Link>
            <Nav.Link to="/signup">Sign Up</Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;

