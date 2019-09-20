import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

class Properties extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Properties</h2>
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
                                        <PropertyCard
                                            key={property.id}
                                            property={property}
                                        />
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

export default Properties;
