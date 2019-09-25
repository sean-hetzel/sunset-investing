import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
// import Property from "./Property";
// import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
// import tempHouse2 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Estrella-Altamira_Front-Elevation_920.jpg";
// import tempHouse3 from "/Users/flatironschool/Development/sunset-investing/src/images/01-Palisades-Santee_Front-Elevation-Twilight_920.jpg";
// import tempHouse4 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Solano-Artemis_Front-Elevation_1920.jpg";
// import tempHouse5 from "/Users/flatironschool/Development/sunset-investing/src/images/07-Canyon-Oaks-Sage_Front-Elevation_CC_920.jpg";
// import tempHouse6 from "/Users/flatironschool/Development/sunset-investing/src/images/14-025-03-Rear-Exterior-over-Fire-Pit.jpg";
import SideBar from "./SideBar";

// const tempHouseArray = [
//     tempHouse1,
//     tempHouse2,
//     tempHouse6,
//     tempHouse3,
//     tempHouse4,
//     tempHouse5
// ];
// let i = 0;

// const tempHouseImages = {1: [tempHouse1], 2: [tempHouse3], 3: [tempHouse6], 4: [tempHouse4], 5: [tempHouse5], 6: [tempHouse2]}



class Properties extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "active", dashboard: "", holdings: "" }
        };
    }
    render() {

        return (
            <>
                <SideBar sideBarStatus={this.state.sideBarStatus} />
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
                                        <>
                                            <div className="col-md-6 col-lg-3">
                                                <Link
                                                    to={`/properties/${property.id}`}
                                                    className="property-card"
                                                >
                                                    <PropertyCard
                                                        key={property.id}
                                                        property={property}
                                                        holdings={this.props.holdings}
                                                        tempHouseImages={this.props.tempHouseImages}
                                                        // tempHouseImage={
                                                        //     tempHouseArray[i]
                                                        // }
                                                        // {...i++}
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
            </>
        );
    }
}

export default Properties;
