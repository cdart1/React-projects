import React, {useState} from "react";
import { Container } from "react-bootstrap";
import './App.css';
import PizzaForm from "./components/Forms";
import PizzaVideo from "./components/video/pizza-video.mp4";
import Nav from "./components/Nav";

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

  return (
    <Container 
    style={{ marginTop: "30px", marginBottom: "30px" }}>
      <Nav />
      <video autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src={PizzaVideo} type="video/mp4" />
      </video>
      <header className="App-header">
        <h1>Welcome Pizza Lovers</h1>
      </header>
      {/* Jumbotron here */}
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
    </Container>
  );
}

export default App;
