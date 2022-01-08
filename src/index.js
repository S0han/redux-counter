import React from "react";
import ReactDOM from "react-dom";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import { Counter } from "./counter";
// import { counterReducer } from './store';
import "./styles.css";

// TODO: Create Store

const App = () => (
  <div>
    <Counter />
  </div>
);

const rootElement = document.getElementById("root");

// TODO: Wrap our App in the store provider
ReactDOM.render(<App />, rootElement);
