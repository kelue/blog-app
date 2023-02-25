import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav, Navbar } from 'react-bootstrap'

import logo from '../../assets/logo.png'

const Navigation = () => {
  return (
    <Navbar bg="light" collapseOnSelect expand="lg" variant='light'>
    <Container fluid>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="My blog logo"
        />{' '}
        My Blog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log in </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default Navigation