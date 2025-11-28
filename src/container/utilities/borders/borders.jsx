import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Border1, Border2, Border3, Border4, Border5, Border6, Border7, Border8 } from '../../../components/prism-code/utilities-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Borders = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Borders" className="" reactCode={Border1} customCardHeaderClass="justify-content-between">
                        <span className="border border-primary border-container"></span>
                        <span className="border-top border-primary border-container"></span>
                        <span className="border-end border-primary border-container"></span>
                        <span className="border-bottom border-primary border-container"></span>
                        <span className="border-start border-primary border-container"></span>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Remove borders" className="" reactCode={Border2} customCardHeaderClass="justify-content-between">
                        <span className="border-0 border-primary border-container"></span>
                        <span className="border border-primary border-top-0 border-container"></span>
                        <span className="border border-primary border-end-0 border-container"></span>
                        <span className="border border-primary border-bottom-0 border-container"></span>
                        <span className="border border-primary border-start-0 border-container"></span>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={5} >
                    <ShowCode title="Border Widths" className="" reactCode={Border3} customCardHeaderClass="justify-content-between">
                        <span className="border border-primary border-container border-1"></span>
                        <span className="border border-primary border-container border-2"></span>
                        <span className="border border-primary border-container border-3"></span>
                        <span className="border border-primary border-container border-4"></span>
                        <span className="border border-primary border-container border-5"></span>
                    </ShowCode>
                </Col>
                <Col xl={7} >
                    <ShowCode title="Border colors" className="" reactCode={Border4} customCardHeaderClass="justify-content-between">
                        <span className="border border-container border-primary"></span>
                        <span className="border border-container border-secondary"></span>
                        <span className="border border-container border-success"></span>
                        <span className="border border-container border-danger"></span>
                        <span className="border border-container border-warning"></span>
                        <span className="border border-container border-info"></span>
                        <span className="border border-container border-light"></span>
                        <span className="border border-container border-dark"></span>
                        <span className="border border-container border-white"></span>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Border color Styling" className="" reactCode={Border5} customCardHeaderClass="justify-content-between">
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                address</label>
                            <input type="email" className="form-control border-success"
                                id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                            Below Shows Danger Border
                        </div>
                        <div
                            className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                            Customizing borders with background colors
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Border with opacity" className="" reactCode={Border6} customCardHeaderClass="justify-content-between">
                        <div className="border border-success p-2 mb-2">This is default success border</div>
                        <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                            opacity
                            success border
                        </div>
                        <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                            opacity
                            success border
                        </div>
                        <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                            opacity
                            success border
                        </div>
                        <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                            success
                            border
                        </div>
                    </ShowCode>
                </Col>
            </Row>

            <Row className="">
                <Col xl={6} className="">
                    <ShowCode title="Border Radius" className="" reactCode={Border7} customCardHeaderClass="justify-content-between">
                        <span className="border border-primary border-container rounded"></span>
                        <span className="border border-primary border-container rounded-top"></span>
                        <span className="border border-primary border-container rounded-end"></span>
                        <span className="border border-primary border-container rounded-bottom"></span>
                        <span className="border border-primary border-container rounded-start"></span>
                        <span className="border border-primary border-container rounded-circle"></span>
                        <span className="border border-primary border-container rounded-pill"></span>
                    </ShowCode>
                </Col>
                <Col xl={6} className="">
                    <ShowCode title="Sizes" className="" reactCode={Border8} customCardHeaderClass="justify-content-between">
                        <span className="border border-primary border-container rounded-0"></span>
                        <span className="border border-primary border-container rounded-1"></span>
                        <span className="border border-primary border-container rounded-2"></span>
                        <span className="border border-primary border-container rounded-3"></span>
                        <span className="border border-primary border-container rounded-4"></span>
                        <span className="border border-primary border-container rounded-5"></span>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Borders;
