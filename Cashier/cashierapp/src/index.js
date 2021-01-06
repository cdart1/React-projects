import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import cartReducer from "./reducers/cart-reducer";
// By adding curley braces, we are accessing the 'createStore' from redux.
import { createStore } from "redux";

const Store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Steps to implement Redux.
// Step 1: build up our reducer.
// Step 2: create a data store.
// Step 3: Wrap your 'App' with the Provider Component
// Step 4: Change our components so they are aware of redux.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
