import { Fragment, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Col, Row } from 'react-bootstrap';// gallery
import { Link } from 'react-router-dom';

import media67 from '../../../../assets/images/media/media-67.jpg';
import media68 from '../../../../assets/images/media/media-68.jpg';
import media69 from '../../../../assets/images/media/media-69.jpg';
import media70 from '../../../../assets/images/media/media-70.jpg';
import media71 from '../../../../assets/images/media/media-71.jpg';
import media72 from '../../../../assets/images/media/media-72.jpg';
import media73 from '../../../../assets/images/media/media-73.jpg';
import media74 from '../../../../assets/images/media/media-74.jpg';

const Filesmanagerdetailes = () => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media67} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media68} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media69} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media70} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media71} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media72} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media73} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media74} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: media67 }, { src: media68 }, { src: media69 }, { src: media70 }, { src: media71 }, { src: media72 }, { src: media73 }, { src: media74 }

                ]}
            />
        </Fragment>
    );
};
export default Filesmanagerdetailes;







