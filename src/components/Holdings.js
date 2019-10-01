import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

class Holdings extends Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: {
                properties: "",
                dashboard: "",
                holdings: "active"
            },
            sellAmount: 0
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
        this.setState({ sellAmount: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
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
                                    Holdings
                                </h2>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Holdings
                                </li>
                            </ul>
                        </div>
                        <section className="no-padding-top">
                            <div className="container-fluid">
                                <div className="block">
                                    <div className="title">
                                        <strong>Your Holdings</strong>
                                    </div>
                                    <div className="block-body">
                                        <div className="row"></div>
                                        <div className="table-responsive">
                                            <table
                                                id="datatable1"
                                                style={{ width: "100%" }}
                                                className="table"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>temp holding id</th>
                                                        <th>
                                                            temp property id
                                                        </th>

                                                        <th>Montyly Rent</th>
                                                        <th>Your Share</th>
                                                        <th>Total Price</th>
                                                        <th>Appriciation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.holdings
                                                        .filter(holding => {
                                                            return (
                                                                // .investor_id == this.props.loginState.investor.id
                                                                holding.investor_id ==
                                                                21
                                                            );
                                                        })
                                                        .map(holding => {
                                                            let property = this.props.properties.filter(
                                                                property => {
                                                                    return (
                                                                        property.id ==
                                                                        holding.property_id
                                                                    );
                                                                }
                                                            );
                                                            return (
                                                                <tr>
                                                                    <td>
                                                                        {
                                                                            holding.id
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            property.id
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        ${325}
                                                                    </td>

                                                                    <td>
                                                                        {50}%
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {
                                                                            1532000
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {2.5}%
                                                                    </td>
                                                                    <td>
                                                                        <Link
                                                                            to={`/properties/${property.id}`}
                                                                            className="btn btn-outline-primary"
                                                                        >
                                                                            View
                                                                            Property
                                                                        </Link>
                                                                    </td>
                                                                    <td>
                                                                        <form
                                                                            method="get"
                                                                            className="form-validate mb-4"
                                                                            onSubmit={
                                                                                this
                                                                                    .handleSubmit
                                                                            }
                                                                        >
                                                                            <button
                                                                                to={`/properties/${property.id}`}
                                                                                className="btn btn-outline-primary sell-btn"
                                                                                style={{
                                                                                    marginBottom:
                                                                                        "1em"
                                                                                }}
                                                                            >
                                                                                Sell
                                                                                Property
                                                                            </button>
                                                                            <input
                                                                                type="number"
                                                                                min="99"
                                                                                max={
                                                                                    1000000
                                                                                }
                                                                                required
                                                                                data-msg={`Amount must be between $100 and $${(1000000).toLocaleString()}`}
                                                                                placeholder="$"
                                                                                name="sellAmount"
                                                                                id="sellAmount"
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
                                                                        </form>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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

export default Holdings;
