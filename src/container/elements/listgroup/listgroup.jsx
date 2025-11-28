import { Fragment, } from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { ActiveButtons, BasicButtons, ContextualButtons, CustomButtons, HorizontalButtons, LinksButtons, ListbadgesButtons, SubheadingsButtons } from './listgroupdata';
import { dataListGroup1, dataListGroup10, dataListGroup11, dataListGroup15, dataListGroup16, dataListGroup2, dataListGroup5, dataListGroup7, dataListGroup8, dataListGroup9, ListGroup1, ListGroup10, ListGroup11, ListGroup12, ListGroup13, ListGroup14, ListGroup15, ListGroup16, ListGroup2, ListGroup3, ListGroup4, ListGroup5, ListGroup6, ListGroup7, ListGroup8, ListGroup9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Listgroup = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Basic List" className="" reactCode={ListGroup1} dataCode={dataListGroup1} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            {BasicButtons.map((idx) => (
                                <ListGroup.Item as="li" key={idx.id}>
                                    <div className="d-flex align-items-center">
                                        <span className="avatar avatar-sm">
                                            <img src={idx.src} alt="img" />
                                        </span>
                                        <div className="ms-2 fw-semibold">
                                            {idx.text}
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Active items" className="" reactCode={ListGroup2} dataCode={dataListGroup2} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            {ActiveButtons.map((idx) => (
                                <ListGroup.Item as="li" className={`list-group-item ${idx.class1}`} aria-current="true" key={idx.id}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <span className="fs-15">
                                                <i className={`bi bi-${idx.class}`}></i>
                                            </span>
                                        </div>
                                        <div className="ms-2">
                                            {idx.text}
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Disabled items" className="" reactCode={ListGroup3} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
                            </ListGroup.Item>
                            <ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
                            <ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
                            <ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
                            <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
                        </ListGroup>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Flush" className="" reactCode={ListGroup4} customCardHeaderClass="justify-content-between">
                        <ListGroup variant='flush' className="">
                            <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
                            <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
                            <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
                            <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
                            <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Links" className="" reactCode={ListGroup5} dataCode={dataListGroup5} customCardHeaderClass="justify-content-between">
                        <ListGroup className="list-group">
                            {LinksButtons.map((idx) => (
                                <ListGroup.Item action className={`list-group-item list-group-item-action ${idx.class1}`} key={idx.id}
                                    aria-current="true">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <span className={`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`}>
                                                {idx.text1}
                                            </span>
                                        </div>
                                        <div className="ms-2">{idx.text}</div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Buttons" className="" reactCode={ListGroup6} customCardHeaderClass="justify-content-between">
                        <ListGroup className="list-group">
                            <ListGroup.Item type="button" className="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
                            <ListGroup.Item type="button" className="list-group-item list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
                            <ListGroup.Item type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
                            <ListGroup.Item type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
                            <ListGroup.Item type="button" className="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
                        </ListGroup>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Contextual classes" className="" reactCode={ListGroup7} dataCode={dataListGroup7} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            {ContextualButtons.map((idx) => (
                                <ListGroup.Item as="li" variant={idx.class} key={idx.id}>{idx.text}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Contextual classes with hover styles" className="" reactCode={ListGroup8} dataCode={dataListGroup8} customCardHeaderClass="justify-content-between">
                        <ListGroup>
                            {ContextualButtons.map((idx) => (
                                <ListGroup.Item variant={idx.class} action className="list-group-item list-group-item-action" key={idx.id}>{idx.text}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Solid Colored Lists" className="" reactCode={ListGroup9} dataCode={dataListGroup9} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            {ContextualButtons.map((idx) => (
                                <ListGroup.Item className={`list-group-item list-item-solid-${idx.class} ${idx.class1}`} as="li" key={idx.id}>{idx.text}</ListGroup.Item>
                            ))}

                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Custom content" className="" reactCode={ListGroup10} dataCode={dataListGroup10} customCardHeaderClass="justify-content-between">
                        <ListGroup className="list-group">
                            {CustomButtons.map((idx) => (
                                <ListGroup.Item action className={`list-group-item-action ${idx.class1}`} key={idx.id}
                                    aria-current="true">
                                    <div className="d-flex w-100 justify-content-between gap-1">
                                        <h6 className="mb-1 fw-semibold">{idx.heading}</h6>
                                        <small className={idx.class2}>{idx.text1}</small>
                                    </div>
                                    <p className="mb-1">{idx.text2}</p>
                                    <small className='text-fixed-white'>{idx.text3}.</small>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Sub headings" className="" reactCode={ListGroup11} dataCode={dataListGroup11} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ol" numbered>
                            {SubheadingsButtons.map((idx) => (
                                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={idx.id}>
                                    <div className="ms-2 me-auto text-muted">
                                        <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
                                        {idx.text2}
                                    </div>
                                    <Badge bg={idx.class}>{idx.text3}</Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Numbered Lists" className="" reactCode={ListGroup12} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
                            <ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
                            <ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
                            <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
                            <ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
                            <ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="List With Checkboxes" className="" reactCode={ListGroup13} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked />
                                Accurate information at any given point.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                    aria-label="..." />
                                Hearing the information and responding.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked />
                                Setting up and customizing your own sales.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked />
                                New Admin Launched.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                    aria-label="..." />
                                To maximize profits and improve productivity.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                    aria-label="..." />
                                To have a complete 360° overview of sales information, having.
                            </ListGroup.Item>
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="List With Radios" className="" reactCode={ListGroup14} customCardHeaderClass="justify-content-between">
                        <ListGroup className="list-group">
                            <ListGroup.Item className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Accurate information at any given point.
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Hearing the information and responding.
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Setting up and customizing your own sales.
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                New Admin Launched.
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                To maximize profits and improve productivity.
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                To have a complete 360° overview of sales information, having.
                            </ListGroup.Item>
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="List With badges" className="" reactCode={ListGroup15} dataCode={dataListGroup15} customCardHeaderClass="justify-content-between">
                        <ListGroup as="ul">
                            {ListbadgesButtons.map((idx) => (
                                <ListGroup.Item key={idx.id}
                                    className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                                    {idx.text1}
                                    <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Horizontal" className="" reactCode={ListGroup16} dataCode={dataListGroup16} customCardHeaderClass="justify-content-between">
                        {HorizontalButtons.map((idx) => (
                            <ListGroup as="ul" className={`list-group-horizontal${idx.class} mb-3`} key={idx.id}>
                                <ListGroup.Item as="li">An item</ListGroup.Item>
                                <ListGroup.Item as="li">A second item</ListGroup.Item>
                                <ListGroup.Item as="li">A third item</ListGroup.Item>
                            </ListGroup>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
        </Fragment >
    );
};
export default Listgroup;
