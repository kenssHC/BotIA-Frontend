import React, { Fragment, useState } from 'react';
import { Card, Row, Col, ListGroup, Button, Dropdown, Badge, Nav, Modal, Collapse } from 'react-bootstrap';
import media22 from '../../../assets/images/media/media-22.jpg';
import media16 from '../../../assets/images/media/media-16.jpg';
import media24 from '../../../assets/images/media/media-24.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import media25 from '../../../assets/images/media/media-25.jpg';
import media26 from '../../../assets/images/media/media-26.jpg';
import media27 from '../../../assets/images/media/media-27.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import media4 from '../../../assets/images/media/media-4.jpg';
import media9 from '../../../assets/images/media/media-9.jpg';
import media15 from '../../../assets/images/media/media-15.jpg';
import media29 from '../../../assets/images/media/media-29.jpg';
import media28 from '../../../assets/images/media/media-28.jpg';
import media30 from '../../../assets/images/media/media-30.jpg';
import media31 from '../../../assets/images/media/media-31.jpg';
import media32 from '../../../assets/images/media/media-32.jpg';
import media33 from '../../../assets/images/media/media-33.jpg';
import media35 from '../../../assets/images/media/media-35.jpg';
import media36 from '../../../assets/images/media/media-36.jpg';
import media34 from '../../../assets/images/media/media-34.jpg';
import media37 from '../../../assets/images/media/media-37.jpg';
import media38 from '../../../assets/images/media/media-38.jpg';
import media39 from '../../../assets/images/media/media-39.jpg';
import media40 from '../../../assets/images/media/media-40.jpg';
import media41 from '../../../assets/images/media/media-41.jpg';
import media42 from '../../../assets/images/media/media-42.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import media43 from '../../../assets/images/media/media-43.jpg';
import media44 from '../../../assets/images/media/media-44.jpg';
import media45 from '../../../assets/images/media/media-45.jpg';
import media46 from '../../../assets/images/media/media-46.jpg';
import media47 from '../../../assets/images/media/media-47.jpg';
import { Link } from 'react-router-dom';
import { Backgroundcolorcards, Coloredborder } from './carddata';

