import React from "react";
import { Link } from "react-router-dom";

// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/public/js/components-map.js";
// import createSimpleMap from "/Users/flatironschool/Development/sunset-investing/distribution-premium/js/components-map.js";
import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { createSimpleMap } from "/Users/flatironschool/Development/sunset-investing/src/components/GoogleMaps.js";
import Carousel from "./Carousel";
import PercentageBar from "./PercentageBar";

// coordinates for the center of the map and the marker
// let lat = 40.732346;
// let long = -74.0014247;
// if using with other than default style, change the path to the colour letiant
// of the marker. E.g. to img/map-marker-violet.png.
// let markerImage = 'img/map-marker-default.png';
// id of the map DOM element
// let id = 'map-3';
// let map;

let PROPERTY;

class Property extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "active", dashboard: "", holdings: "" }
        };
    }
    componentDidMount () {
    //  const script16 = document.createElement("link");
    //  script16.src = "/vendor/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css"
    //  script16.async = true;
    //  document.head.appendChild(script16);

     const script1 = document.createElement("script");
     script1.src = "vendor/jquery/jquery.min.js"
     script1.async = true;
     document.body.appendChild(script1);

     const script2 = document.createElement("script");
     script2.src = "vendor/popper.js/umd/popper.min.js"
     script2.async = true;
     document.body.appendChild(script2);

     const script3 = document.createElement("script");
     script3.src = "vendor/bootstrap/js/bootstrap.min.js"
     script3.async = true;
     document.body.appendChild(script3);

     const script4 = document.createElement("script");
     script4.src = "vendor/jquery.cookie/jquery.cookie.js"
     script4.async = true;
     document.body.appendChild(script4);

     const script5 = document.createElement("script");
     script5.src = "vendor/chart.js/Chart.min.js"
     script5.async = true;
     document.body.appendChild(script5);

     const script6 = document.createElement("script");
     script6.src = "vendor/jquery-validation/jquery.validate.min.js"
     script6.async = true;
     document.body.appendChild(script6);

     const script7 = document.createElement("script");
     script7.src = "vendor/bootstrap-select/js/bootstrap-select.min.js"
     script7.async = true;
     document.body.appendChild(script7);

     const script8 = document.createElement("script");
     script8.src = "vendor/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js"
     script8.async = true;
     document.body.appendChild(script8);

     const script9 = document.createElement("script");
     script9.src = "vendor/nouislider/nouislider.min.js"
     script9.async = true;
     document.body.appendChild(script9);

     const script10 = document.createElement("script");
     script10.src = "vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js"
     script10.async = true;
     document.body.appendChild(script10);

     const script11 = document.createElement("script");
     script11.src = "vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js"
     script11.async = true;
     document.body.appendChild(script11);

     const script12 = document.createElement("script");
     script12.src = "vendor/jasny-bootstrap/js/jasny-bootstrap.min.js"
     script12.async = true;
     document.body.appendChild(script12);

     const script13 = document.createElement("script");
     script13.src = "vendor/multiselect/js/jquery.multi-select.js"
     script13.async = true;
     document.body.appendChild(script13);

     const script14 = document.createElement("script");
     script14.src = "js/forms-advanced.js"
     script14.async = true;
     document.body.appendChild(script14);

     const script15 = document.createElement("script");
     script15.src = "js/front.js"
     script15.async = true;
     document.body.appendChild(script15);
    }

    // /Users/flatironschool/Development/sunset-investing/public/vendor/bootstrap-touchspin/jquery.bootstrap-touchspin.js
    // /Users/flatironschool/Development/sunset-investing/public/js/forms-advanced.js

    // componentDidMount () {
    //     const script = document.createElement("script");
    
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/js/forms-validation.js';
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/vendor/jquery-validation/jquery.validate.js';
    //     script.src = "vendor/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js";
    //     script.async = true;
    
    //     document.body.appendChild(script);

    //     // "/Users/flatironschool/Development/sunset-investing/public/js/charts-home.js"
    
    //     const script3 = document.createElement("script");
    
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/js/forms-validation.js';
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/vendor/jquery-validation/jquery.validate.js';
    //     script3.src = "js/forms-advanced.js"
    //     ;
    //     script3.async = true;
    
    //     document.body.appendChild(script3);


    //     // "%PUBLIC_URL%/js/home-premium.js"
    //     const script4 = document.createElement("script");
    
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/js/forms-validation.js';
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/vendor/jquery-validation/jquery.validate.js';
    //     script4.src = "/js/home-premium.js"
    //     ;
    //     script4.async = true;
    
    //     document.body.appendChild(script4);
    // // "/js/charts-home.js"
    //     const script2 = document.createElement("script");
    
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/js/forms-validation.js';
    //     // script.src = '/Users/flatironschool/Development/sunset-investing/public/vendor/jquery-validation/jquery.validate.js';
    //     script2.src = "/js/front.js";
    //     script2.async = true;
    
    //     document.body.appendChild(script2);
    
        
    //   }
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
                PROPERTY = property;
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
        console.log("property page props:", this.props)
        return (
            <>
            <Header cart={this.props.cart} />
                            <div className="d-flex align-items-stretch">
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
                                            <PercentageBar
                                                percent={Math.round(
                                                    (total / price) * 100
                                                )}
                                            />

<div className="block">
  <div className="title"><strong className="d-block">Select Amount</strong><span className="d-block"></span></div>
  {/* <div className="block-body"> */}
    <form className="form-horizontal">
      {/* <div className="form-group row"> */}
        {/* <label className="col-sm-3 form-control-label">Variant 3</label> */}
        <div className="col-sm-9">
          <input type="text" defaultValue={150000} name="touchspin2" className="form-control" />
        </div>
      {/* </div> */}
    </form>
  {/* </div> */}
</div>

<div className="block">
                  <div className="title"><strong className="d-block">Bootstrap Touchspin</strong><span className="d-block">Read more about Touchspin at <a href="https://www.virtuosoft.eu/code/bootstrap-touchspin/">https://www.virtuosoft.eu/code/bootstrap-touchspin/</a>.</span></div>
                  <div className="block-body">
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Variant 1</label>
                        <div className="col-sm-9">
                          <input type="text" name="touchspin0" className="form-control bootstrap-touchspin"></input>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Variant 2</label>
                        <div className="col-sm-9">
                          <input type="text" value="55.50" name="touchspin1" className="form-control"></input>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Variant 3</label>
                        <div className="col-sm-9">
                          <input type="text" value="1500" name="touchspin2" className="form-control"></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>




                                            <li className="list-group-item text-primary">
                                            Your share of rent will be ${Math.round((150000/price)*rent)} per month.
                                            </li> 
                                            <li className="list-group-item text-primary">
                                            Profit from appreciation could be ${Math.round(price*(next_year_appreciation/100)*(lease_length/12)).toLocaleString()} if it stays constant.*
                                            </li> 
                                            <li className="list-group-item text-primary">
                                            Total profit could be ${Math.round((price*(next_year_appreciation/100)*(lease_length/12))+((150000/price)*rent)*lease_length).toLocaleString()} if sold {lease_length/12} years.*
                                            </li> 

                                        </ul>
                                        <div className="card-body">
                                            <Link
                                                to="/cart"
                                                className="btn btn-primary"
                                                key={this.props.property.id}
                                                onClick={() => this.props.addToCart(PROPERTY)}
                                            >
                                                Add to Cart
                                            </Link>

                                            <Link
                                                to="/properties"
                                                className="btn btn-outline-primary"
                                                style={{ marginLeft: "1.5em" }}
                                            >
                                                Calculate Return
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
                                    <li className="list-group-item text-capitalize">
                                        {zone}
                                    </li>
                                    <li className="list-group-item">
                                        {beds_baths_sqft}
                                    </li>
                                    <li className="list-group-item">
                                        {address}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
</div>
            </>
        );
    }
}

export default Property;
