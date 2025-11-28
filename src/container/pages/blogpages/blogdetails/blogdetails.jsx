import React, { Fragment, useState } from 'react';
import { Col, Row, Card, Image, Badge, ButtonGroup, Button, Form, InputGroup, ListGroup } from 'react-bootstrap';
import image1 from '../../../../assets/images/photos/13.jpg';
import image2 from '../../../../assets/images/faces/2.jpg';
import image6 from '../../../../assets/images/faces/6.jpg';
import image7 from '../../../../assets/images/media/media-68.jpg';
import image8 from '../../../../assets/images/photos/11.jpg';
import image9 from '../../../../assets/images/media/media-69.jpg';
import { Link } from 'react-router-dom';
import media67 from '../../../../assets/images/media/media-67.jpg';
import Blogdetailes, { Comments } from './blogdetailsdata';

const Blogdetails = () => {
	const [index, setIndex] = useState(-1);
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="">
				<Col xxl={9} xl={12} lg={12} md={12} className="">
					<Card className=" overflow-hidden">
						<div className="item7-card-img px-4 pt-4">
							<Image src={image1} rounded className="cover-image  w-100" />
						</div>
						<Card.Body className="">
							<Link to="#" className="mt-4"><h5 className="fw-semibold text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5></Link>
							<p className="">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
							<p className="mb-0">but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example</p>
						</Card.Body>
						<Card.Footer className=" pb-2 pt-2">
							<div className="item7-card-desc d-md-flex">
								<div className="d-flex align-items-center mt-0">
									<Image src={image2} className="avatar brround avatar-md me-3" alt="avatar-img" />
									<div>
										<Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-dark fw-bold">Lilly Potter</Link>
										<small className="d-block text-muted">1 day ago</small>
									</div>
								</div>
								<div className="ms-auto my-auto d-flex align-items-center justify-content-end">
									<Link to="#" className="me-3 d-flex align-items-center"><span className="fe fe-calendar text-muted me-2 fs-17"></span><div className="mt-0 mt-0 text-dark">Jan-18-2020</div></Link>
									<Link to="#" className="me-0 d-flex align-items-center" ><span className="fe fe-message-square text-muted me-2 fs-17"></span><div className="mt-0 mt-0 text-dark">12 Comments</div></Link>
								</div>
							</div>
						</Card.Footer>
					</Card>
					<div className="">
						<Card className="">
							<Card.Header className="">
								<Card.Title className="">Comments</Card.Title>
							</Card.Header>
							<Card.Body className="">
								{Comments.map((idx) => (
									<div className="d-sm-flex mt-0 p-3 sub-review-section border border-bottom-0 br-bl-0 br-br-0" key={idx.id}>
										<div className="d-flex me-3">
											<Link to="#" ><Image src={idx.image} roundedCircle className="avatar avatar-lg " alt="64x64" /> </Link>
										</div>
										<div className="media-body">
											<h5 className="mt-0 mb-1 fw-semibold">{idx.name}
												<span className="fs-14 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="verified"><i className="fe fe-check-circle text-success fs-12"></i></span>
												<span className="fs-14 ms-2"> {idx.rating} <i className="fa fa-star text-warning"></i></span>
											</h5>
											<p className="font-13  mb-2 mt-2">
												{idx.text}
											</p>
											<Link to="#" className="me-2 mt-1"><Badge bg="primary" className=""><span className="me-1 fe fe-thumbs-up fs-11 d-inline-flex"></span>Helpful</Badge></Link>
											<Link to="#" className="me-2 mt-1"><Badge bg="success" className=""><span className="me-1 fe fe-edit-2 fs-11 d-inline-flex"></span>Comment</Badge></Link>
											<Link to="#" className="me-2 mt-1"><Badge bg="success" className=""><span className="me-1 fe fe-alert-triangle fs-11 d-inline-flex"></span>Report</Badge></Link>
											<ButtonGroup size='sm' className="= mb-1 ms-auto float-sm-end mt-1">
												<Button variant='light' className="me-2" ><span className="fe fe-thumbs-up fs-16"></span></Button>
												<Button variant='light' className="" ><span className="fe fe-thumbs-down fs-16"></span></Button>
											</ButtonGroup>
										</div>
									</div>
								))}
							</Card.Body>
						</Card>
					</div>
					<div className="">
						<Card className="">
							<Card.Header className="border-bottom-0">
								<Card.Title className="">Add a Comment</Card.Title>
							</Card.Header>
							<Card.Body className="">
								<div className="mt-2">
									<Form.Group className="mb-3">
										<Form.Control type="text" className="" id="name1" placeholder="Your Name" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control type="email" className="" id="email" placeholder="Email Address" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control as="textarea" className="" name="example-textarea-input" rows="6" placeholder="Write Review"></Form.Control>
									</Form.Group>
									<Button variant='primary' className="">Send Reply</Button>
								</div>
							</Card.Body>
						</Card>
					</div>
				</Col>
				<Col xxl={3} xl={12} lg={12} md={12} className="">
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom mb-1">
							<Card.Title className="">Search</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<div className="text-center">
								<InputGroup className="">
									<Form.Control type="text" className="text-truncate" placeholder="Enter email..." aria-label="Search folder....." />
									<Button variant='primary' className="" type="button">Sign in</Button>
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title className="">About Author</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<div>
								<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Image src={image8} className="card-img-top w-100 w-100" alt="" /></Link>
								<div className="rounded-5 pt-3 px-0 text-justify">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla deleniti voluptas officia accusamus  magnam ullam inventore Lorem ipsum dolor, sit amet consectetur dolorem quibusdam?.
									</p>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title className="mb-1">Popular posts</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<ListGroup as="ul" className="l mb-0">
						
								<ListGroup.Item as="li" className="d-flex border-0 px-0">
									<Image src={media67} className="avatar rounded-2 avatar-xl me-3 my-auto" alt="avatar-img" />
									<div className="">
										<span className="d-block">Tourism</span>
										<Link to="#" className="text-default  fs-12 fw-semibold white-space-nowrap">Explore tourism by visitinig places.</Link>
										<small className="d-block text-muted">February 2,2021</small>
									</div>
								</ListGroup.Item>
								<ListGroup.Item as="li" className="d-flex border-0 px-0">
									<Image src={image7} className="avatar rounded-2 avatar-xl me-3 my-auto" alt="avatar-img" />
									<div className="">
										<span className="d-block">Beautician</span>
										<Link to="#" className="text-default  fs-12 fw-semibold white-space-nowrap">Beautification courses are available.</Link>
										<small className="d-block text-muted">August 14,2021</small>
									</div>
								</ListGroup.Item>
								<ListGroup.Item as="li" className="d-flex pb-3 border-0 px-0">
									<Image src={image9} className="avatar rounded-2 avatar-xl me-3 my-auto" alt="avatar-img" />
									<div className="">
										<span className="d-block">Music</span>
										<Link to="#" className="text-default fs-12 fw-semibold white-space-nowrap">Music in a peaceful way </Link>
										<small className="d-block text-muted">November 30,2021</small>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title className="mb-1">Categories</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<div><div className="tags">
								<Link to="#" className="tag me-1">Life style</Link>
								<Link to="#" className="tag me-1">Health</Link>
								<Link to="#" className="tag me-1">Tourism</Link>
								<Link to="#" className="tag me-1">Web designing</Link>
								<Link to="#" className="tag me-1">Medical</Link>
								<Link to="#" className="tag me-1">Hotels</Link>
								<Link to="#" className="tag me-1">Real estate</Link>
								<Link to="#" className="tag me-1">Business</Link>
								<Link to="#" className="tag me-1">Shopping</Link>
								<Link to="#" className="tag me-1">Marketing</Link>
								<Link to="#" className="tag">Housing</Link>
							</div></div>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title className="mb-1">Gallery</Card.Title>
						</Card.Header>
						<Card.Body>
							<Blogdetailes />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!--End Row--> */}
		</Fragment>
	);
};
export default Blogdetails;