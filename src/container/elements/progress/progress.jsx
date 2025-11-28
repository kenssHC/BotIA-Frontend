import { Fragment, } from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { CustomProgress2data, Multipleprogress } from './progressbardata';
import { dataprogress11, dataprogress6, progress1, progress10, progress11, progress12, progress13, progress14, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';


const Progress = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Progress" className="" reactCode={progress1} customCardHeaderClass="justify-content-between">
                        <ProgressBar now={0} className="progress mb-3" />
                        <ProgressBar now={25} className="progress mb-3" />
                        <ProgressBar now={50} className="progress mb-3" />
                        <ProgressBar now={75} className="progress mb-3" />
                        <ProgressBar now={100} className="progress mb-0" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Different Colored Progress" className="" reactCode={progress2} customCardHeaderClass="justify-content-between">
                        <ProgressBar variant='secondary' now={20} className="progress mb-3" />
                        <ProgressBar variant='warning' now={40} className="progress mb-3" />
                        <ProgressBar variant='info' now={60} className="progress mb-3" />
                        <ProgressBar variant='success' now={80} className="progress mb-3" />
                        <ProgressBar variant='danger' now={100} className="progress mb-0" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Striped Progress" className="" reactCode={progress3} customCardHeaderClass="justify-content-between">
                        <ProgressBar striped variant='primary' now={10} className="progress mb-3" />
                        <ProgressBar striped variant='secondary' now={25} className="progress mb-3" />
                        <ProgressBar striped variant='success' now={50} className="progress mb-3" />
                        <ProgressBar striped variant='info' now={75} className="progress mb-3" />
                        <ProgressBar striped variant='warning' now={100} className="progress mb-0" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Progress Height" className="" reactCode={progress4} customCardHeaderClass="justify-content-between">
                        <ProgressBar variant='primary' now={10} className="progress progress-xs mb-3" />
                        <ProgressBar variant='primary' now={25} className="progress progress-sm mb-3" />
                        <ProgressBar variant='primary' now={50} className="progress  mb-3" />
                        <ProgressBar variant='primary' now={75} className="progress progress-lg mb-3" />
                        <ProgressBar variant='primary' now={100} className="progress progress-xl mb-0" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Progress With Labels" className="" reactCode={progress5} customCardHeaderClass="justify-content-between">
                        <ProgressBar variant='primary' now={10} label={`${10}%`} className="progress mb-3" />
                        <ProgressBar variant='secondary' now={20} label={`${20}%`} className="progress mb-3" />
                        <ProgressBar variant='success' now={40} label={`${40}%`} className="progress mb-3" />
                        <ProgressBar variant='info' now={60} label={`${60}%`} className="progress mb-3" />
                        <ProgressBar variant='warning' now={80} label={`${80}%`} className="progress mb-0" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Multiple bars With Sizes" className="" reactCode={progress6} dataCode={dataprogress6} customCardHeaderClass="justify-content-between">
                        {Multipleprogress.map((idx) => (
                            <ProgressBar className={`progress-stacked progress-${idx.size} ${idx.margin}`} key={idx.id}>
                                <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
                                <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
                                <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
                            </ProgressBar>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Animated Stripped Progress" className="" reactCode={progress7} customCardHeaderClass="justify-content-between">
                        <ProgressBar variant='' className="progress mb-3" animated now={10} />
                        <ProgressBar variant='secondary' className="progress mb-3" animated now={20} />
                        <ProgressBar variant='success' className="progress mb-3" animated now={40} />
                        <ProgressBar variant='info' className="progress mb-3" animated now={60} />
                        <ProgressBar variant='warning' className="progress" animated now={80} />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Gradient Progress" className="" reactCode={progress8} customCardHeaderClass="justify-content-between">
                        <ProgressBar variant='primary-gradient' className="progress mb-3" animated now={10} />
                        <ProgressBar variant='secondary-gradient' className="progress mb-3" animated now={20} />
                        <ProgressBar variant='success-gradient' className="progress mb-3" animated now={40} />
                        <ProgressBar variant='info-gradient' className="progress mb-3" animated now={60} />
                        <ProgressBar variant='warning-gradient' className="progress" animated now={80} />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Custom Animated Progress" className="" reactCode={progress9} customCardHeaderClass="justify-content-between">
                        <ProgressBar variant='primary-gradient' className="progress mb-3 progress-animate" now={10} />
                        <ProgressBar variant='secondary-gradient' className="progress mb-3 progress-animate" now={20} />
                        <ProgressBar variant='success-gradient' className="progress mb-3 progress-animate" now={40} />
                        <ProgressBar variant='info-gradient' className="progress mb-3 progress-animate" now={60} />
                        <ProgressBar variant='warning-gradient' className="progress  progress-animate" now={80} />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-1" className="" reactCode={progress10} customCardHeaderClass="justify-content-between">
                        <div className="progress progress-sm progress-custom mb-5 progress-animate">
                            <h6 className="progress-bar-title">Mobiles</h6>
                            <ProgressBar variant="primary" className="w-100 custom-height1" now={50} />
                        </div>
                        <div className="progress progress-sm progress-custom mb-5 progress-animate">
                            <h6 className="progress-bar-title bg-secondary">Watches</h6>
                            <ProgressBar variant="secondary" className="w-100 custom-height1" now={60} />
                        </div>
                        <div className="progress progress-sm progress-custom  progress-animate">
                            <h6 className="progress-bar-title bg-success">Shirts</h6>
                            <ProgressBar variant="success" className="w-100 custom-height1" now={70} />
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-2" className="" reactCode={progress11} dataCode={dataprogress11} customCardHeaderClass="justify-content-between">
                        {CustomProgress2data.map((idx) => (
                            <div className={`progress progress-bar progress-sm ${idx.margin}`} key={idx.id} >
                                <div className={`progress-item-1 bg-${idx.class}`}></div>
                                <div className={`progress-item-2 bg-${idx.class2}`}></div>
                                <div className={`progress-item-3 bg-${idx.class1}`}></div>
                                <ProgressBar variant={idx.class} now={idx.now} />
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Custom Progress-3" className="" reactCode={progress12} customCardHeaderClass="justify-content-between">
                        <div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar">
                            <div className="progress-bar bg-primary" style={{ width: "50%" }}>
                                <div className="progress-bar-value">50%</div>
                            </div>
                        </div>
                        <div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar">
                            <div className="progress-bar bg-secondary" style={{ width: "60%" }}>
                                <div className="progress-bar-value secondary">60%</div>
                            </div>
                        </div>
                        <div className="progress progress-lg custom-progress-3 progress-animate" role="progressbar" >
                            <div className="progress-bar bg-success" style={{ width: "70%" }}>
                                <div className="progress-bar-value success">70%</div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Custom Progress-4" className="" reactCode={progress13} customCardHeaderClass="justify-content-between">
                        <div className="progress progress-xl mb-3 progress-animate custom-progress-4" role="progressbar">
                            <div className="progress-bar bg-primary-gradient" style={{ width: "10%" }}></div>
                            <div className="progress-bar-label">10%</div>
                        </div>
                        <div className="progress progress-xl mb-3 progress-animate custom-progress-4 secondary" role="progressbar" >
                            <div className="progress-bar bg-secondary-gradient" style={{ width: "20%" }}></div>
                            <div className="progress-bar-label">20%</div>
                        </div>
                        <div className="progress progress-xl mb-3 progress-animate custom-progress-4 success" role="progressbar">
                            <div className="progress-bar bg-success-gradient" style={{ width: "40%" }}></div>
                            <div className="progress-bar-label">40%</div>
                        </div>
                        <div className="progress progress-xl mb-3 progress-animate custom-progress-4 info" role="progressbar">
                            <div className="progress-bar bg-info-gradient" style={{ width: "60%" }}></div>
                            <div className="progress-bar-label">60%</div>
                        </div>
                        <div className="progress progress-xl mb-3 progress-animate custom-progress-4 warning" role="progressbar">
                            <div className="progress-bar bg-warning-gradient" style={{ width: "80%" }}></div>
                            <div className="progress-bar-label">80%</div>
                        </div>
                        <div className="progress progress-xl progress-animate custom-progress-4 danger" role="progressbar">
                            <div className="progress-bar bg-danger-gradient" style={{ width: "100%" }}></div>
                            <div className="progress-bar-label text-fixed-white">100%</div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-5" className="" reactCode={progress14} customCardHeaderClass="justify-content-between">
                        <h6 className="fw-semibold mb-2">Project Dependencies</h6>
                        <ProgressBar className="progress-stacked progress-xl mb-5" >
                            <ProgressBar variant="primary" now={25} label={`${25}%`} key={1} />
                            <ProgressBar variant="secondary" now={35} label={`${35}%`} key={2} />
                            <ProgressBar variant="danger" now={40} label={`${40}%`} key={3} />
                        </ProgressBar>
                        <Row className="justify-content-center">
                            <Col xl={5}>
                                <div className="border p-3">
                                    <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%</span></p>
                                    <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="primary" now={25} />
                                    <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%</span></p>
                                    <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="secondary" now={35} />
                                    <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%</span></p>
                                    <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="danger" now={40} />
                                </div>
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Progress;


