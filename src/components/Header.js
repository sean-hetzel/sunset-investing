import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
<header className="header">   
  <nav className="navbar navbar-expand-lg">
    <div className="search-panel">
      <div className="search-inner d-flex align-items-center justify-content-center">
        <div className="close-btn">Close <i className="fa fa-close" /></div>
        <form id="searchForm" action="#">
          <div className="form-group">
            <input type="search" name="search" placeholder="What are you searching for..." />
            <button type="submit" className="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <div className="navbar-header">
        {/* Navbar Header*/}<a href="index.html" className="navbar-brand">
          <div className="brand-text brand-big visible text-uppercase"><strong className="text-primary">SUNSET</strong><strong>INVESTING</strong></div>
          <div className="brand-text brand-sm"><strong className="text-primary">D</strong><strong>A</strong></div></a>
        {/* Sidebar Toggle Btn*/}
        <button className="sidebar-toggle"><i className="fa fa-long-arrow-left" /></button>
      </div>
      <div className="right-menu list-inline no-margin-bottom">    
        <div className="list-inline-item"><a href="fake_url" className="search-open nav-link"><i className="icon-magnifying-glass-browser" /></a></div>
        <div className="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="fake_url" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link messages-toggle"><i className="icon-email" /><span className="badge dashbg-2">5</span></a>
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
        </div>
        {/* Log out               */}
        <div className="list-inline-item logout">                   <a id="logout" href="login.html" className="nav-link"> <span className="d-none d-sm-inline">Logout </span><i className="icon-logout" /></a></div>
      </div>
    </div>
  </nav>
</header>

            </>
        )
    }
}
