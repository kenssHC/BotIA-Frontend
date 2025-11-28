import React, { Fragment, useEffect } from 'react';
import { DayCounter } from './underconstructiondata';

const Underconstruction = () => {
  
  return (
    <Fragment>
      <div className="page">
        {/* <!-- underconstruction --> */}
        <div className="my-auto h-100 page">
          <div className="main-signin-wrapper">
            <div className="main-card-signin construction text-center p-0">
              <div className="p-5  wd-100p bg-white">
                <div>
                  <h2 className="fs-30">Coming soon</h2>
                  <p className="fs-14 text-muted">We Will get back to U , Sorry For Your Inconvinence. Follow Us
                    for More Updates!</p>
                  <div className="row gap-3 justify-content-center my-4" id="timer">
                    <DayCounter />
                  </div>
                  <div className="mt-4 d-flex mx-auto text-center justify-content-center gap-3">
                    <button className="btn btn-icon btn-light" type="button">
                      <span className="btn-inner--icon"> <i className="fab fa-facebook-f tx-facebook"></i> </span>
                    </button>
                    <button className="btn btn-icon btn-light" type="button">
                      <span className="btn-inner--icon"> <i className="fab fa-google tx-google-plus"></i> </span>
                    </button>
                    <button className="btn btn-icon btn-light" type="button">
                      <span className="btn-inner--icon"> <i className="ri-twitter-x-line tx-twitter"></i> </span>
                    </button>
                    <button className="btn btn-icon btn-light" type="button">
                      <span className="btn-inner--icon"> <i className="fab fa-pinterest-p tx-pinterest"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /underconstruction --> */}
      </div>
    </Fragment>
  );
};
export default Underconstruction;
