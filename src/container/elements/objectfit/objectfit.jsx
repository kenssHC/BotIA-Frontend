import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import media28 from "../../../assets/images/media/media-28.jpg";
import video1 from "../../../assets/video/1.mp4";
import { Objectfit1, Objectfit10, Objectfit11, Objectfit12, Objectfit13, Objectfit14, Objectfit15, Objectfit2, Objectfit3, Objectfit4, Objectfit5, Objectfit6, Objectfit7, Objectfit8, Objectfit9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';


const Objectfit = () => {
    return (
        <Fragment> 
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain" className="" reactCode={Objectfit1} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Cover" className="" reactCode={Objectfit2} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-cover border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Fill" className="" reactCode={Objectfit3} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-fill border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Scale Down" className="" reactCode={Objectfit4} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-scale border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit None" className="" reactCode={Objectfit5} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-none border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain (SM - responsive)" className="" reactCode={Objectfit6} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-sm-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain (MD - responsive)" className="" reactCode={Objectfit7} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-md-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain (LG - responsive)" className="" reactCode={Objectfit8} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-lg-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain (XL - responsive)" className="" reactCode={Objectfit9} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-xl-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain (XXL - responsive)" className="" reactCode={Objectfit10} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <img src={media28} className="object-fit-xxl-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Contain Video" className="" reactCode={Objectfit11} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <video src={video1} className="object-fit-contain rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Cover Video" className="" reactCode={Objectfit12} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <video src={video1} className="object-fit-cover rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title=" Object Fit Fill Video" className="" reactCode={Objectfit13} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <video src={video1} className="object-fit-fill rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit Scale Video" className="" reactCode={Objectfit14} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <video src={video1} className="object-fit-scale rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Object Fit None Video" className="" reactCode={Objectfit15} customCardHeaderClass="justify-content-between" customCardBodyClass="object-fit-container">
                        <video src={video1} className="object-fit-none rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Objectfit;



