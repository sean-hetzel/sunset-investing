import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/its-free-real-estate.gif';
const NotFound = () => (
<div  style={{background: "#22252a", width: "auto", height: "100vh", paddingTop: "2em"}}>
    <div style={{vertivalAlign: "middle", position: "relative"}}>
    <h1 style={{textAlign: "center", fontSize: "80pt"}}>404 Not Found</h1>
  <img src={PageNotFound} style={{width: "50%", height: "50%", display: 'block', margin: 'auto', position: 'relative' }} />
<Link to="/" style={{textAlign: "center", position: 'relative', display: 'block', paddingTop: "4em"}}><h4 >Home Return</h4></Link>
</div>
</div>
);
export default NotFound;

// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import SideBar from "./SideBar";
// import Footer from "./Footer";
// import PageNotFound from '../images/its-free-real-estate.gif';


// const NotFound = () => (
    // constructor() {
    //     super();
    //     this.state = {
    //         sideBarStatus: { properties: "", dashboard: "", holdings: "" }
    //     };
    // }
    // render() {
//         return (
//             <>
//             <Header cart={this.props.cart} />
//                             <div className="d-flex align-items-stretch">
//                 <SideBar sideBarStatus={this.state.sideBarStatus} />
//                 <div className="page-content">
//                     <div className="page-header no-margin-bottom">
//                         <div className="container-fluid">
//                             <h2 className="h5 no-margin-bottom">Cart</h2>
//                         </div>
//                     </div>
//                     <div className="container-fluid">
//                         <ul className="breadcrumb">
//                             <li className="breadcrumb-item">
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li className="breadcrumb-item active">Cart</li>
//                         </ul>
//                     </div>
//                     <section>
//                         <div className="container-fluid"></div>
//                         <img src={PageNotFound} style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />
// <center><Link to="/">Return to Home Page</Link></center>
//                     </section>
//                 </div>
//                 <Footer />
// </div>
//             </>
//         );
    
// )

// export default NotFound;