const Cards = () => {
    // Card With Collapse Button
    const [BasicExpanded, setBasicExpanded] = useState(true);

    const BasicHandleExpandClick = () => {
        setBasicExpanded(!BasicExpanded);
    };
    //Card With Close Button
    const [Basicshow, setBasicshow] = useState(true);
    //fullscreen
    const [fullScreen, setFullscreen] = useState('true');
    const [fullscreenshow, setfullscreenShow] = useState(false);

    const fullscreenmodalClose = () => setfullscreenShow(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setfullscreenShow(true);
    }
    return (
        <Fragment>
            {/* <!-- Start::row-1 --> */}
            <Row className="">
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="">
                    <Card className=" custom-card">
                        <Card.Img variant='top' src={media22} className="card-img-top" alt="..." />
                        <Card.Body className=".">
                            <Card.Title className=" fw-semibold">Card title</Card.Title>
                            <Card.Text className=" text-muted">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Text>
                            <Button variant="primary" className="">Read More</Button>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <Card.Text className="">Last updated 3 mins ago</Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Featured</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold">Special title treatment</Card.Title>
                            <Card.Text className="">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</Card.Text>
                            <Button variant="primary" className="">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold mb-2">Card title</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available there are so many ways to solve but the majority have suffered.</Card.Text>
                        </Card.Body>
                        <Card.Footer className="">
                            <Card.Link className=" text-danger">Buy Now</Card.Link>
                            <Card.Link className=" text-success d-inline-flex"><u>Review</u></Card.Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="">
                    <Card className=" custom-card">
                        <Card.Img variant='top' src={media16} className="card-img-top" alt="..." />
                        <Card.Body className="">
                            <Card.Text className="">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                    <h6 className="mb-3">Only Card Body:</h6>
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Text className="mb-0">
                                It is a long established fact that a reader will be distracted by the readable content
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="">
                    <Card className=" custom-card">
                        <Card.Img src={media24} className="card-img-top" alt="..." />
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold">Card title</Card.Title>
                            <Card.Text className="">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush" as="ul" className=" ">
                            <ListGroup.Item as="li" className="">An item</ListGroup.Item>
                            <ListGroup.Item as="li" className="">A second item</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className="">
                            <Card.Link className=" text-primary">Card link</Card.Link>
                            <Card.Link className=" text-secondary d-inline-block">Another link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row className="">
                <Col xl={9} className="">
                    <h6 className="mb-3">Text Alignment:</h6>
                    <Row className="">
                        <Col xl={4} className="">
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <div className="mb-2">
                                        <span className="avatar avatar-md">
                                            <Card.Img src={face15} alt="img" />
                                        </span>
                                    </div>
                                    <Card.Title className=" fw-semibold">Where it come from</Card.Title>
                                    <Card.Text className="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</Card.Text>
                                    <Button variant="primary" className="">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} className="">
                            <Card className=" text-center custom-card">
                                <Card.Body className="">
                                    <div className="mb-2">
                                        <span className="avatar avatar-md">
                                            <Card.Img src={face3} alt="img" />
                                        </span>
                                    </div>
                                    <Card.Title className=" fw-semibold">Why do we use it?</Card.Title>
                                    <Card.Text className="">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</Card.Text>
                                    <Button variant="primary" className="">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} className="">
                            <Card className=" text-end custom-card">
                                <Card.Body className="">
                                    <div className="mb-2">
                                        <span className="avatar avatar-md">
                                            <Card.Img src={face11} alt="img" />
                                        </span>
                                    </div>
                                    <Card.Title className=" fw-semibold">What is special?</Card.Title>
                                    <Card.Text className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</Card.Text>
                                    <Button variant="primary" className="">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3} className="">
                    <Row className="">
                        <h6 className="mb-3">Mixins utilities:</h6>
                        <Col xl={12} className="">
                            <Card border='success' className=" custom-card border  mb-3">
                                <Card.Header className=" bg-transparent border-bottom border-success ">Header</Card.Header>
                                <Card.Body className=" text-success">
                                    <Card.Title className=" fw-semibold">Looking For Success?</Card.Title>
                                    <Card.Text className="">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</Card.Text>
                                </Card.Body>
                                <Card.Footer className=" bg-transparent border-top border-success">Footer</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3--> */}
            <Row className="">
                <Col xxl={6} xl={6} lg={12} className="">
                    <Row className="">
                        <h6 className="mb-3">Quote:</h6>
                        <Col xl={12} className="">
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <blockquote className="blockquote mb-0 text-center">
                                        <p className="fs-16 fw-semibold mb-2">The greatest glory in living lies not in never falling, but in rising every time we fall.</p>
                                        <footer className="blockquote-footer mt-2 fs-14">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <h6 className="mb-3">List Group:</h6>
                            <Row className="">
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="">
                                    <Card className=" custom-card">
                                        <ListGroup variant='flush' as="ul" className=" ">
                                            <ListGroup.Item as="li" className="">An item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A second item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A third item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A fourth item</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="">
                                    <Card className=" custom-card">
                                        <Card.Header className="">
                                            Featured
                                        </Card.Header>
                                        <ListGroup variant='flush' as="ul" className="">
                                            <ListGroup.Item as="li" className="">An item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A second item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A third item</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="">
                                    <Card className=" custom-card">
                                        <ListGroup variant='flush' as="ul" className="">
                                            <ListGroup.Item as="li" className="">An item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A second item</ListGroup.Item>
                                            <ListGroup.Item as="li" className="">A third item</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Footer className="">
                                            Card footer
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={6} lg={12} className="">
                    <h6 className="mb-3">Using Grid Markups:</h6>
                    <Row className=" row-sm-cols-3">
                        <Col className="col">
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <Card.Img src={media25} className="card-img mb-3" alt="..." />
                                    <Card.Title className=" fw-semibold">Product A</Card.Title>
                                    <Card.Text className="">With supporting text below as a natural
                                        lead-in to additional content.</Card.Text>
                                    <Button variant='primary' className="">Purchase</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <Card.Img src={media26} className="card-img mb-3" alt="..." />
                                    <Card.Title className=" fw-semibold">Product B</Card.Title>
                                    <Card.Text className="">With supporting text below as a natural
                                        lead-in to additional content.</Card.Text>
                                    <Button variant='secondary' className="">Purchase</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <Card.Img src={media27} className="card-img mb-3" alt="..." />
                                    <Card.Title className=" fw-semibold">Product-C</Card.Title>
                                    <Card.Text className="">With supporting text below as a natural
                                        lead-in to additional content.</Card.Text>
                                    <Button variant='light' className="">Purchase</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End::row-3--> */}

            {/* <!-- Start::row-4 --> */}
            <h6 className="mb-3">Card Header &amp; Footer:</h6>
            <Row className="">
                <Col xl={3} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <div className="d-flex align-items-center w-100">
                                <div className="me-2">
                                    <span className="avatar avatar-rounded">
                                        <Card.Img src={face11} alt="img" />
                                    </span>
                                </div>
                                <div className="">
                                    <div className="fs-15 fw-semibold">Adam Smith</div>
                                    <p className="mb-0 text-muted fs-11">28 Years, Male</p>
                                </div>
                                <Dropdown className=" ms-auto">
                                    <Dropdown.Toggle as="a" aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                        <i className="fe fe-more-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu">
                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                        <li><Dropdown.Item>Month</Dropdown.Item></li>
                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            If you are going to use, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="d-flex justify-content-between">
                                <div className="fs-semibold fs-14">28,Nov 2022</div>
                                <div className="fw-semibold text-success">Assistant Professor</div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className=" border-bottom-0 pb-0">
                            <div>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-black op-1"><i className="bi bi-star-fill"></i></span>
                                <p className="d-block text-muted mb-0 fs-12 fw-semibold">1 year ago</p>
                            </div>
                        </Card.Header>
                        <Card.Body className="pt-3">
                            <div className="fw-semibold fs-15 mb-2">Very Great!</div>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="d-flex align-items-center">
                                <span className="avatar avatar-sm avatar-rounded me-2">
                                    <Card.Img src={face12} alt="img" />
                                </span>
                                <div className="fw-semibold fs-14">Corey Anderson</div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="">
                    <Card className=" custom-card text-center">
                        <Card.Header className=" border-bottom-0 pb-0">
                            <span className="ms-auto shadow-lg fs-17"><i className="ri-heart-fill text-danger"></i></span>
                        </Card.Header>
                        <Card.Body className=" pt-1">
                            <span className="avatar avatar-xl avatar-rounded me-2 mb-2">
                                <Card.Img src={face5} alt="img" />
                            </span>
                            <div className="fw-semibold fs-16">Sasha Max</div>
                            <p className="mb-4 text-muted fs-11">Web Developer</p>
                            <div className="btn-list">
                                <Button aria-label="Facebook" type="button" variant="primary" className="btn-icon btn-facebook">
                                    <i className="ri-facebook-line"></i>
                                </Button>
                                <Button aria-label="Twitter" type="button" variant="info" className="btn-icon btn-twitter">
                                    <i className="ri-twitter-x-line"></i>
                                </Button>
                                <Button aria-label="Instagram" type="button" variant="danger" className="btn-icon btn-instagram" >
                                    <i className="ri-instagram-line"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="">
                    <Card className=" custom-card border border-primary">
                        <Card.Body className="">
                            <svg className="footer-card-icon my-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#C6CDD1" d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z" /><path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z" /><path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z" /><path fill="#878A8F" d="M1 11v8a2 2 0 0 0 2 2h8V11H1z" /><path fill="#797D82" d="M11 11v10h8a2 2 0 0 0 2-2v-8H11z" /><path fill="#FFF" d="M14 6h5v1h-5z" /><path d="M19 20.75H3a2 2 0 0 1-2-2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-.25a2 2 0 0 1-2 2z" opacity=".1" /><circle cx="16" cy="16" r="7" fill="#136ad0" /><path d="M16 22.75c-3.08 0-5.704-1.97-6.696-4.713C10.18 20.907 12.85 23 16 23s5.82-2.094 6.696-4.963C21.704 20.781 19.08 22.75 16 22.75z" opacity=".1" /><path fill="#FFF" d="M16 9.25c3.08 0 5.704 1.97 6.696 4.713C21.82 11.093 19.15 9 16 9s-5.82 2.094-6.696 4.963C10.296 11.219 12.92 9.25 16 9.25z" opacity=".2" /><path fill="#FFF" d="M4 6h5v1H4z" /><path fill="#FFF" d="M6 4h1v5H6zM13 14h6v1h-6zM13 17h6v1h-6zM4.379 15.086l.707-.707 3.535 3.535-.707.707z" /><path fill="#FFF" d="m4.379 17.914 3.535-3.535.707.707-3.535 3.535z" /><path fill="#FFF" d="M19 1H3a2 2 0 0 0-2 2v.25a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V3a2 2 0 0 0-2-2z" opacity=".2" /><linearGradient id="a" x1="14.367" x2="19.862" y1="14.367" y2="19.862" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3E2723" stopOpacity=".2" /><stop offset="1" stopColor="#3E2723" stopOpacity=".02" /></linearGradient><path fill="url(#a)" d="M19 14v1h-6l2 2h4v1h-6l4.766 4.766a7.014 7.014 0 0 0 5-5L19 14z" /><linearGradient id="b" x1="-.448" x2="23.366" y1="5.662" y2="16.766" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFF" stopOpacity=".2" /><stop offset="1" stopColor="#FFF" stopOpacity="0" /></linearGradient><path fill="url(#b)" d="M21 11.11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.11A6.974 6.974 0 0 0 16 23c3.86 0 7-3.14 7-7a6.974 6.974 0 0 0-2-4.89z" /></svg>
                            <p className="mb-0 mt-3 fs-20 fw-semibold lh-1">
                                Calculations
                            </p>
                        </Card.Body>
                        <Card.Footer className="">
                            Lorem Ipsum is therefore always free from repetition, injected humour.
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={2} md={4} className="">
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Img src={media4} className="card-img mb-3" alt="..." />
                            <Card.Title className=" fw-semibold mb-3">Mountains<Badge bg="primary" className=" float-end fs-10">New</Badge></Card.Title>
                            <Card.Text className="">With supporting text below as a natural
                                lead-in.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} className="">
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Img src={media9} className="card-img mb-3" alt="..." />
                            <Card.Title className=" fw-semibold mb-3">Hills<span className="badge bg-secondary float-end fs-10">Hot</span></Card.Title>
                            <Card.Text className="">With supporting text below as a natural
                                lead-in.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} className="">
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Img src={media15} className="card-img mb-3" alt="..." />
                            <Card.Title className=" fw-semibold mb-3">Nature<span className="badge bg-light text-dark float-end fs-10">Offer</span></Card.Title>
                            <Card.Text className="">With supporting text below as a natural
                                lead-in.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="">
                    <Card className=" custom-card text-center">
                        <Card.Header className="">
                            <Card.Title className="">Featured</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className=" fw-semibold mb-2 mt-1">Breaking News !</Card.Title>
                            <Card.Text className=" mb-4">With supporting text below as a natural lead-in to
                                additional content.</Card.Text>
                            <Button variant='primary me-1'>Read More</Button>
                            <Button variant='outline-secondary'>Close</Button>
                        </Card.Body>
                        <Card.Footer className=" text-muted">
                            11.32pm
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <div className="d-flex w-100">
                                <div className="me-4">
                                    <span className="avatar avatar-lg avatar-rounded">
                                        <Card.Img src={face12} alt="img" />
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between w-100 flex-wrap">
                                    <div className="me-3">
                                        <p className="text-muted mb-0">Posts</p>
                                        <p className="fw-semibold fs-16 mb-0">25</p>
                                    </div>
                                    <div className="me-3">
                                        <p className="text-muted mb-0">Followers</p>
                                        <p className="fw-semibold fs-16 mb-0">1253</p>
                                    </div>
                                    <div className="me-3">
                                        <p className="text-muted mb-0">Following</p>
                                        <p className="fw-semibold fs-16 mb-0">367</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="fw-semibold fs-16">Angelina Caprio</div>
                            <div className="text-muted fs-11 mb-4">Angular Developer</div>
                            <p className="fs-14 fw-semibold mb-1">About:</p>
                            <Card.Text className="mb-0 ">Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="">
                    <Card className='custom-card'>
                        <Card.Header className=" border-bottom-0 justify-content-between">
                            <Card.Title>
                                Card With Collapse Button
                            </Card.Title>
                            <Link to="#" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-down' : 'fe-chevron-up'}`}></i></Link>
                        </Card.Header>
                        <Collapse className="border-top" in={BasicExpanded} timeout={3000}>
                            <div>
                                <Card.Body>
                                    <h6 className="card-text fw-semibold">Collapsible Card</h6>
                                    <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                </Card.Body>
                                <Card.Footer>
                                    <Button className="btn btn-primary">Read More</Button>
                                </Card.Footer>
                            </div>
                        </Collapse>
                    </Card>
                </Col>
                <Col md={4} className="">
                    {Basicshow ?
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Card With Close Button
                                </Card.Title>
                                <Link to="#" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}>
                                    <i className="ri-close-line fs-18"></i>
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <h6 className="card-text fw-semibold">Closed Card</h6>
                                <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-primary">Read More</button>
                            </Card.Footer>
                        </Card>
                        : null}
                </Col>
                <Col md={4} className="">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Card With Fullscreen Button
                            </Card.Title>
                            <Link to="#" data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}>
                                <i className="ri-fullscreen-line"></i>
                            </Link>
                            <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                                <Modal.Header>
                                    <Modal.Title>Fullscreen Button</Modal.Title>
                                    <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                                </Modal.Header>
                                <Modal.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={fullscreenmodalClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="card-text fw-semibold">FullScreen Card</h6>
                            <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-primary">Read More</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-4 --> */}

            {/* <!-- Start::row-5 --> */}
            <h6 className="mb-3">Image Caps:</h6>
            <Row>
                <Col xl={4} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Img src={media29} className="card-img-top" alt="..." />
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold">Image caps are widely used in Blog's</Card.Title>
                            <Card.Text className="mb-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</Card.Text>
                            <Card.Text className="mb-0"><small>Last updated 3 mins
                                ago</small></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold">Image caps are widely used in Blog's</Card.Title>
                            <Card.Text className="mb-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.</Card.Text>
                            <Card.Text className=" mb-0"><small>Last updated 3 mins
                                ago</small></Card.Text>
                        </Card.Body>
                        <Card.Img src={media28} className="card-img-bottom" alt="..." />
                    </Card>
                </Col>
                <Col xl={4} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold mb-1">Image caps are widely used in Blog's</Card.Title>
                            <Card.Text className="mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</Card.Text>
                        </Card.Body>
                        <Card.Img src={media30} className="card-img rounded-0" alt="..." />
                        <Card.Body className="">
                            <Card.Text className="mb-0"><small>Last updated 3 mins
                                ago</small></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Image caps are widely used in Blog's</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <Card.Text className=" mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</Card.Text>
                        </Card.Body>
                        <img src={media31} className="card-img rounded-0" alt="..." />
                        <Card.Footer className="">
                            <Card.Text className=" mb-0"><small>Last updated 3 mins
                                ago</small></Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Img src={media32} className="card-img-top" alt="..." />
                        <Card.Header className="">
                            <Card.Title className="">Image caps are widely used in Blog's</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <Card.Text className=" mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</Card.Text>
                        </Card.Body>
                        <Card.Footer className="">
                            <Card.Text className="mb-0"><small>Last updated 3 mins
                                ago</small></Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} md={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title className="">Image caps are widely used in Blog's</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <Card.Text className="mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</Card.Text>
                        </Card.Body>
                        <Card.Footer className="">
                            <Card.Text className=" mb-0"><small>Last updated 3 mins
                                ago</small></Card.Text>
                        </Card.Footer>
                        <Card.Img variant='bottom' src={media33} className="card-img-bottom" alt="..." />
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-5 --> */}

            {/* <!-- Start::row-6 --> */}
            <h6 className="mb-3">Image Overlays:</h6>
            <Row className="">
                <Col lg={4} className="">
                    <Card className=" custom-card bg-dark overlay-card">
                        <Card.Img src={media35} className="" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0">
                            <Card.Header className="">
                                <Card.Title className="">
                                    Image Overlays Are Awesome!
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className=" overflow-y-scroll">
                                <Card.Text className=" mb-2 text-fixed-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</Card.Text>
                                <Card.Text className="  text-fixed-white">Last updated 3 mins ago</Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col lg={4} className="">
                    <Card className="  custom-card bg-dark overlay-card">
                        <Card.Img src={media36} className="" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                            <Card.Body className="">
                                <Card.Text className=" text-fixed-white">
                                    Image Overlays Are Awesome!
                                </Card.Text>
                                <Card.Text className="= mb-2 text-fixed-white cards-subtext text-truncate">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</Card.Text>
                                <Card.Text className="  text-fixed-white">Last updated 3 mins ago</Card.Text>
                            </Card.Body>
                            <Card.Footer className=" text-fixed-white">Last updated 3 mins ago</Card.Footer>
                        </div>
                    </Card>
                </Col>
                <Col lg={4} className="">
                    <Card className=" custom-card bg-dark overlay-card">
                        <Card.Img src={media34} className="" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0">
                            <Card.Header className="">
                                <Card.Title className=" text-fixed-white">
                                    Image Overlays Are Awesome!
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className=" overflow-y-scroll">
                                <Card.Text className=" text-fixed-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="card-footer text-fixed-white">Last updated 3 mins ago</Card.Footer>
                            {/* <Card.Text className=" text-fixed-white">Last updated 3 mins ago</Card.Text> */}
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-6 --> */}

            {/* <!-- Start::row-7 --> */}
            <Row className="">
                <Col xxl={6} xl={12} className="">
                    <h6 className="mb-3">Using Utilities:</h6>
                    <Row className="">
                        <Col xl={6} className="">
                            <Card className=" custom-card w-75">
                                <Card.Header className="">
                                    <Card.Title className="">Using Width 75%</Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <Card.Text className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis excepturi consequatur molestiae
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="">
                                    <Link  to="#!" className="btn btn-primary d-grid">Button</Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={6} className="">
                            <Card className=" custom-card w-50">
                                <Card.Header className="">
                                    <Card.Title className="">Using Width 50%</Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <Card.Text className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="">
                                <Link  to="#!" className="btn btn-primary d-grid">Button</Link>

                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12} className="">
                    <h6 className="mb-3">Navigation:</h6>
                    <Row className="">
                        <Col xl={6} className="">
                            <Card className=" custom-card text-center">
                                <Card.Header className="">
                                    <Nav as="ul" className=" nav-tabs card-header-tabs">
                                        <Nav.Item as="li" className="">
                                            <Nav.Link active className=" " aria-current="true" >Active</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="">
                                            <Nav.Link className="">Link</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="">
                                            <Nav.Link disabled className=" ">Disabled</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Special title treatment</Card.Title>
                                    <Card.Text className="">With supporting text below as a natural lead-in to
                                        additional content.</Card.Text>
                                    <Button variant='primary' className="">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} className="">
                            <Card className=" text-center custom-card">
                                <Card.Header className="">
                                    <Nav variant='pills' as="ul" className="  card-header-pills">
                                        <Nav.Item as="li" className="">
                                            <Nav.Link active className=" "  >Active</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="">
                                            <Nav.Link className="" >Link</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="">
                                            <Nav.Link disabled className=" ">Disabled</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Special title treatment</Card.Title>
                                    <Card.Text className="">With supporting text below as a natural lead-in to
                                        additional content.</Card.Text>
                                    <Button variant='primary' className="">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End::row-7 --> */}

            {/* <!-- Start::row-8 --> */}
            <h6 className="mb-3">Horizontal Cards:</h6>
            <Row className="">
                <Col xl={4} className="">
                    <Card className=" custom-card">
                        <Row className=" g-0">
                            <Col md={4} className="">
                                <img src={media37} className="img-fluid rounded-start h-100 w-100" alt="..." />
                            </Col>
                            <Col md={8} className="">
                                <Card.Header className="">
                                    <Card.Title className="">Horizontal Cards</Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Horizontal cards are awesome!</Card.Title>
                                    <Card.Text className="">This is a wider card with supporting text below as a natural .</Card.Text>
                                </Card.Body>
                                <Card.Footer className="">
                                    <Card.Text className=""><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                                </Card.Footer>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={4} className="">
                    <Card className=" custom-card">
                        <Row className=" g-0">
                            <Col md={8} className="">
                                <Card.Header className="">
                                    <Card.Title className="">Horizontal Cards</Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Horizontal cards are awesome!</Card.Title>
                                    <Card.Text className="mb-3">This is a wider card with suppo    rting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                                    <Card.Text className=""><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md={4} className="">
                                <img src={media38} className="img-fluid rounded-end h-100 w-100" alt="..." />
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={4} className="">
                    <Card className=" custom-card">
                        <Row className=" g-0">
                            <Col md={8} className="">
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold mb-2">Horizontal Cards</Card.Title>
                                    <Card.Title className=" mb-3">Horizontal cards are awesome!</Card.Title>
                                    <Card.Text className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                                </Card.Body>
                                <Card.Footer className="">
                                    <Card.Text className=""><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                                </Card.Footer>
                            </Col>
                            <Col md={4} className="">
                                <img src={media39} className="img-fluid rounded-end h-100 w-100" alt="..." />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-8 --> */}

            {/* <!-- Start::row-9 --> */}
            <h6 className="mb-3">Card Groups With Footer:</h6>
            <Row className="">
                <Col xl={12} className="">
                    <div className="card-group">
                        <Card className=" custom-card">
                            <Card.Img variant='top' src={media40} className="" alt="..." />
                            <Card.Body className="">
                                <Card.Title className=" fw-semibold">Delecious food is a blessing!</Card.Title>
                                <Card.Text className="">This is a wider card with supporting text below as
                                    a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Img variant='top' src={media41} className="\" alt="..." />
                            <Card.Body className="">
                                <Card.Title className=" fw-semibold">Is office the best place to earn knowledge?</Card.Title>
                                <Card.Text className="">This card has supporting text below as a natural
                                    lead-in to additional content.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Img variant='top' src={media42} className="" alt="..." />
                            <Card.Body className="">
                                <Card.Title className=" fw-semibold">Writing is an art.</Card.Title>
                                <Card.Text className="">This is a wider card with supporting text below as
                                    a
                                    natural lead-in to additional content. This card has even longer
                                    content
                                    than the first to show that equal height action.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Col>
            </Row>
            {/* <!-- End::row-9 --> */}

            {/* <!-- Start::row-10 --> */}
            <h6 className="mb-3">Background Colored Cards:</h6>
            <Row className="">
                {Backgroundcolorcards.map(idx => (
                    <Col xl={3} md={6} className="" key={idx.id}>
                        <Card bg={idx.bgColor} className=" custom-card ">
                            <Card.Body className="">
                                <div className="d-flex align-items-center w-100">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded">
                                            <Card.Img src={idx.imgSrc} alt="img" />
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="fs-15 fw-semibold">{idx.name}</div>
                                        <p className={`mb-0 text-${idx.text} op-7 fs-12`}>{idx.status}</p>
                                    </div>
                                    <div className="ms-auto">
                                        <Link to="#" aria-label="anchor" className="text-fixed-white"><i className="bi bi-three-dots-vertical"></i></Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-10 --> */}

            {/* <!-- Start::row-11 --> */}
            <h6 className="mb-3">Colored Border Cards:</h6>
            <Row className="">
                {Coloredborder.map((idx) => (
                    <Col xl={3} md={6} className="" key={idx.id}>
                        <Card border={idx.borderColor} className="border custom-card">
                            <Card.Body className="">
                                <p className="fs-14 fw-semibold mb-2 lh-1">{idx.title}
                                    <Link to="#" aria-label="anchor" ><i className={`bi bi-plus-square float-end text-${idx.borderColor} fs-18`}></i></Link>
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {idx.badges.map((badge,badgeIdx) => (
                                        <Badge key={`${idx.id}-avatar-${badgeIdx}`} bg={badge.bgColor} className="">
                                            {badge.text}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="avatar-list-stacked">
                                    {idx.avatars.map((avatar, index) => (
                                        <span key={index} className="avatar avatar-sm avatar-rounded">
                                            <img src={avatar} alt="img" />
                                        </span>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-11 --> */}

            {/* <!-- Start::row-12 --> */}
            <h6 className="mb-3">Grid Cards:</h6>
            <Row className="">
                <Col xl={12} className="">
                    <Row className="row row-cols-1 row-cols-md-4 g-4">
                        <Col className="">
                            <Card className=" custom-card">
                                <img src={media44} className="card-img-top" alt="..." />
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Morphology of a typical fruit.</Card.Title>
                                    <Card.Text className=""> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className=" custom-card">
                                <img src={media43} className="card-img-top" alt="..." />
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Research improves ability &amp; agility !</Card.Title>
                                    <Card.Text className=""> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className=" custom-card">
                                <img src={media45} className="card-img-top" alt="..." />
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Most tropical areas are suitable</Card.Title>
                                    <Card.Text className=""> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className=" custom-card">
                                <img src={media46} className="card-img-top" alt="..." />
                                <Card.Body className="">
                                    <Card.Title className=" fw-semibold">Are They seasonal fruits ?</Card.Title>
                                    <Card.Text className=""> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End::row-12 --> */}

            {/* <!-- Start::row-14 --> */}
            <h6 className="mb-3">Cards With Link:</h6>
            <Row className="">
                <Col xxl={3} xl={12} className="">
                    <Card className=" custom-card">
                        <Link to="#" aria-label="anchor" className="card-anchor"></Link>
                        <img src={media16} className="card-img-top" alt="..." />
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold mb-0">Forests are Awesome.</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6} className="">
                    <Row className="">
                        <Col xxl={12} xl={12} className="">
                            <Card bg="primary" className=" custom-card ">
                                <Link to="#" aria-label="anchor" className="card-anchor"></Link>
                                <Card.Body className="">
                                    <blockquote className="blockquote mb-0 text-center">
                                        <h6>The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6>
                                        <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={5} xl={12} className="">
                            <Card className=" custom-card">
                                <Link to="#" aria-label="anchor" className="card-anchor"></Link>
                                <Card.Body className="">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-md">
                                                <img src={face15} alt="img" />
                                            </span>
                                        </div>
                                        <div>
                                            <Card.Text className=" mb-0 fs-14 fw-semibold">Atharva Simon.</Card.Text>
                                            <Card.Title className=" text-muted fs-12 mb-0">Correspondent Professor</Card.Title>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card border='info' className=" custom-card border">
                                <Link to="#" aria-label="anchor" className="card-anchor"></Link>
                                <Card.Body className="">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-xl">
                                                <img src={face8} alt="img" />
                                            </span>
                                        </div>
                                        <div>
                                            <Card.Text className=" text-info mb-1 fs-14 fw-semibold">Alicia Keys.</Card.Text>
                                            <Card.Title className=" fs-12 mb-1">Department Of Commerce</Card.Title>
                                            <Card.Title className="text-muted fs-11 mb-0">24 Years, Female</Card.Title>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={7} xl={12} className="">
                            <Card className=" custom-card">
                                <Link to="#" aria-label="anchor" className="card-anchor"></Link>
                                <Row className=" g-0">
                                    <Col md={8} className="">
                                        <Card.Body className="">
                                            <Card.Title className=" mb-2 fw-semibold">Fox is Beautiful ?</Card.Title>
                                            <Card.Text className=" mb-0">This is a wild animal with supporting tactics and are very efficient at kill,they are very Dangerous.</Card.Text>
                                            <Card.Text className="mb-0 ">
                                                Fox lives mainly in forests and are well known for their hunting skills.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="">
                                            <Card.Text className=""><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                                        </Card.Footer>
                                    </Col>
                                    <Col md={4} className="">
                                        <img src={media39} className="img-fluid rounded-end h-100" alt="..." />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={6} className="">
                    <Card className=" custom-card">
                        <Link to="#" aria-label="anchor" className="card-anchor"></Link>
                        <img src={media47} className="card-img-top" alt="..." />
                        <Card.Body className="">
                            <Card.Title className="fw-semibold">Most tropical areas are suitable</Card.Title>
                            <Card.Text className=""> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-14 -->         */}
        </Fragment >
    );
};
export default Cards;
