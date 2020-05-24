
// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Nav, Container, Image, Row, Col} from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'

import Logo from "../images/logo.png"

export default function Navigation ({children}) {

  return (
    <Container fluid>
      <Row>
        <Col className="col-12 col-lg-4 col-xl-3 bg-dark">
          <Navbar bg="dark" expand="lg" variant="dark" className="align-items-start flex-lg-column flex-md-row">
            <Navbar.Brand href="/" >
              <Image src={Logo} style={{height: "30px", marginRight: "20px"}}/>David Jaimes
            </Navbar.Brand>
 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="/github"><FaGithub size={25}/> GitHub</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>

        <Col>
          <Container className="col-xl-10 pt-5 pb-5">
            {children}
          </Container>
        </Col>

      </Row>
    </Container>
  )}