import { Fragment, useState } from 'react';
import { Accordion, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import { accordion1, accordion10, accordion11, accordion12, accordion13, accordion14, accordion15, accordion16, accordion2, accordion3, accordion4, accordion5, accordion6, accordion7, accordion8, accordion9 } from '../../../components/prism-code/adavanceui-prisem';
import ShowCode from '../../../components/common/showcode/showcode'

const Accordionscollapse = () => {
  //MULTIPLE TARGETS
  const [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  const [isSecondCollapsed, setisSecondCollapsed] = useState(false);

  const first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
    else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };

  const second = () => {

    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };

  const both = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
    else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
  };

  const [open, setOpen] = useState(false);

  const [openb, setOpenb] = useState(false);

  return (
    <Fragment>
      <Row>
        <Col xl={6}>
          <ShowCode title="Basic Accordion" className="" reactCode={accordion1} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Always Open Accordion <p class='mt-1 text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code>
					attribute on each
					<code>.accordion-collapse</code>
					to make accordion items stay open when another item is opened.
				</p>" className="" reactCode={accordion2} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <ShowCode title="Flush Accordion <p class='mt-1 subtitle text-muted fs-12 fw-normal'>
                Add <code>.accordion-flush</code> to remove the default <code>background-color</code>,
                some borders, and some rounded corners to render accordions edge-to-edge with
                their
                parent container.
              </p>" className="" reactCode={accordion3} customCardHeaderClass="justify-content-between" customCardBodyClass="p-0">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>Placeholder content for this accordion,
                  which isintended to demonstrate the <code>.accordion-flush</code> class.
                  This is the first item's accordion body.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>which is intended to demonstrate the <code>.accordion-flush</code> class.
                  This is thesecond item's accordion body. Let's imagine this being filled
                  with some actual content.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>Placeholder content for this accordion,
                  which is intended to demonstrate the <code>.accordion-flush</code> class.
                  This is the third item's accordion body. Nothing more exciting happening
                  here in  terms of content, but just filling up the space to make it look, at
                  least at first glance, a bit more representative of how this would look in a
                  real-world application.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <h6 className="mb-3">Light Colors:</h6>
      <Row>
        <Col xl={6}>
          <ShowCode title="Primarey" className="" reactCode={accordion4} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordion-primary">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Secondary" className="" reactCode={accordion5} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordion-secondary">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <h6 className="mb-3">Solid Colors:</h6>
      <Row>
        <Col xl={6}>
          <ShowCode title="Primary" className="" reactCode={accordion6} customCardHeaderClass="justify-content-between" customCardFooterClass="border-top-0">
            <Accordion defaultActiveKey="0" className="accordion accordion-solid-primary">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title=" Secondary" className="" reactCode={accordion7} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <h6 className="mb-3">Colored Borders:</h6>
      <Row>
        <Col xl={6}>
          <ShowCode title=" Primary" className="" reactCode={accordion8} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Success" className="" reactCode={accordion9} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ShowCode title="Left Aligned Icons" className="" reactCode={accordion10} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Without Icon" className="" reactCode={accordion11} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordionicon-none accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ShowCode title="Custom Icon Accordion" className="" reactCode={accordion12} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion accordion-customicon1 accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Custom Icon Accordion" className="" reactCode={accordion13} customCardHeaderClass="justify-content-between">
            <Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
              <Accordion.Item eventKey="0" className="custom-accordion-primary">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="accordion-item custom-accordion-warning">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ShowCode title="Example" className="" reactCode={accordion14} customCardHeaderClass="justify-content-between">
            <p className="mb-0">
              <Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
                href="#collapseExample" className="btn btn-primary collapsed mb-2 me-1" role="button">
                Link with href</Button>
              <Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
                variant='' className="btn btn-secondary collapsed mb-2" type="button">
                Button with data-bs-target</Button>
            </p>
            <Collapse in={openb}>
              <div className="card card-body mb-0">
                Some placeholder content for the collapse component. This panel
                is
                hidden by default but revealed when the user activates the
                relevant
                trigger.
              </div>
            </Collapse>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Targets Collapse" className="" reactCode={accordion15} customCardHeaderClass="justify-content-between">
            <p className="mb-0">
              <Button className="btn btn-primary mb-2 me-1" onClick={() => { first(); }}>Toggle first element</Button>
              <Button variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second(); }}>Toggle second element</Button>
              <Button variant='' className="btn btn-danger mb-2" type="button" onClick={() => { both(); }}>Toggle both elements</Button>
            </p>
            <Row>
              <div className="col m-1">
                {isFirstCollapsed ? (
                  <div className=" multi-collapse" id="multiCollapseExample1">
                    <div className="card card-body mb-0">
                      Some placeholder content for the first collapse
                      component of
                      this multi-collapse example. This panel is hidden by
                      default
                      but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="col m-1">
                {isSecondCollapsed ? (
                  <div className=" multi-collapse" id="multiCollapseExample2">
                    <div className="card card-body mb-0">
                      Some placeholder content for the second collapse
                      component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the
                      relevant
                      trigger.
                    </div>
                  </div>
                ) : null}
              </div>
            </Row>
          </ShowCode>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ShowCode title="Targets Collapse" className="" reactCode={accordion16} customCardHeaderClass="justify-content-between">
            <p><Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Toggle width collapse</Button>

            </p><div style={{ minHeight: '120px' }}>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. It's
                    hidden by default and shown when triggered.
                  </Card>
                </div>
              </Collapse>
            </div>
          </ShowCode>
        </Col>
      </Row>
    </Fragment>
  );
};
export default Accordionscollapse;

