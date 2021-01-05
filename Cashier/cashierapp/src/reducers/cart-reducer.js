
const GROCERY_ITEMS = [
    {name: "Sliced bacon", price: 5.79},
    {name: "Pasta", price: 1.28},
    {name: "Dried beans", price: 1.36},
    {name: "Ground beef", price: 4.12},
    {name: "All-purpose flour", price: 0.52},
    {name: "Creamy peanut butter", price: 2.56},
    {name: "Top round steak	", price: 5.78},
    {name: "Potatoes", price: 0.72},
    {name: "Frozen turkey", price: 1.59},
    {name: "Sirloin steak", price: 8.07},
    {name: "White rice", price: 0.72},
    {name: "Chocolate chip cookies	", price: 3.47},
    {name: "Seedless grapes", price: 2.67},
    {name: "Sugar", price: 0.65},
    {name: "Ice cream", price: 4.70},
]

const cartReducer = (state, action) => {
    console.log("action", action);
    if (state === undefined) {
        return {
            // This is the initial state.
            forSale: GROCERY_ITEMS,
            cart: [],
            // Below we are saying that the first peice of history we start with an empty 'cart'.
            history: [[]],
            // We use 'historyIndex' to keep track of where we are in 'history'
            historyIndex: 0
        }
    }
    switch (action.type) {
        case "UNDO": {
            // We should go one backwards in time.
            let historyIndex = state.historyIndex - 1
            // To prevent anyone going to a negative number and trying to access a negative index of the array.
            historyIndex = Math.max(historyIndex, 0)
            return {
                // Return the original state, 
                ...state,
                // except now the cart should be equal to the state of the history at the historyIndex.
                // We are overriding the state of the cart to reference the state of the cart at a specific point in history,
                // and since we decremented the historyIndex, we are saying the cart is now the state of the cart at this point in time.
                cart: state.history[historyIndex],
                // And finally update the historyIndex
                historyIndex
            }
        }
        case "REDO": {
            let historyIndex = state.historyIndex - 1
            // This makes it so the historyIndex doesn't exceed the history array.
            historyIndex = Math.min(historyIndex, state.history.length - 1)
            return {
                ...state,
                cart: state.history[historyIndex],
                historyIndex
            }
        }
        case 'ADD_TO_CART': {
            // When we add something to the cart we need to return new state.
            // We use the spread operator so that the old state fills up the object and we can replace it with new state,
            // which allows us to keep the 'forSale' property.
            const cart = [...state.cart, action.item]

            // We want to keep track of every time we add to the cart, so we update 'history' to be what it was before, 
            // and add a new item which is the state of the cart presently.
            const history = [...state.history, cart]
            // 
            const historyIndex = state.historyIndex + 1

            return {
                // Return the state, and the state is basically everything that it was except overwrite the cart with the above 'cart' array.
                ...state,
                cart,
                history,
                historyIndex
            }
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart]
            cart.splice(action.index, 1)

            const history = [...state.history, cart]
            const historyIndex = state.historyIndex + 1

            return {
                ...state,
                cart,
                history,
                historyIndex
            }
        }
        default: {
            return state
        }
    }
}

export default cartReducer;