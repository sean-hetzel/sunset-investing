import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Carousel from "./Carousel";

import PercentageBar from "./PercentageBar";

let PROPERTY;

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}

class Property extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: {
                properties: "active",
                dashboard: "",
                holdings: ""
            },
            purchaseAmount: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/vendor/jquery-validation/jquery.validate.min.js";
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = "/js/front.js";
        script2.async = true;
        document.body.appendChild(script2);
    }

    handleChange(event) {
        this.setState({ purchaseAmount: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
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
            zone: "",
            year_built: "",
            description: ""
        };

        // eslint-disable-next-line
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
            zone,
            year_built,
            description
        } = this.getProperty();
        const total = this.props.sumPropertyHeld()[
            parseInt(this.props.match.params.id)
        ];

        let shareOfProperty = Math.round(
            (this.state.purchaseAmount / price) * 100
        );
        let monnthlyRent = Math.round(
            (this.state.purchaseAmount / price) * rent
        );

        let annualAppriciationAmount = Math.round(
            (this.state.purchaseAmount / price) *
                (price * (next_year_appreciation / 100))
        );

        let breakEvenDate =
            Math.round(this.state.purchaseAmount / monnthlyRent) || Infinity;

        let potentialProfit = Math.round(
            (this.state.purchaseAmount / price) * (rent * lease_length) +
                (this.state.purchaseAmount / price) *
                    ((next_year_appreciation / 100) *
                        price *
                        (lease_length / 12))
        );

        console.log(
            "ROI:",
            `profit: ${potentialProfit} / cost: ${
                this.state.purchaseAmount
            } = ${potentialProfit / this.state.purchaseAmount}`
        );
        console.log(
            "props of sum:",
            this.props.sumPropertyHeld()[parseInt(this.props.match.params.id)]
        );
        console.log("property page props:", this.props);
        console.log("property page state:", this.state);

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
                                    <div
                                        className="col-md-7 img-fluid"
                                        style={{ height: "100%" }}
                                    >
                                        <Carousel />
                                    </div>
                                    <div className="col-md-5">
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
                                                            Enter Amount
                                                        </strong>
                                                        <span className="d-block"></span>
                                                    </div>
                                                    <form
                                                        id="amount2"
                                                        className="form-horizontal form-validate form"
                                                        onSubmit={
                                                            this.handleSubmit
                                                        }
                                                    >
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <input
                                                                    type="number"
                                                                    min="99"
                                                                    max={
                                                                        price -
                                                                        total
                                                                    }
                                                                    required
                                                                    data-msg={`Amount must be between $100 and $${(
                                                                        price -
                                                                        total
                                                                    ).toLocaleString()}`}
                                                                    placeholder="$"
                                                                    name="amount2"
                                                                    id="amount2"
                                                                    className="form-control form-validate"
                                                                    value={
                                                                        this
                                                                            .state
                                                                            .value
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                />
                                                                <div className="margin-bottom-sm margin-top-sm">
                                                                    <div className="title">
                                                                        <strong>
                                                                            Return
                                                                        </strong>
                                                                    </div>
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        Share
                                                                                        of
                                                                                        Property
                                                                                    </th>
                                                                                    <td className="text-primary">
                                                                                        {
                                                                                            shareOfProperty
                                                                                        }

                                                                                        %
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        Monthly
                                                                                        Rent
                                                                                    </th>
                                                                                    <td className="text-primary">
                                                                                        $
                                                                                        {monnthlyRent.toLocaleString()}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        Annual
                                                                                        Appreciation
                                                                                        at{" "}
                                                                                        {
                                                                                            next_year_appreciation
                                                                                        }

                                                                                        %
                                                                                        *
                                                                                    </th>
                                                                                    <td className="text-primary">
                                                                                        $
                                                                                        {annualAppriciationAmount.toLocaleString()}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        Time
                                                                                        to
                                                                                        Break
                                                                                        Even
                                                                                        From
                                                                                        Rent
                                                                                        *
                                                                                    </th>
                                                                                    <td className="text-primary">
                                                                                        {breakEvenDate.toLocaleString()}{" "}
                                                                                        Months
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        Potential
                                                                                        Profit
                                                                                        if
                                                                                        Sold
                                                                                        After{" "}
                                                                                        {lease_length /
                                                                                            12}{" "}
                                                                                        Years
                                                                                        *
                                                                                    </th>
                                                                                    <td className="text-primary">
                                                                                        $
                                                                                        {potentialProfit.toLocaleString()}
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="lcol-sm-12">
                                                                        <br></br>
                                                                        * These
                                                                        numbers
                                                                        are not
                                                                        guaranteed.
                                                                        They are
                                                                        only
                                                                        predictions
                                                                        based on
                                                                        current
                                                                        market
                                                                        conditions.
                                                                    </div>
                                                                </div>
                                                                {!isEmpty(
                                                                    this.props
                                                                        .loginState
                                                                ) ? (
                                                                    <Link
                                                                        to="/cart"
                                                                        className="btn btn-primary"
                                                                        key={
                                                                            this
                                                                                .props
                                                                                .property
                                                                                .id
                                                                        }
                                                                        onClick={() =>
                                                                            this.props.addToCart(
                                                                                {
                                                                                    investorId: this
                                                                                        .props
                                                                                        .investor
                                                                                        .investor
                                                                                        .id,
                                                                                    property: PROPERTY,
                                                                                    amount: this
                                                                                        .state
                                                                                        .purchaseAmount
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        Add to
                                                                        Cart
                                                                    </Link>
                                                                ) : (
                                                                    <p>
                                                                        Please{" "}
                                                                        <Link to="/login">
                                                                            login
                                                                        </Link>{" "}
                                                                        or{" "}
                                                                        <Link to="/signup">
                                                                            signup
                                                                        </Link>{" "}
                                                                        to
                                                                        invest
                                                                        in this
                                                                        property.
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-md-12"
                                style={{ float: "right" }}
                            >
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title text-primary text-center text-uppercase">
                                            Property Details
                                        </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-capitalize">
                                            {zone}
                                        </li>
                                        <li className="list-group-item">
                                            Year Built: {year_built}
                                        </li>
                                        <li className="list-group-item">
                                            {beds_baths_sqft}
                                        </li>
                                        <li className="list-group-item">
                                            {address}
                                        </li>
                                        <li className="list-group-item">
                                            {description}
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
