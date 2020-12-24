import React from "react";
import { Nav } from 'react-bootstrap';

const Navbar = () => {

    return(
        <Nav className="justify-content-center" activeKey="/home"
         sticky="top" style={{ backgroundColor: "rgba(128, 53, 0, 0.781)" }}
        >
            <Nav.Item>
                <Nav.Link style={{ color: "#FEEFB3"}} href="/home">PIZZA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#FEEFB3"}} eventKey="prices">PRICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#FEEFB3"}} eventKey="menu">MENU</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;