import {  Fragment } from 'react';
import {  Col, Row } from 'react-bootstrap';
import meadia1 from "../../../assets/images/media/media-48.jpg";
import media2 from "../../../assets/images/media/media-49.jpg";
import media3 from "../../../assets/images/media/media-50.jpg";
import media4 from "../../../assets/images/media/media-53.jpg";
import media5 from "../../../assets/images/media/media-55.jpg";
import media6 from "../../../assets/images/media/media-54.jpg";
import media7 from "../../../assets/images/media/media-56.jpg";
import media8 from "../../../assets/images/media/media-55.jpg";
import media9 from "../../../assets/images/media/media-51.jpg";
import media10 from "../../../assets/images/media/media-52.jpg";
import { Image11, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Imagesfigures = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Responsive image" className="" reactCode={Image11} customCardHeaderClass="justify-content-between">
                        <p className="card-title mb-3 d-flex">Use <code className='me-1'> .img-fluid </code>class to the img tag to get responsive image.</p>
                        <div className="text-center">
                            <img src={meadia1} className="img-fluid" alt="..." />
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Image With Radius" className="" reactCode={Image2} customCardHeaderClass="justify-content-between">
                        <p className="card-title mb-3 d-flex">Use <code className='me-1'>.rounded</code> class along with <code className='me-1'>.img-fluid</code> to get border radius.</p>
                        <div className="text-center">
                            <img src={media2} className="img-fluid rounded" alt="..." />
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Rounded Image" className="" reactCode={Image3} customCardHeaderClass="justify-content-between">
                        <p className="card-title mb-3 d-flex me-1">Use <code className='me-1'>.rounded-pill</code> class to <code className='me-1'>img</code> tag to get rounded image.</p>
                        <div className="text-center">
                            <img src={media3} className="img-fluid rounded-pill" alt="..." />
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title=" Image Left Align" className="" reactCode={Image4} customCardHeaderClass="justify-content-between">
                        <img className="rounded float-start" src={media4} alt="..." />
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Image Center Align" className="" reactCode={Image5} customCardHeaderClass="justify-content-between">
                        <img className="rounded mx-auto d-block" src={media5} alt="..." />
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Image Right Align" className="" reactCode={Image6} customCardHeaderClass="justify-content-between">
                        <img className="rounded float-end" src={media6} alt="..." />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Figures" className="" reactCode={Image7} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex justify-content-between gap-2">
                        <figure className="figure">
                            <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={media7} alt="..." />
                            <figcaption className="figure-caption mt-2">A caption for the above image.
                            </figcaption>
                        </figure>
                        <figure className="figure float-end">
                            <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={media8} alt="..." />
                            <figcaption className="figure-caption text-end mt-2">A caption for the above image.
                            </figcaption>
                        </figure>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Image Thumbnail" className="" reactCode={Image8} customCardHeaderClass="justify-content-between">
                        <p className="card-title mb-3">Use <code className='me-1'> .img-thumbnail </code>to give an image a rounded 1px border.</p>
                        <div className="text-center">
                            <img src={media9} className="img-thumbnail" alt="..." />
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Rounded Thumbnail" className="" reactCode={Image9} customCardHeaderClass="justify-content-between">
                        <p className="card-title mb-3">Use <code className='me-1'> .rounded-pill </code>along with <code > .img-thummbnail </code> to get radius.</p>
                        <div className="text-center">
                            <img src={media10} className="img-thumbnail rounded-pill" alt="..." />
                        </div>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Imagesfigures;
