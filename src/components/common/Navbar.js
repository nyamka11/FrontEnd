import React from "react";
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link  } from 'react-router-dom';

export const NavbarComponent = () => {

    let name = localStorage.getItem("name");

    // console.log(props);

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
            <div className="container">
                <Navbar.Brand href="/home">Hamamatsu-Ori</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/maps">Map</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>

                    <Nav>
                        <NavDropdown title={ name } id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
} 

export default NavbarComponent;