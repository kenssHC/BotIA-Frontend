import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
import { Colors, BackgroundOpacity, MoreColors } from './colordata'; 

const Colours = () => {
    return (
        <Fragment> 
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col lg={12} sm={6} >
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Background Colors
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {Colors.map((idx) => (
                                    <Col className="p-3 " key={idx.id}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.title}</code></p>
                                    </Col>
                                ))}

                            </Row>
                        </CardBody >
                    </Card>
                </Col>
                <Col lg={12} sm={6} >
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Background gradients
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {Colors.map((idx) => (
                                    <Col className="p-3 " key={idx.id}>
                                        <div className={`m-2 bg-${idx.color}-gradient mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.gradient}</code></p>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6} >
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Background transparent colors
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {Colors.map((idx) => (
                                    <Col className="p-3 " key={idx.id}>
                                        <div className={`m-2 bg-${idx.color}-transparent mx-auto color-container shadow-none`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.transparent}</code></p>
                                    </Col>
                                ))}

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6} >
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Background outline colors
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {Colors.map((idx) => (
                                    <Col className="p-3" key={idx.id}>
                                        <div className={`m-2 bg-outline-${idx.color} mx-auto color-container`}><i className="bi bi-emoji-smile fs-18"></i></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.outline}</code></p>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6} >
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Border Colors
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {Colors.map((idx) => (
                                    <Col className="p-3" key={idx.id}>
                                        <div className={`m-2 border border-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.border}</code></p>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={12} sm={6} >
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Background Opacity
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {BackgroundOpacity.map((idx) => (
                                    <Col className="p-3 " key={idx.id}>
                                        <div className={`m-2 bg-success bg-opacity-${idx.value} text-fixed-white mx-auto color-container`}>{idx.progressValue}</div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.name}</code></p>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Text Colors
                            </div>
                        </CardHeader>
                        <CardBody >
                            <Row className=" row-cols-12 d-flex align-items-center">
                                {Colors.map((idx) => (
                                    <Col className="p-3 " key={idx.id}>
                                        <div className={`m-2 text-${idx.color} fw-semibold fs-14 text-center`}>{idx.color}</div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.text}</code></p>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <CardHeader>
                                    <div className="card-title">
                                        Text Opacity
                                    </div>
                                </CardHeader>
                                <CardBody >
                                    <Row className=" row-cols-12 d-flex align-items-center">
                                        {BackgroundOpacity.map((idx) => (
                                            <Col className="p-3" key={idx.id}>
                                                <div className={`m-2 text-primary text-opacity-${idx.value1} fw-semibold fs-14 text-center`}>{idx.opacity}</div>
                                                <p className="pb-0 mb-0 fw-semibold text-center"><code>{idx.text}</code></p>
                                            </Col>
                                        ))}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <CardHeader>
                            <div className="card-title">
                                Callout
                            </div>
                        </CardHeader>
                        <CardBody >
                            <div className="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. </div>
                            <div className="callout callout-info">Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. </div>
                            <div className="callout callout-warning">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. </div>
                            <div className="callout callout-danger">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit.
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <h6 className="mb-3">Other Colors:</h6>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.blueColor}`}>
                                    ${idx.blueColor}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.indigoColor}`}>
                                    ${idx.indigoColor}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.purple}`}>
                                    ${idx.purple}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.pink}`}>
                                    ${idx.pink}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.red}`}>
                                    ${idx.red}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.orange}`}>
                                    ${idx.orange}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.yellow}`}>
                                    ${idx.yellow}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.green}`}>
                                    ${idx.green}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.teal}`}>
                                    ${idx.teal}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.cyan}`}>
                                    ${idx.cyan}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <CardBody className="d-xl-flex">
                            {MoreColors.map((idx) => (
                                <div key={idx.id} className={`flex-fill p-3 bd-${idx.gray}`}>
                                    ${idx.gray}
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
        </Fragment>
    )
}
export default Colours;
