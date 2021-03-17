import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Navbar.Brand href="/">Healthcare Excellence Ventures</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
