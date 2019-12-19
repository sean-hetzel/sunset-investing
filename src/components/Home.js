import React from "react";
import { Link } from "react-router-dom";

import tempHomeImage from "../images/chris-tingom-BaDrWEr794Q-unsplash.jpg";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
// import tempHomeImage2 from "/Users/flatironschool/Development/sunset-investing/src/images/avi-waxman-pJk4RRS7urs-unsplash.jpg"
// import tempHomeImage3 from "/Users/flatironschool/Development/sunset-investing/src/images/avi-waxman-jxpadpazkfw-unsplash.jpg";
// style={{backgroundImage: `url(${tempHomeImage})`}}
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "" }
        };
    }

    componentDidMount() {
        // just to let visitor know this site is a work in progress
        window.alert(
            "Sorry for the alert but I wanna let you know THIS SITE IS UNFINISHED! It is very buggy and I am no longer working on it. Instead, I am working on Sunset Investing V2. Version 2 will use a different UI template and will use Redux and will be a lot better (duh). Thanks! :) \n\n\n                                   ⬆️‼️🏜️🌵🏡🌆🏘️🌅🌴‼️⬆️"
        );
    }

    render() {
        return (
            <>
                <Header
                    cart={this.props.cart}
                    loginState={this.props.loginState}
                    logout={this.props.logout}
                    rent={this.props.rent}
                />
                <div className="d-flex align-items-stretch">
                    <SideBar sideBarStatus={this.state.sideBarStatus} />
                    <div className="page-content">
                        <div className="page-header no-margin-bottom">
                            <div className="container-fluid">
                                <h2 className="h5 no-margin-bottom">Home</h2>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="container-fluid col-12">
                            {/* <div style={{backgroundImage: `url(${tempHomeImage})`}}
                            src={tempHomeImage}
                            alt="home"
                            className="col-11 img-fluid"
                        ></div><br></br> */}
                            {/* <a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: 12, fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: 3}} href="https://unsplash.com/@aviosly?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Avi Waxman"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: 12, width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Avi Waxman</span></a>
<a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: 12, fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: 3}} href="https://unsplash.com/@aviosly?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Avi Waxman"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: 12, width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Avi Waxman</span></a> */}
                            <h1
                                className="col-12 text-primary text-center"
                                style={{
                                    marginTop: "4em",
                                    marginBottom: "2em"
                                }}
                            >
                                Real Estate Investing. For The Modern Age.
                            </h1>
                            <h2 className="col-12 text-primary text-center">
                                How it Works
                            </h2>
                            <p
                                style={{
                                    position: "absolute",
                                    marginLeft: "25%",
                                    width: "50em",
                                    marginTop: "4em"
                                }}
                                className="col-6 text-center"
                            >
                                Real estate investing platform where investors
                                can buy/sell fractions of rental properties akin
                                to buying stocks of companies. The advantages
                                for buying just a fraction of rental properties
                                are increased diversification and accessibility.
                                You'll get a fraction of the rent and
                                appreciation.
                            </p>
                            <img
                                style={{ marginTop: "16em" }}
                                src={tempHomeImage}
                                alt="Card cap"
                                className="image-fluid col-12"
                            />
                            <a
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    textDecoration: "none",
                                    padding: "4px 6px",
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    lineHeight: "1.2",
                                    display: "inline-block",
                                    borderRadius: 3
                                }}
                                href="https://unsplash.com/@christingom?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Download free do whatever you want high-resolution photos from Chris Tingom"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "2px 3px"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            height: 12,
                                            width: "auto",
                                            position: "relative",
                                            verticalAlign: "middle",
                                            top: "-2px",
                                            fill: "white"
                                        }}
                                        viewBox="0 0 32 32"
                                    >
                                        <title>unsplash-logo</title>
                                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                                    </svg>
                                </span>
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "2px 3px"
                                    }}
                                >
                                    Chris Tingom
                                </span>
                            </a>
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
        );
    }
}

export default Home;
