import { Fragment, useState } from 'react';
import { Button, CloseButton, Col, Row, Toast, ToastContainer } from 'react-bootstrap';
import favicon from "../../../assets/images/brand-logos/fav.ico";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import { toasts1, toasts10, toasts2, toasts3, toasts4, toasts5, toasts6, toasts7, toasts8, toasts9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Toasts = () => {


    const [toasts, setToasts] = useState({});

    const addToast = (toastName) => {
        setToasts((prevToasts) => ({
            ...prevToasts,
            [toastName]: true,
        }));
    };

    const handleToasts = (toastName) => {
        setToasts((prevToasts) => ({ ...prevToasts, [toastName]: false }));
    };

    return (
        <Fragment>
            <Row>
                <Col xl={4}>
                    <ShowCode title=" Live example" className="" reactCode={toasts1} customCardHeaderClass="justify-content-between">
                        <Button type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => addToast('live')}>
                            Show live toast
                        </Button>
                        <Toast className="toast position-fixed top-0 end-0 p-0 me-3 mt-3 toast-zindex" show={toasts['live'] || false} onClose={() => handleToasts('live')} delay={3000} autohide>
                            <Toast.Header className="text-default mb-0">
                                <img className="bd-placeholder-img rounded me-2" src={favicon} alt="..." />
                                <strong className="me-auto">azira</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </ShowCode>
                    <ShowCode title="Color schemes" className="" reactCode={toasts2} customCardHeaderClass="justify-content-between">
                        <Toast className="toast align-items-center text-bg-primary border-0 fade show mb-4" show={toasts["primary"]}>
                            <div className="d-flex">
                                <Toast.Body className=" text-fixed-white" >Hello, world! This is Primary toast message. </Toast.Body>
                                <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={() => handleToasts('primary')}></CloseButton>
                            </div>
                        </Toast>
                        <Toast className="toast align-items-center text-bg-secondary border-0 fade show mb-4" show={toasts["secondary"]}>
                            <div className="d-flex">
                                <Toast.Body className=" text-fixed-white" >Hello, world! This is Secondary toast message. </Toast.Body>
                                <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={() => handleToasts('secondary')}></CloseButton>
                            </div>
                        </Toast>
                        <Toast className="toast align-items-center text-bg-success border-0 fade show mb-4" show={toasts["success"]}>
                            <div className="d-flex">
                                <Toast.Body className=" text-fixed-white" >Hello, world! This is Success toast message. </Toast.Body>
                                <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={() => handleToasts('success')}></CloseButton>
                            </div>
                        </Toast>
                        <Toast className="toast align-items-center text-bg-info border-0 fade show mb-4" show={toasts["info"]}>
                            <div className="d-flex">
                                <Toast.Body className=" text-fixed-white" >Hello, world! This is info toast message. </Toast.Body>
                                <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={() => handleToasts('info')}></CloseButton>
                            </div>
                        </Toast>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Basic example" className="" reactCode={toasts3} customCardHeaderClass="justify-content-between">
                        <Toast show={toasts['basic']} onClose={() => handleToasts('basic')} className="toast show"
                            role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header className="text-default">
                                <img src={favicon} alt="" className="me-2" height="18" />
                                <strong className="me-auto">azira</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ShowCode>
                    <ShowCode title="Stacking" className="" reactCode={toasts4} customCardHeaderClass="justify-content-between">
                        <ToastContainer className="toast-container position-static">
                            <Toast show={toasts["stack"]} onClose={() => handleToasts('stack')} className="toast fade show">
                                <Toast.Header className="toast-header text-default">
                                    <img src={favicon} alt="" className="me-2" height="18" />
                                    <strong className="me-auto">azira</strong>
                                    <small>just now</small>
                                </Toast.Header>
                                <Toast.Body> See? Just like this.</Toast.Body>
                            </Toast>
                            <Toast show={toasts["stack1"]} onClose={() => handleToasts('stack1')} className="toast fade show">
                                <Toast.Header className="toast-header text-default">
                                    <img src={favicon} alt="" className="me-2" height="18" />
                                    <strong className="me-auto">azira</strong>
                                    <small>2 seconds ago</small>
                                </Toast.Header>
                                <Toast.Body> Heads up, toasts will stack automatically</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Translucent" className="" reactCode={toasts5} customCardHeaderClass="justify-content-between">
                        <Toast onClose={() => handleToasts('transColor')} show={toasts['transColor']} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <Toast.Header className="text-default">
                                <img src={favicon} alt="" className="me-2" height="18" />
                                <strong className="me-auto">azira</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ShowCode>
                    <ShowCode title="Custom content" className="" reactCode={toasts6} customCardHeaderClass="justify-content-between">
                        <Toast role="alert" className="toast align-items-center fade show mb-3" show={toasts['customColor']}>
                            <div className="d-flex">
                                <Toast.Body className=" text-dark" > Hello, world! This is a toast message.</Toast.Body>
                                <CloseButton type="button" className="btn-close me-2 m-auto" onClick={() => handleToasts('customColor')}>
                                </CloseButton>
                            </div>
                        </Toast>
                        <div>
                            <span className="my-4 text-muted">
                                Alternatively, you can also add additional controls and components to
                                toasts.
                            </span>
                        </div>
                        <Toast className="toast fade show mt-2" role="alert" aria-live="assertive" show={toasts['customsColor']}>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                                <div className="mt-2 pt-2 border-top">
                                    <Button type="button" className="btn btn-primary btn-sm btn-wave me-2">Take
                                        action</Button>
                                    <Button type="button" className="btn btn-secondary btn-sm btn-wave" onClick={() => handleToasts('customsColor')}>Close</Button>
                                </div>
                            </Toast.Body>
                        </Toast>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Color Variants Live" className="" reactCode={toasts7} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            <Button type="button" variant='primary-light' className="btn me-2 btn-wave" id="primaryToastBtn" onClick={() => addToast('PrimaryColor')}>Primary</Button>
                            <Button variant='secondary-light' type="button" className="btn me-2 btn-wave" id="secondaryToastBtn" onClick={() => addToast('SecondaryColor')}>secondary</Button>
                            <Button variant='warning-light' type="button" className="btn  me-2 btn-wave" id="warningToastBtn" onClick={() => addToast('WarningColor')}>warning</Button>
                            <Button variant='info-light' type="button" className="btn  me-2 btn-wave" id="infoToastBtn" onClick={() => addToast('InfoColor')}>info</Button>
                            <Button variant='success-light' type="button" className="btn  me-2 btn-wave" id="successToastBtn" onClick={() => addToast('SuccessColor')}>success</Button>
                            <Button variant='danger-light' type="button" className="btn me-2 btn-wave" id="dangerToastBtn" onClick={() => addToast('DangerColor')}>danger</Button>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <Toast id="primaryToast" bg="primary-transparent" className="toast colored-toast"
                                onClose={() => handleToasts('PrimaryColor')} show={toasts['PrimaryColor'] || false} delay={2000} autohide
                                aria-atomic="true">
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="secondaryToast" className="toast colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"
                                aria-atomic="true" onClose={() => handleToasts('SecondaryColor')} show={toasts['SecondaryColor'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="warningToast" className="toast colored-toast bg-warning-transparent" role="alert" aria-live="assertive"
                                onClose={() => handleToasts('WarningColor')} show={toasts['WarningColor'] || false} delay={3000} autohide
                                aria-atomic="true">
                                <Toast.Header className="toast-header bg-warning text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="infoToast" className="toast colored-toast bg-info-transparent" role="alert" aria-live="assertive"
                                onClose={() => handleToasts('InfoColor')} show={toasts['InfoColor'] || false} delay={3000} autohide
                                aria-atomic="true">
                                <Toast.Header className="bg-info text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="successToast" className="toast colored-toast bg-success-transparent" role="alert" aria-live="assertive"
                                onClose={() => handleToasts('SuccessColor')} show={toasts['SuccessColor'] || false} delay={3000} autohide
                                aria-atomic="true">
                                <Toast.Header className="bg-success text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="dangerToast" className="toast colored-toast bg-danger-transparent" role="alert" aria-live="assertive"
                                onClose={() => handleToasts('DangerColor')} show={toasts['DangerColor'] || false} delay={3000} autohide
                                aria-atomic="true">
                                <Toast.Header className="toast-header bg-danger text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Solid Background Toasts" className="" reactCode={toasts8} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            <Button variant='primary' type="button" className="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn" onClick={() => addToast('solidPrimary')}>Primary</Button>
                            <Button variant='secondary' type="button" className="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn" onClick={() => addToast('solidSecondary')}>secondary</Button>
                            <Button variant='warning' type="button" className="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn" onClick={() => addToast('solidWarning')}>warning</Button>
                            <Button variant='info' type="button" className="btn btn-info me-2 btn-wave" id="solidinfoToastBtn" onClick={() => addToast('solidInfo')}>info</Button>
                            <Button variant='success' type="button" className="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn" onClick={() => addToast('solidSuccess')}>success</Button>
                            <Button variant='danger' type="button" className="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn" onClick={() => addToast('solidDanger')}>danger</Button>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <Toast id="solid-primaryToast" className="toast colored-toast bg-primary text-fixed-white"
                                onClose={() => handleToasts('solidPrimary')} show={toasts['solidPrimary'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="solid-secondaryToast" className="toast colored-toast bg-secondary text-fixed-white"
                                onClose={() => handleToasts('solidSecondary')} show={toasts['solidSecondary'] || false} delay={3000} autohide
                                aria-atomic="true">
                                <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="solid-warningToast" className="toast colored-toast bg-warning text-fixed-white"
                                onClose={() => handleToasts('solidWarning')} show={toasts['solidWarning'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-warning text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="solid-infoToast" className="toast colored-toast bg-info text-fixed-white"
                                onClose={() => handleToasts('solidInfo')} show={toasts['solidInfo'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-info text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="solid-successToast" className="toast colored-toast bg-success text-fixed-white"
                                onClose={() => handleToasts('solidSuccess')} show={toasts['solidSuccess'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-success text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                            <Toast id="solid-dangerToast" className="toast colored-toast bg-danger text-fixed-white"
                                onClose={() => handleToasts('solidDanger')} show={toasts['solidDanger'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-danger text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title=" Toast Placements" className="" reactCode={toasts9} customCardHeaderClass="justify-content-between">
                        <div className="btn-list">
                            <Button variant='outline-primary' type="button" onClick={() => addToast('topLeft')} className="btn  me-2 btn-wave" id="topleftToastBtn">Top Left</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('topCenter')} className="btn  me-2 btn-wave" id="topcenterToastBtn">Top Center</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('topRight')} className="btn  me-2 btn-wave" id="toprightToastBtn">Top Right</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('middleLeft')} className="btn  me-2 btn-wave" id="middleleftToastBtn">Middle Left</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('middleCenter')} className="btn  me-2 btn-wave" id="middlecenterToastBtn">Middle Center</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('middleRight')} className="btn  me-2 btn-wave" id="middlerightToastBtn">Middle Right</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('bottomLeft')} className="btn  me-2 btn-wave" id="bottomleftToastBtn">Bottom Left</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('bottomCenter')} className="btn  me-2 btn-wave" id="bottomcenterToastBtn">Bottom Center</Button>
                            <Button variant='outline-primary' type="button" onClick={() => addToast('bottomRight')} className="btn  me-2 btn-wave" id="bottomrightToastBtn">Bottom Right</Button>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                            <Toast id="topleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('topLeft')} show={toasts['topLeft'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>

                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                            <Toast id="topcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" onClose={() => handleToasts('topCenter')} show={toasts['topCenter'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <Toast id="topright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('topRight')} show={toasts['topRight'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
                            <Toast id="middleleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('middleLeft')} show={toasts['middleLeft'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-50 start-50 translate-middle">
                            <Toast id="middlecenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('middleCenter')} show={toasts['middleCenter'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                            <Toast id="middleright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('middleRight')} show={toasts['middleRight'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed bottom-0 start-0 p-3">
                            <Toast id="bottomleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('bottomLeft')} show={toasts['bottomLeft'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
                            <Toast id="bottomcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('bottomCenter')} show={toasts['bottomCenter'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed bottom-0 end-0 p-3">
                            <Toast id="bottomright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => handleToasts('bottomRight')} show={toasts['bottomRight'] || false} delay={3000} autohide>
                                <Toast.Header className="toast-header bg-primary text-fixed-white">
                                    <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                    <strong className="me-auto">azira</strong>
                                </Toast.Header>
                                <Toast.Body className="toast-body">
                                    Your,toast message here.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Aligning Toast Using Flexbox" className="" reactCode={toasts10} customCardHeaderClass="justify-content-between">
                        <div className="bd-example bg-light bd-example-toasts d-flex p-0 px-3">
                            <div aria-live="polite" aria-atomic="true"
                                className="d-flex justify-content-center align-items-center w-100">
                                <Toast show={toasts['alignColor']} onClose={() => handleToasts('alignColor')} className="toast fade show shadow-lg">
                                    <Toast.Header className="text-default">
                                        <img src={favicon} alt="" className="bd-placeholder-img rounded me-2" />
                                        <strong className="me-auto">azira</strong>
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                                </Toast>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Toasts;
