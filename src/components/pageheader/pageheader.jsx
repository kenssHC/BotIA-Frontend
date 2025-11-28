import { Fragment,  } from 'react';
import { Breadcrumb } from "react-bootstrap";
import { Expenses, Profit } from './pageheaderdata';
import { Link, useLocation } from 'react-router-dom';

export default function Pageheader() {
    const { pathname } = useLocation();
    const Currentpath = pathname;
    

    const commonPath = "/azira-js/preview/";
    const trimmedPathname = pathname.startsWith(commonPath) ? pathname.slice(commonPath.length) : pathname;
    const locationArray = trimmedPathname.split("/").filter(Boolean);
    const componentNames = locationArray.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
    return (
        <><div className="py-4"></div><div className="py-4"></div></>
        // <Fragment>
        //     <div className="d-sm-flex d-block align-items-center justify-content-between page-header-breadcrumb">
        //         {Currentpath.includes("/dashboard")  ? (
        //          <div>
        //          <h4 className="fw-medium mb-2">Hi, Welcome back!</h4>
        //          <div className="ms-sm-1 ms-0">
        //              <nav>
        //                  <Breadcrumb as='ol' className="breadcrumb mb-0">
        //                      <Breadcrumb.Item as='li' className="breadcrumb-item">Dashboard</Breadcrumb.Item>
        //                      <Breadcrumb.Item as='li' className="breadcrumb-item active fw-normal" aria-current="page">Hi, Welcome back!</Breadcrumb.Item>
        //                  </Breadcrumb>
        //              </nav>
        //          </div>
        //          </div> 
        //         ) : (
        //             <div className='single-page-header'>
        //             <h4 className="fw-medium mb-2">{componentNames[componentNames.length - 1]}</h4>
        //             <div className="ms-sm-1 ms-0">
        //                 <nav>
        //                     <Breadcrumb as='ol' className="breadcrumb mb-0">
        //                         {componentNames.map((item, index) => (
        //                             <Breadcrumb.Item as='li'
        //                                 key={index}
        //                                 active={index === componentNames.length - 1}
        //                                 className={`${index === componentNames.length - 1 ? "" : ""}`}
        //                                 to="#"
        //                             >
        //                                 {index === 0 ? item : item.toLowerCase()}
        //                             </Breadcrumb.Item>
        //                         ))}
        //                     </Breadcrumb>
        //                 </nav>

        //             </div>
        //         </div>
        //         )}
        //         <div className="d-flex my-auto">
        //             <div className=" d-sm-flex right-page">
        //                 <div className="d-flex justify-content-sm-center me-3 mb-3 mb-sm-0">
        //                     <div className="">
        //                         <span className="d-block">
        //                             <span className="label">EXPENSES</span>
        //                         </span>
        //                         <span className="value">
        //                             $53,000
        //                         </span>
        //                     </div>
        //                     <div className="ms-1 mt-1">
                                
        //                         <span className="sparkline_bar">
        //                             <Expenses />
        //                         </span>
                                
        //                         <span id="profit-bar1"></span>
        //                     </div>
        //                 </div>
        //                 <div className="d-flex justify-content-sm-center">
        //                     <div className="">
        //                         <span className="d-block">
        //                             <span className="label">PROFIT</span>
        //                         </span>
        //                         <span className="value">
        //                             $34,000
        //                         </span>
        //                     </div>
        //                     <div className="ms-1 mt-1">
        //                         <span id="profit-bar">
        //                             <Profit />
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </Fragment>
    );
}

