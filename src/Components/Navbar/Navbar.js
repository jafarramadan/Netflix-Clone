import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavBar() {
  const navStyle = {
    backgroundColor: '#171717', 
    color: '#fff', 
    paddingTop: '10px', 
    paddingBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: '#fff', 
    transition: 'color 0.3s ease', 
  };

  return (
    <Navbar expand="lg" variant="dark" style={navStyle} fixed="top"> 
      <Container>
        <Navbar.Brand as={Link} to="/" style={linkStyle}>TRENDING MOVIES</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={linkStyle}>HOME</Nav.Link> 
            <Nav.Link as={Link} to="/favlist" style={linkStyle}>FAVORITE</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
