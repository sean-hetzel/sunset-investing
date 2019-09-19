import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
// import "../public/distribution-premium/css/style.blue.premium.css";
// import "../public/distribution-premium/vendor/bootstrap/css/bootstrap.min.css";
// import "../public/distribution-premium/vendor/font-awesome/css/font-awesome.min.css";
// import "../public/distribution-premium/css/font.css";
// import "https://fonts.googleapis.com/css?family=Muli:300,400,700"
// import "../public/distribution-premium/css/style.sea.premium.css";
// import "../public/distribution-premium/css/custom.css";
// import NavBar from "./components/NavBar.js";
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

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <div class="d-flex align-items-stretch">
                    {/* <NavBar /> */}
                    <SideBar />
                    {/* <DashBoard /> */}
                    <Route path="/" exact component={Home} />
                    <Route path="/properties" component={Properties} />
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
