import React, { Component } from "react";
import "./App.css";
//import createStore, applyMiddleware
import { createStore, applyMiddleware } from 'redux';

//import thunk
import thunk from 'redux-thunk';

//import reducer
import { reducer } from '../reducers';

//components
import SmurfList from './SmurfList';

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    console.log('store from App', store);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
      </div>
    );
  }
}

export default App;
