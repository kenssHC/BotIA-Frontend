import { Fragment, useState } from 'react';
import { Button, Col, Dropdown, Offcanvas, Row } from 'react-bootstrap';
import face12 from "../../../assets/images/faces/12.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import { offcanvas1, offcanvas2, offcanvas3, offcanvas4, offcanvas5 } from '../../../components/prism-code/adavanceui-prisem';
import ShowCode from '../../../components/common/showcode/showcode';
import { Link } from 'react-router-dom';


const Offcanva = () => {

    const [offcanvas, setOffcanvas] = useState({});
    const handleOffcanvasOpen = (offcanvasName) => {
        setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
    };
    const handleOffcanvasClose = (offcanvasName) => {
        setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
    };

    return (
        <Fragment>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Live demo" className="" reactCode={offcanvas1} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' className="btn mb-1 me-1" href="#offcanvasExample" onClick={() => handleOffcanvasOpen('liveOffcanvas')}
                            role="button" aria-controls="offcanvasExample">
                            Link with href
                        </Button>
                        <Button variant='primary' className="btn mb-1" type="button" onClick={() => handleOffcanvasOpen('liveOffcanvas')}>
                            Button with data-bs-target
                        </Button>
                        <Offcanvas show={offcanvas['liveOffcanvas'] || false} onHide={() => handleOffcanvasClose('liveOffcanvas')} backdrop={true} className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample">
                            <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face15} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Simon Cowall
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8923
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face14} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Adwar Kohali
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8913
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
                                                    AJ
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face13} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face12} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Ulda Shara
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02113
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
                                                    AM
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Abrem Moses
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Elira Voreme
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face9} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aposel Somes
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 65432
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
                                                    RO
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Rubek Onoke
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 5613
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face2} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Shara Alisab
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face4} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Yakebeth Jone
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Body scrolling" className="" reactCode={offcanvas2} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' className="btn" type="button" onClick={() => handleOffcanvasOpen('bodyOffcanvas')}>Enable
                            body scrolling
                        </Button>
                        <Offcanvas show={offcanvas['bodyOffcanvas']} onHide={() => handleOffcanvasClose('bodyOffcanvas')} className="offcanvas offcanvas-start" data-bs-scroll="true" backdrop={false}
                            tabIndex={-1} id="offcanvasScrolling">
                            <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face15} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Simon Cowall
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8923
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face14} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Adwar Kohali
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8913
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
                                                    AJ
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face13} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face12} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Ulda Shara
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02113
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
                                                    AM
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Abrem Moses
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Elira Voreme
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face9} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aposel Somes
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 65432
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
                                                    RO
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Rubek Onoke
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 5613
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face2} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Shara Alisab
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face4} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Yakebeth Jone
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Static backdrop" className="" reactCode={offcanvas3} customCardHeaderClass="justify-content-between">
                        <Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={() => handleOffcanvasOpen('staticOffcanvas')}
                            data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            Toggle static offcanvas
                        </Button>
                        <Offcanvas show={offcanvas['staticOffcanvas'] || false} onHide={() => handleOffcanvasClose('staticOffcanvas')} backdrop="static" className="offcanvas offcanvas-start" tabIndex={-1}
                            id="staticBackdrop" >
                            <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="staticBackdropLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face15} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Simon Cowall
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8923
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face14} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Adwar Kohali
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8913
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
                                                    AJ
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face13} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face12} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Ulda Shara
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02113
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
                                                    AM
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Abrem Moses
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Elira Voreme
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face9} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aposel Somes
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 65432
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
                                                    RO
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Rubek Onoke
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 5613
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face2} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Shara Alisab
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face4} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Yakebeth Jone
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Body scrolling and backdrop" className="" reactCode={offcanvas4} customCardHeaderClass="justify-content-between">
                        <Button className="btn btn-primary" type="button" onClick={() => handleOffcanvasOpen('backdropOffcanvas')}>Enable both scrolling &amp;
                            backdrop</Button>
                        <Offcanvas show={offcanvas['backdropOffcanvas'] || false} onHide={() => handleOffcanvasClose('backdropOffcanvas')} backdrop={true} className="offcanvas offcanvas-start" tabIndex={-1}
                            id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face15} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Simon Cowall
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8923
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face14} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Adwar Kohali
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8913
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
                                                    AJ
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face13} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face12} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Ulda Shara
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02113
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
                                                    AM
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Abrem Moses
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Elira Voreme
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face9} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aposel Somes
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 65432
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
                                                    RO
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Rubek Onoke
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 5613
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face2} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Shara Alisab
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face4} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Yakebeth Jone
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Placement" className="" reactCode={offcanvas5} customCardHeaderClass="justify-content-between">
                        <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={() => handleOffcanvasOpen('placementOffcanvas')}
                            data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                            offcanvas</Button>
                        <Offcanvas placement='top' show={offcanvas['placementOffcanvas'] || false} onHide={() => handleOffcanvasClose('placementOffcanvas')} className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={() => handleOffcanvasOpen('rightOffcanvas')}
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
                            offcanvas
                        </Button>
                        <Offcanvas placement='end' show={offcanvas['rightOffcanvas'] || false} onHide={() => handleOffcanvasClose('rightOffcanvas')} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel1">
                            <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel1">Notifications
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face15} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Simon Cowall
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8923
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face14} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Adwar Kohali
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 8913
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
                                                    AJ
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face13} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aliza John
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 9013
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face12} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Ulda Shara
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02113
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
                                                    AM
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Abrem Moses
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Elira Voreme
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face9} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Aposel Somes
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 65432
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
                                                    RO
                                                </span>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Rubek Onoke
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 873 5613
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face2} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Shara Alisab
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02456
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={face4} alt="" />
                                                </div>
                                                <div className="flex-1  flex-between">
                                                    <div>
                                                        <h6 className="mb-1 fw-semibold">
                                                            Yakebeth Jone
                                                        </h6>
                                                        <p className="fw-semibold fs-11 mb-0 text-muted">
                                                            +1(555) 76554 02876
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item as="a"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                                                <li><Dropdown.Item as="a"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Button className="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" onClick={() => handleOffcanvasOpen('bottomOffcanvas')}
                            data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
                            bottom
                            offcanvas</Button>
                        <Offcanvas placement='bottom' show={offcanvas['bottomOffcanvas'] || false} onHide={() => handleOffcanvasClose('bottomOffcanvas')} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body small">
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Offcanva;
