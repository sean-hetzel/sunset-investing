import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Carousel from "./Carousel";

import PercentageBar from "./PercentageBar";

let PROPERTY;

class Property extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "active", dashboard: "", holdings: "" }
        };
    }

    getProperty = () => {
        const id = parseInt(this.props.match.params.id);

        let foundProperty = {
            price: 0,
            rent: 0,
            lease_length: 0,
            last_year_appreciation: 0,
            next_year_appreciation: 0,
            beds_baths_sqft: "",
            address: "",
            zone: ""
        };

        for (let property of this.props.property) {
            if (property.id === id) {
                foundProperty = property;
                PROPERTY = property;
                console.log("price", property.price);
            }
        }
        console.log("property:", foundProperty);
        return foundProperty;
    };

    render() {
        const {
            price,
            rent,
            lease_length,
            last_year_appreciation,
            next_year_appreciation,
            beds_baths_sqft,
            address,
            zone
        } = this.getProperty();
        const total = this.props.sumPropertyHeld()[
            parseInt(this.props.match.params.id)
        ];
        console.log("property stuff:", price);
        console.log(
            "props of sum:",
            this.props.sumPropertyHeld()[parseInt(this.props.match.params.id)]
        );
        console.log("property page props:", this.props);
        return (
            <>
                <Header
                    cart={this.props.cart}
                    loginState={this.props.loginState}
                    logout={this.props.logout}
                />
                <div className="d-flex align-items-stretch">
                    <SideBar sideBarStatus={this.state.sideBarStatus} />
                    <div className="page-content">
                        <div className="page-header no-margin-bottom">
                            <div className="container-fluid">
                                <h2 className="h5 no-margin-bottom">
                                    Property
                                </h2>
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
                                <li className="breadcrumb-item active">
                                    Property
                                </li>
                            </ul>
                        </div>
                        <section>
                            <div class="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 img-fluid">
                                        <Carousel />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="card-title text-primary text-center text-uppercase">
                                                    Calculate Return
                                                </h5>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-primary">
                                                    Price: $
                                                    {price.toLocaleString()}
                                                </li>
                                                <li className="list-group-item text-primary">
                                                    Rent: $
                                                    {rent.toLocaleString()}
                                                </li>
                                                <li className="list-group-item">
                                                    Leased for the next{" "}
                                                    {lease_length / 12} years.
                                                </li>
                                                <li className="list-group-item">
                                                    Appreciated by{" "}
                                                    {last_year_appreciation}%
                                                    last year.
                                                </li>
                                                <li className="list-group-item">
                                                    Appreciation is predicted to
                                                    be {next_year_appreciation}%
                                                    next year.
                                                </li>
                                                <PercentageBar
                                                    percent={Math.round(
                                                        (total / price) * 100
                                                    )}
                                                />

                                                <div className="block">
                                                    <div className="title">
                                                        <strong className="d-block">
                                                            Select Amount
                                                        </strong>
                                                        <span className="d-block"></span>
                                                    </div>
                                                    <form
                                                        id="amount2"
                                                        className="form-horizontal"
                                                    >
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="text"
                                                                defaultValue={0}
                                                                name="amount2"
                                                                id="amount2"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </form>
                                                </div>

                                                <li className="list-group-item text-primary">
                                                    Your share of rent will be $
                                                    {Math.round(
                                                        (150000 / price) * rent
                                                    )}{" "}
                                                    per month.
                                                </li>
                                                <li className="list-group-item text-primary">
                                                    Profit from appreciation
                                                    could be $
                                                    {Math.round(
                                                        price *
                                                            (next_year_appreciation /
                                                                100) *
                                                            (lease_length / 12)
                                                    ).toLocaleString()}{" "}
                                                    if it stays constant.*
                                                </li>
                                                <li className="list-group-item text-primary">
                                                    Total profit could be $
                                                    {Math.round(
                                                        price *
                                                            (next_year_appreciation /
                                                                100) *
                                                            (lease_length /
                                                                12) +
                                                            (150000 / price) *
                                                                rent *
                                                                lease_length
                                                    ).toLocaleString()}{" "}
                                                    if sold {lease_length / 12}{" "}
                                                    years.*
                                                </li>
                                            </ul>
                                            <div className="card-body">
                                                <Link
                                                    to="/cart"
                                                    className="btn btn-primary"
                                                    key={this.props.property.id}
                                                    onClick={() =>
                                                        this.props.addToCart({
                                                            property: PROPERTY,
                                                            amount: 1000
                                                        })
                                                    }
                                                >
                                                    Add to Cart
                                                </Link>

                                                <Link
                                                    to="/properties"
                                                    className="btn btn-outline-primary"
                                                    style={{
                                                        marginLeft: "1.5em"
                                                    }}
                                                >
                                                    Calculate Return
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-md-6"
                                style={{ float: "right" }}
                            >
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title text-primary text-center text-uppercase">
                                            Details
                                        </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-capitalize">
                                            {zone}
                                        </li>
                                        <li className="list-group-item">
                                            {beds_baths_sqft}
                                        </li>
                                        <li className="list-group-item">
                                            {address}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Property;
