import React, { Fragment } from 'react';
import { Row, Col, Card, Image, ListGroup, Pagination } from 'react-bootstrap';
import image1 from '../../../../assets/images/photos/13.jpg';
import image2 from '../../../../assets/images/photos/11.jpg';
import image3 from '../../../../assets/images/faces/9.jpg';
import image9 from '../../../../assets/images/photos/2.jpg';
import image10 from '../../../../assets/images/photos/1.jpg';
import image11 from '../../../../assets/images/photos/1.jpg';
import image12 from '../../../../assets/images/photos/9.jpg';
import image13 from '../../../../assets/images/faces/7.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import { Link } from 'react-router-dom';
import { Blogdata1, Blogdata2 } from './blogdata';

const Blog = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="">
				<Col xxl={6} xl={12} lg={12} md={12} className="">
					<Card className=" custom-card">
						<Image src={image1} className="card-img-top" alt="..." />
						<Card.Body className="">
							<h5 className="fw-semibold">Best Place To visit For a Holiday idea of denouncing pleasure?</h5>
							<p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
						</Card.Body>
						<Card.Footer className="">
							<div className="item7-card-desc d-sm-flex mt-0">
								<Link to="#" className="d-flex align-items-center"><span className="fe fe-user text-muted me-2 fs-17"></span><div className="mt-0 mt-0  fw-semibold text-muted">Anna Ogden</div></Link>
								<div className="d-flex ms-auto">
									<Link to="#" className="d-flex me-3 align-items-center"><span className="fe fe-calendar text-muted me-2 fs-17"></span><div className="mt-0 mt-0  fw-semibold text-muted">Jan-18-2020</div></Link>
									<Link to="#" className="me-0 d-flex align-items-center" ><span className="fe fe-message-square text-muted me-2 fs-17"></span><div className="mt-0 mt-0  fw-semibold text-muted">12 Comments</div></Link>
								</div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6} className="">
					<Card className=" custom-card card-img-top-1  border-0">
						<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Image src={image2} rounded className="card-img-top w-100 w-100  border-0" alt="" /></Link>
						<Card.Body className=" pb-0">
							<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Card.Title className="">10 Ways To Immediately Start Selling Products !</Card.Title></Link>
							<p className="mb-2">Those who do not know how  pursues or desires. To take a trivial example  pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-buil .the great explorer of the truth, the master-buil</p>
						</Card.Body>
						<div className="item7-card-desc d-flex p-3 align-items-center justify-content-center border-top">
							<div className="avatar avatar-md">
								<Image src={face2} alt="avatar" />
							</div>
							<div className="main-contact-body">
								<h6>Jiggel mossin</h6>
							</div>
							<div className="ms-auto">
								<Link to="#" className="me-0 d-flex" ><span className="phone fw-semibold text-muted"><span className="fe fe-calendar text-muted me-2 fs-16 d-inline-flex"></span>Aug 01,2021</span></Link >
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6} className="">
					<Card className="">
						<Card.Header className=" pb-0">
							<Card.Title className="">Latest Posts</Card.Title>
						</Card.Header>
						<Card.Body className="pt-1">
							<div className="list-catergory1">
								<div className="item-list">
									<ListGroup as="ul" className=" mb-0">
										{Blogdata1.map((idx) => (
											<ListGroup.Item as="li" className=" d-flex " key={idx.id}>
												<Image src={idx.image} rounded className="avatar rounded-2 avatar-xl me-3 my-auto" alt="avatar-img" />
												<div className="my-auto">
													<span className="d-block h6 text-dark">{idx.category}</span>
													<Link to="#" className="text-default ">{idx.title}</Link>
													<small className="d-block text-muted">{idx.timeAgo}</small>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" ">
				<Col xxl={3} xl={6} lg={6} sm={6} className="">
					<Card className=" custom-card card-img-top-1">
						<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Image src={image9} className="card-img-top w-100 w-100" alt="" /></Link >
						<Card.Body className=" pb-0">
							<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Card.Title className="">How To Become Better With Building In 1 Month !</Card.Title></Link >
							<Card.Text className=" mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
						</Card.Body>
						<div className="item7-card-desc d-flex p-3 align-items-center justify-content-center border-top">
							<div className="avatar avatar-md">
								<Image src={face2} alt="avatar" />
							</div>
							<div className="main-contact-body">
								<h6>Abigail John</h6>
							</div>
							<div className="ms-auto">
								<Link to="#" className="me-0 d-flex" >
									<span className="phone fw-semibold text-muted"><span className="fe fe-calendar text-muted me-2 fs-16 d-inline-flex"></span>Aug 24,2021</span>
								</Link >
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6} className="">
					<Card className=" custom-card card-img-top-1">
						<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Image src={image11} className="card-img-top w-100 " alt="" /></Link >
						<Card.Body className=" pb-0">
							<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Card.Title className="">10 Ways To Immediately Start Selling Products !</Card.Title></Link >
							<Card.Text className="= mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
						</Card.Body>
						<div className="item7-card-desc d-flex p-3 align-items-center justify-content-center border-top">
							<div className="avatar avatar-md">
								<Image src={face9} alt="avatar" />
							</div>
							<div className="main-contact-body">
								<h6>Jiggel mossin</h6>
							</div>
							<div className="ms-auto">
								<Link to="#" className="me-0 d-flex" ><span className="phone fw-semibold text-muted"><span className="fe fe-calendar text-muted me-2 fs-16 d-inline-flex"></span>Aug 01,2021</span></Link >
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6} className="">
					<Card className=" custom-card card-img-top-1">
						<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Image src={image12} className="card-img-top w-100 " alt="" /></Link >
						<Card.Body className=" pb-0">
							<Link to={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`}><Card.Title className="">3 Easy Ways To Make Your mobile Faster & Even !</Card.Title></Link >
							<Card.Text className=" mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
						</Card.Body>
						<div className="item7-card-desc d-flex p-3 align-items-center justify-content-center border-top">
							<div className="avatar avatar-md">
								<Image src={face7} alt="avatar" />
							</div>
							<div className="main-contact-body">
								<h6>Raven Chanan</h6>
							</div>
							<div className="ms-auto">
								<Link to="#" className="me-0 d-flex" ><span className="phone fw-semibold text-muted"><span className="fe fe-calendar text-muted me-2 fs-16 d-inline-flex"></span>Feb 19,2021</span></Link >
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={3} xl={6} lg={6} sm={6} className="">
					<Card className=" overflow-hidden">
						<Card.Header className=" pb-1">
							<Card.Title className=" mb-2">Blog AUthors</Card.Title>
						</Card.Header>
						<Card.Body className="p-0 customers mt-1">
							<ListGroup variant='flush' className=" list-lg-group ">
								{Blogdata2.map((idx) => (
									<Link to="#" key={idx.id} >
										<ListGroup.Item className="">
											<div className="media mt-0">
												<Image src={idx.image} roundedCircle className="avatar avatar-lg  me-3 my-auto" alt="Image description" />
												<div className="media-body">
													<div className="d-flex align-items-center">
														<div className="mt-0">
															<h5 className="mb-1 fs-13 fw-semibold text-dark">{idx.name}</h5>
															<p className="mb-0 fs-13 text-muted">User ID:{idx.userId}</p>
														</div>
														<span className="ms-auto wd-45p fs-16 ">
															<span id="spark1" className="wd-100 p"></span>
															<span className="float-end badge ">
																<span className={`op-7 ${idx.badgeColor} fw-semibold`}>{idx.timeAgo} </span>
															</span>
														</span>
													</div>
												</div>
											</div>
										</ListGroup.Item>
									</Link >
								))}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}
			<div className="float-end mb-4">
				<nav aria-label="Page navigation" className="">
					<Pagination className="pagination mb-0">
						<Pagination.Item disabled >Prev</Pagination.Item>
						<Pagination.Item active >1</Pagination.Item>
						<Pagination.Item >2</Pagination.Item>
						<Pagination.Item >
							<i className="bi bi-three-dots"></i></Pagination.Item>
						<Pagination.Item >17</Pagination.Item>
						<Pagination.Item className="pagination-next" >next</Pagination.Item>
					</Pagination>
				</nav>
			</div>
		</Fragment>
	);
};
export default Blog;
