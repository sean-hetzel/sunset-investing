import React from "react";
import { Link } from "react-router-dom";
import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";

class Property extends React.Component {
    render() {
        // const {
        //     price,
        //     rent,
        //     lease_length,
        //     last_year_appreciation,
        //     next_year_appreciation,
        //     beds_baths_sqft,
        //     address
        // } = this.props.property;

        console.log("property page", this.props);
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
                            <li className="breadcrumb-item active">Property</li>
                        </ul>
                    </div>
                    <section>
                        <div className="container-fluid">
                            <img
                                src={tempHouse1}
                                alt="temp img"
                                className="col-md-6"
                            ></img>
                        </div>
                        <div className="col-md-6">
                            <h1>This is a property</h1>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Property;
