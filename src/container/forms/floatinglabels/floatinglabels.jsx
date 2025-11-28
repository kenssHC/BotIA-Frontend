import { Fragment } from 'react';
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
const Floatinglabel = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Basic Examples
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Readonly plain text
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Floating className="mb-3">
                                <inpot type="email" readOnly
                                    className="form-control-plaintext"
                                    id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
                                <Form.Label htmlFor="floatingEmptyPlaintextInput">Empty input</Form.Label>
                            </Form.Floating>
                            <Form.Floating className="">
                                <inpot type="email" readOnly
                                    className="form-control-plaintext"
                                    id="floatingPlaintextInput" placeholder="name@example.com"
                                    defaultValue="name@example.com" />
                                <Form.Label htmlFor="floatingPlaintextInput">Input with value</Form.Label>
                            </Form.Floating>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Floating Labels With Pre Defined Values
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Floating className="my-3">
                                <Form.Control type="email" className="" id="floatingInputValue"
                                    placeholder="name@example.com" defaultValue="test@example.com" />
                                <Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
                            </Form.Floating>
                            <div className="form-flotin">
                                <Form.Control type="email" className="is-invalid"
                                    id="floatingInputInvalid" placeholder="name@example.com"
                                    defaultValue="test@example.com" />
                                <Form.Label htmlFor="floatingInputInvalid">Invalid input</Form.Label>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Textareas
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Floating className=" mb-4">
                                <Form.Control as="textarea" className="" placeholder="Leave a comment here"
                                    id="floatingTextarea"></Form.Control>
                                <label htmlFor="floatingTextarea">Description</label>
                            </Form.Floating>
                            <Form.Floating className="">
                                <Form.Control as="textarea" className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea2" rows={1} disabled></Form.Control>
                                <Form.Label htmlFor="floatingTextarea2">Disabled</Form.Label>
                            </Form.Floating>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Floating Labels In Select
                            </Card.Title>
                        </div>
                        <Card.Body>
                            <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Floating Labels With Layouts
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row g-2">
                                <div className="col-md">
                                    <Form.Floating className="">
                                        <Form.Control type="email" className="form-control" id="floatingInputGrid"
                                            placeholder="name@example.com" defaultValue="mdo@example.com" />
                                        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
                                    </Form.Floating>
                                </div>
                                <div className="col-md">
                                    <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                        <Form.Select aria-label="Floating label select example" className='form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title className="card-titlte">
                                Floating Label Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-4">
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-primary">
                                        <Form.Control type="email" className="form-control" id="floatingInputprimary" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputprimary">primary</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-secondary">
                                        <Form.Control type="email" className="form-control" id="floatingInputsecondary" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputsecondary">secondary</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-warning">
                                        <Form.Control type="email" className="form-control" id="floatingInputwarning" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputwarning">warning</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-info">
                                        <Form.Control type="email" className="form-control" id="floatingInputinfo" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputinfo">info</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-success">
                                        <Form.Control type="email" className="form-control" id="floatingInputsuccess" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputsuccess">success</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-danger">
                                        <Form.Control type="email" className="form-control" id="floatingInputdanger" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputdanger">danger</Form.Label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Floatinglabel;
