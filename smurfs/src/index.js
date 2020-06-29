import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//import Provider
import { Provider } from 'react-redux';
import { store } from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
