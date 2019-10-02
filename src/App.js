// import $ from 'jquery'
// import 'jquery-validation'
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "./components/Home.js";
import Properties from "./components/Properties.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Cart from "./components/Cart.js";
import DashBoard from "./components/DashBoard.js";
import Property from "./components/Property.js";
import Profile from "./components/Profile.js";
import Holdings from "./components/Holdings.js";
import OrderSuccessful from "./components/OrderSuccessful";
import NotFound from "./components/NotFound";
import { api } from "./services/api";

import tempHouse1 from "./images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
import tempHouse2 from "./images/1-Estrella-Altamira_Front-Elevation_920.jpg";
import tempHouse3 from "./images/01-Palisades-Santee_Front-Elevation-Twilight_920.jpg";
import tempHouse4 from "./images/1-Solano-Artemis_Front-Elevation_1920.jpg";
import tempHouse5 from "./images/07-Canyon-Oaks-Sage_Front-Elevation_CC_920.jpg";
import tempHouse6 from "./images/14-025-03-Rear-Exterior-over-Fire-Pit.jpg";
import Restricted from "./components/Restricted.js";
const tempHouseImages = {
    1: [tempHouse1, tempHouse2],
    2: [tempHouse3],
    3: [tempHouse6],
    4: [tempHouse4],
    5: [tempHouse5],
    6: [tempHouse2]
};

