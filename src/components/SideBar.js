import React, { Component } from 'react'
import { Link } from "react-router-dom";

// class SideBar extends Component {
    // render() {
const SideBar = props => {
  // let { sideBarStatus } = props;
  console.log("side bar props", props)
        return (
            <>
<nav id="sidebar">
  <div className="sidebar-header d-flex align-items-center">
    <Link to="/profile">
      <div className="avatar"><img src="img/avatar-9.jpg" alt="..." className="img-fluid rounded-circle" /></div></Link>
    <div className="title">
      <h1 className="h5">Sarah Bluth</h1>
      <p>CEO of the Bluth Company</p>
    </div>
  </div>
  <span className="heading">Main</span>
  <ul className="list-unstyled">
  
    <li className={props.sideBarStatus["properties"]}><a href="#propertiesDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-home" />Properties </a>
      <ul id="propertiesDropdown" className="collapse list-unstyled ">
        <li ><Link to="/properties">All</Link></li>
        <li ><Link to="/properties">Residencial</Link></li>        
        <li ><Link to="/properties">Retail</Link></li>        
        <li ><Link to="/properties">Office</Link></li>        
        <li ><Link to="/properties">Industrial</Link></li>      
        </ul>
    </li>
    
    <li className={props.sideBarStatus["dashboard"]}><Link to="/dashboard"> <i className="icon-chart" />Dashboard </Link>
    </li>

    <li className={props.sideBarStatus["holdings"]}><Link to="/holdings"> <i className="fa fa-bar-chart" />Holdings </Link>
    </li>

  </ul>
</nav>
            </>
        )
    
}

export default SideBar;