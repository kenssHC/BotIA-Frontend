import React, { Fragment } from 'react';
import { Row, Card, Col, Image, Nav, Tab, Dropdown, Button } from 'react-bootstrap';
import image1 from '../../../assets/images/faces/6.jpg';
import image2 from '../../../assets/images/faces/6.jpg';
import image3 from '../../../assets/images/photos/12.jpg';
import image4 from '../../../assets/images/faces/12.jpg';
import image5 from '../../../assets/images/faces/12.jpg';
import image6 from '../../../assets/images/faces/13.jpg';
import image7 from '../../../assets/images/faces/13.jpg';
import image8 from '../../../assets/images/faces/14.jpg';
import image9 from '../../../assets/images/faces/6.jpg';
import image10 from '../../../assets/images/faces/12.jpg';
import image11 from '../../../assets/images/faces/12.jpg';
import image12 from '../../../assets/images/faces/13.jpg';
import image13 from '../../../assets/images/faces/13.jpg';
import image14 from '../../../assets/images/faces/15.jpg';
import { Link } from 'react-router-dom';
import Proiilegallery, { Followers, Friends, Social } from './profiledata';

const Profile = () => {
	return (
		<Fragment>
			<Row className=" row-sm">
				<Col lg={4} className="">
					<Card className=" mg-b-20">
						<Card.Body className="">
							<div className="ps-0">
								<div className="main-profile-overview">
									<div className="main-img-user profile-user">
										<Image src={image1} alt="" /><Link to="#" className="fas fa-camera profile-edit text-primary" ></Link>
									</div>
									<div className="d-flex justify-content-between mg-b-20">
										<div>
											<h5 className="main-profile-name">Petey Cruiser</h5>
											<p className="main-profile-name-text">Web Designer</p>
										</div>
									</div>
									<h6>Bio</h6>
									<div className="main-profile-bio">
										pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.. <Link >More</Link>
									</div>{/* <!-- main-profile-bio --> */}

									<div className="main-profile-work-list">
										<div className="media">
											<div className="media-logo bg-success-transparent text-success">
												<i className="icon ion-logo-whatsapp"></i>
											</div>
											<div className="media-body">
												<h6>Web Designer at <Link to="#" className="text-primary" >Spruko</Link></h6><span>2018 - present</span>
												<p>Past Work: Spruko, Inc.</p>
											</div>
										</div>
										<div className="media">
											<div className="media-logo bg-primary-transparent text-primary">
												<i className="icon ion-logo-buffer"></i>
											</div>
											<div className="media-body">
												<h6>Studied at <Link to="#" className="text-primary" >University</Link></h6><span>2004-2008</span>
												<p>Graduation: Bachelor of Science in Computer Science</p>
											</div>
										</div>
									</div>{/* <!-- main-profile-work-list --> */}

									<hr className="mg-y-30" />
									<label className="main-content-label fs-13 mg-b-20 fw-bold">SOCIAL</label>
									<div className="main-profile-social-list">
										{Social.map((idx) => (
											<div className="media" key={idx.id}>
												<div className={`media-icon ${idx.bgColorClass} ${idx.textColorClass}`}>
													<i className={`icon ${idx.iconClass}`}></i>
												</div>
												<div className="media-body">
													<span>{idx.platform}</span> <Link to="#" className="text-primary" >{idx.link}</Link>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={8} className="">
					<div className="main-content-body main-content-body-profile">
						<Tab.Container defaultActiveKey='first'>
							<div className="">
								<div className="wideget-user-tab">
									<div className="tab-menu-heading">
										<div className="tabs-menu1">
											<Nav as="ul" className="">
												<Nav.Item as="li" className="m-0">
													<Nav.Link eventKey="first" as="a" className="">Profile</Nav.Link>
												</Nav.Item>
												<Nav.Item as="li" className="m-0">
													<Nav.Link eventKey="second" as="a">Friends</Nav.Link>
												</Nav.Item>
												<Nav.Item as="li" className="m-0">
													<Nav.Link eventKey="third" as="a">Gallery</Nav.Link>
												</Nav.Item>
												<Nav.Item as="li" className="m-0">
													<Nav.Link eventKey="fourth" as="a">Followers</Nav.Link>
												</Nav.Item>
											</Nav>
										</div>
									</div>
								</div>
							</div>

							<Tab.Content className="">
								<Tab.Pane eventKey="first" className=" p-0 border-0  show" id="tab-51">
									<div id="profile-log-switch">
										<Card className="">
											<Card.Body className="">
												<Card.Header className="">
													<div className="media">
														<div className="media-user me-2">
															<div className="avatar avatar-lg"><Image src={image2} roundedCircle alt="" className="" /></div>
														</div>
														<div className="media-body">
															<h6 className="mb-0 mg-t-9">Petey Cruiser Pechon</h6><span className="text-primary">just now</span>
														</div>
													</div>
												</Card.Header>
												<p className="mg-t-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
												<div><Image src={image3} alt="img" className="w-100" /></div>
												<div className="media mg-t-15 profile-footer flex-wrap gap-2">
													<div className="media-user me-2">
														<div className="avatar-list-stacked">
															<span className="avatar avatar-rounded">
																<Image src={image4} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image5} />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image6} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image7} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image8} alt="img" />
															</span>
															<Link to="#" className="avatar bg-gray-600 avatar-rounded text-fixed-white offline" >
																+23
															</Link>
														</div>
													</div>
													<div className="media-body">
														<h6 className="mb-0 mg-t-10">28 people like your photo</h6>
													</div>
													<div className="ms-auto">
														<div className="dropdown show">
															<Link to="#" className="new me-1" ><i className="far fa-heart"></i></Link>
															<Link to="#" className="new me-1" ><i className="far fa-comment"></i></Link>
															<Link to="#" className="new" ><i className="far fa-share-square"></i></Link>
														</div>
													</div>
												</div>
											</Card.Body>
										</Card>
										<Card className=" mg-b-20">
											<Card.Body className="">
												<Card.Header className="">
													<div className="media">
														<div className="media-user me-2">
															<div className="avatar avatar-lg"><Image roundedCircle src={image9} alt="" className="rounded-circle" /></div>
														</div>
														<div className="media-body">
															<h6 className="mb-0 mg-t-9">Petey Cruiser Pechon</h6><span className="text-dark">Sep 22 2019, 10:14am</span>
														</div>
														<div className="ms-auto">
															<Dropdown>
																<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false" >
																	<i className="fe fe-more-vertical text-primary"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu className="dropdown-menu-end">
																	<Dropdown.Item className="dropdown-item" >Edit Post</Dropdown.Item>
																	<Dropdown.Item className="dropdown-item" >Delete Post</Dropdown.Item>
																	<Dropdown.Item className="dropdown-item" >Personal Settings</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</div>
													</div>
												</Card.Header>
												<p className="mg-t-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

												<div className="media mg-t-15 profile-footer flex-wrap gap-2">
													<div className="media-user me-2">
														<div className="avatar-list-stacked">
															<span className="avatar avatar-rounded">
																<Image src={image10} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image11} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image12} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image13} alt="img" />
															</span>
															<span className="avatar avatar-rounded">
																<Image src={image14} alt="img" />
															</span>
															<Link to="#" className="avatar bg-gray-600 avatar-rounded text-fixed-white offline" >
																+23
															</Link>
														</div>
													</div>
													<div className="media-body">
														<h6 className="mb-0 mg-t-10">28 people like your photo</h6>
													</div>
													<div className="ms-auto">
														<div className="dropdown show">
															<Link to="#" className="new me-1" ><i className="far fa-heart"></i></Link> 
															<Link to="#" className="new me-1" ><i className="far fa-comment"></i></Link> 
															<Link to="#" className="new" ><i className="far fa-share-square"></i></Link>
														</div>
													</div>
												</div>
											</Card.Body>
										</Card>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="second" className=" p-0 border-0" id="tab-61">
									<Row as="ul" className="widget-users  ps-0 mb-5">
										{Friends.map((idx) => (
											<Col xl={4} lg={6} md={6} sm={12} as="li" className="col-12" key={idx.id}>
												<Card className=" border p-0">
													<Link to={`${import.meta.env.BASE_URL}pages/profile`}>
														<Card.Body className="text-center">
															<span className="avatar avatar-xxl brround cover-image">
																<Image src={idx.imageSrc} alt="img" /></span>
															<h5 className="fs-16 mb-0 mt-3 text-dark fw-semibold">{idx.name}</h5>
															<span className="text-muted">{idx.role}</span>
														</Card.Body>
													</Link>
													<Card.Footer className=" text-center">
														<Row className="row user-social-detail">
															<Link to="#" className="social-profile me-4 rounded text-center bg-primary-transparent">
																<i className="fab fa-google"></i>
															</Link>
															<Link to="#" className="social-profile me-4 rounded text-center bg-primary-transparent">
																<i className="fab fa-facebook"></i>
															</Link>
															<Link to="#" className="social-profile  rounded text-center bg-primary-transparent">
																<i className='ri-twitter-x-line'></i>
															</Link>
														</Row>
													</Card.Footer>
												</Card>
											</Col>
										))}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third" className=" p-0 border-0" id="tab-71">
									<Row className=" img-gallery mb-5">
										<Proiilegallery />
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="fourth" className=" p-0 border-0" id="tab-81">
									<Row>
										{Followers.map(follower => (
											<Col xl={6} lg={12} md={12} key={follower.id}>
												<Card className="border p-0 over-flow-hidden">
													<Card.Body className="media media-xs overflow-visible">
														{follower.imageSrc ? <Image src={follower.imageSrc} className="avatar brround avatar-md me-3" alt="avatar-img" /> :
															<span className={`avatar cover-image avatar-md brround ${follower.bgColor} me-3`}>{follower.initials}</span>
														}
														<div className="media-body valign-middle">
															<Link to="#" className="fw-semibold text-dark">{follower.name}</Link>
															<p className="text-muted mb-0 text-break">{follower.email}</p>
														</div>
														<div className="media-body valign-middle text-end overflow-visible mt-2">
															<Button
																variant="primary"
																type="button"
																onClick={follower.followHandler}
															>
																Follow
															</Button>
														</div>
													</Card.Body>
												</Card>
											</Col>
										))}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</div>
				</Col>
			</Row>
		</Fragment>
	);
};
export default Profile;
