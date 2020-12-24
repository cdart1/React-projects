import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const Jumbo = () => {

    return(
        <Jumbotron className="text-center"
        style={{ backgroundColor: "rgba(128, 53, 0, 0.781)", marginTop: "20px" }}>
            <Row>
                <Col></Col>
                <Col xs={6}>
                <h1 style={{ color: "#FEEFB3", fontFamily: "monospace", fontSize: "50px" }}>FOR THE <span style={{ color: "#F32013" }}>LOVE</span> OF PIZZA...</h1>
                <h3 style={{ color: "#FEEFB3", float: "right", fontFamily: "monospace" }}>YOU HAVE TO TASTE IT!</h3>
                </Col>
                <Col>
                    {/* <img src={VeganPizza} 
                    style={{ width: "350px", height: "250px" }}
                    /> */}
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Jumbo;