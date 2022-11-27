import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "../../../images/logo.png"

const Header = () => {
    
    return (
        <>
           <Navbar bg="primary" variant="dark">
        <Container>
        <img src={logo} className='me-3' style={{height:"30px"}} alt="" /> 
          <Navbar.Brand href="home">GCS-Center</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
            <Nav.Link href="Expert">Expert</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;