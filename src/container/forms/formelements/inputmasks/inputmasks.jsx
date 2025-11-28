import { Fragment, useState } from 'react';
import { Card, Col, Form, Row } from "react-bootstrap";
import { InputMask } from "@react-input/mask";
import { NumericFormat } from "react-number-format";

const Inputmasks = () => {

    const [licensePlate, setLicensePlate] = useState("");

    // Handle changes in the license plate input
    const handleLicensePlateChange = (e) => {
        let inputText = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove non-alphanumeric characters
        inputText = inputText.slice(0, 14); // Limit input to a maximum of 14 characters
        const formattedText = formatLicensePlate(inputText);
        setLicensePlate(formattedText);
    };

    // Format the input text into blocks of 4 characters with spaces
    const formatLicensePlate = (inputText) => {
        const formattedText = inputText
            .split("")
            .map((char, index) => (index % 4 === 0 && index !== 0 ? ` ${char}` : char))
            .join("");
        return formattedText;
    };
    const [value1, setValue1] = useState("");

    function onChange1(event) {
        setValue1(event.target.value);
    }

    const [value2, setValue2] = useState("");

    function onChange2(event) {
        setValue2(event.target.value);
    }

    const [value3, setValue3] = useState("");

    function onChange3(event) {
        setValue3(event.target.value);
    }

    const [value4, setValue4] = useState("");

    function onChange4(event) {
        setValue4(event.target.value);
    }

    const [value5, setValue5] = useState("");

    function onChange5(event) {
        setValue5(event.target.value);
    }

    return (
        <Fragment>
            {/* Start:: row-1 */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {/* <input className="form-control date-format" placeholder="DD-MM-YYYY" /> */}
                            <InputMask
                                className="form-control date-format"
                                mask="dd-mm-yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                placeholder="DD-MM-YYYY"
                                showMask
                                separate
                                value={value1} onChange={onChange1}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {/* <input className="form-control date-format-1" placeholder="MM-DD-YYYY" /> */}
                            <InputMask className="form-control date-format" mask="dd-mm" replacement={{ d: /\d/, m: /\d/ }} placeholder="MM-DD-YYYY" showMask separate value={value2} onChange={onChange2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {/* <input className="form-control date-format-2" placeholder="MM-YY" /> */}
                            <InputMask className="form-control date-format" mask="dd-yy" replacement={{ d: /\d/, y: /\d/ }} placeholder="MM-YY" showMask separate value={value3} onChange={onChange3} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Number Formatting
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <NumericFormat className='form-control' value="20020220" allowLeadingZeros thousandSeparator="" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Time Format-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputMask className="form-control date-format" mask="99:99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm:ss" showMask separate value={value4} onChange={onChange4} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Time Format-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputMask className="form-control date-format" mask="99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm" showMask separate value={value5} onChange={onChange5} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Formatting Into Blocks
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control
                                className="form-control formatting-blocks"
                                id="licensePlate"
                                value={licensePlate}
                                onChange={handleLicensePlateChange}
                                placeholder="ABCD EFG HIJ KLMN"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* End:: row-1 */}
        </Fragment>

    )
}

export default Inputmasks;
