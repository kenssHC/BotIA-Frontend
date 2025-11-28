import React, { Fragment, useState } from 'react';
import { Row, Col, Card, Image, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import image1 from '../../../assets/images/ecommerce/jpg/16.jpg';
import image2 from '../../../assets/images/ecommerce/jpg/17.jpg';
import image3 from '../../../assets/images/ecommerce/jpg/18.jpg';
import image4 from '../../../assets/images/ecommerce/jpg/19.jpg';
import image5 from '../../../assets/images/ecommerce/jpg/20.jpg';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation, Autoplay } from 'swiper/modules';
import { Productdetailsdata1 } from './productdetailesdata';


const Productdetails = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={12} className="">
					<Card className="">
						<Card.Body className=" h-100">
							<Row className=" row-sm ">
								<Col xl={4} lg={12} md={12} className="">
									<Swiper
										spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper }}
										modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper2 swiper swiper-preview mb-3" >
										<SwiperSlide>
											<img className="img-fluid rounded" src={image1} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image2} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image3} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image4} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image5} alt="img" />
										</SwiperSlide>

									</Swiper>
									<Swiper onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
										modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper swiper swiper-view pb-2">
										<SwiperSlide>
											<img className="img-fluid rounded" src={image1} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image2} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image3} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image4} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
											<img className="img-fluid rounded" src={image5} alt="img" />
										</SwiperSlide>
										<SwiperSlide>
										</SwiperSlide>
									</Swiper>
								</Col>
								<Col xl={8} lg={12} md={12} className="details mt-4 mt-xl-0">
									<h4 className="product-title">Fabric Sofa</h4>
									<div className="rating">
										<div className="stars">
											<span className="fa fa-star defaultChecked text-warning"></span>
											<span className="fa fa-star defaultChecked text-warning"></span>
											<span className="fa fa-star defaultChecked text-warning"></span>
											<span className="fa fa-star text-muted"></span>
											<span className="fa fa-star text-muted"></span>
										</div>
										<span className="review-no">41 reviews</span>
									</div>
									<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu
										laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim
										sociosqu delectus posuere.</p>
									<h6 className="price">current price: <span className="h3 ms-2">$180</span></h6>
									<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87
										votes)</strong></p>
									<div className="sizes d-flex">sizes:
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >small</Tooltip>}>
											<span className="size d-flex">
												<Form.Check className="">
													<Form.Check.Input className="" type="radio" name="Radio" id="Radio-sm" defaultChecked />
													<Form.Check.Label className="" htmlFor="Radio-sm"> S </Form.Check.Label>
												</Form.Check>
											</span>
										</OverlayTrigger>
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >medium</Tooltip>}>
											<span className="size d-flex" >
												<Form.Check className="">
													<Form.Check.Input className="" type="radio" name="Radio" id="Radio-sm1" />
													<Form.Check.Label className="" htmlFor="Radio-sm1"> M </Form.Check.Label>
												</Form.Check>
											</span>
										</OverlayTrigger>
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >large</Tooltip>}>
											<span className="size d-flex">
												<Form.Check className="">
													<Form.Check.Input className="" type="radio" name="Radio" id="Radio-sm2" />
													<Form.Check.Label className="" htmlFor="Radio-sm2"> L </Form.Check.Label>
												</Form.Check>
											</span>
										</OverlayTrigger>
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >extra-large</Tooltip>}>
											<span className="size d-flex">
												<Form.Check className="">
													<Form.Check.Input className="" type="radio" name="Radio" id="Radio-sm3" />
													<Form.Check.Label className="" htmlFor="Radio-sm3"> XL </Form.Check.Label>
												</Form.Check>
											</span>
										</OverlayTrigger>
									</div>
									<div className="colors d-flex me-3 mt-2">
										<span className="mt-2">colors:</span>
										<Row className=" gutters-xs mx-2">
											<Col className="p-0 mx-2">
												<label className="colorinput">
													<input name="color" type="radio" defaultValue="azure"
														className="colorinput-input" defaultChecked="" />
													<span className="colorinput-color bg-danger"></span>
												</label>
											</Col>
											<Col className="p-0 mx-2">
												<label className="colorinput">
													<input name="color" type="radio" defaultValue="indigo"
														className="colorinput-input" />
													<span className="colorinput-color bg-secondary"></span>
												</label>
											</Col>
											<Col className="p-0 mx-2">
												<label className="colorinput">
													<input name="color" type="radio" defaultValue="purple"
														className="colorinput-input" />
													<span className="colorinput-color bg-dark"></span>
												</label>
											</Col>
											<Col className="p-0 mx-2">
												<label className="colorinput">
													<input name="color" type="radio" defaultValue="pink"
														className="colorinput-input" />
													<span className="colorinput-color bg-pink"></span>
												</label>
											</Col>
										</Row>
									</div>
									<div className="d-flex  mt-2 mb-2">
										<div className="mt-2 product-title">Quantity:</div>
										<div className="d-flex ms-2">
											<ul className=" mb-0 qunatity-list list-unstyled">
												<li>
													<Form.Group className="">
														<Form.Select className="" data-trigger name="choices-single-default" id="choices-single-default">
															<option defaultValue="Choice 1">1</option>
															<option defaultValue="Choice 2">2</option>
															<option defaultValue="Choice 3">3</option>
															<option defaultValue="Choice 4">4</option>
														</Form.Select>
													</Form.Group>
												</li>
											</ul>
										</div>
									</div>
									<div className="action btn-list">
										<Link to={`${import.meta.env.BASE_URL}ecommerce/wishlist`} className="add-to-cart btn btn-danger">ADD TO WISHLIST</Link>
										<Link to={`${import.meta.env.BASE_URL}ecommerce/cart`} className="add-to-cart btn btn-success">ADD TO CART</Link>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="">
				{Productdetailsdata1.map((idx) => (
					<Col lg={3} className="" key={idx.id}>
						<Card className="item-card">
							<Card.Body className="pb-0 h-100">
								<div className="text-center">
									<Image src={idx.image} alt="img" className="img-fluid rounded-2" />
								</div>
								<Card.Body className="cardbody relative d-flex justify-content-between gap-1 flex-wrap">
									<div className="cardtitle">
										<span>{idx.category}</span>
										<Link>{idx.title}</Link>
									</div>
									<div className="cardprice ms-auto">
										<span className="type--strikethrough">$999</span>
										<span>$799</span>
									</div>
								</Card.Body>
							</Card.Body>
							<div className="text-center border-top p-3">
								<Link size='sm' to={`${import.meta.env.BASE_URL}ecommerce/products`} className="btn btn-primary my-1 btn-sm me-1"> View More</Link>
								<Link to={`${import.meta.env.BASE_URL}ecommerce/cart`} className="add-to-cart btn btn-success  btn-sm my-1 me-1">ADD TO CART</Link>
							</div>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				<Col md={12} xl={4} xs={12} sm={12} >
					<Card className="card">
						<div className="card-body">
							<div className="feature2">
								<i className="mdi mdi-airplane-takeoff bg-purple ht-50 wd-50 text-center rounded-circle text-white"></i>
							</div>
							<h5 className="mb-2 fs-16">Free Shipping</h5>
							<span className="fs-14 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span>
						</div>
					</Card>
				</Col>
				<Col md={12} xl={4} xs={12} sm={12} >
					<Card className="card">
						<div className="card-body">
							<div className="feature2">
								<i className="mdi mdi-headset bg-pink  ht-50 wd-50 text-center rounded-circle text-white"></i>
							</div>
							<h5 className="mb-2 fs-16">Customer Support</h5>
							<span className="fs-14 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span>
						</div>
					</Card>
				</Col>
				<Col md={12} xl={4} xs={12} sm={12} >
					<Card className="card">
						<div className="card-body">
							<div className="feature2">
								<i className="mdi mdi-refresh bg-teal ht-50 wd-50 text-center rounded-circle text-white"></i>
							</div>
							<div className="icon-return"></div>
							<h5 className="mb-2  fs-16">30 days money back</h5>
							<span className="fs-14 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span>
						</div>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed -->           */}
		</Fragment>
	);
};
export default Productdetails;
