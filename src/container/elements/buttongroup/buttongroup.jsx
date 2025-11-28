import { Fragment } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Col, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap';
import { SocialIconButtons } from '../buttons/buttonsdata';
import { buttongroup1, ButtonGroup10, ButtonGroup11, Buttongroup2, ButtonGroup3, ButtonGroup4, ButtonGroup5, ButtonGroup6, ButtonGroup7, ButtonGroup8, ButtonGroup9, dataButtonGroup11 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Buttongroup = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={3}>
                    <ShowCode title=" Basic example" className="" reactCode={buttongroup1} customCardHeaderClass="justify-content-between">
                        <ButtonGroup className="btn-group" role="group" aria-label="Basic example">
                            <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-backward"></i></Button>
                            <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-pause"></i></Button>
                            <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-forward"></i></Button>
                        </ButtonGroup>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title=" Navigation" className="" reactCode={Buttongroup2} customCardHeaderClass="justify-content-between">
                        <ButtonGroup className="btn-group">
                            <Button variant='primary' active className="btn  active btn-wave" aria-current="page">Active
                                link</Button>
                            <Button variant='primary' className="btn">Link</Button>
                            <Button variant='primary' className="btn ">Link</Button>
                        </ButtonGroup>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title=" Mixed style" className="" reactCode={ButtonGroup3} customCardHeaderClass="justify-content-between">
                        <ButtonGroup className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <Button variant="danger" type="button" className="btn btn-wave">Left</Button>
                            <Button variant="warning" type="button" className="btn btn-wave">Middle</Button>
                            <Button variant="success" type="button" className="btn btn-wave">Right</Button>
                        </ButtonGroup>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Outline styled" className="" reactCode={ButtonGroup4} customCardHeaderClass="justify-content-between">
                        <ButtonGroup className="btn-group" role="group" aria-label="Basic outlined example">
                            <Button variant="outline-primary" type="button" className="btn btn-wave">Left</Button>
                            <Button variant="outline-primary" type="button" className="btn btn-wave">Middle</Button>
                            <Button variant="outline-primary" type="button" className="btn btn-wave">Right</Button>
                        </ButtonGroup>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Checkbox button groups" className="" reactCode={ButtonGroup5} customCardHeaderClass="justify-content-between" customCardBodyClass="checkbox-button-group">
                        <ButtonGroup className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" className="btn-check" id="btncheck1" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

                            <input type="checkbox" className="btn-check" id="btncheck2" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

                            <input type="checkbox" className="btn-check" id="btncheck3" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
                        </ButtonGroup>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Radio button groups" className="" reactCode={ButtonGroup6} customCardHeaderClass="justify-content-between" customCardBodyClass="radio-button-group">
                        <ButtonGroup className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                defaultChecked />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                        </ButtonGroup>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Sizing" className="" reactCode={ButtonGroup7} customCardHeaderClass="justify-content-between">
                                <ButtonGroup className="btn-group btn-group-lg my-1 me-1" role="group" aria-label="Large button group">
                                    <Button variant="outline-success" type="button" className="btn">Left</Button>
                                    <Button variant="outline-success" type="button" className="btn">Middle</Button>
                                    <Button variant="outline-success" type="button" className="btn">Right</Button>
                                </ButtonGroup>
                                <ButtonGroup className="btn-group my-1 me-1" role="group" aria-label="Default button group">
                                    <Button variant="outline-success" type="button" className="btn">Left</Button>
                                    <Button variant="outline-success" type="button" className="btn">Middle</Button>
                                    <Button variant="outline-success" type="button" className="btn">Right</Button>
                                </ButtonGroup>
                                <ButtonGroup className="btn-group btn-group-sm my-1 me-1" role="group" aria-label="Small button group">
                                    <Button variant="outline-success" type="button" className="btn">Left</Button>
                                    <Button variant="outline-success" type="button" className="btn">Middle</Button>
                                    <Button variant="outline-success" type="button" className="btn">Right</Button>
                                </ButtonGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title=" Button toolbar" className="" reactCode={ButtonGroup8} customCardHeaderClass="justify-content-between">
                                <ButtonToolbar className="mb-4" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
                                        <Button variant="primary" type="button" className="btn">1</Button>
                                        <Button variant="primary" type="button" className="btn">2</Button>
                                        <Button variant="primary" type="button" className="btn">3</Button>
                                        <Button variant="primary" type="button" className="btn">4</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="Second group">
                                        <Button variant="secondary" type="button" className="btn">5</Button>
                                        <Button variant="secondary" type="button" className="btn">6</Button>
                                        <Button variant="secondary" type="button" className="btn">7</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group my-1" role="group" aria-label="Third group">
                                        <Button variant="info" type="button" className="btn btn-info">8</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                                <ButtonToolbar className="mb-3" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
                                        <Button variant="outline-secondary" type="button" className="btn">1</Button>
                                        <Button variant="outline-secondary" type="button" className="btn">2</Button>
                                        <Button variant="outline-secondary" type="button" className="btn">3</Button>
                                        <Button variant="outline-secondary" type="button" className="btn">4</Button>
                                    </ButtonGroup>
                                    <InputGroup>
                                        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                                        <Form.Control type="text"
                                            placeholder="Input group example"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon" />
                                    </InputGroup>
                                </ButtonToolbar>
                                <ButtonToolbar className="justify-content-between" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <ButtonGroup className="btn-group my-1" role="group" aria-label="First group">
                                        <Button variant="outline-secondary" type="button" className="btn">1</Button>
                                        <Button variant="outline-secondary" type="button" className="btn">2</Button>
                                        <Button variant="outline-secondary" type="button" className="btn">3</Button>
                                        <Button variant="outline-secondary" type="button" className="btn">4</Button>
                                    </ButtonGroup>
                                    <InputGroup>
                                        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                                        <Form.Control type="text"
                                            placeholder="Input group example"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon2" />
                                    </InputGroup>
                                </ButtonToolbar>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title=" Nesting" className="" reactCode={ButtonGroup9} customCardHeaderClass="justify-content-between">
                                <ButtonGroup className="btn-group" role="group"
                                    aria-label="Button group with nested dropdown">
                                    <Button variant="" type="button" className="btn btn-primary">1</Button>
                                    <Button variant="" type="button" className="btn btn-primary">2</Button>

                                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Vertical variation" className="" reactCode={ButtonGroup10} customCardHeaderClass="justify-content-between">
                                <Row className=" gap-2">
                                    <Col sm={3}>
                                        <ButtonGroup vertical role="group" aria-label="Vertical button group">
                                            <Button variant="primary" type="button" className="btn ">Button</Button>
                                            <Button variant="primary" type="button" className="btn ">Button</Button>
                                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                            </DropdownButton>
                                            <Button variant="primary" type="button" className="btn ">Button</Button>
                                            <Button variant="primary" type="button" className="btn ">Button</Button>
                                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                            </DropdownButton>
                                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                            </DropdownButton>
                                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                            </DropdownButton>
                                        </ButtonGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <ButtonGroup vertical role="group" aria-label="Vertical button group">
                                            <Button variant="" type="button" className="btn btn-info">Button</Button>
                                            <Button variant="" type="button" className="btn btn-info">Button</Button>
                                            <Button variant="" type="button" className="btn btn-info">Button</Button>
                                            <Button variant="" type="button" className="btn btn-info">Button</Button>
                                            <Button variant="" type="button" className="btn btn-info">Button</Button>
                                            <Button variant="" type="button" className="btn btn-info">Button</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <ButtonGroup vertical role="group"
                                            aria-label="Vertical radio toggle button group">
                                            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
                                                defaultChecked />
                                            <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
                                            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
                                            />
                                            <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
                                            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
                                            />
                                            <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Social Group Buttons" className="" reactCode={ButtonGroup11} dataCode={dataButtonGroup11} customCardHeaderClass="justify-content-between">
                                <ButtonGroup className="btn-group" role="group" aria-label="Basic example">
                                    {SocialIconButtons.map((idx) => (
                                        <Button variant={idx.class} className="btn btn-icon btn-wave" key={idx.id}>
                                            <i className={`ri-${idx.icon}`}></i>
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Buttongroup;
















