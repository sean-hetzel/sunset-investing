import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "/Users/flatironschool/Development/sunset-investing/src/images/sunset-investing-logo.png";
function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export default class Header extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/vendor/jquery-validation/jquery.validate.min.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "/js/front.js";
    script2.async = true;
    document.body.appendChild(script2);

}

    render() {
      console.log("logged in?:", !isEmpty(this.props.loginState))
        return (
            <>
<header className="header">   
  <nav className="navbar navbar-expand-lg">
    {/* <div className="search-panel">
      <div className="search-inner d-flex align-items-center justify-content-center">
        <div className="close-btn">Close <i className="fa fa-close" /></div>
        <form id="searchForm" action="#">
          <div className="form-group">
            <input type="search" name="search" placeholder="What are you searching for..." />
            <button type="submit" className="submit">Search</button>
          </div>
        </form>
      </div>
    </div> */}
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <div className="navbar-header">
        {/* Navbar Header*/}<Link to="/" className="navbar-brand">
          <img src={logo} alt="sunset investing logo" className="img-fluid" style={{height:"60px", width:"60px", marginRight:"10px", display:"inline"}}></img>
          <div className="brand-text brand-big visible text-uppercase"><strong className="text-primary">SUNSET</strong><strong>INVESTING</strong></div>
          <div className="brand-text brand-sm"><strong className="text-primary">D</strong><strong>A</strong></div></Link>
        {/* Sidebar Toggle Btn*/}
        <button className="sidebar-toggle"><i className="fa fa-long-arrow-left" /></button>
      </div>
      <div className="right-menu list-inline no-margin-bottom">   
      <h4 className="list-inline-item text-primary font-weight-light">Total Rent ${this.props.rent}.</h4>      
  <div className="list-inline-item"><Link to="/cart" className="nav-link">Cart <i className="icon-contract" />{(this.props.cart.length >= 1)?<span className="badge dashbg-2">{(this.props.cart.length)}</span>:<span></span>}</Link></div>

        {/* <div className="list-inline-item"><a href="fake_url" className="nav-link"><i className="icon-magnifying-glass-browser" /></a></div> */}
        {/* <div className="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="fake_url" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link messages-toggle"><i className="icon-email" /><span className="badge dashbg-2">5</span></a>
          <div aria-labelledby="navbarDropdownMenuLink1" className="dropdown-menu messages"><a href="fake_url" className="dropdown-item message d-flex align-items-center">
              <div className="profile"><img src="img/avatar-3.jpg" alt="..." className="img-fluid" />
                <div className="status online" />
              </div>
              <div className="content">   <strong className="d-block">Nadia Halsey</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">9:30am</small></div></a><a href="fake_url" className="dropdown-item message d-flex align-items-center">
              <div className="profile"><img src="img/avatar-2.jpg" alt="..." className="img-fluid" />
                <div className="status away" />
              </div>
              <div className="content">   <strong className="d-block">Peter Ramsy</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">7:40am</small></div></a><a href="fake_url" className="dropdown-item message d-flex align-items-center">
              <div className="profile"><img src="img/avatar-1.jpg" alt="..." className="img-fluid" />
                <div className="status busy" />
              </div>
              <div className="content">   <strong className="d-block">Sam Kaheil</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">6:55am</small></div></a><a href="fake_url" className="dropdown-item message d-flex align-items-center">
              <div className="profile"><img src="img/avatar-5.jpg" alt="..." className="img-fluid" />
                <div className="status offline" />
              </div>
              <div className="content">   <strong className="d-block">Sara Wood</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">10:30pm</small></div></a><a href="fake_url" className="dropdown-item text-center message"> <strong>See All Messages <i className="fa fa-angle-right" /></strong></a></div>
        </div> */}
        {/* Log out               */}
        {/* <div className="list-inline-item logout">                   <Link to="/signup" id="logout" className="nav-link"> <span className="d-none d-sm-inline">Logout </span><i className="icon-logout" /></Link></div> */}
        <div className="list-inline-item">                   {(isEmpty(this.props.loginState))?<Link to="/login" id="login" className="nav-link"> <span className="d-none d-sm-inline">Login </span><i className="icon-user" /></Link>:<Link to="/" onClick={() => this.props.logout()} className="d-none d-sm-inline nav-link"><span className="d-none d-sm-inline">Logout </span><i className="icon-logout" /></Link>}</div>

      </div>
    </div>
  </nav>
</header>

            </>
        )
    }
}
 