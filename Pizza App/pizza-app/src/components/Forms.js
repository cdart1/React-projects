import React from "react";
import { Form } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Receipt from "./Receipt";

const PizzaForm = ({ selectedSize, setSelectedSize, 
                    selectedSizeCost, setSelectedSizeCost, 
                    selectedCrust, setSelectedCrust,
                    selectedCrustCost, setSelectedCrustCost, 
                    orderPlaced, setOrderPlaced }) => {

    // Sets selected size state.
    const selectedSizeHandler = (e) => {
        setSelectedSize(e.target.value);
    }

    //   Sets selected crust state.
    const selectedCrustHandler = (e) => {
        setSelectedCrust(e.target.value)
    }

    // set costs of each selected item 
    const getCosts = (e) => {
        const sizeCosts = {
            "Personal": 6, 
            "Medium": 10,
            "Large": 14,
            "Extra Large": 16,
          };
          const crustCosts = {
            "Plain Crust": 0,
            "Garlic Butter Crust": 2,
            "Cheese Stuffed Crust": 3,
            "Spicy Crust": 1,
            "House Special Crust": 0,
        };
        e.preventDefault();
        setSelectedSizeCost(sizeCosts[selectedSize])
        setSelectedCrustCost(crustCosts[selectedCrust])
        setOrderPlaced(true);
    };

    let receipt;
    if (orderPlaced) {
        receipt = <Receipt 
        selectedSize={selectedSize}
        selectedSizeCost={selectedSizeCost}
        selectedCrust={selectedCrust}
        selectedCrustCost={selectedCrustCost}
        />
    }

    return (
        <div>
             <Form>
            <CardGroup>
                {/* Size Options */}
                <Card
                    bg='warning'
                    text='danger'
                >
                    <Card.Header>SLICE</Card.Header>
                    <Card.Body>
                        <Card.Title>Select a size:</Card.Title>
                        <Card.Text>- Choose one</Card.Text>
                        {/* Size options radio */}
                        <Form.Check
                            type="radio"
                            label="Personal"
                            name="size"
                            value="Personal"
                            checked={selectedSize === "Personal"}
                            onChange={selectedSizeHandler} 
                        />
                        <Form.Check
                            type="radio"
                            label="Medium"
                            name="size"
                            value="Medium"
                            checked={selectedSize === "Medium"}
                            onChange={selectedSizeHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Large"
                            name="size"
                            value="Large"
                            checked={selectedSize === "Large"}
                            onChange={selectedSizeHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Extra Large"
                            name="size"
                            value="Extra Large"
                            checked={selectedSize === "Extra Large"}
                            onChange={selectedSizeHandler}
                        />
                    </Card.Body>
                </Card>
                {/* Crust Options */}
                <Card
                    bg='warning'
                    text='danger'
                >
                    <Card.Header>CRUST</Card.Header>
                    <Card.Body>
                        <Card.Title>Select a crust:</Card.Title>
                        <Card.Text>- Choose one</Card.Text>
                        {/* Size options radio */}
                        <Form.Check
                            type="radio"
                            label="Plain Crust"
                            name="crust"
                            value="Plain Crust"
                            checked={selectedCrust === "Plain Crust"}
                            onChange={selectedCrustHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Garlic Butter Crust"
                            name="crust"
                            value="Garlic Butter Crust"
                            checked={selectedCrust === "Garlic Butter Crust"}
                            onChange={selectedCrustHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Cheese Stuffed Crust"
                            name="crust"
                            value="Cheese Stuffed Crust"
                            checked={selectedCrust === "Cheese Stuffed Crust"}
                            onChange={selectedCrustHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Spicy Crust"
                            name="crust"
                            value="Spicy Crust"
                            checked={selectedCrust === "Spicy Crust"}
                            onChange={selectedCrustHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="House Special Crust"
                            name="crust"
                            value="House Special Crust"
                            checked={selectedCrust === "House Special Crust"}
                            onChange={selectedCrustHandler}
                        />
                    </Card.Body>
                </Card>
            </CardGroup>
        </Form>
        <Button type="submit" onClick={getCosts}>Submit</Button>
        <div>
            {receipt}
        </div>
    </div>
    );
};

export default PizzaForm;