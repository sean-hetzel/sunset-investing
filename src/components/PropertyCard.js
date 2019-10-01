import React from "react";
// import { Link } from "react-router-dom";
import PercentageBar from "./PercentageBar";
// import Carousel from "./Carousel";

class PropertyCard extends React.Component {
    sumPropertyHeld = () => {
        let amount_held = 0;
        // eslint-disable-next-line
        this.props.holdings.map(holding => {
            if (holding.property_id === this.props.property.id) {
                amount_held += holding.amount;
            }
        });
        return amount_held;
    };

    render() {
        const {
            price,
            rent,
            lease_length,
            last_year_appreciation,
            next_year_appreciation
        } = this.props.property;

        return (
            <>
                <div className="card property-card">
                    <img
                        src={this.props.tempHouseImages[this.props.property.id]}
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
                            Appreciated by {last_year_appreciation}% last year.
                        </li>
                        <li className="list-group-item">
                            Appreciation is predicted to be{" "}
                            {next_year_appreciation}% next year.
                        </li>

                        <PercentageBar
                            percent={Math.round(
                                (this.sumPropertyHeld() / price) * 100
                            )}
                        />
                    </ul>
                </div>
            </>
        );
    }
}

export default PropertyCard;
