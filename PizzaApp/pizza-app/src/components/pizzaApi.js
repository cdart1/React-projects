import axios from "axios";
import React, { useEffect } from "react";
import { Jumbotron, Image, Container, Row, Col } from "react-bootstrap";

const PizzaApiImg = ({ 
    setPizzaImg, setImgError, 
    imgError, pizzaImg }) => {

    useEffect(() => {
        getPizzaImg();
    }, [])

    const getPizzaImg = async () => {
        try{
            const response = await axios.get('https://foodish-api.herokuapp.com/api/images/pizza');
            const image = response.data.image;
            setPizzaImg(image);
        }
        catch {
            setImgError(true);
        }
    }
    if(imgError) {
        console.log("Unable to display image");
        return null;
    }
    else {
        return (
            <Jumbotron
            style={{ color: "#FEEFB3", marginTop: "10px", paddingTop: "10px", paddingBottom: "10px", 
            backgroundColor: "rgba(128, 53, 0, 0.781)", fontFamily: "monospace" }}
            >
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <h1>GETTING HUNGRY?</h1>
                            <h1>ORDER BELOW!</h1>
                            <h4>Refresh the page to see another delicious image.</h4>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image 
                            style={{width: 350, height: 250 }}
                            src={ pizzaImg }
                            rounded
                            />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
    )}
}          
export default PizzaApiImg;