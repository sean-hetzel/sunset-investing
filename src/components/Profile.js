import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

class Profile extends React.Component {
    constructor(){
        super()
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "" }
        }
    }
    render() {
        return (
            <>
            <Header cart={this.props.cart} loginState={this.props.loginState} logout={this.props.logout} rent={this.props.rent}
/>
                            <div className="d-flex align-items-stretch">
            <SideBar sideBarStatus={this.state.sideBarStatus}/>
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Cart</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ul>
                    </div>

                    <section>
                    <div className="container-fluid">
  <div className="row">
    <div className="col-lg-4">
      <div className="card card-profile">
        <div style={{backgroundImage: 'url(img/photos/paul-morris-116514-unsplash.jpg)'}} className="card-header" />
        <div className="card-body text-center"><img src="img/avatar-9.jpg" alt="avatar" className="card-profile-img" />
          <h4 className="mb-3 text-gray-light">Sarah Bluth</h4>
          <p className="mb-4">CEO of the Bluth Company</p>
          <button className="btn btn-outline-secondary"><span className="fa fa-twitter" /> Follow</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="media"><span style={{backgroundImage: 'url(img/avatar-9.jpg)'}} className="avatar avatar-xl mr-3" />
            <div className="media-body">
              <h5>Sarah Bluth</h5>
              <p className="text-muted mb-0">Coder</p>
              <ul className="social-links list-inline mb-0 mt-2">
                <li className="list-inline-item"><a href="/" data-toggle="tooltip" data-placement="top" title="Nathan's Facebook"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="/" data-toggle="tooltip" data-placement="top" title="@nathan_andrews"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="/" data-toggle="tooltip" data-placement="top" title={+42097555987}><i className="fa fa-phone" /></a></li>
                <li className="list-inline-item"><a href="/" data-toggle="tooltip" data-placement="top" title="@nathan"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <form className="card">
        <div className="card-header">
          <h5 className="card-title">My Profile</h5>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-auto d-flex align-items-center"><span style={{backgroundImage: 'url(img/avatar-9.jpg)'}} className="avatar avatar-lg" /></div>
            <div className="col">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input placeholder="Your name" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Bio</label>
            <textarea rows={8} className="form-control" defaultValue={"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream."} />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input placeholder="you@domain.com" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" defaultValue="password" className="form-control" />
          </div>
        </div>
        <div className="card-footer text-right">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
    <div className="col-lg-8">
      <div className="card">
        <div className="card-header">
          <div className="input-group">
            <input type="text" placeholder="Message" className="form-control" />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-secondary"><i className="fa fa-send" /></button>
            </div>
          </div>
        </div>
        <div className="list-group card-list-group">
          <div className="list-group-item py-5">
            <div className="media">
              <div style={{backgroundImage: 'url(img/avatar-9.jpg)'}} className="media-object avatar avatar-md mr-3" />
              <div className="media-body">
                <div className="media-heading"><small className="float-right">10 min</small>
                  <h5 className="text-gray">Sarah Bluth</h5>
                </div>
                <div className="text-small">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</div>
                <div className="media-list">
                  <div className="media mt-4">
                    <div style={{backgroundImage: 'url(img/avatar-3.jpg)'}} className="media-object avatar mr-3" />
                    <div className="media-body text-muted text-small"><strong className="text-gray">Serenity Mitchelle: </strong>&nbsp; The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</div>
                  </div>
                  <div className="media mt-4">
                    <div style={{backgroundImage: 'url(img/avatar-1.jpg)'}} className="media-object avatar mr-3" />
                    <div className="media-body text-muted text-small"><strong className="text-gray">Tony O'Brian:</strong>&nbsp; His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item py-5">
            <div className="media">
              <div style={{backgroundImage: 'url(img/avatar-9.jpg)'}} className="media-object avatar avatar-md mr-3" />
              <div className="media-body">
                <div className="media-heading"><small className="float-right text-muted">12 min</small>
                  <h5>Sarah Bluth</h5>
                </div>
                <div className="text-small">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</div>
              </div>
            </div>
          </div>
          <div className="list-group-item py-5">
            <div className="media">
              <div style={{backgroundImage: 'url(img/avatar-9.jpg)'}} className="media-object avatar avatar-md mr-3" />
              <div className="media-body">
                <div className="media-heading"><small className="float-right text-muted">34 min</small>
                  <h5>Sarah Bluth</h5>
                </div>
                <div className="text-small">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</div>
                <div className="media-list">
                  <div className="media mt-4">
                    <div style={{backgroundImage: 'url(img/avatar-6.jpg)'}} className="media-object avatar mr-3" />
                    <div className="media-body text-muted text-small"><strong className="text-gray">Javier Gregory: </strong>&nbsp;One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="card">
        <div className="card-header">
          <h5 className="card-title">Edit Profile</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-5">
              <div className="form-group mb-4">
                <label className="form-label">Company</label>
                <input type="text" placeholder="Company" defaultValue="Nathan & Nathan" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group mb-4">
                <label className="form-label">Username</label>
                <input type="text" placeholder="Username" defaultValue="nathan" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-group mb-4">
                <label className="form-label">Email address</label>
                <input type="email" placeholder="Email" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-group mb-4">
                <label className="form-label">First Name</label>
                <input type="text" placeholder="First name" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-group mb-4">
                <label className="form-label">Last Name</label>
                <input type="text" placeholder="Last Name" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-4">
                <label className="form-label">Address</label>
                <input type="text" placeholder="Home Address" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-group mb-4">
                <label className="form-label">City</label>
                <input type="text" placeholder="City" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group mb-4">
                <label className="form-label">ZIP</label>
                <input type="number" placeholder="ZIP" className="form-control" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group mb-4">
                <label className="form-label">Country</label>
                <select className="form-control custom-select">
                  <option value>UK</option>
                  <option value>US</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-0">
                <label className="form-label">About Me</label>
                <textarea rows={5} placeholder="Here can be your description" value="Mike" className="form-control" defaultValue={"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream."} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-right">
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
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

export default Profile;
