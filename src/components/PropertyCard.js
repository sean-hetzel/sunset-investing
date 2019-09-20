import React from "react";

const PropertyCard = props => {
    const { property } = props;
    return (
        <>
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <img
                        src={[props.tempHouseImage]}
                        alt="Card cap"
                        className="card-img-top img-fluid"
                    />
                    <div className="card-body">
                        <h5 className="card-title">${property.price.toLocaleString()}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Rent: ${property.rent.toLocaleString()}</li>
                        <li className="list-group-item">
                            Leased for the next {property.lease_length / 12} years.
                        </li>
                        <li className="list-group-item">
                            Appreciated by {property.last_year_appreciation}% last year.
                        </li>
                        <li className="list-group-item">
                            Appreciation is predicted to be {property.next_year_appreciation}% next
                            year.
                        </li>
                        <li className="list-group-item">
                            {property.beds_baths_sqft}
                        </li>
                        <li className="list-group-item">
                            {property.address}
                        </li>
                    </ul>
                    <div className="card-body">
                        {/* <a href="fake_url" className="card-link">
                                Card link
                            </a>
                            <a href="fake_url" className="card-link">
                                Another link here
                            </a><br/> */}
                        <a href="fake_url" className="btn btn-primary">
                            Add To Cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyCard;
