import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import ShoppingCart from "../images/shopping_cart.png";

class NavBar extends React.Component {
    render() {
        return (
            <nav id="nav_bar">
                <Link id="logo_img" to="/">
                    <img src={Logo} alt="logo" width="100" height="100" />
                </Link>
                <Link id="logo_text" to="/">
                    SUNSET INVESTING
                </Link>
                <Link className="nav_button" to="/properties">
                    Properties
                </Link>
                <Link className="nav_button" to="/learn">
                    Learn
                </Link>
                <Link id="shopping_cart" to="/cart">
                    <img src={ShoppingCart} alt="shopping cart" width="50" height="50" />
                </Link>
                <Link id="signup" className="nav_button" to="/signup">
                    Sign Up
                </Link>
                <Link id="logout" className="nav_button" to="/logout">
                    Log Out
                </Link>
                <Link id="login" className="nav_button" to="/login">
                    Login
                </Link>
                <Link className="nav_button" to="/dashboard">
                    Dashboard
                </Link>
            </nav>
        );
    }
}

export default NavBar;
