import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from "react-router-dom";
import NavBar from "./components/NavBar.js";

import "./App.css";

class App extends Component {
    render() {
        return (
            <>
                <NavBar />
            </>
        );
    }
}

export default App;
