import { Fragment } from 'react';
import { Button, Col, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Colorheaderalerts, Colredalerts, Defaultalerts, Dismissiblealerts } from './popoversdata';
import { datapopover1, datapopover2, datapopover3, datapopover4, datapopover5, popover1, popover2, popover3, popover4, popover5, popover6, popover7 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Popovers = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={5}>
                    <ShowCode title="Default Popovers" className="" reactCode={popover1} dataCode={datapopover1} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            {Defaultalerts.map((idx) => (
                                <OverlayTrigger trigger="click" placement={idx.class} key={idx.id}
                                    overlay={<Popover>
                                        <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
                                        <Popover.Body>
                                            And here's some amazing content. It's very engaging. Right?
                                        </Popover.Body>
                                    </Popover>}>
                                    <Button variant='' className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={7}>
                    <ShowCode title="Colored Headers" className="" reactCode={popover2} dataCode={datapopover2} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            {Colorheaderalerts.map((idx) => (
                                <OverlayTrigger trigger="click" placement={idx.class} key={idx.id}
                                    // autoclose='true' 
                                    overlay={<Popover className={`header-${idx.color1} ${idx.color2}`}>
                                        <Popover.Header as="h3" data-bs-custom-classname={`header-${idx.color1}`}> Color Header</Popover.Header>
                                        <Popover.Body>
                                            Popover with primary header.
                                        </Popover.Body>
                                    </Popover>}>
                                    <Button variant={idx.color} className="btn btn-wave">Header {idx.text}</Button>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Colored Popovers" className="" reactCode={popover3} dataCode={datapopover3} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            {Colredalerts.map((idx) => (
                                <OverlayTrigger key={idx.id} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}`}>
                                    <Popover.Header as="h3">Color Background</Popover.Header>
                                    <Popover.Body>Popover with {idx.text} background.</Popover.Body>
                                </Popover>}>
                                    <Button variant={idx.color1}>{idx.text} </Button>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title=" Light Popovers" className="" reactCode={popover4} dataCode={datapopover4} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            {Colredalerts.map((idx) => (
                                <OverlayTrigger key={idx.id} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}-light`} id="tooltip-disabled">
                                    <Popover.Header as="h3">Light Background</Popover.Header>
                                    <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
                                </Popover>}>
                                    <Button variant='' className={`btn btn-${idx.color1}-light btn-wave`}>{idx.text} </Button>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Dismissible Popovers" className="" reactCode={popover5} dataCode={datapopover5} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap justify-content-between dismissiable-popovers gap-3 card-body">
                        {Dismissiblealerts.map((idx) => (
                            <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={idx.id}
                                overlay={<Popover>
                                    <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
                                    <Popover.Body>
                                        And here's some amazing content. It's very engaging. Right?
                                    </Popover.Body>
                                </Popover>}>
                                <Button variant={idx.color} className="btn  btn-wave me-1">Popover Dismiss</Button>
                            </OverlayTrigger>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Disabled Popover" className="" reactCode={popover6} customCardHeaderClass="justify-content-between">
                        <OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
                            <Popover.Body>Disabled Popover!</Popover.Body>
                        </Popover>}>
                            <span className="d-inline-block">
                                <Button disabled style={{ pointerEvents: 'none' }}>
                                    Disabled button
                                </Button>
                            </span>
                        </OverlayTrigger>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Icon Popovers" className="" reactCode={popover7} customCardHeaderClass="justify-content-between">
                        <OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary only-body' id="tooltip-disabled">
                            <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                        </Popover>}>
                            <Link className="me-4" to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
                            </Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-secondary only-body' id="tooltip-disabled">
                            <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                        </Popover>}>
                            <Link className="me-4" to="#" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                            </Link>
                        </OverlayTrigger>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Popovers;

