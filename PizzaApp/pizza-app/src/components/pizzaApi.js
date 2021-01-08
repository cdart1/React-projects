import React, { useEffect } from "react";
import { Jumbotron, Image } from "react-bootstrap";

const PizzaApiImg = ({ setIsLoaded, setPizzaImg, setImgError, 
                        isLoaded, imgError, pizzaImg }) => {
    // The empty array at the end of the useEffect means this useEffect runs once.
    useEffect(() => {
        fetch("https://foodish-api.herokuapp.com/api/images/pizza")
        // .then(res => res.text())
        // .then(text => console.log(text))
        //.then(res => res.json())
        .then(
            (res) => {
                console.log(res.url);
            setIsLoaded(true);
            setPizzaImg(res.url);
            },
            (error) => {
                setIsLoaded(true);
                setImgError(error);
            }
        )
    }, [])

    if(imgError) {
        return <div>Error: {imgError.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <Jumbotron>
                {/* {pizzaImg.image} */}
                {/* {pizzaImg.map((img) => {
                    <Image 
                    src={img.image}
                    />
                })} */}
                    {/* <Image 
                    src={{ uri: pizzaImg }}
                    /> */}
                <h1>Pizza img api call = success</h1>
            </Jumbotron>
        );
    }
}

export default PizzaApiImg;