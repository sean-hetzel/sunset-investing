import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

class OrderSuccessful extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "" }
        };
    }

    render() {
        return (
            <>
            <Header cart={this.props.cart} loginState={this.props.loginState} logout={this.props.logout}/>
                            <div className="d-flex align-items-stretch">
                <SideBar sideBarStatus={this.state.sideBarStatus} />
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Order Confirmed</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Order Confirmed</li>
                        </ul>
                    </div>

                    <section>
                        <div className="container-fluid"></div>
                        <h1 className="col-11 text-primary">Order Successfully Completed!</h1>
                        <div className="container-fluid">
                        <div className="row" style={{marginBottom:"2rem"}}>
                            
                                <div className="col-md-12">
                                <p>You can monitor the status of your properties in you Dashboard and Holdings.</p>
                                    <Link
                                        to="/dashboard"
                                        className="btn btn-outline-primary"
                                        style={{marginRight:"2rem"}}
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        to="/holdings"
                                        className="btn btn-outline-primary"
                                    >
                                        Holdings
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="row" style={{marginBottom:"2rem"}}>
                                <div className="col-md-12">
                                <p>Or return Home.</p>

                                    <Link
                                        to="/"
                                        className="btn btn-primary"
                                    >
                                        Home
                                    </Link>
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

export default OrderSuccessful;
