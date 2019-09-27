import React from "react";
import { Link } from "react-router-dom";
import { api } from '../services/api';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          error: false,
          fields: {
            name: '',
            password: ''
          }
        };
      }
    
      handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        api.auth.login(this.state.fields).then(res => {
          if (!res.error) {
            const updatedState = { ...this.state.auth, investor: res };
            this.props.handleLogin(res);
            this.props.history.push('/');
          } else {
            this.setState({ error: true });
          }
        });
      };

    render() {
        const { fields } = this.state;
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
                  <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" className="input-material" value={fields.username} onChange={this.handleChange}/>
                  <label htmlFor="login-username" className="label-material">User Name</label>
                </div>
                <div className="form-group">
                  <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" className="input-material" value={fields.password} onChange={this.handleChange}/>
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
