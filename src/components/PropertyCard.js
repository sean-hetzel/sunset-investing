import React from "react";
import { Link } from "react-router-dom";
// import Carousel from "./Carousel";

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Property from "./Property";

class PropertyCard extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         property: this.props.property
    //     };
    // }

    render() {
        const {
            price,
            rent,
            lease_length,
            last_year_appreciation,
            next_year_appreciation,
            beds_baths_sqft,
            address
        } = this.props.property;

        return (
            <>
                <div className="col-md-6 col-lg-3">
                    {/* <Link to="/property"> */}
                    <div className="card">
                        <img
                            src={[this.props.tempHouseImage]}
                            alt="Card cap"
                            className="card-img-top img-fluid"
                        />

                        <div className="card-body">
                            <h5 className="card-title text-primary">
                                ${price.toLocaleString()}
                            </h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Rent: ${rent.toLocaleString()}
                            </li>
                            <li className="list-group-item">
                                Leased for the next {lease_length / 12} years.
                            </li>
                            <li className="list-group-item">
                                Appreciated by {last_year_appreciation}% last
                                year.
                            </li>
                            <li className="list-group-item">
                                Appreciation is predicted to be{" "}
                                {next_year_appreciation}% next year.
                            </li>
                            <li className="list-group-item">
                                {beds_baths_sqft}
                            </li>
                            <li className="list-group-item">{address}</li>
                        </ul>
                        <div className="card-body">
                            {/* <a href="fake_url" className="card-link">
                                Card link
                            </a>
                            <a href="fake_url" className="card-link">
                                Another link here
                            </a><br/> */}
                            <Link to="/property" className="btn btn-primary">
                                View Property
                            </Link>
                            <Link
                                to="/property"
                                className="btn btn-outline-primary"
                                style={{ marginLeft: "1.5em" }}
                            >
                                Temp Button
                            </Link>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            </>
        );
    }
}

export default PropertyCard;
