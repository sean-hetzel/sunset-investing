import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

class Properties extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "active", dashboard: "", holdings: "" }
        };
    }

    render() {
        console.log("properties props:", this.props);
        return (
            <>
                <Header
                    cart={this.props.cart}
                    loginState={this.props.loginState}
                    logout={this.props.logout}
                    time={this.props.time}
                />
                <div className="d-flex align-items-stretch">
                    <SideBar sideBarStatus={this.state.sideBarStatus} />
                    <div className="page-content">
                        <div className="page-header no-margin-bottom">
                            <div className="container-fluid">
                                <h2 className="h5 no-margin-bottom">
                                    Properties
                                </h2>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Properties
                                </li>
                            </ul>
                        </div>
                        <section>
                            <div className="container-fluid">
                                <div className="row">
                                    {this.props.properties.map(property => {
                                        return (
                                            <>
                                                <div className="col-md-6 col-lg-3">
                                                    <Link
                                                        to={`/properties/${property.id}`}
                                                        className="property-card"
                                                    >
                                                        <PropertyCard
                                                            key={property.id}
                                                            property={property}
                                                            holdings={
                                                                this.props
                                                                    .holdings
                                                            }
                                                            tempHouseImages={
                                                                this.props
                                                                    .tempHouseImages
                                                            }
                                                        />
                                                    </Link>
                                                </div>
                                            </>
                                        );
                                    })}
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

export default Properties;
