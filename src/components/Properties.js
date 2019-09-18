import React from "react";

class Properties extends React.Component {
    render() {
        return (
            <>
            <div className="page-content">
  {/* Page Header*/}
  <div className="page-header no-margin-bottom">
    <div className="container-fluid">
      <h2 className="h5 no-margin-bottom">Cards</h2>
    </div>
  </div>
  {/* Breadcrumb*/}
  <div className="container-fluid">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active">Cards      </li>
    </ul>
  </div>
  <section>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/* Simple card*/}
          <div className="card"><img src="img/mockup1.jpg" alt="Card cap" className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="fake_url" className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
        {/* end col*/}
        <div className="col-md-6 col-lg-3">
          <div className="card"><img src="img/mockup3.jpg" alt="Card cap" className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Vice tote bag shabby chic</li>
              <li className="list-group-item">Portland Etsy craft beer</li>
            </ul>
            <div className="card-body"><a href="fake_url" className="card-link">Card link</a><a href="fake_url" className="card-link">Another link here</a></div>
          </div>
        </div>
        {/* end col*/}
        <div className="col-md-6 col-lg-3">
          <div className="card"><img src="img/mockup4.jpg" alt="Card cap" className="card-img-top img-fluid" />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        {/* end col*/}
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            </div><img src="img/mockup5.jpg" alt="Card cap" className="img-fluid" />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="fake_url" className="card-link">Card link</a><a href="fake_url" className="card-link">Another link</a>
            </div>
          </div>
        </div>
        {/* end col*/}
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="fake_url" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="fake_url" className="btn btn-outline-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="fake_url" className="btn btn-dark">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-md-4">
          <div className="card"><img src="img/mockup6.jpg" alt="Card cap" className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div><img src="img/mockup7.jpg" alt="Card cap" className="card-img-bottom img-fluid" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-inverse text-white"><img src="img/mockup4.jpg" alt="Card image" className="card-img img-fluid" />
            <div className="card-img-overlay card-img-overlay-opacity">
              <h5 className="card-title text-white">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      {/* end row*/}
      <h4 className="mt-5 mb-4">Background variants</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-secondary">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Info card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Light card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark">
            <div className="card-header card-header-transparent">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      {/* end row*/}
      <h4 className="mt-5 mb-4">Groups</h4>
      <div className="row">
        <div className="col-12">
          <div className="card-group">
            <div className="card"><img src="img/mockup4.jpg" alt="Card cap" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card"><img src="img/mockup3.jpg" alt="Card cap" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card"><img src="img/mockup1.jpg" alt="Card cap" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row*/}
      <h4 className="mt-5 mb-4">Decks</h4>
      <div className="row">
        <div className="col-12">
          <div className="card-deck-wrapper">
            <div className="card-deck">
              <div className="card"><img src="img/mockup7.jpg" alt="Card cap" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card"><img src="img/mockup6.jpg" alt="Card cap" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card"><img src="img/mockup4.jpg" alt="Card cap" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row*/}
      <h4 className="mt-5 mb-4">Columns</h4>
      <div className="row">
        <div className="col-12">
          <div className="card-columns">
            <div className="card"><img src="img/mockup3.jpg" alt="Card cap" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title that wraps to a new line</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer"><small className="text-muted">Someone famous in 
                    <cite title="Source Title">Source Title</cite></small></footer>
              </blockquote>
            </div>
            <div className="card"><img src="img/mockup2.jpg" alt="Card cap" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card bg-primary text-white text-center p-3">
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                <footer className="blockquote-footer text-white"><small>Someone famous in 
                    <cite title="Source Title">Source Title</cite></small></footer>
              </blockquote>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card p-3 text-right">
              <blockquote className="blockquote mb-0"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer"><small className="text-muted">Someone famous in 
                    <cite title="Source Title">Source Title</cite></small></footer>
              </blockquote>
            </div>
            <div className="card"><img src="img/mockup6.jpg" alt="Card cap" className="card-img img-fluid" /></div>
            <div className="card card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      {/* end row*/}
      <h4 className="mt-5 mb-4">Navigation</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item"><a href="fake_url" className="nav-link active">Active</a></li>
                <li className="nav-item"><a href="fake_url" className="nav-link">Link</a></li>
                <li className="nav-item"><a href="fake_url" className="nav-link disabled">Disabled</a></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="fake_url" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header pt-2 pb-2">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item"><a href="fake_url" className="nav-link active">Active</a></li>
                <li className="nav-item"><a href="fake_url" className="nav-link">Link</a></li>
                <li className="nav-item"><a href="fake_url" className="nav-link disabled">Disabled</a></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="fake_url" className="btn btn-secondary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      {/* end row        */}
      <div className="card">
        <div className="card-header">
          <h5>Mockups Used here</h5>
        </div>
        <div className="card-body">
          <ul>
            <li> <a href="https://dribbble.com/shots/2862026-Beauty-Cosmetics-Stationery-Wedding">https://dribbble.com/shots/2862026-Beauty-Cosmetics-Stationery-Wedding</a></li>
            <li> <a href="https://dribbble.com/shots/1155962-Free-Stationery-Mockup-PSD">https://dribbble.com/shots/1155962-Free-Stationery-Mockup-PSD</a></li>
            <li> <a href="https://dribbble.com/shots/2569937-Brandminute-Scene-02">https://dribbble.com/shots/2569937-Brandminute-Scene-02</a></li>
            <li> <a href="https://dribbble.com/shots/1468064-Another-Branding-Mock-Up-Free-PSD">https://dribbble.com/shots/1468064-Another-Branding-Mock-Up-Free-PSD</a></li>
            <li> <a href="https://dribbble.com/shots/3684230-Letterhead-Mockup">https://dribbble.com/shots/3684230-Letterhead-Mockup</a></li>
            <li> <a href="https://dribbble.com/shots/2584869-Brandminute-Scene-07">https://dribbble.com/shots/2584869-Brandminute-Scene-07</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <div className="footer__block block no-margin-bottom">
      <div className="container-fluid text-center">
        <p className="no-margin-bottom">2019 © Your company. </p>
      </div>
    </div>
  </footer>
</div>

            </>
        );
    }
}

export default Properties;