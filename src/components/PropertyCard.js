import React from "react";
import tempHouse from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";

class PropertyCard extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <img
                            src={tempHouse}
                            alt="Card cap"
                            className="card-img-top img-fluid"
                        />
                        <div className="card-body">
                            <h5 className="card-title">$3,675,000</h5>
                            {/* <p className="card-text">
                            Golden Nugget Award of Merit custom Contemporary home on 5+ private acres w/panoramic views. Architectural features: floating roofs, curvilinear elements expressed in the desert vernacular of Arizona brown schist, treated copper fascias, walls of glass and polished aggregate floors. 
                            </p> */}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            4 bd | 5 ba | 6,421 sqft
                            </li>
                            <li className="list-group-item">
                            39602 N Charles Blair Macdonald Rd, Scottsdale, AZ 85262
                            </li>
                            <li className="list-group-item">
                            Total Rent: $5,728
                            </li>
                            <li className="list-group-item">
                            Property value has risen by 4.0% in the last year and is predicted to rise by 2.5% next year.
                            </li>
                        </ul>
                        <div className="card-body">
                            {/* <a href="fake_url" className="card-link">
                                Card link
                            </a>
                            <a href="fake_url" className="card-link">
                                Another link here
                            </a><br/> */}
                            <a href="fake_url" className="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PropertyCard;
