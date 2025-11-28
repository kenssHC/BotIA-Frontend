import { Fragment, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Checkdata1 } from './radiodata';

const Checksradios = () => {

    const [toggles, setToggles] = useState({});

    const toggle = (toggleKey) => {
        setToggles((prevState) => ({
            ...prevState,
            [toggleKey]: prevState[toggleKey] === 'on' ? 'off' : 'on',
        }));
    };
    return (
        <Fragment>
            <Row>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Checks
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check label="Default checkbox" />
                            <Form.Check defaultChecked label="Checked checkbox" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check disabled label="Disabled checkbox" />
                            <Form.Check disabled defaultChecked label="Disabled checked checkbox" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Radios
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="radio" label="Default radio" name="example-radios1" />
                            <Form.Check type="radio" defaultChecked label="Default checked radio" name="example-radios1" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="radio" disabled label="Default radio" />
                            <Form.Check type="radio" disabled defaultChecked label="Default checked radio" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Default (stacked)
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check label="Default checkbox" />
                            <Form.Check disabled label="Default checkbox" />
                            <Form.Check type="radio" label="Default radio" />
                            <Form.Check type="radio" disabled label="Default radio" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Switches
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="switch" label="Default switch checkbox input" />
                            <Form.Check type="switch" defaultChecked label="Default switch checkbox input" />
                            <Form.Check type="switch" disabled label="Default switch checkbox input" />
                            <Form.Check type="switch" disabled defaultChecked label="Default checked switch checkbox input" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Radio toggle buttons
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
                            <Button className="btn btn-primary m-1">Checked</Button>
                            <Form.Check type="radio" className="btn-check" name="options" id="option2" />
                            <Button className="btn btn-primary m-1">Radio</Button>
                            <Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
                            <Button disabled className="btn btn-primary m-1">Disabled</Button>
                            <Form.Check type="radio" className="btn-check" name="options" id="option4" />
                            <Button className="btn btn-primary m-1">Radio</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Checkbox toggle buttons
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="checkbox" className="btn-check" id="btn-check" />
                            <Button className="btn btn-primary m-1">Single toggle</Button>
                            <Form.Check type="checkbox" className="btn-check" id="btn-check-2" defaultChecked />
                            <Button className="btn btn-primary m-1">Checked</Button>
                            <Form.Check type="checkbox" className="btn-check" id="btn-check-3" disabled />
                            <Button disabled className="btn btn-primary m-1">Disabled</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Inline
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check className="form-check-inline" type="checkbox" label="1" />
                            <Form.Check className="form-check-inline" type="checkbox" label="2" />
                            <Form.Check className="form-check-inline" disabled type="checkbox" label="3 (disabled)" />
                            <Form.Check className="form-check-inline" type="radio" label="1" name='radio1' />
                            <Form.Check className="form-check-inline" type="radio" label="2" name='radio1' />
                            <Form.Check className="form-check-inline" disabled type="radio" label="3 (disabled)" />
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Without labels
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex">
                            <Form.Check className="me-4" type="checkbox" />
                            <Form.Check className="" type="radio" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Reverse
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check className="form-check-reverse mb-3" type="checkbox" label="Reverse checkbox" />
                            <Form.Check className="form-check-reverse mb-3" type="checkbox" disabled label="Disabled reverse checkbox" />
                            <Form.Check className="form-check-reverse mb-3" type="switch" label="Reverse switch checkbox input" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outlined styles
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control type="checkbox" className="btn-check" id="btn-check-outlined" />
                            <Button variant='outline-primary' className="mb-3">Single toggle</Button><br />
                            <Form.Check type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
                            <Button variant='outline-secondary' className=" mb-3">Checked</Button><br />
                            <Form.Check type="radio" className="btn-check" name="options-outlined" id="success-outlined"
                                defaultChecked />
                            <Button variant='outline-success' className="m-1">Checked success
                                radio</Button>
                            <Form.Check type="radio" className="btn-check" name="options-outlined" id="danger-outlined"
                            />
                            <Button variant='outline-danger' className="m-1" >Danger radio</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Checkbox Sizes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-sm-flex align-items-center justify-content-between">
                            <Form.Check type="checkbox" defaultChecked label="Default" />
                            <Form.Check className="form-check-md d-flex align-items-center"
                                type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
                            <Form.Check className="form-check-lg d-flex align-items-center"
                                type="checkbox" defaultChecked id="checkebox-lg" label="Large" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Radio Sizes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body d-sm-flex align-items-center justify-content-between">
                            <Form.Check type="radio" label="Default" name="example-radios" />
                            <Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
                            <Form.Check type="radio" className="form-check-lg" name="example-radios"
                                defaultChecked id="Radio-lg" label="Large" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Switch Sizes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" d-sm-flex align-item-center justify-content-between">
                            <Form.Check type="switch" label="Default" />
                            <Form.Check type="switch" className="form-check-md form-switch" id="switch-md" label="Medium" />
                            <Form.Check type="switch" className="form-check-lg form-switch"
                                defaultChecked id="switch-lg" label="Large" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Toggle Switches Style-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="row gy-1">
                                <Col xl={4}>
                                    <div className={`toggle ${toggles['switch'] === 'on' || !toggles['switch'] ? 'on' : ''}`} onClick={() => toggle('switch')}>
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-secondary ${toggles['secondary'] === 'on' || !toggles['secondary'] ? 'on' : ''}`} onClick={() => toggle('secondary')}>
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-warning ${toggles['warning'] === 'on' || !toggles['warning'] ? 'on' : ''}`} onClick={() => toggle('warning')} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-info  ${toggles['info'] === 'on' || !toggles['info'] ? 'on' : ''}`} onClick={() => toggle('info')} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-success ${toggles['success'] === 'on' || !toggles['success'] ? 'on' : ''}`} onClick={() => toggle('success')} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-danger  ${toggles['danger'] === 'on' || !toggles['danger'] ? 'on' : ''}`} onClick={() => toggle('danger')} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-light  ${toggles['light'] === 'on' || !toggles['light'] ? 'on' : ''}`} onClick={() => toggle('light')} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle ms-sm-2  toggle-dark  ${toggles['dark'] === 'on' || !toggles['dark'] ? 'on' : ''}`} onClick={() => toggle('dark')}>
                                        <span></span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Toggle Switches Style-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-1">
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchPrimary" className="m-0 label-primary"></Form.Label><span className="ms-3">Primary</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchSecondary" className="m-0 label-secondary"></Form.Label><span className="ms-3">Secondary</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchWarning" className="m-0 label-warning"></Form.Label><span className="ms-3">Warning</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchInfo" className="m-0 label-info"></Form.Label><span className="ms-3">Info</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchSuccess" className="m-0 label-success"></Form.Label><span className="ms-3">Success</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchDanger" className="m-0 label-danger"></Form.Label><span className="ms-3">Danger</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchLight" className="m-0 label-light"></Form.Label><span className="ms-3">Light</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchDark" className="m-0 label-dark"></Form.Label><span className="ms-3">Dark</span>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row row-cols-12">
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Colored Checkboxes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={idx.id}>
                                    <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                        type="checkbox" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Checkboxes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={idx.id}>
                                    <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                        type="checkbox" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Colored Radios
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={idx.id}>
                                    <input id={idx.id} className={`form-check-input form-checked form-checked-${idx.class2}`}
                                        type="radio" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Radios
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={idx.id}>
                                    <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                        type="radio" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Switches Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check form-switch ${idx.class1}`} key={idx.id}>
                                    <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                        type="checkbox" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Fragment>
    );
};
export default Checksradios;
