import React from "react";
import { Link } from "react-router-dom";

// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/public/js/components-map.js";
// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/distribution-premium/js/components-map.js";
import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
import SideBar from "./SideBar";
import { createSimpleMap } from "/Users/flatironschool/Development/sunset-investing/src/components/GoogleMaps.js";
import Carousel from "./Carousel";

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
            sideBarStatus: { properties: "active", dashboard: "", holdings: "" }
        }
    }

    getProperty = () => {
        const id = parseInt(this.props.match.params.id);

        let foundProperty = {price: 0, rent: 0, lease_length: 0, last_year_appreciation: 0, next_year_appreciation: 0, beds_baths_sqft: "", address: "", zone: ""}

        for (let property of this.props.property) {
            // console.log(property.id, id)
            if (property.id == id) {
                foundProperty = property
                console.log("price", property.price)
            }
        }
        console.log("property:", foundProperty)
        return foundProperty
    }

    render() {
        const {price, rent, lease_length, last_year_appreciation, next_year_appreciation, beds_baths_sqft, address, zone} = this.getProperty()
        // this.getProperty()
        console.log("property stuff:", price)
        return (
            <>
            <SideBar sideBarStatus={this.state.sideBarStatus}/>
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

                            <div
                                className="col-md-6"
                                style={{ float: "right" }}>
                        
                                
                <div className="card">
                  <div className="card-header">Price: ${price.toLocaleString()}</div>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> 
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Vice tote bag shabby chic  </li>
                    <li className="list-group-item">Portland Etsy craft beer</li>
                    <li className="list-group-item">hi</li>

                  </ul>
                  <div className="card-body">
                  <Link to="/cart" className="btn btn-primary">
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
                            <div style={{ marginTop: "2rem" }}></div>
                            <div class="container-fluid">
                                <div className="row">
<div className="col-md-12 img-fluid"><Carousel/></div>

          {/* {map = createSimpleMap(id, lat, long, markerImage)} */}
                  
    
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Property;
