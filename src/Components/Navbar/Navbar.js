import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px', transition: 'color 0.3s ease' }}>HOME</Link>
        <Link to="/favlist" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px', transition: 'color 0.3s ease' }}>FAVORITE</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
