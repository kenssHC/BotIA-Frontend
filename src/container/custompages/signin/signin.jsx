import React, { Fragment } from 'react';
import desktoplogo from '../../../assets/images/brand-logos/desktop-dark.png'
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <Fragment>
      <div className="page">
        {/* <!-- main-signin-wrapper --> */}
        <div className="my-auto page page-h">
          <div className="main-signin-wrapper">
            <div className="main-card-signin d-md-flex d-block wd-100p card flex-row">
              <div className="wd-md-50p login d-none d-md-block page-signin-style p-5 text-white">
                <div className="my-auto authentication-pages">
                  <div>
                    <Link to={`${import.meta.env.BASE_URL}dashboard`}><img src={desktoplogo} className=" m-0 mb-4" alt="logo" /></Link>
                    <h5 className="mb-4 text-fixed-white">Responsive Modern Dashboard &amp; Admin Template</h5>
                    <p className="mb-5 text-fixed-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book.</p>
                    <Link to={`${import.meta.env.BASE_URL}dashboard`} className="btn btn-success">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="p-5 wd-md-50p bg-white">
                <div className="main-signin-header">
                  {/* <h2>Welcome back!</h2> */}
                  <h4>Please sign in to continue</h4>
                  <div className="form-group">
                    <label className="text-muted mb-1">Email</label><input className="form-control text-muted" placeholder="Enter your email"
                      type="text" defaultValue="info@spruko.com" />
                  </div>
                  <div className="form-group">
                    <label className="text-muted mb-1">Password</label> <input className="form-control text-muted"
                      placeholder="Enter your password" type="password" defaultValue="sprukodemo" />
                  </div>
                  <div className="d-grid">
                    <Link to={`${import.meta.env.BASE_URL}dashboard`} className="btn btn-primary btn-block">Sign In</Link>
                  </div>

                </div>
                <div className="main-signin-footer mt-3 mg-t-5">
                  <p><Link to={`${import.meta.env.BASE_URL}custompages/forgotpassword`}>Forgot password?</Link></p>
                  <p className="text-muted">Don't have an account? <Link to={`${import.meta.env.BASE_URL}custompages/sign-up`}>Create an Account</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /main-signin-wrapper --> */}
      </div>
    </Fragment>
  );
};
export default Signin;
