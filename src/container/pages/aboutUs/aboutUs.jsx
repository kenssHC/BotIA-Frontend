import React, { Fragment } from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import image1 from '../../../assets/images/photos/10.jpg';
import image2 from '../../../assets/images/media/media-58.png';
import { Aboutusdata1, Aboutusdata2 } from './aboutusdata'; 

const Aboutus = () => {
    return (
        <Fragment> 
            {/* <!-- row --> */}
            <Container className="">
                <Row className=" about-main mb-5 d-flex justify-content-center align-items-center position-relative">
                    <Col lg={8} md={8} sm={12} className=" text-center">
                        <h1 className="mb-3 fw-semibold fs-46 about-heading">Hello! This is <span className="fs-56">Azira.</span></h1>
                        <p className="leading-normal lead-1">Majority have suffered alteration in some form.</p>
                        <p className="leading-normal  fs-16">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum you are going to use a passage of Lorem Ipsum</p>
                    </Col>
                </Row>
                <Row className=" mb-5 rounded-5">
                    <p><Image rounded src={image1} className="w-100" alt="image" /></p>
                </Row>
                {/* <!-- ROW-3 OPEN --> */}
                <Row>
                    <Col lg={12}>
                        <Card className="mt-7">
                            <Card.Body className="p-0 p-lg-5 text-dark">
                                <div className="statistics-info p-4">
                                    <Row>
                                        <Col xl={6}>
                                            <div className="">
                                                <h2 className="fw-bold mb-4 text-dark">We Help to <span className="text-primary">Build</span> Your Dream Project.</h2>
                                                <h5 className="leading-normal fw-normal mb-4 text-dark">majority have suffered alteration in some form, by injected humour</h5>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.</p>
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                <p> If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                                                    accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="">
                                            <div className="text-center">
                                                <Image src={image2} alt="" className="w-100" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!-- ROW-3 CLOSED --> */}
                <Row className="">
                    {Aboutusdata1.map((idx) => (
                        <Col xl={3} lg={6} md={6} className="" key={idx.id}>
                            <Card bg={`${idx.bgColor}-transparent`} className="">
                                <Card.Body>
                                    <div className="counter-status md-mb-0">
                                        <div className="text-center mb-1">
                                            {idx.iconPath}
                                        </div>
                                        <div className="text-center">
                                            <h2 className={`counter mb-2 ${idx.counterColor}`}>{idx.counter}</h2>
                                            <h6 className="mb-0 text-muted">{idx.label}</h6>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className="">
                    {Aboutusdata2.map((idx) => (
                        <Col xl={3} lg={6} md={6} sm={12} key={idx.id}>
                            <Card className=" p-3">
                                <Card.Body>
                                    <div className="mb-3 text-center about-team">
                                        <Image  src={idx.imageSrc} className="rounded-pill" alt="image" />
                                    </div>
                                    <div className="fs-16 text-center fw-semibold">
                                        {idx.name}
                                    </div>
                                    <div className="fs-14 text-center text-muted mb-3">
                                        {idx.position}
                                    </div>
                                    <div className="text-center fs-14 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !</div>
                                    <p className="text-center mb-0"><i className="fe fe-facebook text-primary me-3"></i><i className="fe fe-instagram text-success me-3"></i><i className="fe fe-globe text-info me-3"></i></p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* <!-- /row --> */}

        </Fragment>
    );
};

export default Aboutus;
