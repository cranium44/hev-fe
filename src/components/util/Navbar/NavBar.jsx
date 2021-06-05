import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="navbar-container">
                <Navbar bg="primary" variant="dark" expand="md" className="justify-content-between">
                    <Navbar.Brand href="/" className="nav-title">
                        Healthcare Excellence Ventures
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/order">Order</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;