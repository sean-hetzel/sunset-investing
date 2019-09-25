import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import PropertyCard from "./PropertyCard";

class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "" }
        }
    }
    render() {
        console.log("cart:",this.props.cart)
        return (
            <>
            <SideBar sideBarStatus={this.state.sideBarStatus}/>
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
                            <li className="breadcrumb-item active">Cart</li>
                        </ul>
                    </div>
                    <section>
                        <div className="container-fluid"></div>
                        <h1 className="col-11 text-primary">Checkout</h1>
                        <div className="container-fluid">
                            <div className="row">
                                {this.props.cart.map(property => {
                                    return (
                                        <>
                                            <div className="col-md-6 col-lg-3">
                                                <h4>{property.price}</h4>
                                                {property.price}
                                                <PropertyCard key={property.id} property={property} tempHouseImages={this.props.tempHouseImages} holdings={this.props.holdings}
/>

                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Cart;
