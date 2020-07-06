// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FaGithub} from 'react-icons/fa'


export default function Navigation() {
	return (
		<Navbar collapseOnSelect expand="lg" className="shadow-sm">
			<Navbar.Brand href="/"><b>David Jaimes</b></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/documentation">Documentation</Nav.Link>
					<NavDropdown title="Tutorials" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Linear Regression</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Eclipsing Binaries</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">JSkyCalc</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">macOS Configuration</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#deets"><FaGithub size={25}/> Source Code</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}