import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Properties from "./components/Properties.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Learn from "./components/Learn.js";
import Cart from "./components/Cart.js";
import DashBoard from "./components/DashBoard.js";
import LogOut from "./components/LogOut";

class App extends React.Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/properties" component={Properties} />
                <Route path="/learn" component={Learn} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={LogOut} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/cart" component={Cart} />
            </Router>
        );
    }
}

export default App;
