import React from "react";
import { Nav } from 'react-bootstrap';

const Navbar = () => {

    return(
        <Nav className="justify-content-center" activeKey="/home"
         sticky="top" style={{ backgroundColor: "#DC3545" }}
        >
            <Nav.Item>
                <Nav.Link style={{ color: "#ffc107" }} href="/home">PIZZA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffc107" }} eventKey="prices">PRICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffc107" }} eventKey="menu">MENU</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;