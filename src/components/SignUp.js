import React from "react";
import { Link } from "react-router-dom";
import logoWite from "../images/sunset-investing-logo-white.png";

// $("#myform").validate({
//   invalidHandler: function(event, validator) {
//     // 'this' refers to the form
//     var errors = validator.numberOfInvalids();
//     if(r.status===406) {
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

class SignUp extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@ninjason?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Jason Leung"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Jason Leung</span></a>
    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@collectivecreatorsco?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Ruben Gutierrez"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Ruben Gutierrez</span></a>
    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jaseess?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Jase Ess"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Jase Ess</span></a>
    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@clayton_cardinalli?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Clayton Cardinalli"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Clayton Cardinalli</span></a>
    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@abbiebernet?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Abbie Bernet"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Abbie Bernet</span></a>
    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jsaxxhoward?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Julian Howard"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Julian Howard</span></a>
    // <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@matthewlejune?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Matthew LeJune"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Matthew LeJune</span></a>

    componentDidMount() {
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
        const name = data.get("name").toUpperCase();
        const password = data.get("password");
        console.log(JSON.stringify({ investor: { name, password } }));

        fetch("http://localhost:3000/api/v1/investors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ investor: { name, password } })
        }).then(r => {
            if (r.status === 201) {
                this.props.history.push("/");
            }
            if (r.status === 406) {
                data.set(name, "already taken");
                console.log("name already taken");
            }
            return r.json();
        });
    }

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
                                        <img
                                            src={logoWite}
                                            alt="sunset investing logo"
                                            className="img-fluid"
                                            style={{
                                                height: "100px",
                                                width: "100px",
                                                marginRight: "20px",
                                                display: "inline"
                                            }}
                                        ></img>
                                        <div
                                            className="content"
                                            style={{ marginTop: "30px" }}
                                        >
                                            <div className="logo">
                                                <h1>Sunset Investing</h1>
                                            </div>
                                            <p>
                                                Real Estate Investing. For the
                                                Modern Age.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Form Panel    */}
                                <div className="col-lg-6 bg-white">
                                    <div className="form d-flex align-items-center">
                                        <div className="content">
                                            <form
                                                className="text-left form-validate"
                                                onSubmit={this.handleSubmit}
                                            >
                                                <div className="form-group-material">
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        required
                                                        data-msg="Please enter your username"
                                                        className="input-material"
                                                    />
                                                    <label
                                                        htmlFor="register-username"
                                                        className="label-material"
                                                    >
                                                        Username
                                                    </label>
                                                </div>
                                                {/* <div className="form-group-material">
                  <input id="register-email" type="email" name="email" required data-msg="Please enter a valid email address" className="input-material" />
                  <label htmlFor="register-email" className="label-material">Email Address    </label>
                </div> */}
                                                <div className="form-group-material">
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        required
                                                        data-msg="Please enter your password"
                                                        className="input-material"
                                                    />
                                                    <label
                                                        htmlFor="register-password"
                                                        className="label-material"
                                                    >
                                                        Password{" "}
                                                    </label>
                                                </div>
                                                <div className="form-group terms-conditions text-center">
                                                    <input
                                                        id="register-agree"
                                                        name="registerAgree"
                                                        type="checkbox"
                                                        required
                                                        defaultValue={1}
                                                        data-msg="Your agreement is required"
                                                        className="checkbox-template"
                                                    />
                                                    <label htmlFor="register-agree">
                                                        I agree with the terms
                                                        and policy
                                                    </label>
                                                </div>
                                                <div className="form-group text-center">
                                                    <input
                                                        id="register"
                                                        type="submit"
                                                        defaultValue="Register"
                                                        className="btn btn-primary"
                                                    />
                                                </div>
                                            </form>
                                            <small>
                                                Already have an account?{" "}
                                            </small>
                                            <Link
                                                to="/login"
                                                className="signup"
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyrights text-center">
                        <p>
                            Design by{" "}
                            <a
                                href="https://bootstrapious.com"
                                className="external"
                            >
                                Bootstrapious
                            </a>{" "}Photo by{" "}
                            <a
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    textDecoration: "none",
                                    padding: "4px 6px",
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    lineHeight: "1.2",
                                    display: "inline-block",
                                    borderRadius: 3
                                }}
                                href="https://unsplash.com/@clayton_cardinalli?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Download free do whatever you want high-resolution photos from Clayton Cardinalli"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "2px 3px"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            height: 12,
                                            width: "auto",
                                            position: "relative",
                                            verticalAlign: "middle",
                                            top: "-2px",
                                            fill: "white"
                                        }}
                                        viewBox="0 0 32 32"
                                    >
                                        <title>unsplash-logo</title>
                                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                                    </svg>
                                </span>
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "2px 3px"
                                    }}
                                >
                                    Clayton Cardinalli
                                </span>
                            </a>
                        </p>

                        {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
                    </div>
                </div>
            </>
        );
    }
}

export default SignUp;
