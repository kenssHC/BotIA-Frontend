import React, { Fragment, useState } from 'react';
import { Row, Col, Card, Image, Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Wishlistdata } from './wishlistdata';


const Wishlist = () => {
	const [wishlistData, setWishlistData] = useState(Wishlistdata);

	const handleRemove = (id) => {
		setWishlistData(prevData => prevData.filter(item => item.id !== id));
	};

	return (
		<Fragment>
			{/* <!-- Row OPEN --> */}
			<Row className="">
				<Col lg={12} xl={12} className="">
					<Row className="">
						{wishlistData.map((idx) => (
							<Col xxl={3} xl={6} lg={6} md={6} className="alert wishlist-card" key={idx.id}>
								<Card className="item-card">
									<Card.Body className="pb-0">
										<div className="text-center zoom">
											<Link to={`${import.meta.env.BASE_URL}ecommerce/products`}>
												<Image src={idx.image} className="w-100 rounded-2" alt="img" />
											</Link>
										</div>
										<Card.Body className="px-0 pb-3">
											<Row>
												<div className="col-9">
													<Card.Title>
														<div>
															<Link to="#"><i className="fa fa-star text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star-half text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star-o text-warning fs-16"></i></Link>
															<Link to="#">{idx.reviews}</Link>
														</div>
														<Link to="#" className="shop-title fs-15">{idx.title}</Link>
													</Card.Title>
												</div>
												<div className="col-3">
													<div className="cardprice-2">
														<span className="type--strikethrough number-font">${idx.priceOriginal}</span><br />
														<span className="number-font">${idx.priceDiscounted}</span>
													</div>
												</div>
												<div>
													<p className="shop-description fs-13 text-muted mt-2 mb-0">
														Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.
													</p>
												</div>
											</Row>
										</Card.Body>
									</Card.Body>
									<Card.Footer className="text-center">
										<div className="text-center px-2">
											<Link to={`${import.meta.env.BASE_URL}ecommerce/cart`} className="btn btn-md btn-primary mb-2 ms-2 w-45">
												<i className="fe fe-shopping-cart me-2 d-inline-flex"></i>Add to Cart
											</Link>
											<Button variant='light' size='md' className="mb-2 ms-2 w-45" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove(idx.id)}>
												<span className="me-2 fs-14">Remove</span>
												<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#495057"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
											</Button>
										</div>
									</Card.Footer>
								</Card>
							</Col>
						))}
					</Row>
					<div className="d-flex justify-content-end">
						<Pagination as="ul" className="pagination mb-5">
							<Pagination.Item className="disabled page-item" >
								‹
							</Pagination.Item>
							<li className="active page-item">
								<Link to="#" className="page-link" >1</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link" >2</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link" >3</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link" >4</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link" >5</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link" >›</Link>
							</li>
						</Pagination>
					</div>
				</Col>
			</Row>

			{/* <!-- Row-END --> */}
		</Fragment>
	);
};

export default Wishlist;
