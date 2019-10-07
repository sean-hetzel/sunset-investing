import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
class Holdings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarStatus: {
                properties: "",
                dashboard: "",
                holdings: "active"
            },
            sellAmount: 0,
            holdings: props.holdings,
            totalRent: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log("sell cahnge:", event.target.value);
        this.setState({ sellAmount: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    sellProperty = holding => {
        const investor_id = holding.investor_id;
        const property_id = holding.property_id;
        const amount = holding.amount - this.state.sellAmount;
        console.log(
            JSON.stringify({
                holding: { investor_id, property_id, amount }
            })
        );
        fetch(`http://localhost:3000/api/v1/holdings/${holding.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                holding: { investor_id, property_id, amount }
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.state.holdings.forEach(each => {
                    if (each.id === holding.id) {
                        each.amount = data.amount;
                        each.investor_id = data.investor_id;
                        each.property_id = data.property_id;
                    }
                });
                this.setState({
                    holdings: [...this.state.holdings]
                });
                console.log(this.state);
            });
    };
    render() {
        console.log("holdings props:", this.props);
        console.log("holdings state:", this.state);

        // let rent = 0;
        return (
            <>
                <Header
                    cart={this.props.cart}
                    loginState={this.props.loginState}
                    logout={this.props.logout}
                    rent={this.props.rent}
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
                                                        <th>Montyly Rent</th>
                                                        <th>
                                                            Investment Amount
                                                        </th>
                                                        <th>
                                                            Percentage Owned
                                                        </th>
                                                        <th>Property Price</th>
                                                        <th>Appreciation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.holdings
                                                        .filter(holding => {
                                                            return (
                                                                holding.investor_id ===
                                                                this.props
                                                                    .loginState
                                                                    .investor.id
                                                                // holding.investor_id ===
                                                                // 3
                                                            );
                                                        })
                                                        .map(holding => {
                                                            let property = this.props.properties.filter(
                                                                property =>
                                                                    property.id ===
                                                                    holding.property_id
                                                            );
                                                            console.log(
                                                                "holding page props:",
                                                                property
                                                            );
                                                            return (
                                                                <tr className="text-primary">
                                                                    <td>
                                                                        $
                                                                        {Math.round(
                                                                            (holding.amount /
                                                                                property[0]
                                                                                    .price) *
                                                                                property[0]
                                                                                    .rent
                                                                        ).toLocaleString()}
                                                                        {/* *
                                                                        {
                                                                            (rent += Math.round(
                                                                                (holding.amount /
                                                                                    property[0]
                                                                                        .price) *
                                                                                    property[0]
                                                                                        .rent
                                                                            ))
                                                                        } */}
                                                                        {/* {this.setState({totalRent: rent})} */}
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {holding.amount.toLocaleString()}
                                                                    </td>
                                                                    <td>
                                                                        {Math.round(
                                                                            (holding.amount /
                                                                                property[0]
                                                                                    .price) *
                                                                                100
                                                                        )}
                                                                        %
                                                                    </td>
                                                                    <td>
                                                                        $
                                                                        {property[0].price.toLocaleString()}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            property[0]
                                                                                .next_year_appreciation
                                                                        }
                                                                        %
                                                                    </td>
                                                                    <td>
                                                                        <Link
                                                                            to={`/properties/${property[0].id}`}
                                                                            className="btn btn-outline-primary"
                                                                        >
                                                                            View
                                                                            Property
                                                                        </Link>
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            width:
                                                                                "20em"
                                                                        }}
                                                                    >
                                                                        <form
                                                                            method="get"
                                                                            className="form-validate mb-4"
                                                                            onSubmit={
                                                                                this
                                                                                    .handleSubmit
                                                                            }
                                                                        >
                                                                            <button
                                                                                className="btn btn-outline-primary sell-btn"
                                                                                style={{
                                                                                    marginBottom:
                                                                                        "1em"
                                                                                }}
                                                                                onClick={() =>
                                                                                    this.sellProperty(
                                                                                        holding
                                                                                    )
                                                                                }
                                                                            >
                                                                                Sell
                                                                                Property
                                                                            </button>
                                                                            <input
                                                                                type="number"
                                                                                min="1"
                                                                                max={
                                                                                    holding.amount
                                                                                }
                                                                                required
                                                                                data-msg={`Amount must be between $1 and $${holding.amount.toLocaleString()}`}
                                                                                placeholder="Enter $ Amount to be Sold"
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
                {/* {this.setState({ totalRent: rent })} */}
            </>
        );
    }
}
export default Holdings;
