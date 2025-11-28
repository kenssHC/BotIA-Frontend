import { Fragment, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Col, Row } from 'react-bootstrap';// gallery
import { Link } from 'react-router-dom';

import image10 from '../../../../assets/images/photos/1.jpg';
import image11 from '../../../../assets/images/photos/8.jpg';
import image12 from '../../../../assets/images/photos/3.jpg';
import image13 from '../../../../assets/images/photos/4.jpg';
import image14 from '../../../../assets/images/photos/5.jpg';
import image15 from '../../../../assets/images/photos/6.jpg';
import image16 from '../../../../assets/images/photos/7.jpg';
import image17 from '../../../../assets/images/photos/8.jpg';
import image18 from '../../../../assets/images/photos/9.jpg';
import image3 from '../../../../assets/images/faces/1.jpg';
import image4 from '../../../../assets/images/faces/3.jpg';
import image5 from '../../../../assets/images/faces/5.jpg';
import image6 from '../../../../assets/images/faces/6.jpg';


const Blogdetailes = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Row id="lightgallery" className="list-unstyled mb-0">
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image10} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image11} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image12} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image13} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image14} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image15} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image16} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image17} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={4}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image18} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: image10 }, { src: image11 }, { src: image12 }, { src: image13 }, { src: image14 }, { src: image15 }, { src: image16 }, { src: image17 }, { src: image18 }]}
      />
    </Fragment>
  );
};
export default Blogdetailes;


//Comments
export const Comments = [
  {
    id: 1,
    image: image3,
    name: 'Joanne Scott',
    verified: true,
    rating: '4.5',
    text: 'Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.',
  },
  {
    id: 2,
    image: image4,
    name: 'Rose Slater',
    verified: true,
    rating: '4',
    text: 'Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.',
  },
  {
    id: 3,
    image: image5,
    name: 'Edward',
    verified: true,
    rating: '4.5',
    text: 'Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.',
  },
  {
    id: 4,
    image: image6,
    name: 'Camila cabello',
    verified: true,
    rating: '4',
    text: 'Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.',
  }
]










