import React, {useState} from "react";
import './App.css';
import PizzaForm from "./components/Forms";

function App() {
  // States
  const [selectedSize, setSelectedSize] = useState("Personal");
  const [selectedSizeCost, setSelectedSizeCost] = useState(0);
  const [selectedCrust, setSelectedCrust] = useState("Plain Crust");
  const [selectedCrustCost, setSelectedCrustCost] = useState(0);
  const [selectedVeggies, setSelectedVeggies] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

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
        orderPlaced={orderPlaced}
        setOrderPlaced={setOrderPlaced}
      />
    </div>
  );
}

export default App;
