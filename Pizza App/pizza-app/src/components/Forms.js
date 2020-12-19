import React, {useEffect} from "react";
import { Form } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Receipt from "./Receipt";

const PizzaForm = ({ selectedSize, setSelectedSize, 
                    selectedSizeCost, setSelectedSizeCost, 
                    selectedCrust, setSelectedCrust,
                    selectedCrustCost, setSelectedCrustCost, 
                    allVeggies, setAllVeggies,
                    selectedVeggies, setSelectedVeggies,
                    selectedVegCost, setSelectedVegCost,
                    orderPlaced, setOrderPlaced,
                    orderTotal, setOrderTotal }) => {

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

    // veggies
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
    }, [allVeggies]);

    useEffect(() => {
        addUpVegCost();
    }, [selectedVeggies]);

    // add or remove veggies to list
    const createCheckedVegList = () => {
        setSelectedVeggies(allVeggies.filter((el) => el.isChecked === true));
    }

    const addUpVegCost = () => {
        if (selectedVeggies.length !== 0) {
            setSelectedVegCost(selectedVeggies.length - 1);
        }
    }

    // Sets selected veggies state.
    // const selectedVeggiesHandler = (e) => {
    //     !selectedVeggies
    //     setSelectedVeggies()
    //     let count = 0;
    // }
    
    //  useEffect is constantly listening for state changes, and it runs whenever it does change.
    useEffect(() => {
        orderTotalHandler();
    }, [selectedSizeCost, selectedCrustCost, selectedVegCost]);

    const orderTotalHandler = () => {
        let total = selectedSizeCost + selectedCrustCost + selectedVegCost;
        setOrderTotal(total);
    }

 

    // set costs of each selected item 
    // const getCosts = (e) => {
    //     const sizeCosts = {
    //         "Personal": 6, 
    //         "Medium": 10,
    //         "Large": 14,
    //         "Extra Large": 16,
    //     };
    //       const crustCosts = {
    //         "Plain Crust": 0,
    //         "Garlic Butter Crust": 2,
    //         "Cheese Stuffed Crust": 3,
    //         "Spicy Crust": 1,
    //         "House Special Crust": 0,
    //     };
    //     e.preventDefault();
    //     setSelectedSizeCost(sizeCosts[selectedSize])
    //     setSelectedCrustCost(crustCosts[selectedCrust])
    //     setOrderPlaced(true);
    // };

    // let receipt;
    // if (orderPlaced) {
    //     receipt = <Receipt 
    //     selectedSize={selectedSize}
    //     selectedSizeCost={selectedSizeCost}
    //     selectedCrust={selectedCrust}
    //     selectedCrustCost={selectedCrustCost}
    //     />
    // }

    return (
        
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
                    <Card.Footer className="text-danger"><h4>${selectedCrustCost}.00</h4></Card.Footer>
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
                        {/* Size options radio */}
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
        </Form>
       
    );
};

export default PizzaForm;