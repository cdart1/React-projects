import React from "react";
import {Image, Row } from "react-bootstrap";
import ThanksImg from "./img/thank-you.jpg";

const ThankYou = () => {

    return(
        <Row className="justify-content-center">
            <Image src={ThanksImg} style={{ width: "700px", height: "200px" }}></Image> 
        </Row>
    )
}

export default ThankYou;