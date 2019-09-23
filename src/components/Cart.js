import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            sideBarStatus: ["", "active"]
        }
    }
    render() {
        return (
            <>
            <SideBar/>
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Cart</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/properties">Properties</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/property">Property</Link>
                            </li>
                            <li className="breadcrumb-item active">Cart</li>
                        </ul>
                    </div>
                    <section>
                        <div className="container-fluid"></div>
                    </section>
                </div>
            </>
        );
    }
}

export default Cart;
