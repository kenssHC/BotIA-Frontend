import { Fragment, } from 'react';
import { Badge, Button, Col, Row, } from 'react-bootstrap';
import { badges, badges1,Outlinebadgesdata } from './badgesdata';
import face1 from "../../../assets/images/faces/2.jpg";
import face2 from "../../../assets/images/faces/15.jpg";
import face3 from "../../../assets/images/faces/10.jpg";
import { badge1, badge10, badge11, badge12, badge13, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9, databadge1, databadge2, databadge3, databadge4, databadge5, databadge6, databadge7, databadge8 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Badges = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Badges" className="" reactCode={badge1} dataCode={databadge1} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {badges.map((badge) => (
                            <Badge key={badge.id} bg={badge.color} className={`badge bg-${badge.color} ${badge.class}`}>{badge.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Pill badges" className="" reactCode={badge2} dataCode={databadge2} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {badges.map((badge) => (
                            <Badge key={badge.id} bg={badge.color} className={`badge bg-${badge.color} ${badge.class} rounded-pill`}>{badge.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Light Badges" className="" reactCode={badge3} dataCode={databadge3} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {Outlinebadgesdata.map((badge) => (
                            <Badge key={badge.id} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Light Pill Badges" className="" reactCode={badge4} dataCode={databadge4} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {Outlinebadgesdata.map((badge) => (
                            <Badge key={badge.id} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Gradient Badges" className="" reactCode={badge5} dataCode={databadge5} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {badges1.map((badge1) => (
                            <Badge key={badge1.id} bg={badge1.color} className={`badge bg-${badge1.color}-gradient`}>{badge1.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Gradient Pill Badges" className="" reactCode={badge6} dataCode={databadge6} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {badges1.map((badge1) => (
                            <Badge key={badge1.id} bg={badge1.color} className={`badge bg-${badge1.color}-gradient rounded-pill`}>{badge1.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Outline Badges" className="" reactCode={badge7} dataCode={databadge7} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {Outlinebadgesdata.map((badge) => (
                            <Badge key={badge.id} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Outline Pill Badges" className="" reactCode={badge8} dataCode={databadge8} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        {Outlinebadgesdata.map((badge) => (
                            <Badge key={badge.id} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title=" Buttons With Badges" className="" reactCode={badge9} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        <Button variant='danger' type="button" className="my-1 me-2">
                            Notifications <Badge bg="white" className="ms-2 text-danger">777</Badge>
                        </Button>
                        <Button variant='primary' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="white" className="ms-2 text-primary">4</Badge>
                        </Button>
                        <Button variant='info' type="button" className="my-1 me-2">
                            Notifications <Badge bg="white" className="ms-2 text-info">32</Badge>
                        </Button>
                        <Button variant='warning' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="white" className="ms-2 text-warning">7</Badge>
                        </Button>
                        <Button variant='success' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="white" className="ms-2 text-success">12</Badge>
                        </Button>
                        <Button variant='secondary' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="white" className="ms-2 text-secondary">7</Badge>
                        </Button>
                    </ShowCode>
                </Col>
                </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Buttons With Badges" className="" reactCode={badge9} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        <Button variant='primary' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="secondary" className="badge ms-2 ">4</Badge>
                        </Button>
                        <Button variant='secondary' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="primary" className="badge ms-2 ">7</Badge>
                        </Button>
                        <Button variant='success' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="danger" className="badge ms-2 ">12</Badge>
                        </Button>
                        <Button variant='info' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="warning" className="badge ms-2 ">32</Badge>
                        </Button>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="  Outline Button Badges" className="" reactCode={badge10} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-2">
                        <Button variant='outline-primary' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="" className="badge ms-2">4</Badge>
                        </Button>
                        <Button variant='outline-secondary' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="" className="badge ms-2">7</Badge>
                        </Button>
                        <Button variant='outline-success' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="" className="badge ms-2">12</Badge>
                        </Button>
                        <Button variant='outline-info' type="button" className="btn  my-1 me-2">
                            Notifications <Badge bg="" className="badge ms-2">32</Badge>
                        </Button>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Headings" className="" reactCode={badge11} customCardHeaderClass="justify-content-between" >
                        <h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
                        <h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
                        <h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
                        <h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
                        <h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
                        <h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Positioned Badges" className="" reactCode={badge12} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap gap-5" >
                                <Button variant='primary' type="button" className="btn  position-relative">
                                    Inbox
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Button>
                                <Button variant='secondary' type="button" className="btn  position-relative">
                                    Profile
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </Button>
                                <span className="avatar">
                                    <img src={face1} alt="img" />
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </span>
                                <span className="avatar ">
                                    <img src={face2} alt="img" />
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src={face3} alt="img" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </span>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Custom Badges" className="" reactCode={badge13} customCardHeaderClass="justify-content-between" customCardBodyClass='d-flex align-items-center gap-3 flex-wrap'  >
                            <Badge bg="outline-info" className="mb-xxl-0 badge bg-outline-info custom-badge fs-15 me-5"><i className="ti ti-home me-1 d-inline-flex"></i>Home</Badge>
                                        <Badge bg="success" className="mb-xxl-0  custom-badge fs-15 me-5"><i className="ti ti-home me-1 d-inline-flex"></i>Home</Badge>
                                        <p className="mb-xxl-0 icon-badge me-5">
                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                                            <Badge bg="success"  className=" rounded-pill ">14</Badge>
                                        </p>
                                        <Badge variant="" className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</Badge>
                                        <p className="mb-xxl-0 text-badge me-5">
                                            <span className="text fs-18">Inbox</span>
                                            <Badge bg="success" className="badge rounded-pill ">32</Badge>
                                        </p>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Badges;


