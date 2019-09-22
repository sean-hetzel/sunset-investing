import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SideBar extends Component {
    render() {
        return (
            <>
<nav id="sidebar">
  <div className="sidebar-header d-flex align-items-center"><a href="pages-profile.html">
      <div className="avatar"><img src="img/avatar-9.jpg" alt="..." className="img-fluid rounded-circle" /></div></a>
    <div className="title">
      <h1 className="h5">Sarah Bluth</h1>
      <p>CEO of the Bluth Company</p>
    </div>
  </div>
  <span className="heading">Main</span>
  <ul className="list-unstyled">
  
    <li className="active"><a href="#propertiesDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-home" />Properties </a>
      <ul id="propertiesDropdown" className="collapse list-unstyled ">
        <li ><Link to="/properties">All</Link></li>
        <li><a href="forms-autocomplete.html">Residencial</a></li>
        <li><a href="forms-dropzone.html">Retail</a></li>
        <li><a href="forms-texteditor.html">Office</a></li>
        <li><a href="forms-validation.html">Industrial</a></li>
      </ul>
    </li>
    
    <li ><Link to="/dashboard" > 
    <i className="fa fa-bar-chart" />Dashboard </Link>
    </li>

  </ul>
</nav>
            </>
        )
    }
}
