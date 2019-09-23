import React from "react";
import { Link } from "react-router-dom";
// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/public/js/components-map.js";
// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/distribution-premium/js/components-map.js";
import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
import SideBar from "./SideBar";
// coordinates for the center of the map and the marker
let lat = 40.732346;
let long = -74.0014247;
// if using with other than default style, change the path to the colour letiant 
// of the marker. E.g. to img/map-marker-violet.png.
let markerImage = 'img/map-marker-default.png';
// id of the map DOM element
let id = 'map-3';
let map;
class Property extends React.Component {
    constructor(){
        super()
        this.state = {
            sideBarStatus: ["", "active"]
        }
    }
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
            <SideBar/>
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
                        {/* <div className="container-fluid"> */}
                            <img
                                src={tempHouse1}
                                alt="temp img"
                                className="col-md-6 img-fluid"
                            ></img>

                            <div
                                className="col-md-6"
                                style={{ float: "right" }}
                            >
                                <h1 className="card-title">
                                    This is a property
                                </h1>
                                <Link to="/cart" className="btn btn-primary ">
                                    Add to Cart
                                </Link>
                            </div>

                            <div style={{ marginTop: "2rem" }}></div>
                            <div class="container-fluid">
                                <div className="row">
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                        <img
                                            src={tempHouse1}
                                            alt="temp img"
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                        <img
                                            src={tempHouse1}
                                            alt="temp img"
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                        <img
                                            src={tempHouse1}
                                            alt="temp img"
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                        <img
                                            src={tempHouse1}
                                            alt="temp img"
                                            className="img-fluid"
                                        ></img>
                                    {/* </div> */}
                                </div>

                              
        
      
                  
    
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Property;
