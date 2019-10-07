import React from "react";
import { Link } from "react-router-dom";

// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/public/js/components-map.js";
// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/distribution-premium/js/components-map.js";
import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
import SideBar from "./SideBar";
// import { createSimpleMap } from "/Users/flatironschool/Development/sunset-investing/src/components/GoogleMaps.js";
import Carousel from "./Carousel";
import PercentageBar from "./PercentageBar";

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
            // console.log(property.id, id)
            if (property.id === id) {
                foundProperty = property;
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
        // this.getProperty()
        console.log("property stuff:", price);
        console.log(
            "props of sum:",
            this.props.sumPropertyHeld()[parseInt(this.props.match.params.id)]
        );
        return (
            <>
                <SideBar sideBarStatus={this.state.sideBarStatus} />
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Property</h2>
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
                            <li className="breadcrumb-item active">Property</li>
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
                                                Price: ${price.toLocaleString()}
                                            </li>
                                            <li className="list-group-item text-primary">
                                                Rent: ${rent.toLocaleString()}
                                            </li>
                                            <li className="list-group-item">
                                                Leased for the next{" "}
                                                {lease_length / 12} years.
                                            </li>
                                            <li className="list-group-item">
                                                Appreciated by{" "}
                                                {last_year_appreciation}% last
                                                year.
                                            </li>
                                            <li className="list-group-item">
                                                Appreciation is predicted to be{" "}
                                                {next_year_appreciation}% next
                                                year.
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <Link
                                                to="/cart"
                                                className="btn btn-primary"
                                            >
                                                Add to Cart
                                            </Link>
                                            <Link
                                                to="/property"
                                                className="btn btn-outline-primary"
                                                style={{ marginLeft: "1.5em" }}
                                            >
                                                Add to Watchlist
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* {map = createSimpleMap(id, lat, long, markerImage)} */}
                            </div>
                        </div>

                        <div className="col-md-6" style={{ float: "right" }}>
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title text-primary text-center text-uppercase">
                                        Details
                                    </h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-primary">
                                        Price: ${price.toLocaleString()}
                                    </li>
                                    <li className="list-group-item text-primary">
                                        Rent: ${rent.toLocaleString()}
                                    </li>
                                    <li className="list-group-item">
                                        Leased for the next {lease_length / 12}{" "}
                                        years.
                                    </li>
                                    <li className="list-group-item">
                                        Appreciated by {last_year_appreciation}%
                                        last year.
                                    </li>
                                    <li className="list-group-item">
                                        Appreciation is predicted to be{" "}
                                        {next_year_appreciation}% next year.
                                    </li>
                                    <li className="list-group-item text-capitalize">
                                        {zone}
                                    </li>
                                    <li className="list-group-item">
                                        {beds_baths_sqft}
                                    </li>
                                    <li className="list-group-item">
                                        {address}
                                    </li>
                                    <PercentageBar
                                        percent={Math.round(
                                            (total / price) * 100
                                        )}
                                    />
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Property;
