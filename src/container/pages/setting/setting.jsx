import React, { Fragment } from 'react';
import { Card, Row, Col, Nav, Form, CardHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SettingData } from './settingdata';

const Setting = () => {
    return (
        <Fragment>
            {/* <!-- row --> */}
            <Row>
                <Col lg={4} xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Settings</Card.Title>
                        </Card.Header>
                        <div className="main-content-left main-content-left-mail card-body pt-0 ">
                            <div className="main-settings-menu">
                                <Nav className=" main-nav-column">
                                    <Nav.Link className=" thumb active mb-2" ><i className="fe fe-home"></i> Main </Nav.Link>
                                    <Nav.Link className=" border-top-0 thumb mb-2" ><i className="fe fe-grid"></i> Web Apps</Nav.Link>
                                    <Nav.Link className=" border-top-0 thumb mb-2" ><i className="fe fe-server"></i> General</Nav.Link>
                                    <Nav.Link className=" border-top-0 thumb mb-2" ><i className="fe fe-globe"></i> Components</Nav.Link>
                                    <Nav.Link className=" border-top-0 thumb mb-2" ><i className="fe fe-layers"></i> Pages</Nav.Link>
                                    <Nav.Link className=" border-top-0 thumb mb-2" ><i className="fe fe-flag"></i> Language & Region</Nav.Link>
                                    <Nav.Link className=" border-top-0 thumb mb-2" ><i className="fe fe-bell"></i> Notifications</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={8} xl={9} >
                    <Card className=" custom-card">
                        <Card.Body>
                            <h3 className="card-title mb-2">Overview</h3>
                            <p className="mb-0">Used to customize and manage all settngs about this Dashboard</p>
                        </Card.Body>
                    </Card>
                    <Row >
                        {SettingData.map(item => (
                            <Col lg={12} xl={6} md={12} sm={12} className=" p-2" key={item.id}>
                                <Card className=" custom-card">
                                    <Card.Body>
                                        <Row >
                                            <Col lg={12} xl={12} md={12} sm={12} className=" p-2">
                                                <div className="d-flex">
                                                    <div className="settings-main-icon me-3 mt-1">
                                                        <i className={`fe fe-${item.icone}`}></i>
                                                    </div>
                                                    <div>
                                                        <p className="fs-20 fw-normal d-flex mb-0">{item.titele}</p>
                                                        <p className="fs-13 text-muted mb-0">{item.text}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="p-3">
                                        <Link to="#" className="fs-14 mb-0 text-dark">Go to Settings</Link>
                                        <div className="custom-switch float-end mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3">
                                                    <span className="fs-14 " >Restore default</span>
                                                </div>
                                                <Form.Check className=" form-check-lg form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="switch-lg" defaultChecked={item.cheack} />
                                                </Form.Check>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!--/ row -->       */}
        </Fragment>
    );
};
export default Setting;
