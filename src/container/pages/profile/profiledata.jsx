import { Fragment, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Col, Row } from 'react-bootstrap';// gallery
import { Link } from 'react-router-dom';

import image21 from '../../../assets/images/media/media-67.jpg';
import image22 from '../../../assets/images/media/media-68.jpg';
import image23 from '../../../assets/images/media/media-69.jpg';
import image24 from '../../../assets/images/media/media-70.jpg';
import image25 from '../../../assets/images/media/media-71.jpg';
import image26 from '../../../assets/images/media/media-72.jpg';
import image27 from '../../../assets/images/media/media-73.jpg';
import image28 from '../../../assets/images/media/media-68.jpg';
import image29 from '../../../assets/images/media/media-69.jpg';
import image30 from '../../../assets/images/media/media-70.jpg';
import image31 from '../../../assets/images/media/media-71.jpg';
import image12 from '../../../assets/images/faces/13.jpg';
import image15 from '../../../assets/images/faces/6.jpg';
import image16 from '../../../assets/images/faces/4.jpg';
import image17 from '../../../assets/images/faces/5.jpg';
import image18 from '../../../assets/images/faces/3.jpg';
import image19 from '../../../assets/images/faces/8.jpg';
import image20 from '../../../assets/images/faces/9.jpg';
import image33 from '../../../assets/images/faces/12.jpg';


const Profilegallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Row id="lightgallery" className="list-unstyled mb-0">
        <Col md={6} lg={3} >
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image21} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image22} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image23} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image24} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image25} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image26} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image27} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col md={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image28} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image29} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image30} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col sm={6} lg={3}>
          <Link to="#" className="glightbox card" data-gallery="gallery1">
            <img src={image31} alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: image21 }, { src: image22 }, { src: image23 }, { src: image24 }, { src: image25 }, { src: image26 }, { src: image27 }, { src: image28 }, { src: image29 },{ src: image30 }, { src: image31 }]}
      />
    </Fragment>
  );
};
export default Profilegallery;

//SOCIAL
export const Social = [
    { id: 1, iconClass: 'ion-logo-github', bgColorClass: 'bg-primary-transparent', textColorClass: 'text-primary', platform: 'Github', link: 'github.com/spruko' },
    { id: 2, iconClass: 'ri-twitter-x-line', bgColorClass: 'bg-success-transparent', textColorClass: 'text-success', platform: 'Twitter', link: 'twitter.com/spruko.me' },
    { id: 3, iconClass: 'ion-logo-linkedin', bgColorClass: 'bg-info-transparent', textColorClass: 'text-info', platform: 'Linkedin', link: 'linkedin.com/in/spruko' },
    { id: 4, iconClass: 'ion-md-link', bgColorClass: 'bg-danger-transparent', textColorClass: 'text-danger', platform: 'My Portfolio', link: 'spruko.com/' }
]
//Friends
export const Friends = [
    { id: 1, imageSrc: image15, name: 'James Thomas', role: 'Web designer', },
    { id: 2, imageSrc: image16, name: 'George Clooney', role: 'Web designer', },
    { id: 3, imageSrc: image17, name: 'Robert Downey Jr.', role: 'Web designer', },
    { id: 4, imageSrc: image18, name: 'Emma Watson', role: 'Web designer', },
    { id: 5, imageSrc: image19, name: 'Mila Kunis', role: 'Web designer', },
    { id: 6, imageSrc: image20, name: 'Ryan Gossling', role: 'Web designer', }
]
//Followers 
export const Followers = [
    { id: 1, imageSrc: image33, name: 'John Paige', email: 'johan@gmail.com', initials: '', bgColor: '', followHandler: () => { } },
    { id: 2, imageSrc: '', name: 'Lillian Quinn', email: 'lilliangore', initials: 'LQ', bgColor: 'bg-pink', followHandler: () => { } },
    { id: 3, imageSrc: '', name: 'Irene Harris', email: 'ireneharris@gmail.com', initials: 'IH', bgColor: 'bg-primary', followHandler: () => { } },
    { id: 4, imageSrc: image16, name: 'Saureen Bgist', email: 'harryuqt', initials: '', bgColor: '', followHandler: () => { } },
    { id: 5, imageSrc: image12, name: 'Maureen Biologist', email: 'harryuqt', initials: '', bgColor: '', followHandler: () => { } },
    { id: 6, imageSrc: '', name: "Paddy O'Furniture.", email: 'ireneharris@gmail.com', initials: 'PF', bgColor: 'bg-info', followHandler: () => { } }
]