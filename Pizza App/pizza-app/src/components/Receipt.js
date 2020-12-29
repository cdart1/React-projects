import React from "react";
import ThankYou from "./img/thank-you.jpg";
import { Jumbotron, Container } from "react-bootstrap";

const Receipt = ({ selectedSize, selectedSizeCost,
                    selectedCrust, selectedCrustCost,
                    selectedSauce,  
                    selectedCheese, selectedCheeseCost,
                    selectedMeat, meatStr,
                    selectedVeggies, vegStr, 
                    orderTotal
                }) => {

    
    return (
        <Jumbotron className="text-center"
            style={{ color: "#FEEFB3", paddingBottom: "10px", paddingTop: "10px", backgroundColor: "rgba(128, 53, 0, 0.781)" }}>
                <Container>
                    <h3>You Ordered:</h3>
                    <p>Size: {selectedSize} (${selectedSizeCost})</p>
                    <p>Crust: {selectedCrust} 
                        {selectedCrustCost !== 0 ? " (+$" + selectedCrustCost + ")": " (no additional cost)"}
                    </p>
                    <p>Sauce: {selectedSauce} (no additional cost)</p>
                    <p>Cheese: {selectedCheese}
                        {selectedCheeseCost !== 0 ? " (+$" + selectedCheeseCost + ")": " (no additional cost)"}
                    </p>
                    {selectedMeat.length !== 0 ? <p>Meat: {meatStr}</p> : null}
                    {selectedVeggies.length !== 0 ? <p>Veggies: {vegStr}</p> : null}
                    <p>-----------------------------------------------</p>
                </Container>
                <Container className="total-price">
                    <h3>Total: ${orderTotal}.00</h3>
                    <p></p>
                </Container>
            </Jumbotron>
    )
}

export default Receipt;