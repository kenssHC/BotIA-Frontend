
import React, { Fragment } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Category, Productdata1 } from './productdata';

const Products = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col md={3} className=" mb-3 mb-md-0">
					<Card className="">
						<Card.Title className="m-0 p-3 bg-light border-bottom">Category</Card.Title>
						<div className="py-2 px-3">
							{Category.map((idx) => (
								<label className="p-1 mt-2 d-flex align-items-center" key={idx.id}>
									<span className="checkbox">
										<span className="check-box mb-0">
											<span className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" defaultChecked={idx.checked} /></span>
										</span>
									</span>
									<span className="ms-2">
										{idx.label}
									</span>
								</label>
							))}
						</div>
						<Card.Title className="m-0 p-3 bg-light border-bottom border-top">Price</Card.Title>
						<div className="p-3 d-flex align-items-center">
							<div className="w-50">
								<Form.Control placeholder="From" className="l rounded-0" />
							</div>
							<span className="h4 m-0 font-weight-normal px-2">-</span>
							<div className="w-50">
								<Form.Control placeholder="Up to" className=" rounded-0" />
							</div>
						</div>
						<Card.Title className="m-0 p-3 bg-light border-bottom border-top">Ratings</Card.Title>
						<div className="py-2 px-3">
							<label className="p-1 mt-2 d-flex align-items-center">
								<span className="check-box mb-0">
									<span className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" defaultChecked /></span>
								</span>
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</label>
							<label className="p-1 mt-2 d-flex align-items-center">
								<span className="check-box mb-0">
									<span className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" defaultChecked /></span>
								</span>
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</label>
							<label className="p-1 mt-2 d-flex align-items-center">
								<span className="check-box mb-0">
									<span className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" defaultChecked /></span>
								</span>
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</label>
							<label className="p-1 mt-2 d-flex align-items-center">
								<span className="checkbox mb-0">
									<span className="check-box">
										<span className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" /></span>
									</span>
								</span>
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</label>
							<label className="p-1 mt-2 d-flex align-items-center">
								<span className="checkbox mb-0">
									<span className="check-box">
										<span className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" /></span>
									</span>
								</span>
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</label>
						</div>
						<div className="px-3 py-2 border-top">
							<Button variant="danger" className="btn-block">FILTER</Button >
						</div>
					</Card>
				</Col>
				<Col md={9} className="">
					<Card className="">
						<Card.Body className="p-2">
							<InputGroup className="input-group">
								<Form.Control type="text" className="ftext-truncate" placeholder="Search ..." aria-label="Search folder....." />
								<Button variant="primary" className="" type="Button">Search</Button >
							</InputGroup>
						</Card.Body>
					</Card>
					<Row className="row-sm">
						{Productdata1.map((idx) => (
							<Col sm={6} md={6} lg={6} xl={4} className="col-12" key={idx.id}>
								<Card className="product-card card">
									<Card.Body className="h-100">
										<div className="d-flex">
											<span className="text-secondary small text-uppercase">{idx.category}</span>
											<span className="ms-auto"><i className={idx.isFavorite ? "fa fa-heart text-danger" : "far fa-heart"}></i>
											</span>
										</div>
										<h3 className="h6 mb-2 font-weight-bold text-uppercase">{idx.title}</h3>
										<div className="d-flex">
											<h4 className="h5 w-50 font-weight-bold text-danger">{idx.price} <span className="text-secondary font-weight-normal tx-13 ms-1 prev-price">{idx.prevPrice}</span></h4>
											<span className="tx-15 ms-auto">
												<i className="ion ion-md-star text-warning me-1"></i>
												<i className="ion ion-md-star text-warning me-1"></i>
												<i className="ion ion-md-star text-warning me-1"></i>
												<i className="ion ion-md-star-half text-warning me-1"></i>
												<i className="ion ion-md-star-outline text-warning"></i>
											</span>
										</div>
										<Image src={idx.imageSrc} className="w-100 mt-2 mb-3 rounded-2" alt="product-image" />
										<div className="d-grid">
											<Link variant='success' className="add-to-cart btn btn-success  btn-block my-1" to={`${import.meta.env.BASE_URL}ecommerce/cart`}>ADD TO CART</Link>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row >
			{/* <!-- row closed -->           */}
		</Fragment >
	);
};

export default Products;
