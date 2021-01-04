import React, { Component } from 'react';
import './App.css';
import GroceryItems from "./components/GroceryItems";
import GroceryCart from "./components/GroceryCart";

// When we use normal React, we have the state inside the App Component, the addToCart and removeFromCart function
// within 'App' and we have to pass these functions down to the components.
export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cart: []
      }
      // It's important to remember to bind methods to this class.
      this.addToCart = this.addToCart.bind(this)
      this.removeFromCart = this.removeFromCart.bind(this)
    }

    // Method to hook up the Add to cart button when selecting the item we want to add to our cart.
    addToCart(item){
      // Make a copy of the origianl cart and add the selected item to the cart. Then we set the state.
      const cart = [...this.state.cart, item]
      this.setState({cart})
    }

    // Must pass methods as properties their Components.
    removeFromCart(index){
      const cart = [...this.state.cart]
      // Splice method will allow us to remove items from our cart array.
      // index references the item we want to remove and '1' removes just that one item from the array.
      cart.splice(index, 1)
      this.setState({cart})
    }


    render() {
      return <div id="app-container">
        <h1>Courtney's Grocery Cart</h1>
          <div id="grocery-container">
            {/* These components are beside each other and both get these functions fed to them via props. */}
            <GroceryItems  addToCart={this.addToCart} />
            <GroceryCart items={this.state.cart} 
                         removeFromCart={this.removeFromCart}
            />
          </div>
      </div>
    }
}
