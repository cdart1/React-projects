import React, {useState, useEffect} from "react";
import { Container, Jumbotron } from "react-bootstrap";
import './App.css';
import PizzaForm from "./components/Forms";
import PizzaVideo from "./components/video/pizza-video.mp4";
import PizzaImg from "./components/img/Vegan-Pizza2.jpg";
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbotron";
import Prices from "./components/Prices";
import ThankYou from "./components/ThankYou";
import { render } from "@testing-library/react";
import Receipt from "./components/Receipt";
import PizzaApiImg from "./components/pizzaApi";

function App() {
  // Size
  const [selectedSize, setSelectedSize] = useState("Personal");
  const [selectedSizeCost, setSelectedSizeCost] = useState(6);

  // Crust
  const [selectedCrust, setSelectedCrust] = useState("Plain Crust");
  const [selectedCrustCost, setSelectedCrustCost] = useState(0);

  // Sauce
  const [selectedSauce, setSelectedSauce] = useState("Marinara Sauce");

  // Cheese
  const [selectedCheese, setSelectedCheese] = useState("Regular");
  const [selectedCheeseCost, setSelectedCheeseCost] = useState(0);

  // Meat
  const [allMeat, setAllMeat] = useState([
    {meatName: "Pepperoni", isChecked: false},
    {meatName: "Sausage", isChecked: false},
    {meatName: "Canadian Bacon", isChecked: false},
    {meatName: "Chicken", isChecked: false},
    {meatName: "Buffalo Chicken", isChecked: false},
    {meatName: "Vegan Chick'n", isChecked: false},
    {meatName: "Vegan Sausage", isChecked: false},
  ]);
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [selectedMeatCost, setSelectedMeatCost] = useState(0);
  const [meatStr, setMeatStr] = useState("");

  // Veggies
  const [allVeggies, setAllVeggies] = useState([
    {vegName : "Tomatoes", isChecked : false},
    {vegName : "Onions", isChecked : false},
    {vegName : "Olives", isChecked : false},
    {vegName : "Green Peppers", isChecked : false},
    {vegName : "Mushrooms", isChecked : false},
    {vegName : "Pineapple", isChecked : false},
    {vegName : "Spinach", isChecked : false},
    {vegName : "Jalapeno", isChecked : false},
  ]);
  const [selectedVeggies, setSelectedVeggies] = useState([]);
  const [selectedVegCost, setSelectedVegCost] = useState(0);
  const [vegStr, setVegStr] = useState("");

  // Order total
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderTotal, setOrderTotal] = useState();

  // Button disabling
  const [buttonState, setButtonState] = useState(false);

  // Api Image
  const [pizzaImg, setPizzaImg] = useState();
  const [imgError, setImgError]= useState(false);

//   useEffect(() => {
//         receipt();
//     }, [orderPlaced]);

  const clearAll = () => {
    setSelectedSize("Personal");
    setSelectedSizeCost(6);
    setSelectedCrust("Plain Crust");
    setSelectedCrustCost(0);
    setSelectedSauce("Marinara Sauce");
    setSelectedCheese("Regular");
    setSelectedCheeseCost(0);
    setAllMeat(allMeat.map((item) => {
        if (item.isChecked === true){
            return {
                ...item, isChecked: !item.isChecked
            }
        }
        return item;
    }));
    setSelectedMeatCost(0);
    setAllVeggies(allVeggies.map((item) => {
        if (item.isChecked === true){
            return {
                ...item, isChecked: !item.isChecked
            }
        }
        return item;
    }));
    setSelectedVegCost(0);
    setButtonState(false);
    setOrderPlaced(false);
  };

  
    let util = null
      if(orderPlaced){
        util = <Receipt
        selectedSize={selectedSize}
        selectedSizeCost={selectedSizeCost}

        selectedCrust={selectedCrust}
        selectedCrustCost={selectedCrustCost}

        selectedSauce={selectedSauce}

        selectedCheese={selectedCheese}
        selectedCheeseCost={selectedCheeseCost}

        selectedMeat={selectedMeat}
        meatStr={meatStr}

        selectedVeggies={selectedVeggies}
        vegStr={vegStr}

        orderTotal={orderTotal}
         />
      }


  return (
    <Container 
    style={{ marginTop: "30px", marginBottom: "30px" }}>
      <Nav />
      <img src={ PizzaImg } 
      style={{
        position: "fixed",
        minWidth: "100%",
        minHeight: "100%",
        left: "50%",
        top: "50%",
        // right: "20%",
        // bottom: "20%",
        // objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}/>
      <PizzaApiImg 
        setPizzaImg={setPizzaImg}
        setImgError={setImgError}
        pizzaImg={pizzaImg}
        imgError={imgError}
      />
      <Jumbo />
      <Prices 
        setSelectedSize={setSelectedSize}
        setSelectedSizeCost={setSelectedSizeCost}

        setSelectedCrust={setSelectedCrust}
        setSelectedCrustCost={setSelectedCrustCost}

        setSelectedSauce={setSelectedSauce}

        allMeat={allMeat}
        setAllMeat={setAllMeat}
        setSelectedMeat={setSelectedMeat}
        setSelectedMeatCost={setSelectedMeatCost}

        allVeggies={allVeggies}
        setAllVeggies={setAllVeggies}
        setSelectedVegCost={setSelectedVegCost}

        clearAll={clearAll}
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
      <PizzaForm 
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedSizeCost={selectedSizeCost}
        setSelectedSizeCost={setSelectedSizeCost}

        selectedCrust={selectedCrust}
        setSelectedCrust={setSelectedCrust}
        selectedCrustCost={selectedCrustCost}
        setSelectedCrustCost={setSelectedCrustCost}

        selectedSauce={selectedSauce}
        setSelectedSauce={setSelectedSauce}

        selectedCheese={selectedCheese}
        setSelectedCheese={setSelectedCheese}
        selectedCheeseCost={selectedCheeseCost}
        setSelectedCheeseCost={setSelectedCheeseCost}

        allMeat={allMeat}
        setAllMeat={setAllMeat}
        selectedMeat={selectedMeat}
        setSelectedMeat={setSelectedMeat}
        selectedMeatCost={selectedMeatCost}
        setSelectedMeatCost={setSelectedMeatCost}
        meatStr={meatStr}
        setMeatStr={setMeatStr}

        allVeggies={allVeggies}
        setAllVeggies={setAllVeggies}
        selectedVegCost={selectedVegCost}
        setSelectedVegCost={setSelectedVegCost}
        selectedVeggies={selectedVeggies}
        setSelectedVeggies={setSelectedVeggies}
        vegStr={vegStr}
        setVegStr={setVegStr}

        orderPlaced={orderPlaced}
        setOrderPlaced={setOrderPlaced}
        orderTotal={orderTotal}
        setOrderTotal={setOrderTotal}

        clearAll={clearAll}
      />
      {util}
      <ThankYou />
    </Container>
  );
}

export default App;
