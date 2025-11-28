import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import { Link } from 'react-router-dom';
import { reactavatars1, reactavatars2, reactavatars3, reactavatars4, reactavatars5, reactavatars6, reactavatars7, reactavatars8, reactavatars9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';



const Avatars = () => {
    return (
        <Fragment>
            <Row >
                <Col xl={4} lg={6} md={12} sm={12} >
                    <ShowCode title="Avatars" className="" reactCode={reactavatars1} customCardHeaderClass="justify-content-between" customCardBodyClass="py-4">
                        <span className="avatar me-3 avatar-lg avatar-radius-0">
                            <img src={face4} alt="img" />
                        </span>
                        <span className="avatar me-3 avatar-lg">
                            <img src={face5} alt="img" />
                        </span>
                        <span className="avatar me-3 avatar-lg avatar-rounded">
                            <img src={face6} alt="img" />
                        </span>
                        <div className='line mt-3'>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                        <tr><td>Without radius :</td><td><code>.avatar.avatar-radius-0</code></td></tr>
                                        <tr><td>With Radius :</td><td><code>.avatar</code></td></tr>
                                        <tr><td>Round Avatar :</td><td><code>.avatar.avatar-rounded</code></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        


                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} >
                    <ShowCode title="Avatar Sizes <p class='subtitle text-muted fs-12 fw-normal'>Avatars of different sizes</p>" className="" reactCode={reactavatars2} customCardHeaderClass="justify-content-between">
                        <span className="avatar avatar-xs me-2">
                            <img src={face7} alt="img" />
                        </span>
                        <span className="avatar avatar-sm me-2">
                            <img src={face8} alt="img" />
                        </span>
                        <span className="avatar avatar-md me-2">
                            <img src={face10} alt="img" />
                        </span>
                        <span className="avatar avatar-lg me-2">
                            <img src={face9} alt="img" />
                        </span>
                        <span className="avatar avatar-xl me-2">
                            <img src={face1} alt="img" />
                        </span>
                        <span className="avatar avatar-xxl me-2">
                            <img src={face2} alt="img" />
                        </span>
                        <div className='line mt-3'>
                            <div className="table-responsive">
                                <table className="table mb-0 rounded-bottom">
                                    <tbody>
                                        <tr><td>Classes :</td><td><code>.avatar-[size]</code></td></tr>
                                        <tr><td>Values :</td><td>xs, sm , md , lg , xl , xxl</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={12} md={12} sm={12} >
                    <ShowCode title="Avatar With Icons <p class='subtitle text-muted fs-12 fw-normal'>Avatar contains icons to perform respective action.</p>" className="" reactCode={reactavatars3} customCardHeaderClass="justify-content-between">
                        <span className="avatar avatar-xs me-2 avatar-rounded">
                            <img src={face3} alt="img" />
                            <Link to="#" aria-label="anchor" className="badge bg-success rounded-pill avatar-badge"><i className="fe fe-camera"></i></Link>
                        </span>
                        <span className="avatar avatar-sm me-2 avatar-rounded">
                            <img src={face14} alt="img" />
                            <Link to="#" aria-label="anchor" className="badge rounded-pill bg-secondary avatar-badge"><i className="fe fe-edit"></i></Link>
                        </span>
                        <span className="avatar avatar-md me-2 avatar-rounded">
                            <img src={face13} alt="img" />
                            <Link to="#" aria-label="anchor" className="badge rounded-pill bg-warning avatar-badge"><i className="fe fe-plus"></i></Link>
                        </span>
                        <span className="avatar avatar-lg me-2 avatar-rounded">
                            <img src={face15} alt="img" />
                            <Link to="#" aria-label="anchor" className="badge rounded-pill bg-info avatar-badge"><i className="fe fe-edit"></i></Link>
                        </span>
                        <span className="avatar avatar-xl me-2 avatar-rounded">
                            <img src={face13} alt="img" />
                            <Link to="#" aria-label="anchor" className="badge rounded-pill bg-success avatar-badge"><i className="fe fe-camera"></i></Link>
                        </span>
                        <span className="avatar avatar-xxl me-2 avatar-rounded">
                            <img src={face12} alt="img" />
                            <Link to="#" aria-label="anchor" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-plus"></i></Link>
                        </span>
                        <div className='line mt-3'>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                        <tr><td>Class Name :</td><td><code>.badge.number-badge</code></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row >
                <Col xl={4} lg={6} md={12} sm={12} >
                    <ShowCode title="Avatar With Online Status Indicators <p class='subtitle text-muted fs-12 fw-normal'>avatars having online status indicator.</p>" className="" reactCode={reactavatars4} customCardHeaderClass="justify-content-between">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                            <img src={face1} alt="img" />
                        </span>
                        <span className="avatar avatar-sm online me-2 avatar-rounded">
                            <img src={face15} alt="img" />
                        </span>
                        <span className="avatar avatar-md me-2 online avatar-rounded">
                            <img src={face12} alt="img" />
                        </span>
                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                            <img src={face9} alt="img" />
                        </span>
                        <span className="avatar avatar-xl me-2 online avatar-rounded">
                            <img src={face5} alt="img" />
                        </span>
                        <span className="avatar avatar-xxl me-2 online avatar-rounded">
                            <img src={face14} alt="img" />
                        </span>
                        <div className='line mt-3'>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                    <tr><td>Class Name :</td><td><code>.avatar.online</code></td></tr> 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} >
                    <ShowCode title="Avatar With Offline Status Indicators <p class='subtitle text-muted fs-12 fw-normal'>avatars having a offline status indicator.</p>" className="" reactCode={reactavatars5} customCardHeaderClass="justify-content-between">

                        <span className="avatar avatar-xs me-2 offline avatar-rounded">
                            <img src={face15} alt="img" />
                        </span>
                        <span className="avatar avatar-sm offline me-2 avatar-rounded">
                            <img src={face1} alt="img" />
                        </span>
                        <span className="avatar avatar-md me-2 offline avatar-rounded">
                            <img src={face2} alt="img" />
                        </span>
                        <span className="avatar avatar-lg me-2 offline avatar-rounded">
                            <img src={face3} alt="img" />
                        </span>
                        <span className="avatar avatar-xl me-2 offline avatar-rounded">
                            <img src={face4} alt="img" />
                        </span>
                        <span className="avatar avatar-xxl me-2 offline avatar-rounded">
                            <img src={face5} alt="img" />
                        </span>
                        <div className='line mt-3'>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                    <tr><td>Class Name :</td><td><code>.avatar.offline</code></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={12} md={12} sm={12} >
                    <ShowCode title=" Avatars With Number Badges <p class='subtitle text-muted fs-12 fw-normal'>Avatar numbers indicates the no. of unread notififactions/messages.</p>" className="" reactCode={reactavatars6} customCardHeaderClass="justify-content-between">

                        <span className="avatar avatar-xs me-2 avatar-rounded">
                            <img src={face6} alt="img" />
                            <span className="badge rounded-pill bg-primary avatar-badge">2</span>
                        </span>
                        <span className="avatar avatar-sm me-2 avatar-rounded">
                            <img src={face7} alt="img" />
                            <span className="badge rounded-pill bg-secondary avatar-badge">5</span>
                        </span>
                        <span className="avatar avatar-md me-2 avatar-rounded">
                            <img src={face8} alt="img" />
                            <span className="badge rounded-pill bg-warning avatar-badge">1</span>
                        </span>
                        <span className="avatar avatar-lg me-2 avatar-rounded">
                            <img src={face9} alt="img" />
                            <span className="badge rounded-pill bg-info avatar-badge">7</span>
                        </span>
                        <span className="avatar avatar-xl me-2 avatar-rounded">
                            <img src={face10} alt="img" />
                            <span className="badge rounded-pill bg-success avatar-badge">3</span>
                        </span>
                        <span className="avatar avatar-xxl me-2 avatar-rounded">
                            <img src={face12} alt="img" />
                            <span className="badge rounded-pill bg-danger avatar-badge">9</span>
                        </span>
                        <div className='line mt-3'>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                    <tr><td>Class Name :</td><td><code>.badge.number-badge</code></td></tr> 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}
            <Row >
            
                <Col xl={6} lg={6} md={12} sm={12} >
                    <ShowCode title=" Stacked Avatars <p class='subtitle text-muted fs-12 fw-normal'>Group of avatars stacked together.</p>" className="" reactCode={reactavatars8} customCardHeaderClass="justify-content-between">

                        <div className="avatar-list-stacked">
                            <span className="avatar">
                                <img src={face13} alt="img" />
                            </span>
                            <span className="avatar">
                                <img src={face14} alt="img" />
                            </span>
                            <span className="avatar">
                                <img src={face15} alt="img" />
                            </span>
                            <span className="avatar">
                                <img src={face1} alt="img" />
                            </span>
                            <span className="avatar">
                                <img src={face2} alt="img" />
                            </span>
                            <span className="avatar">
                                <img src={face3} alt="img" />
                            </span>
                            <Link to="#" className="avatar bg-primary text-fixed-white" >
                                +8
                            </Link>
                            <div className='line mt-3'>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <tbody>
                                        <tr><td>Class Name :</td><td><code>.avatar-list-stacked</code> for parent div</td></tr> 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} >
                    <ShowCode title=" Rounded Stacked Avatars <p class='subtitle text-muted fs-12 fw-normal'>Group of avatars stacked together.</p>" className="" reactCode={reactavatars9} customCardHeaderClass="justify-content-between">

                        <div className="avatar-list-stacked">
                            <span className="avatar avatar-rounded">
                                <img src={face3} alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src={face4} alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src={face5} alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src={face6} alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src={face7} alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src={face8} alt="img" />
                            </span>
                            <Link className="avatar bg-primary avatar-rounded text-fixed-white" >
                                +8
                            </Link>
                            <div className='line mt-3'>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <tbody>
                                        <tr><td>Class Name :</td><td><code>.avatar-list-stacked</code> for parent div & <code>.avatar-rounded</code>  for .avatar </td></tr> 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row >
                <Col xl={6} lg={6} md={12} sm={12} >
                    <ShowCode title=" Avatar With Initials <p class='subtitle text-muted fs-12 fw-normal'>Avatar contains intials when user profile doesn't exist.</p>" className="" reactCode={reactavatars7} customCardHeaderClass="justify-content-between">

                        <span className="avatar avatar-xs me-2 bg-primary">
                            xs
                        </span>
                        <span className="avatar avatar-sm me-2 bg-secondary">
                            SM
                        </span>
                        <span className="avatar avatar-md me-2 bg-warning">
                            MD
                        </span>
                        <span className="avatar avatar-lg me-2 bg-danger">
                            LG
                        </span>
                        <span className="avatar avatar-xl me-2 bg-success">
                            XL
                        </span>
                        <span className="avatar avatar-xxl me-2 bg-info">
                            XXL
                        </span>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} >
                    <ShowCode title=" Rounded Avatar With Initials  <p class='subtitle text-muted fs-12 fw-normal'>Avatar contains intials when user profile doesn't exist.</p>" className="" reactCode={reactavatars7} customCardHeaderClass="justify-content-between">

                        <span className=" avatar avatar-rounded avatar-xs me-2 bg-primary">
                            xs
                        </span>
                        <span className="avatar avatar-rounded avatar-sm me-2 bg-secondary">
                            SM
                        </span>
                        <span className="avatar avatar-rounded avatar-md me-2 bg-warning">
                            MD
                        </span>
                        <span className="avatar avatar-rounded avatar-lg me-2 bg-danger">
                            LG
                        </span>
                        <span className="avatar avatar-rounded avatar-xl me-2 bg-success">
                            XL
                        </span>
                        <span className="avatar avatar-rounded avatar-xxl me-2 bg-info">
                            XXL
                        </span>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Avatars;
