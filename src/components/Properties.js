import React from "react";
import PropertyCard from "./PropertyCard";

class Properties extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Cards</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Cards </li>
                        </ul>
                    </div>
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <PropertyCard />
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Properties;
