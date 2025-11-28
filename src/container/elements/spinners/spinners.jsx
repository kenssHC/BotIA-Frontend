import { Fragment } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Buttonspinner, Colorspinner } from './spinnersdata';
import { dataspinner10, dataspinner2, dataspinner4, spinner1, spinner10, spinner2, spinner3, spinner4, spinner5, spinner6, spinner7, spinner8, spinner9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Spinners = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Border spinner" className="" reactCode={spinner1} customCardHeaderClass="justify-content-between">
                        <div className="spinner-border  text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Colors" className="" reactCode={spinner2} dataCode={dataspinner2} customCardHeaderClass="justify-content-between">
                        {Colorspinner.map((idx) => (
                            <div className={`spinner-border  me-2 text-${idx.color}`} role="status" key={idx.id}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Growing spinner" className="" reactCode={spinner3} customCardHeaderClass="justify-content-between">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Growing spinner" className="" reactCode={spinner4} dataCode={dataspinner4} customCardHeaderClass="justify-content-between">
                        {Colorspinner.map((idx) => (
                            <div className={`spinner-grow me-1 text-${idx.color}`} role="status" key={idx.id}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Alignment Flex" className="" reactCode={spinner5} customCardHeaderClass="justify-content-between">
                        <div className="d-flex justify-content-center mb-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto text-primary" role="status" aria-hidden="true"></div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alignment Float" className="" reactCode={spinner6} customCardHeaderClass="justify-content-between">
                        <div className="clearfix mb-4">
                            <div className="spinner-border text-primary float-end" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div className="clearfix">
                            <div className="spinner-border text-primary float-start" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Alignment Text center" className="" reactCode={spinner7} customCardHeaderClass="justify-content-between">
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </ShowCode>
                    <ShowCode title="Spinner Sizes" className="" reactCode={spinner8} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex align-items-center">
                        <div className="spinner-border text-primary spinner-border-sm me-4" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow  text-primary spinner-grow-sm me-4" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-border text-primary me-4"
                            style={{ width: '3rem', height: '3rem' }}
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-primary"
                            style={{ width: '3rem', height: '3rem' }}
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Alignment Margin" className="" reactCode={spinner9} customCardHeaderClass="justify-content-between" >
                        <div className="spinner-border text-primary m-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Buttons" className="" reactCode={spinner10} dataCode={dataspinner10} customCardHeaderClass="justify-content-between" >
                        <div className="btn-list">
                            <Button variant='' className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-border spinner-border-sm align-middle" role="status"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Loading...</span>
                            </Button>
                            <Button variant='' className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-border spinner-border-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </Button>
                            <Button variant='' className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Loading...</span>
                            </Button>
                            {Buttonspinner.map((idx) => (
                                <Button variant={idx.color} className="btn" type="button" disabled key={idx.id}>
                                    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                        aria-hidden="true"></span> Loading...
                                </Button>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Spinners;
