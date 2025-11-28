import { Fragment } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { SVGtooltip, Tooltipdirtooltip } from './tooltipsdata';
import { Link } from 'react-router-dom';
import face12 from '../../../assets/images/faces/12.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import { datatooltip1, datatooltip4, tooltip1, tooltip2, tooltip3, tooltip4, tooltip5, tooltip6 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Tooltips = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Tooltip Directions" className="" reactCode={tooltip1} dataCode={datatooltip1} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            {Tooltipdirtooltip.map((idx) => (
                                <OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={idx.id}>
                                    <Button type="button" className="btn btn-primary btn-wave">
                                        Tooltip on {idx.text}
                                    </Button>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Colored Tooltips" className="" reactCode={tooltip2} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
                                <Button type="button" variant='primary' className="btn  btn-wave">
                                    Primary Tooltip
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
                                <Button type="button" variant='secondary' className="btn  btn-wave">
                                    Secondary Tooltip
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
                                <Button type="button" variant='warning' className="btn  btn-wave">
                                    Warning Tooltip
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
                                <Button type="button" variant='info' className="btn  btn-wave">
                                    Info Tooltip
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
                                <Button type="button" variant='success' className="btn  btn-wave">
                                    Success Tooltip
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
                                <Button type="button" variant='danger' className="btn  btn-wave">
                                    Danger Tooltip
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
                                <Button type="button" variant='light' className="btn  btn-wave">
                                    Light Tooltip
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
                                <Button type="button" variant='dark' className="btn  btn-wave">
                                    Dark Tooltip
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Tooltips on links" className="" reactCode={tooltip3} customCardHeaderClass="justify-content-between">
                        <p className="text-muted mb-0">
                            Hover on the link to view the
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
                                <Link to="#" className="text-primary ms-1 d-inline-flex">Tooltip</Link>
                            </OverlayTrigger>
                        </p>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="With an SVG's" className="" reactCode={tooltip4} dataCode={datatooltip4} customCardHeaderClass="justify-content-between">
                        {SVGtooltip.map((idx) => (
                            <OverlayTrigger key={idx.id} placement="top" overlay={<Tooltip className={`tooltip-${idx.color}`}>{idx.text} </Tooltip>}>
                                <Link to="#" className="me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`svg-${idx.color}`} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" /><path
                                            d={idx.class} /></svg>
                                </Link>
                            </OverlayTrigger>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Disabled elements" className="" reactCode={tooltip5} customCardHeaderClass="justify-content-between">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip</Tooltip>}>
                            <span className="d-inline-block">
                                <Button disabled style={{ pointerEvents: 'none' }}>
                                    Disabled button
                                </Button>
                            </span>
                        </OverlayTrigger>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Tooltip For Images" className="" reactCode={tooltip6} customCardHeaderClass="justify-content-between">
                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
                            <Link to="#"
                                className="avatar avatar-md me-2 online avatar-rounded">
                                <img src={face12} alt="img" />
                            </Link>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
                            <Link to="#"
                                className="avatar avatar-lg me-2 online avatar-rounded">
                                <img src={face3} alt="img" />
                            </Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
                            <Link to="#"
                                className="avatar avatar-xl me-2 online avatar-rounded">
                                <img src={face15} alt="img" />
                            </Link>
                        </OverlayTrigger>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Tooltips;



