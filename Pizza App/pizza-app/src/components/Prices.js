import React from "react";
import { Jumbotron, Table, Container, Row, Col, Button } from "react-bootstrap";
import VeganPizza from "./img/Vegan-Pizza2.jpg";

const Prices = ({ setSelectedSize, setSelectedSizeCost, 
                setSelectedCrust, setSelectedCrustCost,
                setSelectedSauce, setSelectedMeatCost,
                allMeat, setAllMeat, allVeggies, 
                setAllVeggies, setSelectedVegCost,
                clearAll, buttonState, setButtonState
             }) => {

    const PopularPizza1 = () => {
        clearAll();
        setSelectedSize("Large");
        setSelectedSizeCost(14);
        setSelectedCrust("Cheese Stuffed Crust");
        setSelectedCrustCost(3);
        setButtonState(true);
    };

    const PopularPizza2 = () => {
        clearAll();
        setSelectedSize("Large");
        setSelectedSizeCost(14);
        setSelectedSauce("White Sauce")
        setAllMeat(allMeat.map((item) => {
            if (item.meatName === "Buffalo Chicken"){
                return {
                    ...item, isChecked: !item.isChecked
                }
            }
            return item;
        }));
        setSelectedMeatCost(0);
        setButtonState(true);
    };

    const PopularPizza3 = () => {
        clearAll();
        setSelectedSize("Extra Large");
        setSelectedSizeCost(16);
        setAllMeat(allMeat.map((item) => {
            if (item.meatName === "Pepperoni" || item.meatName === "Sausage" || item.meatName === "Canadian Bacon" || item.meatName === "Chicken"){
                return {
                    ...item, isChecked: !item.isChecked
                }
            }
            return item;
        }));
        setSelectedMeatCost(3);
        setButtonState(true);
    };

    const PopularPizza4 = () => {
        clearAll();
        setSelectedSize("Medium");
        setSelectedSizeCost(10);
        setAllVeggies(allVeggies.map((item) => {
            if (item.vegName === "Tomatoes" || item.vegName === "Onions" || item.vegName === "Olives" || item.vegName === "Green Peppers" || 
                item.vegName === "Mushrooms" || item.vegName === "Spinach"){
                return {
                    ...item, isChecked: !item.isChecked
                }
            }
            return item;
        }));
        setSelectedVegCost(5);
        setButtonState(true);
    };

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
                                <td><Button variant="warning" disabled={buttonState} onClick={PopularPizza1}>Select</Button></td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>LARGE BUFFALO CHICKEN PIZZA</td>
                                <td>$14.00</td>
                                <td><Button variant="warning" disabled={buttonState} onClick={PopularPizza2}>Select</Button></td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>EXTRA LARGE MEAT LOVERS PIZZA</td>
                                <td>$19.00</td>
                                <td><Button variant="warning" disabled={buttonState} onClick={PopularPizza3}>Select</Button></td>
                                </tr>
                                <tr>
                                <td>4</td>
                                <td>MEDIUM VEGGIES LOVER PIZZA</td>
                                <td>$15.00</td>
                                <td><Button variant="warning" disabled={buttonState} onClick={PopularPizza4}>Select</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col><Button variant="danger" onClick={clearAll}>Reset</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Prices;