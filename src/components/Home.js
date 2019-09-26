import React from "react";
import { Link } from "react-router-dom";

import tempHomeImage from "/Users/flatironschool/Development/sunset-investing/src/images/chris-tingom-BaDrWEr794Q-unsplash.jpg";
import SideBar from "./SideBar";
// import tempHomeImage2 from "/Users/flatironschool/Development/sunset-investing/src/images/avi-waxman-pJk4RRS7urs-unsplash.jpg"
// import tempHomeImage3 from "/Users/flatironschool/Development/sunset-investing/src/images/avi-waxman-jxpadpazkfw-unsplash.jpg";
// style={{backgroundImage: `url(${tempHomeImage})`}}
import "/Users/flatironschool/Development/sunset-investing/src/vendor/bootstrap-touchspin/jquery.bootstrap-touchspin.js"
import "/Users/flatironschool/Development/sunset-investing/src/js/forms-advanced.js"
class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "" }
        }
    }
    render() {
        return (
            <>
            <SideBar sideBarStatus={this.state.sideBarStatus}/>
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
                    
                    <div className="container-fluid" >

                        {/* <div style={{backgroundImage: `url(${tempHomeImage})`}}
                            src={tempHomeImage}
                            alt="home"
                            className="col-11 img-fluid"
                        ></div><br></br> */}
<a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: 12, fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: 3}} href="https://unsplash.com/@christingom?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Chris Tingom"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: 12, width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Chris Tingom</span></a>
<a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: 12, fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: 3}} href="https://unsplash.com/@aviosly?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Avi Waxman"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: 12, width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Avi Waxman</span></a>
<a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: 12, fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: 3}} href="https://unsplash.com/@aviosly?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Avi Waxman"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: 12, width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Avi Waxman</span></a>
                        <h1 className="col-11 text-primary">Real Estate Investing. For The Modern Age.</h1>
                    </div>

                    <div className="block">
  <div className="title"><strong className="d-block">Bootstrap Touchspin</strong><span className="d-block">Read more about Touchspin at <a href="https://www.virtuosoft.eu/code/bootstrap-touchspin/">https://www.virtuosoft.eu/code/bootstrap-touchspin/</a>.</span></div>
  <div className="block-body">
    <form className="form-horizontal">
      <div className="form-group row">
        <label className="col-sm-3 form-control-label">Variant 1</label>
        <div className="col-sm-9">
          <input type="text" name="touchspin0" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-3 form-control-label">Variant 2</label>
        <div className="col-sm-9">
          <input type="text" defaultValue="55.50" name="touchspin1" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-3 form-control-label">Variant 3</label>
        <div className="col-sm-9">
          <input type="text" defaultValue={1500} name="touchspin2" className="form-control" />
        </div>
      </div>
    </form>
  </div>
</div>


                </div>
            </>
        );
    }
}

export default Home;
