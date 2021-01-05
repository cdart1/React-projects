import React, { Component } from 'react';
import './App.css';
import GroceryItems from "./components/GroceryItems";
import GroceryCart from "./components/GroceryCart";
import History from "./components/History";

// Using Redux, we don't use the React state as much. Instead the state will live in the Store.
// We don't need to pass in functions and state to the Components in the App.
export default class App extends Component {
    render() {
      return <div id="app-container">
        <h1>Courtney's Grocery Cart</h1>
        <History />
          <div id="grocery-container">
            <GroceryItems />
            <GroceryCart />
          </div>
      </div>
    }
}
