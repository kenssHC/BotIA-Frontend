import React, { Fragment } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Emptypages = () => {
    return (
        <Fragment>
            {/* <!-- Start::row-1 --> */}
            <Row className="">
                <Col x={12} className="">
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <Card.Title className=" fw-semibold mb-0">Enter Something text here....</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};
export default Emptypages;
