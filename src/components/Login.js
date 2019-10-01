import React from "react";
import { Link } from "react-router-dom";
import logoWite from "/Users/flatironschool/Development/sunset-investing/src/images/sunset-investing-logo-white.png"

// var validator = $("#signupform").validate({
//   rules: {
//       firstname: "required",
//       lastname: "required",
//       username: {
//           required: true,
//           minlength: 2,
//           remote: "users.php"
//       }
//   },
//   messages: {
//       firstname: "Enter your firstname",
//       lastname: "Enter your lastname",
//       username: {
//           required: "Enter a username",
//           minlength: jQuery.format("Enter at least {0} characters"),
//           remote: jQuery.format("{0} is already in use")
//       }
//   }
// }

// $("#myform").validate({
//   invalidHandler: function(event, validator) {
//     // 'this' refers to the form
//     var errors = validator.numberOfInvalids();
//     if (errors) {
//       var message = errors == 1
//         ? 'You missed 1 field. It has been highlighted'
//         : 'You missed ' + errors + ' fields. They have been highlighted';
//       $("div.error span").html(message);
//       $("div.error").show();
//     } else {
//       $("div.error").hide();
//     }
//   }
// });


class Login extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      componentDidMount () {
        const script = document.createElement("script");
        script.src = "/vendor/jquery-validation/jquery.validate.min.js";
        script.async = true;
        document.body.appendChild(script);
    
        const script2 = document.createElement("script");
        script2.src = "/js/front.js";
        script2.async = true;
        document.body.appendChild(script2);
      }

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get('name').toUpperCase()
        const password = data.get('password')
        console.log(JSON.stringify({investor: {name, password}}))
    
        fetch('http://localhost:3000/api/v1/login', {
          method: 'POST',
          headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                },
          body: JSON.stringify({investor: {name, password}})
          }).then(r => r.json())
          .then(data => {
            console.log(data);
            this.props.handleLogin(data)
            // localStorage.setItem('currentUserId', data.investor.id);
            // localStorage.setItem('currentUserName', data.investor.name);
            // localStorage.setItem('jwt', data.jwt);
            this.props.history.push("/");
          })
        }
        
        // .then(r => {
        //   if (r.status === 401) {
        //     console.log("name does not exist")
        //   }
        // })
    render() {
        // const { fields } = this.state;
        return (
            <>
                <div className="login-page">
  <div className="container d-flex align-items-center">
    <div className="form-holder has-shadow">
      <div className="row">
        {/* Logo & Information Panel*/}
        <div className="col-lg-6">
          <div className="info d-flex align-items-center">
              <img src={logoWite} alt="sunset investing logo" className="img-fluid" style={{height:"100px", width:"100px", marginRight:"20px", display:"inline"}}></img>
            <div className="content" style={{marginTop: "30px"}}>
              <div className="logo">

                <h1>Sunset Investing</h1>
              </div>
              <p>Real Estate Investing. For the Modern Age.</p>
            </div>
          </div>
        </div>
        {/* Form Panel    */}
        <div className="col-lg-6">
          <div className="form d-flex align-items-center">
            <div className="content">
              <form method="get" className="form-validate mb-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input id="name" type="text" name="name" required data-msg="Please enter your username" className="input-material"  />
                  <label htmlFor="login-username" className="label-material">User Name</label>
                </div>
                <div className="form-group">
                  <input id="password" type="password" name="password" required data-msg="Please enter your password" className="input-material" />
                  <label htmlFor="login-password" className="label-material">Password</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form><a href="#" className="forgot-pass">Forgot Password? (does not work yet)</a><br /><small>Do not have an account? </small><Link to="/signup" className="signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyrights text-center">
    <p>Design by <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin" className="external">Bootstrapious</a> <a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: 12, fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: 3}} href="https://unsplash.com/@aviosly?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Avi Waxman"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: 12, width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Avi Waxman</span></a>
</p>
    {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
  </div>
</div>

            </>
        );
    }
}

export default Login;
