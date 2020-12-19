import React, {useState} from "react";
import './App.css';
import PizzaForm from "./components/Forms";

function App() {
  // Size
  const [selectedSize, setSelectedSize] = useState("Personal");
  const [selectedSizeCost, setSelectedSizeCost] = useState(6);

  // Crust
  const [selectedCrust, setSelectedCrust] = useState("Plain Crust");
  const [selectedCrustCost, setSelectedCrustCost] = useState(0);

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
  const [selectedVegCost, setSelectedVegCost] = useState(0);
  const [selectedVeggies, setSelectedVeggies] = useState([]);

  // Order total
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderTotal, setOrderTotal] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Vegan Pizza Lovers</h1>
      </header>
      <PizzaForm 
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedSizeCost={selectedSizeCost}
        setSelectedSizeCost={setSelectedSizeCost}
        selectedCrust={selectedCrust}
        setSelectedCrust={setSelectedCrust}
        selectedCrustCost={selectedCrustCost}
        setSelectedCrustCost={setSelectedCrustCost}
        allVeggies={allVeggies}
        setAllVeggies={setAllVeggies}
        selectedVegCost={selectedVegCost}
        setSelectedVegCost={setSelectedVegCost}
        selectedVeggies={selectedVeggies}
        setSelectedVeggies={setSelectedVeggies}
        orderPlaced={orderPlaced}
        setOrderPlaced={setOrderPlaced}
        orderTotal={orderTotal}
        setOrderTotal={setOrderTotal}
      />
    </div>
  );
}

export default App;
