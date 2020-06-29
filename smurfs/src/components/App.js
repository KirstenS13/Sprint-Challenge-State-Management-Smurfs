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
import Form from './Form';

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    console.log('store from App', store);
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <SmurfList />
        <Form />
      </div>
    );
  }
}

export default App;
