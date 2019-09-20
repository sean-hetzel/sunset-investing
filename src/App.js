import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Properties from "./components/Properties.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Learn from "./components/Learn.js";
import Cart from "./components/Cart.js";
import DashBoard from "./components/DashBoard.js";
import LogOut from "./components/LogOut";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/SideBar.js";

const API = "http://localhost:3000/api/v1/properties";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            investors: [],
            holdings: [],
            properties: [],
            cartProperties: []
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
                    {/* <NavBar /> */}
                    <SideBar />
                    {/* <DashBoard /> */}
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/properties"
                        exact
                        render={props => (
                            <Properties properties={this.state.properties} />
                        )}
                    />
                    <Route path="/learn" component={Learn} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/cart" component={Cart} />
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;
