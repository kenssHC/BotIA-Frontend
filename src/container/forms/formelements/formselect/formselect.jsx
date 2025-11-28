import { Fragment, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Multipleselectdata, Multipleselectdata1, Optionwithnosearch, Selectdata1, SingleGroup } from './formselectdata';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const Formselect = () => {

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("one"),
        createOption("two"),
        createOption("three")
    ]);
    const [inputValue1, setInputValue1] = useState('');
    const [value1, setValue1] = useState([
        createOption("child-1"),
        createOption("child-2")
    ]);

    const handleKeyDown1 = (event) => {
        if (!inputValue1) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue1)]);
                setInputValue1('');
                event.preventDefault();
        }
    };
    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    const [isSearchable] = useState(true);

      //
  const [inputValue2, setInputValue2] = useState("");
  const [value2, setValue2] = useState([
    createOption("abc@hotmail.com"),
  ]);

  const handleKeyDown2 = (event) => {
    if (!inputValue2) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue2((prev) => [...prev, createOption(inputValue2)]);
        setInputValue2("");
        event.preventDefault();
    }
  };
    return (
        <Fragment>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Default Select
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select name="colors" options={Selectdata1} className="default basic-multi-select" id="choices-multiple-default"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled Select
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Select aria-label="Default select example" disabled={true}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Select
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Select className="form-select rounded-pill" aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Select Sizes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Select name="colors" options={Selectdata1} className="default basic-multi-select mb-3" id="choices-multiple-default"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                            />
                            <Select name="colors" options={Selectdata1} className="default basic-multi-select mb-3" id="choices-multiple-default"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                            />
                            <Select name="colors" options={Selectdata1} className="default basic-multi-select " id="choices-multiple-default"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h6 className="fw-semibold mb-2">Choices:</h6>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <h6 className="card-title">Multiple Select</h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="fw-semibold mb-2">Default</p>
                                    <Select isMulti name="colors" options={Multipleselectdata} className="default basic-multi-select mb-3" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                    />
                                    <p className="fw-semibold mb-2">With Remove Button</p>
                                    <Select isMulti name="colors" options={Multipleselectdata1} className="basic-multi-select mb-3" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
                                    />
                                    <p className="fw-semibold mb-2">Option groups</p>
                                    <SingleGroup />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Passing Through Options
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className='passing-option'>

                                    <CreatableSelect
                                        classNamePrefix="Select2"
                                        components={components}
                                        inputValue={inputValue}
                                        isClearable
                                        className="default basic-multi-select"
                                        id="choices-multiple-default"
                                        isMulti

                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Options added via config with no search
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Select isClearable name="choices-single-no-search" options={Optionwithnosearch} className="default basic-multi-select" id="choices-single-no-search"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Optionwithnosearch[5]]}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <h6 className="card-title">Single Select</h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="fw-semibold mb-2">Default</p>
                                    <Select isSearchable={isSearchable} name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                    />
                                    <p className="fw-semibold mb-2">Option groups</p>
                                    <SingleGroup />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Email Address Only
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                <CreatableSelect
                    components={components}
                    classNamePrefix='Select2'
                    inputValue={inputValue2}
                    isClearable
                    isMulti
                    menuIsOpen={false}
                    onChange={(newValue) => {
                      // Ensure newValue is an array (or empty array) of objects
                      if (Array.isArray(newValue)) {
                        setValue2(newValue);
                      } else {
                        // Handle the case when newValue is not an array
                        setValue2([]);
                      }
                    }}
                    onInputChange={(newValue) => setInputValue2(newValue)}
                    onKeyDown={handleKeyDown2}
                    placeholder="Type something and press enter..."
                    value={value2}
                  />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Passing Unique Values
                                    </Card.Title>
                                </Card.Header>
                                {/* <Select name="colors" options={Selectdata1} className="default basic-multi-select" id="choices-multiple-default"
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                /> */}
                                <Card.Body className="passing-option">
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix="Select2" 
                                        inputValue={inputValue1}
                                        isClearable
                                        className="default basic-multi-select"
                                         id="choices-multiple-default"
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue1([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue1(newValue)}
                                        onKeyDown={handleKeyDown1}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

           

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Multiple Attribute Select
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Select multiple className="form-select" aria-label="multiple select example">
                                <option className='selected'>Open this select menu</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Using Size Attribute
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Select className="form-select" htmlSize={4} aria-label="size 3 select example">
                                <option className='selected'>Open this select menu</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                                <option defaultValue="4">Four</option>
                                <option defaultValue="5">Five</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Formselect;
