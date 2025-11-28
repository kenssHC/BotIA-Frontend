import React, { Fragment } from 'react';
import face6 from '../../../assets/images/faces/6.jpg'
import { Link } from 'react-router-dom';


const Lockscreen = () => {
  return (
    <Fragment>
      <div className="page">
        {/* <!-- lockscreen --> */}
        <div className="my-auto page main-signin-wrapper">
          <div className="text-center mb-2">
            <div className="main-signin-wrapper">
              <div className="main-card-signin d-md-flex d-block wd-100p card flex-row">
                <div className="p-4">
                  <div className="main-signin-header">
                    <div className="avatar avatar-xxl avatar-xxl mx-auto text-center mb-2"><img alt="" className="rounded-circle" src={face6} /></div>
                    <div className="mx-auto text-center mt-2 mg-b-20">
                      <h5 className="mg-b-10 fs-16">Petey Cruiser</h5>
                      <p className="fs-13">Enter Your Password to View your Screen</p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Enter your password" type="password" />
                    </div>
                    <div className="d-grid">
                      <Link to={`${import.meta.env.BASE_URL}dashboard`} className="btn btn-main-primary btn-block">Unlock</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- lockscreen --> */}
      </div>
    </Fragment >
  );
};

export default Lockscreen;
