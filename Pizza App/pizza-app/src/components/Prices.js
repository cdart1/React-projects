import React from "react";
import { Jumbotron, Table, Container, Row, Col, Button } from "react-bootstrap";
import VeganPizza from "./img/Vegan-Pizza2.jpg";

const Prices = () => {

    return(
        <Jumbotron
        style={{ color: "#FEEFB3", paddingBottom: "10px", paddingTop: "10px", backgroundColor: "rgba(128, 53, 0, 0.781)" }}
        >
            <h2 className="text-center" style={{ fontFamily: "monospace" }}>CHOOSE FROM OUR MOST POPULAR PIZZAS:</h2>
            <Container>
                <Row>
                    <Col>
                        <Table striped
                        style={{ color: "#FEEFB3", backgroundColor: "rgba(243, 32, 19, 0.781)" }}
                        >
                            <thead>
                                <tr>
                                <th></th>
                                <th>PIZZA</th>
                                <th>PRICE</th>
                                <th>ORDER NOW</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>LARGE CHEESE STUFFED CRUST PIZZA</td>
                                <td>$17.00</td>
                                <td><Button variant="warning">Place Order!</Button></td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>LARGE BUFFALO CHICKEN PIZZA</td>
                                <td>$14.00</td>
                                <td><Button variant="warning">Place Order!</Button></td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>EXTRA LARGE MEAT LOVERS PIZZA</td>
                                <td>$19.00</td>
                                <td><Button variant="warning">Place Order!</Button></td>
                                </tr>
                                <tr>
                                <td>4</td>
                                <td>MEDIUM VEGGIES LOVER PIZZA</td>
                                <td>$14.00</td>
                                <td><Button variant="warning">Place Order!</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    {/* <img src={VeganPizza} 
                        style={{ width: "350px", height: "250px" }}
                    /> */}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Prices;