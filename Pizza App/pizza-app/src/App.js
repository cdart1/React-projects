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

  useEffect(() => {
        receipt();
    }, [orderPlaced]);

const receipt = () => {
  if (orderPlaced) {
      render (
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
};

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
      {/* Jumbotron here */}
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
      />
      {receipt}
      <ThankYou />
    </Container>
  );
}

export default App;
