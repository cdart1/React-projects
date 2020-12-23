import { render } from "@testing-library/react";
import React, {useEffect} from "react";
import { Col, Form, Row, Container } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const PizzaForm = ({ selectedSize, setSelectedSize, 
                    selectedSizeCost, setSelectedSizeCost, 

                    selectedCrust, setSelectedCrust,
                    selectedCrustCost, setSelectedCrustCost, 

                    selectedSauce, setSelectedSauce,

                    selectedCheese, setSelectedCheese,
                    selectedCheeseCost, setSelectedCheeseCost,

                    allMeat, setAllMeat,
                    selectedMeat, setSelectedMeat,
                    selectedMeatCost, setSelectedMeatCost,
                    meatStr, setMeatStr,

                    allVeggies, setAllVeggies,
                    selectedVeggies, setSelectedVeggies,
                    selectedVegCost, setSelectedVegCost,
                    vegStr, setVegStr,

                    orderPlaced, setOrderPlaced,
                    orderTotal, setOrderTotal}) => {

    // Sets selected size state.
    const selectedSizeHandler = (e) => {
        const sizeCosts = {
            "Personal": 6, 
            "Medium": 10,
            "Large": 14,
            "Extra Large": 16,
        };
        setSelectedSize(e.target.value);
        setSelectedSizeCost(sizeCosts[e.target.value]);
    }

    //   Sets selected crust state.
    const selectedCrustHandler = (e) => {
        const crustCosts = {
            "Plain Crust": 0,
            "Garlic Butter Crust": 2,
            "Cheese Stuffed Crust": 3,
            "Spicy Crust": 1,
            "House Special Crust": 0,
        };
        setSelectedCrust(e.target.value);
        setSelectedCrustCost(crustCosts[e.target.value]);
    }

    // Sets selected sauce state.
    const selectedSauceHandler = (e) => {
        const sauceCosts = {
            "Marinara Sauce": 0,
            "White Sauce": 0,
            "Barbeque Sauce": 0,
            "No Sauce": 0,
        };
        setSelectedSauce(e.target.value);
    }

    // Sets selected cheese state.
    const selectedCheeseHandler = (e) => {
        const cheeseCosts = {
            "Regular": 0,
            "No Cheese": 0,
            "Extra Cheese": 3,
            "Vegan Cheeze": 2,
        };
        setSelectedCheese(e.target.value);
        setSelectedCheeseCost(cheeseCosts[e.target.value]);
    }

    // Meat
    const selectedMeatHandler = (e) => {
        setAllMeat(allMeat.map((item) => {
            if (item.meatName === e.target.value){
                return {
                    ...item, isChecked: !item.isChecked
                }
            }
            return item;
        }));
    }

    // Add to or remove meat from list.
    const createCheckedMeatList = () => {
        setSelectedMeat(allMeat.filter((el) => el.isChecked === true));
    }

    const addUpMeatCost = () => {
        if (selectedMeat.length !== 0) {
            setSelectedMeatCost(selectedMeat.length - 1);
        }
    }


    // Veggies
    const selectedVeggiesHandler = (e) => {
        setAllVeggies(allVeggies.map((item) => {
            if (item.vegName === e.target.value) {
                return {
                    /*With spreading, you can change a property non-destructively: 
                    You make a copy of the object where the property has a different value. */
                    ...item, isChecked: !item.isChecked
                }
            }
            return item;
        }));
    }

    useEffect(() => {
        createCheckedVegList();
        createCheckedMeatList();
    }, [allVeggies, allMeat]);

    useEffect(() => {
        addUpVegCost();
        addUpMeatCost();
    }, [selectedVeggies, selectedMeat]);

    // Add to or remove veggies from list.
    const createCheckedVegList = () => {
        setSelectedVeggies(allVeggies.filter((el) => el.isChecked === true));
    }

    const addUpVegCost = () => {
        if (selectedVeggies.length !== 0) {
            setSelectedVegCost(selectedVeggies.length - 1);
        }
    }

    //  useEffect is constantly listening for state changes, and it runs whenever it does change.
    useEffect(() => {
        orderTotalHandler();
    }, [selectedSizeCost, selectedCrustCost, selectedCheeseCost, selectedMeatCost, selectedVegCost]);

    const orderTotalHandler = () => {
        let total = selectedSizeCost + selectedCrustCost + 
        selectedCheeseCost + selectedMeatCost + selectedVegCost;
        setOrderTotal(total);
    }

    const getCosts = (e) => {
        setOrderPlaced(true);
        meatReceipt();
        vegReceipt();
    };

    const meatReceipt = () => {
        let meatConcat = "";
        for (let i = 0; i < selectedMeat.length; i++){
            if (i === 0 && selectedMeat.length !== 1){
                meatConcat = meatConcat + selectedMeat[i].meatName + " (no additional cost), ";
            }
            else if (i === 0 && selectedMeat.length === 1) {
                meatConcat = meatConcat + selectedMeat[i].meatName + " (no additional cost)";
            }
            else if (i >= 1 && i < selectedMeat.length - 1) {
                meatConcat = meatConcat + selectedMeat[i].meatName + " (+$1), ";
            }
            else if (i === selectedMeat.length - 1){
                meatConcat = meatConcat + selectedMeat[i].meatName + " (+$1)";
            }
        }
        setMeatStr(meatConcat);
    };

    const vegReceipt = () => {
        let vegConcat = "";
        for (let i = 0; i < selectedVeggies.length; i++){
            if (i === 0 && selectedVeggies.length !== 1) {
                vegConcat = vegConcat + selectedVeggies[i].vegName + " (no additional cost), ";
            }
            else if (i === 0 && selectedVeggies.length === 1) {
                vegConcat = vegConcat + selectedVeggies[i].vegName + " (no additional cost)";
            }
            else if (i >= 1 && i < selectedVeggies.length - 1) {
                vegConcat = vegConcat + selectedVeggies[i].vegName + " (+$1), ";
            }
            else if (i === selectedVeggies.length - 1){
                vegConcat = vegConcat + selectedVeggies[i].vegName + " (+$1)";
            }
        }
        setVegStr(vegConcat);
    };

    const receipt = () => {
        if (orderPlaced) {
            render (
                <Container>
                    <div className="show-order">
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
                    </div>
                    <div className="total-price">
                        <h3>Total: ${orderTotal}.00</h3>
                        <p></p>
                    </div>
                </Container>
            )
        }
    };
    useEffect(() => {
        receipt();
    }, [orderPlaced]);
        
    const clearAll = () => {
        window.location.reload(true);
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
                    <Card.Footer className="text-danger"><h4>${selectedSizeCost}.00</h4></Card.Footer>
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
                        {/* Crust options radio */}
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
                    <Card.Footer className="text-danger"><h4>${selectedCrustCost}.00</h4></Card.Footer>
                </Card>
                {/* Sauce Options */}
                <Card
                    bg='warning'
                    text='danger'
                >
                <Card.Header>SAUCE</Card.Header>
                    <Card.Body>
                        <Card.Title>Select a sauce:</Card.Title>
                        <Card.Text>- Choose one</Card.Text>
                        {/* Sauce options radio */}
                        <Form.Check
                            type="radio"
                            label="Marinara Sauce"
                            name="sauce"
                            value="Marinara Sauce"
                            checked={selectedSauce === "Marinara Sauce"}
                            onChange={selectedSauceHandler} 
                        />
                        <Form.Check
                            type="radio"
                            label="White Sauce"
                            name="sauce"
                            value="White Sauce"
                            checked={selectedSauce === "White Sauce"}
                            onChange={selectedSauceHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Barbeque Sauce"
                            name="sauce"
                            value="Barbeque Sauce"
                            checked={selectedSauce === "Barbeque Sauce"}
                            onChange={selectedSauceHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="No Sauce"
                            name="sauce"
                            value="No Sauce"
                            checked={selectedSauce === "No Sauce"}
                            onChange={selectedSauceHandler}
                        />
                    </Card.Body>
                    <Card.Footer className="text-danger"><h4>*No additional cost</h4></Card.Footer>
                </Card>
                {/* Cheese Options */}
                <Card
                    bg='warning'
                    text='danger'
                >
                <Card.Header>CHEESE</Card.Header>
                    <Card.Body>
                        <Card.Title>Select a cheese:</Card.Title>
                        <Card.Text>- Choose one</Card.Text>
                        {/* Sauce options radio */}
                        <Form.Check
                            type="radio"
                            label="Regular"
                            name="cheese"
                            value="Regular"
                            checked={selectedCheese === "Regular"}
                            onChange={selectedCheeseHandler} 
                        />
                        <Form.Check
                            type="radio"
                            label="No Cheese"
                            name="cheese"
                            value="No Cheese"
                            checked={selectedCheese === "No Cheese"}
                            onChange={selectedCheeseHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Extra Cheese"
                            name="cheese"
                            value="Extra Cheese"
                            checked={selectedCheese === "Extra Cheese"}
                            onChange={selectedCheeseHandler}
                        />
                        <Form.Check
                            type="radio"
                            label="Vegan Cheeze"
                            name="cheese"
                            value="Vegan Cheeze"
                            checked={selectedCheese === "Vegan Cheeze"}
                            onChange={selectedCheeseHandler}
                        />
                    </Card.Body>
                    <Card.Footer className="text-danger"><h4>${selectedCheeseCost}.00</h4></Card.Footer>
                </Card>
                {/* Meat Options */}
                <Card
                    bg='warning'
                    text='danger'
                >
                    <Card.Header>MEAT</Card.Header>
                    <Card.Body>
                        <Card.Title>Select meat:</Card.Title>
                        <Card.Text>- You can choose more than one</Card.Text>
                        {/* Veg options checkbox */}
                        <Form.Check
                            type="checkbox"
                            label="Pepperoni"
                            name="meat"
                            value="Pepperoni"
                            checked={allMeat[0].isChecked}
                            onClick={selectedMeatHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Sausage"
                            name="meat"
                            value="Sausage"
                            checked={allMeat[1].isChecked}
                            onClick={selectedMeatHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Canadian Bacon"
                            name="meat"
                            value="Canadian Bacon"
                            checked={allMeat[2].isChecked}
                            onClick={selectedMeatHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Chicken"
                            name="meat"
                            value="Chicken"
                            checked={allMeat[3].isChecked}
                            onClick={selectedMeatHandler}
                        />
                         <Form.Check
                            type="checkbox"
                            label="Buffalo Chicken"
                            name="meat"
                            value="Buffalo Chicken"
                            checked={allMeat[4].isChecked}
                            onClick={selectedMeatHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Vegan Chick'n"
                            name="meat"
                            value="Vegan Chick'n"
                            checked={allMeat[5].isChecked}
                            onClick={selectedMeatHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Vegan Sausage"
                            name="meat"
                            value="Vegan Sausage"
                            checked={allMeat[6].isChecked}
                            onClick={selectedMeatHandler}
                        />
                    </Card.Body>
                    <Card.Footer className="text-danger"><h4>${selectedMeatCost}.00</h4></Card.Footer>
                </Card>
                {/* Veggie Options */}
                <Card
                    bg='warning'
                    text='danger'
                >
                    <Card.Header>VEGGIES</Card.Header>
                    <Card.Body>
                        <Card.Title>Select veggies:</Card.Title>
                        <Card.Text>- You can choose more than one</Card.Text>
                        {/* Veg options checkbox */}
                        <Form.Check
                            type="checkbox"
                            label="Tomatoes"
                            name="veggies"
                            value="Tomatoes"
                            checked={allVeggies[0].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Onions"
                            name="veggies"
                            value="Onions"
                            checked={allVeggies[1].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Olives"
                            name="veggies"
                            value="Olives"
                            checked={allVeggies[2].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Green Peppers"
                            name="veggies"
                            value="Green Peppers"
                            checked={allVeggies[3].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Mushrooms"
                            name="veggies"
                            value="Mushrooms"
                            checked={allVeggies[4].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Pineapple"
                            name="veggies"
                            value="Pineapple"
                            checked={allVeggies[5].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Spinach"
                            name="veggies"
                            value="Spinach"
                            checked={allVeggies[6].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Jalapeno"
                            name="veggies"
                            value="Jalapeno"
                            checked={allVeggies[7].isChecked}
                            onClick={selectedVeggiesHandler}
                        />
                    </Card.Body>
                    <Card.Footer className="text-danger"><h4>${selectedVegCost}.00</h4></Card.Footer>
                </Card>
            </CardGroup>
            <Card.Footer className="text-danger"><h4>Total: ${orderTotal}.00</h4></Card.Footer>
            <Row>
                <Col>
                    <Button
                        variant="warning"
                        size="lg"
                        block
                        onClick={getCosts}
                    >Place Order!</Button>
                </Col>
                <Col>
                    <Button
                        variant="danger"
                        size="lg"
                        block
                        onClick={clearAll}
                    >Cancel</Button>
                </Col>
            </Row>
            </Form>
            {receipt}
        </div>
        
    );
};



export default PizzaForm;