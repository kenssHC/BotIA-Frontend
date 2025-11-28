import { Fragment, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import image1 from "../../../assets/images/media/media-40.jpg";
import image2 from "../../../assets/images/media/media-41.jpg";
import image3 from "../../../assets/images/media/media-42.jpg";
import image4 from "../../../assets/images/media/media-43.jpg";
import image5 from "../../../assets/images/media/media-44.jpg";
import image6 from "../../../assets/images/media/media-45.jpg";
import image7 from "../../../assets/images/media/media-21.jpg";
import image8 from "../../../assets/images/media/media-42.jpg";

const Gallerydata = () => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image1} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image2} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image3} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image4} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image5} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image6} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image7} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card border-0" data-gallery="gallery1">
                        <img src={image8} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: image1 }, { src: image2 }, { src: image3 }, { src: image4 }, { src: image5 }, { src: image6 }, { src: image7 }, { src: image8 }

                ]}
            />
        </Fragment>
    );
};
export default Gallerydata;