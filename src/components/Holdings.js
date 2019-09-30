import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

class Holdings extends Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "active" }
        };
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
                                                        <th>Name</th>
                                                        <th>Company</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>City</th>
                                                        <th>Orders</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.holdings
                                                        .filter(holding => {
                                                            return (
                                                                holding
                                                                    .investor_id == this.props.loginState.investor.id
                                                            );
                                                        })
                                                        .map(holding => {
                                                            return (
                                                                <tr>
                                                                    <td>
                                                                        <a
                                                                            href="javascript: return(void);"
                                                                            className="text-muted"
                                                                        >
                                                                            Nielsen
                                                                            Cobb
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            holding.id
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        nielsencobb@memora.com
                                                                    </td>
                                                                    <td>
                                                                        +1 (851)
                                                                        552-2735
                                                                    </td>
                                                                    <td>
                                                                        Graniteville
                                                                    </td>
                                                                    <td>0</td>
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