const BASE_URL = "http://localhost:3000/api/v1";
const PROPERTIES = "/properties";
const HOLDINGS = "/holdings";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            properties: [],
            filteredProperties: [],
            holdings: [],
            cart: [],
            auth: {
                investor: {}
            },
            loggedIn: false,
            time: new Date().getSeconds(),
            rent: 0,
            amount: 0,
            monthlyRent: 0
        };
    }

    componentDidMount() {
        fetch(BASE_URL + PROPERTIES)
            .then(resp => resp.json())
            .then(json =>
                this.setState(
                    { properties: json, filteredProperties: json },
                    console.log(json)
                )
            );
        fetch(BASE_URL + HOLDINGS)
            .then(resp => resp.json())
            .then(json => this.setState({ holdings: json }, console.log(json)));
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("there is no token");
        } else {
            api.auth.getCurrentInvestor().then(investor => {
                const updatedState = { ...this.state.auth, investor: investor };
                this.setState({ auth: updatedState });
            });
        }
        const script = document.createElement("script");
        script.src = "/vendor/jquery-validation/jquery.validate.min.js";
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = "/js/front.js";
        script2.async = true;
        document.body.appendChild(script2);

        // this.intervalID = setInterval(
        //     () => this.tick(),
        //     1000
        //   );
        // console.log("dumb thing:",this.state.holdings)
        let rent = this.getRent()
        // console.log("really dubmb thing",this.getRent())
        // let rent = 5
        this.setState({ monthlyRent: rent });
    }

    componentDidUpdate(){
        let rent = this.state.holdings.filter(holding => holding.investor_id === 4).map(holding => holding.amount).reduce((acc, amount) => acc + amount, 0)
        // this.setState({monthlyRent: rent})
        console.log("really dubmb thing",rent)

    }
    getRent = () => {
        let rent = this.state.holdings.filter(holding => holding.investor_id === 4).map(holding => holding.amount).reduce((acc, amount) => acc + amount, 0)
        return rent
    }
    // componentWillUnmount() {
    //     clearInterval(this.intervalID);
    //   }
    //   tick() {
    //     this.setState({
    //       time: new Date().getSeconds() * this.state.monthlyRent,
    //       rent: this.state.amount += this.state.monthlyRent
    //     });
    //   }

    login = data => {
        const updatedState = { ...this.state.auth, investor: data };
        localStorage.setItem("token", data.jwt);
        this.setState({ auth: updatedState });
        this.setState({ loggedIn: true });
    };

    logout = () => {
        localStorage.removeItem("token");
        this.setState({ auth: { investor: {} } });
        this.setState({ loggedIn: false });
        this.clearCart();
    };

    sumPropertyHeld = () => {
        let total_held = {};
        // eslint-disable-next-line
        this.state.holdings.map(holding => {
            total_held[holding.property_id] =
                total_held[holding.property_id] + holding.amount ||
                holding.amount;
        });
        return total_held;
    };

    addToCart = property => {
        if (!this.state.cart.includes(property)) {
            console.log("add to cart", property);
            this.setState({ cart: [...this.state.cart, property] });
        }
    };

    clearCart = () => {
        this.setState({ cart: {} });
    };

    handleFilter = zone => {
        const newProperties = this.state.properties.filter(property => {
            return property.price.includes(zone);
        });
        this.setState({
            filteredProperties: newProperties
        });
    };
    render() {
        console.log("app state:", this.state);
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={props => (
                            <Home
                                {...props}
                                cart={this.state.cart}
                                loginState={this.state.auth.investor}
                                logout={this.logout}
                            />
                        )}
                    />

                    <Route
                        path="/properties"
                        exact
                        render={props => (
                            <Properties
                                {...props}
                                cart={this.state.cart}
                                properties={this.state.filteredProperties}
                                holdings={this.state.holdings}
                                tempHouseImages={tempHouseImages}
                                loginState={this.state.auth.investor}
                                logout={this.logout}
                                handleFilter={this.handleFilter}
                                time={this.state.rent}
                            />
                        )}
                    />
                    <Route
                        path="/properties/:id"
                        exact
                        render={props => (
                            <Property
                                {...props}
                                cart={this.state.cart}
                                property={this.state.properties}
                                sumPropertyHeld={this.sumPropertyHeld}
                                addToCart={this.addToCart}
                                loginState={this.state.auth.investor}
                                investor={this.state.auth.investor}
                                logout={this.logout}
                                tempHouseImages={tempHouseImages}
                            />
                        )}
                    />

                    <Route
                        path="/ordersuccessful"
                        exact
                        render={props => (
                            <OrderSuccessful
                                {...props}
                                cart={this.state.cart}
                                loginState={this.state.auth.investor}
                                logout={this.logout}
                            />
                        )}
                    />
                    <Route
                        path="/dashboard"
                        exact
                        render={props =>
                            this.state.loggedIn ? (
                                <DashBoard
                                    {...props}
                                    cart={this.state.cart}
                                    holdings={this.state.holdings}
                                    loginState={this.state.auth.investor}
                                    logout={this.logout}
                                />
                            ) : (
                                <Redirect to="/rescricted" />
                            )
                        }
                    />
                    <Route
                        path="/holdings"
                        exact
                        render={props =>
                            !this.state.loggedIn ? (
                                <Holdings
                                    {...props}
                                    cart={this.state.cart}
                                    holdings={this.state.holdings}
                                    properties={this.state.properties}
                                    loginState={this.state.auth.investor}
                                    logout={this.logout}
                                />
                            ) : (
                                <Redirect to="/rescricted" />
                            )
                        }
                    />
                    <Route
                        path="/cart"
                        exact
                        render={props => (
                            <Cart
                                {...props}
                                cart={this.state.cart}
                                tempHouseImages={tempHouseImages}
                                holdings={this.state.holdings}
                                loginState={this.state.auth.investor}
                                logout={this.logout}
                                clearCart={this.clearCart}
                            />
                        )}
                    />
                    <Route
                        path="/profile"
                        exact
                        render={props =>
                            this.state.loggedIn ? (
                                <Profile
                                    {...props}
                                    cart={this.state.cart}
                                    loginState={this.state.auth.investor}
                                    logout={this.logout}
                                />
                            ) : (
                                <Redirect to="/rescricted" />
                            )
                        }
                    />
                    {/* <Switch> */}
                    <Route
                        exact
                        path="/login"
                        render={props => (
                            <Login {...props} handleLogin={this.login} />
                        )}
                    />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/rescricted" component={Restricted} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
