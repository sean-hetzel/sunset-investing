import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Properties from "./components/Properties.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Cart from "./components/Cart.js";
import DashBoard from "./components/DashBoard.js";
import LogOut from "./components/LogOut";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
// import SideBar from "./components/SideBar.js";
import Property from "./components/Property.js";
import Profile from "./components/Profile.js";
import Holdings from "./components/Holdings.js";

// blue reference: #37cfdc
// API key= AIzaSyAeXRNUoDujYVkiyawNAFhf7oFDe8vcFn8

const API = "http://localhost:3000/api/v1/properties";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            investors: [],
            holdings: [],
            properties: [],
            cart: []
        };
    }

    componentDidMount() {
        fetch(API)
            .then(resp => resp.json())
            .then(json =>
                this.setState({ properties: json }, console.log(json))
            );
    }

    render() {
        return (
            <Router>
                <Header />
                <div className="d-flex align-items-stretch">
                    {/* <SideBar /> */}
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/properties"
                        exact
                        render={props => (
                            <Properties {...props} properties={this.state.properties} />
                        )}
                    />
                    <Route path="/property" component={Property} />
                    {/* <Route
                        path="/property"
                        exact
                        render={props => (
                            <Property property={this.state.property} />
                        )}
                    /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/signup" component={SignUp} />
                    <Route
                        path="/dashboard"
                        exact
                        render={props => (
                            <DashBoard holdings={this.state.holdings} />
                        )}
                    />
                     <Route
                        path="/holdings"
                        exact
                        render={props => (
                            <Holdings holdings={this.state.holdings} />
                        )}
                    />
                    <Route path="/cart" component={Cart} />
                    <Route path="/profile" component={Profile} />
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;
