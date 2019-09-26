import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <>
                <div className="login-page">
  <div className="container d-flex align-items-center">
    <div className="form-holder has-shadow">
      <div className="row">
        {/* Logo & Information Panel*/}
        <div className="col-lg-6">
          <div className="info d-flex align-items-center">
            <div className="content">
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
              <form method="get" className="form-validate mb-4">
                <div className="form-group">
                  <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" className="input-material" />
                  <label htmlFor="login-username" className="label-material">User Name</label>
                </div>
                <div className="form-group">
                  <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" className="input-material" />
                  <label htmlFor="login-password" className="label-material">Password</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form><a href="#" className="forgot-pass">Forgot Password?</a><br /><small>Do not have an account? </small><Link to="/signup" className="signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyrights text-center">
    <p>Design by <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin" className="external">Bootstrapious</a></p>
    {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
  </div>
</div>

            </>
        );
    }
}

export default Login;
