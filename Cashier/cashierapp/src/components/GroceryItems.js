
import React, { Component } from "react";
import { connect } from "react-redux";

class GroceryItems extends Component {
    render() {
        return <div id="grocery-items">
            <table border="1">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Item Price</th>
                        <th>Item Name</th>
                    </tr>
                    {/* MEed to hook up the add to cart button */}
                    {this.props.items.map((item, index) => {
                        return <tr key={index}>
                            <td>
                                {/* On Click we invoke the addToCart function and pass in the item as a parameter. */}
                                <button onClick={() => this.props.addToCart(item)}>
                                    Add
                                </button>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}

// Instead of threading all the states & actions of Components as props through the 'App', Redux makes
// it so Components define exactly what they want access to from the Store in functions like these below.
// So we define what state we want and the action it is going to perform.
function mapStateToProps(state) {
    return {
        items: state.forSale
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems)