import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

class NavBar extends React.Component {
    render() {
        return (
            <nav id="nav_bar">
                <Link id="logo_img" to="/">
                    <img src={Logo} alt="logo" width="100" height="100"/>
                </Link>
                <Link id="logo_text" to="/">SUNSET INVESTING</Link>
                <Link className="nav_button" to="/properties">Properties</Link>
                <Link className="nav_button" to="/learn">Learn</Link>
                <Link className="nav_button" to="/login">Login</Link>
                <Link className="nav_button" to="/logout">Log Out</Link>
                <Link className="nav_button" to="/signup">Sign Up</Link>
                <Link className="nav_button" to="/dashboard">Dashboard</Link>
                <Link className="nav_button" to="/cart">Cart</Link>
            </nav>
        );
    }
}

export default NavBar;
