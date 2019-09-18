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
        <div className="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="fake_url" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link messages-toggle"><i className="icon-email" /><span className="badge dashbg-1">5</span></a>
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
        {/* Tasks*/}
        <div className="list-inline-item dropdown"><a id="navbarDropdownMenuLink2" href="fake_url" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link tasks-toggle"><i className="icon-new-file" /><span className="badge dashbg-3">9</span></a>
          <div aria-labelledby="navbarDropdownMenuLink2" className="dropdown-menu tasks-list"><a href="fake_url" className="dropdown-item">
              <div className="text d-flex justify-content-between"><strong>Task 1</strong><span>40% complete</span></div>
              <div className="progress">
                <div role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} className="progress-bar dashbg-1" />
              </div></a><a href="fake_url" className="dropdown-item">
              <div className="text d-flex justify-content-between"><strong>Task 2</strong><span>20% complete</span></div>
              <div className="progress">
                <div role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} className="progress-bar dashbg-3" />
              </div></a><a href="fake_url" className="dropdown-item">
              <div className="text d-flex justify-content-between"><strong>Task 3</strong><span>70% complete</span></div>
              <div className="progress">
                <div role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar dashbg-2" />
              </div></a><a href="fake_url" className="dropdown-item">
              <div className="text d-flex justify-content-between"><strong>Task 4</strong><span>30% complete</span></div>
              <div className="progress">
                <div role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} className="progress-bar dashbg-4" />
              </div></a><a href="fake_url" className="dropdown-item">
              <div className="text d-flex justify-content-between"><strong>Task 5</strong><span>65% complete</span></div>
              <div className="progress">
                <div role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} className="progress-bar dashbg-1" />
              </div></a><a href="fake_url" className="dropdown-item text-center"> <strong>See All Tasks <i className="fa fa-angle-right" /></strong></a>
          </div>
        </div>
        {/* Tasks end*/}
        {/* Megamenu*/}
        <div className="list-inline-item dropdown menu-large"><a href="fake_url" data-toggle="dropdown" className="nav-link">Mega <i className="fa fa-ellipsis-v" /></a>
          <div className="dropdown-menu megamenu">
            <div className="row">
              <div className="col-lg-3 col-md-6"><strong className="text-uppercase">Elements Heading</strong>
                <ul className="list-unstyled mb-3">
                  <li><a href="fake_url">Lorem ipsum dolor</a></li>
                  <li><a href="fake_url">Sed ut perspiciatis</a></li>
                  <li><a href="fake_url">Voluptatum deleniti</a></li>
                  <li><a href="fake_url">At vero eos</a></li>
                  <li><a href="fake_url">Consectetur adipiscing</a></li>
                  <li><a href="fake_url">Duis aute irure</a></li>
                  <li><a href="fake_url">Necessitatibus saepe</a></li>
                  <li><a href="fake_url">Maiores alias</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6"><strong className="text-uppercase">Elements Heading</strong>
                <ul className="list-unstyled mb-3">
                  <li><a href="fake_url">Lorem ipsum dolor</a></li>
                  <li><a href="fake_url">Sed ut perspiciatis</a></li>
                  <li><a href="fake_url">Voluptatum deleniti</a></li>
                  <li><a href="fake_url">At vero eos</a></li>
                  <li><a href="fake_url">Consectetur adipiscing</a></li>
                  <li><a href="fake_url">Duis aute irure</a></li>
                  <li><a href="fake_url">Necessitatibus saepe</a></li>
                  <li><a href="fake_url">Maiores alias</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6"><strong className="text-uppercase">Elements Heading</strong>
                <ul className="list-unstyled mb-3">
                  <li><a href="fake_url">Lorem ipsum dolor</a></li>
                  <li><a href="fake_url">Sed ut perspiciatis</a></li>
                  <li><a href="fake_url">Voluptatum deleniti</a></li>
                  <li><a href="fake_url">At vero eos</a></li>
                  <li><a href="fake_url">Consectetur adipiscing</a></li>
                  <li><a href="fake_url">Duis aute irure</a></li>
                  <li><a href="fake_url">Necessitatibus saepe</a></li>
                  <li><a href="fake_url">Maiores alias</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6"><strong className="text-uppercase">Elements Heading</strong>
                <ul className="list-unstyled mb-3">
                  <li><a href="fake_url">Lorem ipsum dolor</a></li>
                  <li><a href="fake_url">Sed ut perspiciatis</a></li>
                  <li><a href="fake_url">Voluptatum deleniti</a></li>
                  <li><a href="fake_url">At vero eos</a></li>
                  <li><a href="fake_url">Consectetur adipiscing</a></li>
                  <li><a href="fake_url">Duis aute irure</a></li>
                  <li><a href="fake_url">Necessitatibus saepe</a></li>
                  <li><a href="fake_url">Maiores alias</a></li>
                </ul>
              </div>
            </div>
            <div className="row megamenu-buttons text-center">
              <div className="col-lg-2 col-md-4"><a href="fake_url" className="d-block megamenu-button-link dashbg-1"><i className="fa fa-clock-o" /><strong>Demo 1</strong></a></div>
              <div className="col-lg-2 col-md-4"><a href="fake_url" className="d-block megamenu-button-link dashbg-2"><i className="fa fa-clock-o" /><strong>Demo 2</strong></a></div>
              <div className="col-lg-2 col-md-4"><a href="fake_url" className="d-block megamenu-button-link dashbg-3"><i className="fa fa-clock-o" /><strong>Demo 3</strong></a></div>
              <div className="col-lg-2 col-md-4"><a href="fake_url" className="d-block megamenu-button-link dashbg-4"><i className="fa fa-clock-o" /><strong>Demo 4</strong></a></div>
              <div className="col-lg-2 col-md-4"><a href="fake_url" className="d-block megamenu-button-link bg-danger"><i className="fa fa-clock-o" /><strong>Demo 5</strong></a></div>
              <div className="col-lg-2 col-md-4"><a href="fake_url" className="d-block megamenu-button-link bg-info"><i className="fa fa-clock-o" /><strong>Demo 6</strong></a></div>
            </div>
          </div>
        </div>
        {/* Megamenu end     */}
        {/* Languages dropdown    */}
        {/* <div className="list-inline-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="fake_url" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="/Users/flatironschool/Development/sunset-investing/src/distribution-premium/img/flags/16/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></a>
          <div aria-labelledby="languages" className="dropdown-menu"><a rel="nofollow" href="fake_url" className="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" className="mr-2" /><span>German</span></a><a rel="nofollow" href="fake_url" className="dropdown-item"> <img src="img/flags/16/FR.png" alt="English" className="mr-2" /><span>French</span></a></div>
        </div> */}
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
