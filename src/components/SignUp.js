import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
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
        <div className="col-lg-6 bg-white">
          <div className="form d-flex align-items-center">
            <div className="content">
              <form className="text-left form-validate">
                <div className="form-group-material">
                  <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" className="input-material" />
                  <label htmlFor="register-username" className="label-material">Username</label>
                </div>
                <div className="form-group-material">
                  <input id="register-email" type="email" name="registerEmail" required data-msg="Please enter a valid email address" className="input-material" />
                  <label htmlFor="register-email" className="label-material">Email Address    </label>
                </div>
                <div className="form-group-material">
                  <input id="register-password" type="password" name="registerPassword" required data-msg="Please enter your password" className="input-material" />
                  <label htmlFor="register-password" className="label-material">Password      </label>
                </div>
                <div className="form-group terms-conditions text-center">
                  <input id="register-agree" name="registerAgree" type="checkbox" required defaultValue={1} data-msg="Your agreement is required" className="checkbox-template" />
                  <label htmlFor="register-agree">I agree with the terms and policy</label>
                </div>
                <div className="form-group text-center">
                  <input id="register" type="submit" defaultValue="Register" className="btn btn-primary" />
                </div>
              </form><small>Already have an account? </small><Link to="/login" className="signup">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyrights text-center">
    <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
    {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
  </div>
</div>

            </>
        );
    }
}

export default SignUp;
