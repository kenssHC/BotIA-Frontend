import React, { Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import photos13 from '../../../../assets/images/photos/13.jpg';
import files6 from '../../../../assets/images/media/files/6.jpg';
import files7 from '../../../../assets/images/media/files/7.jpg';
import files2 from '../../../../assets/images/media/files/2.jpg';
import file3 from '../../../../assets/images/media/files/3.jpg';
import file5 from '../../../../assets/images/media/files/5.jpg';
import file1 from '../../../../assets/images/media/files/1.jpg';
import file4 from '../../../../assets/images/media/files/4.jpg';
import file8 from '../../../../assets/images/media/files/8.jpg';
import Filesmanagerdetailes from './filemanagerdetailesdata';

const Filemangerdetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            {/* Row for main content */}
            <Row className="row-sm">
                {/* Main Image Section */}
                <Col xl={8} lg={12} md={12} sm={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="px-4 pt-4">
                            <Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}>
                                <img src={photos13} alt="img" className="cover-image rounded-3 w-100" />
                            </Link>
                        </Card.Body>
                    </Card>

                    {/* Swiper Image Gallery Section */}
                    <Card className="custom-card">
                        <Card.Body className="h-100">
                            <Swiper onSwiper={setThumbsSwiper} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false }} spaceBetween={20} slidesPerView={1} 
                            freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-wrapper" 
                            breakpoints={{
                              400: {
                                slidesPerView: 2,
                              },
                              500: {
                                slidesPerView: 3,
                              },
                              700: {
                                slidesPerView: 4,
                              },
                              992: {
                                slidesPerView: 3,
                              },
                              1400: {
                                slidesPerView: 4,
                              },
                            }}
                          >
                                {[files6, files7, files2, file3, file5, file1, file3, file4, file8].map((file, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="item">
                                            <div className="card border-0 mb-0">
                                                <Card className="custom-card overflow-hidden mb-0">
                                                    <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                                        <img className="w-100" src={file} alt="img" />
                                                    </Link>
                                                    <Card.Footer className="border">
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <h6 className="mb-0">{`File${index + 1}.jpg`}</h6>
                                                            </div>
                                                            <div>
                                                                <h6 className="text-muted mb-0">120 KB</h6>
                                                            </div>
                                                        </div>
                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>

                {/* File Details Section */}
                <Col xl={4} lg={12} md={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <h5 className="mb-3">File details :</h5>
                            <div className="">
                                <Row>
                                    <Col xl={12}>
                                        <div className="table-responsive">
                                            <table className="table mb-0 border-top table-bordered text-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">File-name</th>
                                                        <td>image.jpg</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">File-size</th>
                                                        <td>12.45 MB</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Uploaded Date</th>
                                                        <td>01-12-2020</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Uploaded By</th>
                                                        <td>Prityy Abodh</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Image Width</th>
                                                        <td>1000 px</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Image Height</th>
                                                        <td>600 px</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">File Format</th>
                                                        <td>JPG</td>
                                                    </tr>
                                                    <tr className="border-bottom">
                                                        <th scope="row">File Location</th>
                                                        <td>storage/photos/image.jpg</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Recent Files Section */}
                    <Card className="custom-card">
                        <Card.Body className="card-body">
                            <h5 className="mb-3">Recent Files</h5>
                            <Filesmanagerdetailes />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Filemangerdetails;
