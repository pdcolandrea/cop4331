import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const TopNav = () => {
  return (
            <Navbar bg="light" expand="lg" fixed='top'>
              <Navbar.Brand href="#home">Banking Application</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/account">Account</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/logout" className="justify-content-end">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>)

}

export default TopNav;