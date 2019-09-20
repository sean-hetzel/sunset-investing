import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SideBar extends Component {
    render() {
        return (
            <>
    {/* Sidebar Navigation*/}
<nav id="sidebar">
  {/* Sidebar Header*/}
  <div className="sidebar-header d-flex align-items-center"><a href="pages-profile.html">
      <div className="avatar"><img src="img/avatar-11.jpg" alt="..." className="img-fluid rounded-circle" /></div></a>
    <div className="title">
      <h1 className="h5">Michael Bluth</h1>
      <p>CEO of the Bluth Company</p>
    </div>
  </div>
  {/* Sidebar Navidation Menus*/}<span className="heading">Main</span>
  <ul className="list-unstyled">
    {/* <li className="active"><a href="index.html"> <i className="icon-home" />Home </a></li>
    <li><a href="#tablesDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-grid" />Tables </a>
      <ul id="tablesDropdown" className="collapse list-unstyled ">
        <li><a href="tables.html">Bootstrap tables</a></li>
        <li><a href="tables-datatable.html">Datatable</a></li>
      </ul>
    </li> */}
    <li className="active">
    <Link to="/properties">
    <i className="icon-home" />
                    Properties
                </Link>
    </li>
    <li><a href="#chartsDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-bar-chart" />Charts </a>
      <ul id="chartsDropdown" className="collapse list-unstyled ">
        <li><a href="charts.html">Charts</a></li>
        <li><a href="charts-gauge-sparkline.html">Gauge + Sparkline</a></li>
      </ul>
    </li>
    <li><a href="#formsDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-padnote" />Forms </a>
      <ul id="formsDropdown" className="collapse list-unstyled ">
        <li><a href="forms.html">Basic forms</a></li>
        <li><a href="forms-advanced.html">Advanced forms</a></li>
        <li><a href="forms-autocomplete.html">Autocomplete</a></li>
        <li><a href="forms-dropzone.html">Files upload</a></li>
        <li><a href="forms-texteditor.html">Text editor</a></li>
        <li><a href="forms-validation.html">Validation</a></li>
      </ul>
    </li>
    <li><a href="#componentsDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-light-bulb" />Components </a>
      <ul id="componentsDropdown" className="collapse list-unstyled ">
        <li><a href="components-cards.html">Cards</a></li>
        <li><a href="components-calendar.html">Calendar</a></li>
        <li><a href="components-gallery.html">Gallery</a></li>
        <li><a href="components-map.html">Maps</a></li>
        <li><a href="components-notifications.html">Notifications</a></li>
        <li><a href="components-loading-buttons.html">Loading buttons</a></li>
        <li><a href="components-preloader.html">Preloaders</a></li>
      </ul>
    </li>
    <li><a href="#pagesDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-website" />Pages </a>
      <ul id="pagesDropdown" className="collapse list-unstyled ">
        <li><a href="pages-contacts.html">Contacts</a></li>
        <li><a href="pages-invoice.html">Invoice</a></li>
        <li><a href="login.html">Login page</a></li>
        <li><a href="login-2.html">Login v.2 <span className="badge badge-info">New</span></a></li>
        <li><a href="pages-profile.html">Profile</a></li>
        <li><a href="pages-pricing.html">Pricing table</a></li>
      </ul>
    </li>
  </ul><span className="heading">Extras</span>
  <ul className="list-unstyled">
    <li> <a href="#"> <i className="icon-settings" />Demo </a></li>
    <li> <a href="#"> <i className="icon-writing-whiteboard" />Demo </a></li>
    <li> <a href="#"> <i className="icon-chart" />Demo </a></li>
  </ul>
</nav>
{/* Sidebar Navigation end*/}

            </>
        )
    }
}
