import { Fragment, useState } from 'react';
import { Button, Card, CloseButton, Col, Container, Form, Modal, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import { modal1, modal10, modal11, modal12, modal13, modal14, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9 } from '../../../components/prism-code/adavanceui-prisem';
import ShowCode from '../../../components/common/showcode/showcode';


const Modalsclose = () => {

    const [modals, setModals] = useState({});
    const handleModalOpen = (modalName) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
    };
    const handleModalClose = (modalName) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
    };

    //fullscreen modals
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
    const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
    const [fullscreen, setFullscreen] = useState(true);
    const [showf, setShowf] = useState(false);

    function handleShowf(breakpoint, _color) {
        setFullscreen(breakpoint);
        setShowf(true);
    }



    return (
        <Fragment>
            <Row>
                <Col xl={4}>
                    <ShowCode title=" Basic Modal" className="" reactCode={modal1} customCardHeaderClass="justify-content-between">
                        <Button variant="primary" onClick={() => handleModalOpen('demoModal')}>
                            Launch demo modal
                        </Button>
                        <Modal show={modals["demoModal"] || false} onHide={() => handleModalClose('demoModal')}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('demoModal')}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => handleModalClose('demoModal')}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Static backdrop" className="" reactCode={modal2} customCardHeaderClass="justify-content-between">
                        <Button variant="primary" onClick={() => handleModalOpen('staticModal')}>
                            Launch static backdrop modal
                        </Button>
                        <Modal show={modals["staticModal"] || false} onHide={() => handleModalClose('staticModal')} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                I will not close if you click outside me. Don not even try to press
                                escape key.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('staticModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Scrolling long content" className="" reactCode={modal3} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' type="button" className="btn btn-primary" onClick={() => handleModalOpen('scrollModal')}>
                            Scrolling long content
                        </Button>
                        <Modal show={modals['scrollModal'] || false} onHide={() => handleModalClose('scrollModal')} keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Libero
                                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                    nisi
                                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                    ex
                                    tempore fuga similique ipsa blanditiis et accusamus
                                    temporibus
                                    commodi voluptas! Nobis veniam illo architecto expedita quam
                                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                                    deleniti
                                    quis ad nemo ipsam officia temporibus, doloribus fuga
                                    asperiores
                                    ratione distinctio velit alias hic modi praesentium aperiam
                                    officiis eaque, accusamus aut. Accusantium assumenda,
                                    commodi
                                    nulla provident asperiores fugit inventore iste amet aut
                                    placeat
                                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                                    aperiam dolores magni iusto distinctio voluptatibus minus a
                                    unde
                                    at! Consequatur voluptatum in eaque obcaecati, impedit
                                    accusantium ea soluta, excepturi, quasi quia commodi
                                    blanditiis?
                                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                                    accusamus recusandae est consequuntur iure.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('scrollModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                       
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Vertically centered modal" className="" reactCode={modal4} customCardHeaderClass="justify-content-between">
                        <Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => handleModalOpen('verticalcenterModal')}
                            data-bs-target="#exampleModalScrollable2">
                            Vertically centered modal
                        </Button>
                        <Modal centered show={modals['verticalcenterModal'] || false} onHide={() => handleModalClose('verticalcenterModal')} keyboard={false} className="modal fade">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                    nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('verticalcenterModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Vertical Centered Scrollable" className="" reactCode={modal5} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' type="button" className="btn" onClick={() => handleModalOpen('verticalModal')}>
                            Vertically centered scrollable modal
                        </Button>

                        <Modal centered show={modals['verticalModal'] || false} onHide={() => handleModalClose('verticalModal')}
                            keyboard={false} className="modal fade">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                ex
                                tempore fuga similique ipsa blanditiis et accusamus
                                temporibus
                                commodi voluptas! Nobis veniam illo architecto expedita quam
                                ratione quaerat omnis. In, recusandae eos! Pariatur,
                                deleniti
                                quis ad nemo ipsam officia temporibus, doloribus fuga
                                asperiores
                                ratione distinctio velit alias hic modi praesentium aperiam
                                officiis eaque, accusamus aut. Accusantium assumenda,
                                commodi
                                nulla provident asperiores fugit inventore iste amet aut
                                placeat
                                consequatur reprehenderit. Ratione tenetur eligendi, quis
                                aperiam dolores magni iusto distinctio voluptatibus minus a
                                unde
                                at! Consequatur voluptatum in eaque obcaecati, impedit
                                accusantium ea soluta, excepturi, quasi quia commodi
                                blanditiis?
                                Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                consequuntur quod quo veniam? Labore dignissimos reiciendis
                                accusamus recusandae est consequuntur iure.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('verticalModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Tooltips and popovers" className="" reactCode={modal6} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' type="button" className="" onClick={() => handleModalOpen('tooltipModal')}>
                            Launch demo modal
                        </Button>
                        <Modal show={modals['tooltipModal'] || false} onHide={() => handleModalClose('tooltipModal')} centered className='popover-modal'>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6"> Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> <h5>Popover in a modal</h5>
                                <p> This
                                    <OverlayTrigger trigger="click"
                                        placement='right'
                                        // autoclose='true'
                                        overlay={
                                            <Popover placement='bottom'>
                                                <Popover.Header> Popover bottom</Popover.Header>
                                                <Popover.Body>
                                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                        <Button variant="secondary" className="me-2 ms-2">button</Button>
                                    </OverlayTrigger>
                                    triggers a popover on click.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('tooltipModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Using the grid" className="" reactCode={modal7} customCardHeaderClass="justify-content-between">
                        <Button variant='' type="button" className="btn btn-primary" onClick={() => handleModalOpen('gridModal')}>
                            Launch demo modal
                        </Button>
                        <Modal show={modals['gridModal'] || false} onHide={() => handleModalClose('gridModal')} centered>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6"> Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={4} className=" bg-light border">.col-md-4</Col>
                                        <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                            .ms-auto</Col>
                                        <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col sm={9} className=" bg-light border">
                                            Level 1: .col-sm-9
                                            <Row>
                                                <Col sm={6} className="col-8 bg-light border">
                                                    Level 2: .col-8 .col-sm-6
                                                </Col>
                                                <Col sm={6} className="col-4 bg-light border">
                                                    Level 2: .col-4 .col-sm-6
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('gridModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Toggle between modals" className="" reactCode={modal8} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' className="btn" onClick={() => handleModalOpen('firstModal')}>Open first modal
                        </Button>
                        <Modal id="m1" className="fade"
                            aria-labelledby="contained-modal-title-vcenter" centered show={modals['firstModal']} onHide={() => handleModalClose('firstModal')} >
                            <Modal.Header closeButton>
                                <h6 className='modal-title' id="exampleModalToggleLabel">Modal 1</h6>

                            </Modal.Header>
                            <Modal.Body>
                                Show a second modal and hide this one with the button below. </Modal.Body>
                            <Modal.Footer>
                                <Button className="btn btn-primary" id="btn1" onClick={() => handleModalOpen('secondModal')}>Open second modal</Button>
                            </Modal.Footer>

                        </Modal>

                        <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                            centered show={modals['secondModal']} onHide={() => handleModalClose('secondModal')}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal 2</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Hide this modal and show the first with the button below.</Modal.Body>
                            <Modal.Footer>
                                <Button className="btn btn-primary"
                                    onClick={() => handleModalClose('secondModal')}>Back to first</Button>
                            </Modal.Footer>

                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Optional sizes" className="" reactCode={modal9} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' type="button" className="btn m-1" onClick={() => handleModalOpen('extraLargeModal')}
                            data-bs-target="#exampleModalXl">Extra large modal</Button>
                        <Button variant='primary-light' type="button" className="btn  m-1" onClick={() => handleModalOpen('largeModal')}
                            data-bs-target="#exampleModalLg">Large modal</Button>
                        <Button variant='primary-light' type="button" className="btn  m-1" onClick={() => handleModalOpen('smallModal')}
                            data-bs-target="#exampleModalSm">Small modal</Button>
                        <Modal size="xl" show={modals['extraLargeModal']} onHide={() => handleModalClose('extraLargeModal')}
                            aria-labelledby="example-modal-sizes-title-sm">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                    Extra large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                        <Modal size="lg" show={modals['largeModal']} onHide={() => handleModalClose('largeModal')} aria-labelledby="example-modal-sizes-title-lg">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6" id="example-modal-sizes-title-lg">
                                    Large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                        <Modal size="sm" show={modals['smallModal']} onHide={() => handleModalClose('smallModal')}
                            aria-labelledby="example-modal-sizes-title-sm">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                    Small Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Fullscreen modal" className="" reactCode={modal10} customCardHeaderClass="justify-content-between">
                        {values.map((v, idx) => (
                            <Button
                                key={idx}
                                className={`me-2 mb-2 btn-${colors[idx % colors.length]}`}
                                onClick={() => handleShowf(v, colors[idx % colors.length])}
                            >
                                Full screen {typeof v === 'string' && `below ${v.split('-')[0]}`}
                            </Button>
                        ))}
                        <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
                            <Modal.Header closeButton>

                                <Modal.Title as="h6">Full screen {typeof v === 'string' && `below ${v.split('-')[0]}`}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Modal body content</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowf(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Varying modal content" className="" reactCode={modal11} customCardHeaderClass="justify-content-between">
                        <Button variant='primary' type="button" className="btn  mb-1 me-2" onClick={() => handleModalOpen('@mdoModal')}>Open modal for
                            @mdo</Button>
                        <Modal show={modals['@mdoModal']} onHide={() => handleModalClose('@mdoModal')}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">New message to @mdo
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="email" placeholder="@mdo" autoFocus />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('@mdoModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Send message</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button variant='secondary' type="button" className="btn mb-1 me-2" onClick={() => handleModalOpen('@fatModal')}>Open modal for
                            @fat</Button>
                        <Modal show={modals['@fatModal'] || false} onHide={() => handleModalClose('@fatModal')}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">New message to @fat
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="email" placeholder="@fat" autoFocus />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('@fatModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Send message</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button variant='light' type="button" className="btn btn-light mb-1" onClick={() => handleModalOpen('@getModal')}>Open modal for
                            @getbootstrap</Button>
                        <Modal show={modals['@getModal'] || false} onHide={() => handleModalClose('@getModal')}>
                            <Modal.Header closeButton >
                                <Modal.Title as="h6">Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder=" @getbootstrap"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleModalClose('@getModal')}>
                                    Close
                                </Button>
                                <Button variant="primary">Send message</Button>
                            </Modal.Footer>
                        </Modal>

                    </ShowCode>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>

                            <div className="card-title">
                                Modal Animation Effects
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="row-sm">
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("zoomModal")}>Zoom</Link>
                                    <Rodal onClose={() => handleModalClose("zoomModal")} visible={modals['zoomModal'] || false} animation='Scale' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("zoomModal")}>
                                                <i className='fe fe-x ms-auto'></i>
                                            </span>
                                            </Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button className='' variant="secondary" onClick={() => handleModalClose("zoomModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("fadeModal")}>Fade</Link>
                                    <Rodal onClose={() => handleModalClose("fadeModal")} visible={modals['fadeModal'] || false} animation='fade' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("fadeModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("fadeModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("flipModal")}>Flip</Link>
                                    <Rodal onClose={() => handleModalClose("flipModal")} visible={modals['flipModal'] || false} animation='flip' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("flipModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("flipModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("doorModal")}>Door</Link>
                                    <Rodal onClose={() => handleModalClose("doorModal")} visible={modals['doorModal'] || false} animation='door' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("doorModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("doorModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("rotateModal")}>Rotate</Link>
                                    <Rodal onClose={() => handleModalClose("rotateModal")} visible={modals['rotateModal'] || false} animation='rotate' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("rotateModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("rotateModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("slideupModal")}>Slide-Up</Link>
                                    <Rodal onClose={() => handleModalClose("slideupModal")} visible={modals['slideupModal'] || false} animation='slideUp' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("slideupModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("slideupModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("slidedownModal")}>slide-Down</Link>
                                    <Rodal onClose={() => handleModalClose("slidedownModal")} visible={modals['slidedownModal'] || false} animation='slideDown' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("slidedownModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("slidedownModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("slideleftModal")}>slide-Left</Link>
                                    <Rodal onClose={() => handleModalClose("slideleftModal")} visible={modals['slideleftModal'] || false} animation='slideLeft' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("slideleftModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("slideleftModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="">
                                    <Link to="#" className="modal-effect btn btn-primary w-100 btn-block mb-2" onClick={() => handleModalOpen("sliderightModal")}>slide-Right</Link>
                                    <Rodal onClose={() => handleModalClose("sliderightModal")} visible={modals['sliderightModal'] || false} animation='slideRight' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to="#"><span className="d-flex ms-auto text-dark" onClick={() => handleModalClose("sliderightModal")}> <i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary">Save Changes</Button>
                                            <Button variant="secondary" onClick={() => handleModalClose("sliderightModal")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h6 className="mb-3">Close Buttons:</h6>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Basic Close" className="" reactCode={modal13} customCardHeaderClass="justify-content-between">
                        <Button variant='' type="button" className="btn-close px-0" aria-label="Close"></Button>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Disabel state" className="" reactCode={modal14} customCardHeaderClass="justify-content-between">
                        <Button variant='' type="button" className="btn-close px-0" disabled aria-label="Close"></Button>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Disabel state" className="" reactCode={modal14} customCardHeaderClass="justify-content-between" customCardBodyClass="bg-black">
                        <CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
                        <CloseButton type="button" className="btn-close btn-close-white" disabled
                            aria-label="Close"></CloseButton>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Modalsclose;
