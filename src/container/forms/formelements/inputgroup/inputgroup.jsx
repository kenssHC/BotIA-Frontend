import { Fragment } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import Select from 'react-select';

const Inputgroup = () => {
    const Selectdata1 = [
        { value: 'Choose...', label: 'Choose...' },
        { value: 'One', label: 'One' },
        { value: 'Two', label: 'Two' },
        { value: 'Three', label: 'Three' },
    ];
    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Input Groups
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text className="" id="basic-addon1">@</InputGroup.Text>
                                <Form.Control type="text" className="" placeholder="Username"
                                    aria-label="Username" aria-describedby="basic-addon1" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" className="" placeholder="Recipient's username"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <InputGroup.Text className="" id="basic-addon2">@example.com</InputGroup.Text>
                            </InputGroup>
                            <Form.Label htmlFor="basic-url" className="form-label">Your vanity URL</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text className=""
                                    id="basic-addon3">https://example.com/users/</InputGroup.Text>
                                <Form.Control type="text" className="" id="basic-url"
                                    aria-describedby="basic-addon3" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text className="">$</InputGroup.Text>
                                <Form.Control type="text" className=""
                                    aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Text className="">.00</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" className="" placeholder="Username"
                                    aria-label="Username" />
                                <InputGroup.Text className="">@</InputGroup.Text>
                                <Form.Control type="text" className="" placeholder="Server"
                                    aria-label="Server" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Text className="">With textarea</InputGroup.Text>
                                <Form.Control as="textarea" className="" aria-label="With textarea" />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Warpping
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="flex-nowrap">
                                <InputGroup.Text className="" id="addon-wrapping">@</InputGroup.Text>
                                <Form.Control type="text" className="" placeholder="Username"
                                    aria-label="Username" aria-describedby="addon-wrapping" />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Sizing
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="input-group-sm mb-3">
                                        <InputGroup.Text className="" id="inputGroup-sizing-sm">Small</InputGroup.Text>
                                        <Form.Control type="text" className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text className=""
                                            id="inputGroup-sizing-default">Default</InputGroup.Text>
                                        <Form.Control type="text" className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default" />
                                    </InputGroup>
                                    <InputGroup className="input-group-lg">
                                        <InputGroup.Text className="" id="inputGroup-sizing-lg">Large</InputGroup.Text>
                                        <Form.Control type="text" className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg" />
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Buttons addons
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <Button variant='primary' className="" type="button"
                                            id="button-addon1">Button</Button>
                                        <Form.Control type="text" className="" placeholder=""
                                            aria-label="Example text with button addon"
                                            aria-describedby="button-addon1" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="text" className="" placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <Button variant='primary' className="" type="button"
                                            id="button-addon2">Button</Button>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button variant='primary' className="" type="button">Button</Button>
                                        <Button variant='primary' className="" type="button">Button</Button>
                                        <Form.Control type="text" className="" placeholder=""
                                            aria-label="Example text with two button addons" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Form.Control type="text" className="" placeholder="Recipient's username"
                                            aria-label="Recipient's username with two button addons" />
                                        <Button variant='primary' className="" type="button">Button</Button>
                                        <Button variant='primary' className="" type="button">Button</Button>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Buttons with dropdowns
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item >Another action</Dropdown.Item>
                                                <Dropdown.Item >Something else here</Dropdown.Item>
                                                <Dropdown.Divider>
                                                </Dropdown.Divider>
                                                <Dropdown.Item >Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with dropdown button" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with dropdown button" />
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="btn btn-outline-primary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item >Another action</Dropdown.Item>
                                                <Dropdown.Item >Something else here</Dropdown.Item>
                                                <Dropdown.Divider>
                                                </Dropdown.Divider>
                                                <Dropdown.Item >Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </InputGroup>
                                    <InputGroup className="flex-nowrap">
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="btn btn-primary-transparent dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item >Another action</Dropdown.Item>
                                                <Dropdown.Item >Something else here</Dropdown.Item>
                                                <Dropdown.Divider>
                                                </Dropdown.Divider>
                                                <Dropdown.Item >Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Form.Control type="text" className="border-x-0"
                                            aria-label="Text input with 2 dropdown buttons" />
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="btn btn-primary-transparent dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item >Another action</Dropdown.Item>
                                                <Dropdown.Item >Something else here</Dropdown.Item>
                                                <Dropdown.Divider>
                                                </Dropdown.Divider>
                                                <Dropdown.Item >Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Custom file input
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                                        <Form.Control type="file" className="form-control" id="inputGroupFile01" />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <Form.Control type="file" className="form-control" id="inputGroupFile02" />
                                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <Button variant='' className="btn btn-primary" type="button"
                                            id="inputGroupFileAddon03">Button</Button>
                                        <Form.Control type="file" className="form-control" id="inputGroupFile03"
                                            aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                                    </InputGroup>

                                    <InputGroup>
                                        <Form.Control type="file" className="form-control" id="inputGroupFile04"
                                            aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                        <Button variant='' className="btn btn-primary" type="button"
                                            id="inputGroupFileAddon04">Button</Button>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Multiple inputs
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup>
                                        <InputGroup.Text className="">First and last name</InputGroup.Text>
                                        <Form.Control type="text" aria-label="First name" className="" />
                                        <Form.Control type="text" aria-label="Last name" className="" />
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Checkboxes and radios
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text className="">
                                            <Form.Check className=" mt-0" type="checkbox" value=""
                                                aria-label="Checkbox for following text input" />
                                        </InputGroup.Text>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with checkbox" />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputGroup.Text className="">
                                            <Form.Check className=" mt-0" type="radio" value=""
                                                aria-label="Radio button for following text input" />
                                        </InputGroup.Text>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with radio button" />
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Multiple addons
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text className="">
                                            <Form.Check className="mt-0" type="checkbox" value=""
                                                aria-label="Checkbox for following text input" />
                                        </InputGroup.Text>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with checkbox" />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputGroup.Text className="">
                                            <Form.Check className="mt-0" type="radio" value=""
                                                aria-label="Radio button for following text input" />
                                        </InputGroup.Text>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with radio button" />
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Segmented buttons
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <Button variant='primary' type="button" className="">Action</Button>
                                        <Dropdown>
                                            <Dropdown.Toggle type="button"
                                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="visually-hidden">Toggle Dropdown</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item >Another action</Dropdown.Item>
                                                <Dropdown.Item >Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item >Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with segmented dropdown button" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Form.Control type="text" className=""
                                            aria-label="Text input with segmented dropdown button" />
                                        <Button type="button" className="btn btn-primary">Action</Button>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' type="button"
                                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="visually-hidden">Toggle Dropdown</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-end">
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item >Another action</Dropdown.Item>
                                                <Dropdown.Item >Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item >Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Custom select
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <div className="input-group-text" as="div" htmlFor="inputGroupSelect01">Options</div>
                                        <Select name="state" options={Selectdata1} className="basic-multi-select " isSearchable
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <div className="input-group-text" as="div" htmlFor="inputGroupSelect02">Options</div>
                                        <Select name="state" options={Selectdata1} className="basic-multi-select " isSearchable
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button variant='' className="btn btn-primary" as="div" type="button">Button</Button>
                                        <Select name="state" options={Selectdata1} className="basic-multi-select " isSearchable
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                        />
                                    </InputGroup>
                                    <InputGroup className="custom-selectgroup">
                                        <Select name="state" options={Selectdata1} className="basic-multi-select " isSearchable
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                        />
                                        <Button variant='' className="btn btn-primary" type="button">Button</Button>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Inputgroup;
