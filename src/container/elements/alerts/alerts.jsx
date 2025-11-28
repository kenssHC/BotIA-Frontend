import { Fragment, useState } from 'react';
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Defaultalerts, Defaultsolidalerts, Linkalerts, Outlinealerts, Roundedefaultalerts, Roundedoutlinealerts, Roundedsolidalerts, Roundewithbtnalerts, Shadowsolidalerts, Solidalerts, Additionalcontentalerts, Imagealerts, avatarsizealert, Svgalert, Svgalert1, Customizedalert1 } from './alertsdata';
import { dataalert10, dataalert11, dataalert12, dataalert14, dataalert15, dataalert16, dataalert17, dataalert3, dataalert4, dataalert5, dataalert6, dataalert7, dataalert8, dataalert9, reactalert1, reactalert10, reactalert11, reactalert12, reactalert13, reactalert14, reactalert15, reactalert16, reactalert17, reactalert2, reactalert3, reactalert4, reactalert5, reactalert6, reactalert7, reactalert8, reactalert9 } from '../../../components/prism-code/uielements-prisem'
import ShowCode from '../../../components/common/showcode/showcode';

const Alerts = () => {


    const [alert, setAlert] = useState({});

	const handleRemoveAlert = (alertName) => {
        setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
	};

    //"Live example

    const [alerts, setAlerts] = useState([]);
    const handleShowAlert = () => {
        const newAlert = {
            id: new Date().getTime(), // Unique ID for each alert
        };

        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

        // Automatically remove the alert after 5 seconds
        setTimeout(() => {
            setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== newAlert.id));
        }, 5000);
    };

    return (
        <Fragment> 
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Alert" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert1} >
                        <Alert variant='warning' className="alert alert-warning alert-dismissible fade show" role="alert" show={alert['basicAlert']} >
                            <strong>Holy guacamole!</strong> You should check in on some of those fields
                            below.
                            <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
                                aria-label="Close" onClick={() => handleRemoveAlert('basicAlert')}><i className="bi bi-x"></i>
                            </Button>
                        </Alert>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Live example" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert2} >
                        {alerts.map((alert) => (
                            <Alert key={alert.id} variant="success" className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <Button variant="" type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))}>
                                    <i className="bi bi-x"></i>
                                </Button>
                            </Alert>
                        ))}
                        <Button type="button" className='mt-2' onClick={handleShowAlert}>
                            Show live alert
                        </Button>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Default alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert3} dataCode={dataalert3}>
                        {Defaultalerts.map((idx, alt1) => (
                            <Alert variant={idx.class} className="alert" role="alert" key={alt1}>
                                {idx.text}
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Links in alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert4} dataCode={dataalert4}>
                        {Linkalerts.map((idx, alt2) => (
                            <Alert variant={idx.class} className="alert" role="alert" key={alt2}>
                                {idx.text1} <Link to="#" className="alert-link">{idx.text2}</Link>.{idx.text3} </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Solid Colored Alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert5} dataCode={dataalert5}>
                        {Solidalerts.map((idx, index) => (
                            <Alert show={alert[`solid${index}`]} variant={idx.class} className={`alert alert-dismissible fade ${idx.color} show`} key={idx.id}>
                                {idx.text}
                                <Button variant='' type="button" className={`btn-close ${idx.color}`} data-bs-dismiss="alert" aria-label="Close"
                                    onClick={() => handleRemoveAlert(`solid${index}`)}><i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="rounded Alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert6} dataCode={dataalert6}>
                        {Outlinealerts.map((idx, index) => (
                            <Alert show={alert[`outline${index}`]} variant={idx.class} className="alert alert- alert-dismissible fade show" key={idx.id}>
                                {idx.text}
                                <Button variant='' type="button" className="btn-close"
                                    onClick={() => handleRemoveAlert(`outline${index}`)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Solid Alerts With Different Shadows" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert7} dataCode={dataalert7}>
                        {Shadowsolidalerts.map((idx, index) => (
                            <Alert show={alert[`shadows${index}`]} variant={idx.class} className={`alert shadow-${idx.size} alert-dismissible fade show`} key={idx.id}>
                                {idx.text}
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
                                    onClick={() => handleRemoveAlert(`shadows${index}`)}
                                    aria-label="Close"><i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Default Alerts With Different Shadows" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert8} dataCode={dataalert8}>
                        {Defaultsolidalerts.map((idx, alt6) => (
                            <Alert variant={idx.class} className={`alert shadow-${idx.size}`} key={alt6}>A simple primary alert with small shadow—check it out!</Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Solid Alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert9} dataCode={dataalert9}>
                        {Roundedsolidalerts.map((idx, index) => (
                            <Alert show={alert[`round${index}`]} variant={idx.class} className="alert  rounded-pill alert-dismissible fade show" key={index}>
                                {idx.text}
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                    onClick={() => handleRemoveAlert(`round${index}`)}>
                                    <i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Outline Alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert10} dataCode={dataalert10}>
                        {Roundedoutlinealerts.map((idx,index) => (
                            <Alert variant={idx.class} show={alert[`rounded${index}`]} className="alert rounded-pill alert-dismissible fade show" key={index}>
                                {idx.text}
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                    onClick={() => handleRemoveAlert(`rounded${index}`)}><i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Rounded Default Alerts" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert11} dataCode={dataalert11}>
                        {Roundedefaultalerts.map((idx,index) => (
                            <Alert show={alert[`default${index}`]} variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={index}>
                                {idx.text}
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                    onClick={() => handleRemoveAlert(`default${index}`)}
                                ><i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Alerts With Custom Close Button" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert12} dataCode={dataalert12}>
                        {Roundewithbtnalerts.map((idx,index) => (
                            <Alert  show={alert[`close${index}`]} variant={idx.class} className="alert rounded-pill alert-dismissible custom-rounded-alerts fade show" key={index}>
                                {idx.text}
                                <Button variant='' type="button" className="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"
                                    onClick={() => handleRemoveAlert(`close${index}`)}>
                                    <i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alerts with icons" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert13}>
                        <Alert variant='primary' className="alert d-flex align-items-center" role="alert">
                            <svg className="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                            <div>
                                An example alert with an icon
                            </div>
                        </Alert>
                        <Alert variant='success' className="alert  d-flex align-items-center" role="alert">
                            <svg className="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
                            <div>
                                An example success alert with an icon
                            </div>
                        </Alert>
                        <Alert variant='warning' className="alert  d-flex align-items-center" role="alert">
                            <svg className="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
                            <div>
                                An example warning alert with an icon
                            </div>
                        </Alert>
                        <Alert variant='danger' className="alert  d-flex align-items-center" role="alert">
                            <svg className="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
                            <div>
                                An example danger alert with an icon
                            </div>
                        </Alert>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Customized Alerts With SVG's" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert14} dataCode={dataalert14}>
                        {Customizedalert1.map((idx,index) => (
                            <Alert  show={alert[`svg${index}`]} variant={idx.color} className="alert alert-dismissible fade show custom-alert-icon shadow-sm" role="alert" key={index}>
                                <svg className={`me-2 svg-${idx.color}`} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
                                A customized {idx.color} alert with an icon
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert(`svg${index}`)}><i className="bi bi-x"></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alerts With Images" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert15} dataCode={dataalert15}>
                        {Imagealerts.map((idx,index) => (
                            <Alert show={alert[`images${index}`]} variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={index}>
                                <div className="avatar avatar-sm me-3 avatar-rounded">
                                    <img src={idx.src1} alt="img" />
                                </div>
                                <div>A simple {idx.color} alert with image—check it out!</div>
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert(`images${index}`)}
                                ><i className={`bi bi-x  ${idx.class}`}></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Alerts With Different size Images" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert16} dataCode={dataalert16}>
                        {avatarsizealert.map((idx,index) => (
                            <Alert show={alert[`different${index}`]} variant={idx.color} className="alert alert-img alert-dismissible fase show flex-wrap" role="alert" key={index}>
                                <div className={`avatar avatar-${idx.class} me-3`}>
                                    <img src={idx.src1} alt="img" />
                                </div>
                                <div>A simple {idx.color} alert with image—check it out!</div>
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close" onClick={() => handleRemoveAlert(`different${index}`)}><i className={`bi bi-x ${idx.class1}`}></i></Button>
                            </Alert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <div className="card bg-white border-0">
                                <Alert variant='primary' className="alert custom-alert1" show={alert['primary']}>
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert('primary')} ><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                                        <h5>Information?</h5>
                                        <p className="">This alert is created to just show the related information.</p>
                                        <div className="">
                                            <Button variant='outline-danger' className="btn btn-sm btn-outline-danger m-1">Decline</Button>
                                            <Button variant='primary' className="btn btn-sm btn-primary m-1">Accept</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </div>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className=" bg-white border-0">
                                <Alert variant='secondary' className="alert custom-alert1 " show={alert['secondary']} >
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert('secondary')}><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        <h5>Confirmed</h5>
                                        <p className="">This alert is created to just show the confirmation message.</p>
                                        <div className="">
                                            <Button className="btn btn-sm btn-secondary m-1">Close</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <Alert variant='warning' className="alert custom-alert1 " show={alert['warning']} >
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert('warning')}><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                                        <h5>Warning</h5>
                                        <p className="">This alert is created to just show the warning message.</p>
                                        <div className="">
                                            <Button variant='outline-secondary' className="btn btn-sm btn-outline-secondary m-1">Back</Button>
                                            <Button className="btn btn-sm btn-warning m-1">Continue</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <Alert variant='danger' className="alert custom-alert1 " show={alert['danger']} >
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert('danger')}><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path

                                                d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" /></svg>
                                        <h5>danger</h5>
                                        <p className="">This alert is created to just show the danger message.</p>
                                        <div className="">
                                            <Button className="btn btn-sm btn-danger m-1">Delete</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col xl={12}>
                    <Row>
                        {Svgalert.map((idx,index) => (
                            <Col xl={3} key={index}>
                                <Card className=" border-0">
                                    <Alert show={alert[`svgalert${index}`]} variant={idx.color} className={`alert  border border-${idx.color} mb-0 p-2"`}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2">
                                                <svg className={`flex-shrink-0 svg-${idx.color}`} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path d={idx.class1} /></svg>
                                            </div>
                                            <div className={`text-${idx.color} w-100`}>
                                                <div className="fw-semibold d-flex justify-content-between">{idx.text1}
                                                    <Button type="button" variant='' className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert(`svgalert${index}`)}><i className="bi bi-x"></i></Button></div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#" className={`text-${idx.class} fw-semibold me-2 d-inline-block`}>{idx.btn1}</Link>
                                                    <Link to="#" className={`text-${idx.color} fw-semibold`}>{idx.btn2}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Alert>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xl={12}>
                    <Row>
                        {Svgalert1.map((idx,index) => (
                            <Col xl={3} key={idx.id}>
                                <Card className="border-0">
                                    <Alert show={alert[`card${index}`]} variant={`solid-${idx.color}`} className={`alert  border border-${idx.color} mb-0 p-2`}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2">
                                                <svg className="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path d={idx.class1} /></svg>
                                            </div>
                                            <div className="text-fixed-white w-100">
                                                <div className="fw-semibold d-flex justify-content-between">{idx.text1}<Button type="button" variant='' className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemoveAlert(`card${index}`)}><i className="bi bi-x"></i></Button></div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#" className="text-fixed-white fw-semibold me-2 op-7">{idx.btn1}</Link>
                                                    <Link to="#" className="text-fixed-white fw-semibold">{idx.btn2}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Alert>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col xl={12}>
                    <ShowCode title=" Additional content" className="" customCardHeaderClass="justify-content-between" reactCode={reactalert17} dataCode={dataalert17}>
                        <Row className=" gy-3">
                            {Additionalcontentalerts.map((idx,index) => (
                                <Col xl={6} key={index}>
                                    <Alert show={alert[`additional${index}`]} variant={idx.class} className="alert  overflow-hidden p-0" role="alert">
                                        <div className={`p-3 bg-${idx.class} text-fixed-white d-flex justify-content-between`}>
                                            <h6 className="aletr-heading mb-0 text-fixed-white">{idx.text1}</h6>
                                            <Button type="button" variant='' className="btn-close p-0 text-fixed-white"
                                                onClick={() => handleRemoveAlert(`additional${index}`)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
                                        </div>
                                        <hr className="my-0" />
                                        <div className="p-3">
                                            <p className="mb-0">{idx.text2}<Link to="#" className="fw-semibold text-decoration-underline">{idx.text3}</Link></p>
                                        </div>
                                    </Alert>
                                </Col>
                            ))}
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Alerts;
