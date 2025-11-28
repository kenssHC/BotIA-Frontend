import React, { Fragment } from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Icondata1, Icondata10, Icondata11, Icondata12, Icondata2, Icondata3, Icondata4, Icondata5, Icondata6, Icondata7, Icondata8, Icondata9 } from './iconsdata';
import { Link } from 'react-router-dom';

const Icons = () => {
    return (
        <Fragment>
            {/* <!-- Start::row-1 --> */}
            <Row className="">
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Font Awesome Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://fontawesome.com/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="fa fa-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata1.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Material Design Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://pictogrammers.com/library/mdi/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="mdi mdi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata2.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Simple Line Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://simplelineicons.github.io/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="si si-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata3.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Feather Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://feathericons.com/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata4.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Ionic Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://ionic.io/ionicons" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="ion ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata5.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Themify Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://themify.me/themify-icons" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata6.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Typicon Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://www.s-ings.com/typicons/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="typcn typcn-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata7.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Line Awesome Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://icons8.com/line-awesome" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="las la-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata8.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className="card custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Boxicons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://boxicons.com/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata9.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className="card custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Tabler Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://tabler-icons.io/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata10.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Remix Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://remixicon.com/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="ri-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata11.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className="card custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Bootstrap Icons</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://icons.getbootstrap.com/" target="_blank" className="text-primary">click here</Link> .</p>
                            <p className="mb-4"><code>&lt;i className="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Icondata12.map((idx) => (
                                    <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip>{idx.tooltip}</Tooltip>}>
                                        <li className="icons-list-item" ><i className={idx.className}></i></li>
                                    </OverlayTrigger>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};
export default Icons;
