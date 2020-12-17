import React from "react";
import { Form } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const PizzaForm = () => {
    return (
        <Form>
            <CardGroup>
                <Card border='warning' style={{ width: '18rem' }}>
                    <Card.Header>Slice</Card.Header>
                    <Card.Body text='danger'>
                        <Card.Title>Select a size:</Card.Title>
                        <Card.Text>- Choose one</Card.Text>
                        {/* Size options radio */}
                        <Form.Check
                            type="radio"
                            label="Personal"
                            name="size"
                            value="6"
                        />
                        <Form.Check
                            type="radio"
                            label="Medium"
                            name="size"
                            value="10"
                        />
                        <Form.Check
                            type="radio"
                            label="Large"
                            name="size"
                            value="10"
                        />
                        <Form.Check
                            type="radio"
                            label="Extra Large"
                            name="size"
                            value="10"
                        />
                    </Card.Body>
                </Card>
            </CardGroup>
        </Form>
    );
};

export default PizzaForm;