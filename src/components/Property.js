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
                            {/* <img
                                src={tempHouse1}
                                alt="temp img"
                                className="col-md-6 img-fluid"
                            ></img> */}
                            <div
                                className="col-md-6"
                                style={{ float: "right" }}
                            >
                                <h1 className="card-title">
                                    Price: ${price.toLocaleString()}
                                </h1>
                                <Link to="/cart" className="btn btn-primary ">
                                    Add to Cart
                                </Link>
                            </div>

                            <div style={{ marginTop: "2rem" }}></div>
                            <div class="container-fluid">
                                <div className="row">
<div className="col-md-12 img-fluid"><Carousel/></div>
                                    {/* <div className="col-6 col-md-4 col-lg-3 col-xl-1">
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
                                </div> */}
{/* <ImageGallery /> */}
{/* <Carousel /> */}
               {/* <div className="col-6 col-md-4 col-lg-3 col-xl-2">
  <div classname="card"><a href="https://picsum.photos/1200/800?image=1033" data-lightbox="gallery" data-title="Image 1033"><img src="https://picsum.photos/300/200?image=1033" alt="Image 1033" classname="img-fluid" /></a>
    <div classname="card-body">
      <h6 classname="card-title mb-1">Image 1033</h6>
      <p classname="card-text text-small text-muted">Image sample text</p>
    </div>
  </div>
</div> */}
  
        
     
      
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
