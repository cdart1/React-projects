
import React, { Component } from "react";

export default class GroceryCart extends Component {
    // Function that calculates total of the items in the cart.
    total() {
        // Go through each item in the cart and reduce the prices of every item to reflect a total price.
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }

    render() {
        if(this.props.items.length === 0) {
            return <div id="grocery-cart">
                <p>Cart is empty.</p>
            </div>
        }
        return <div id="grocery-cart">
            <table border="1">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Item Price</th>
                        <th>Item Name</th>
                    </tr>
                    {this.props.items.map((item, index) => {
                        return <tr id={index}>
                            <td>
                                <button onClick={() => this.props.removeFromCart(index)}>
                                    remove
                                </button>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div>
                Total: ${this.total()}
            </div>
        </div>
    }
}