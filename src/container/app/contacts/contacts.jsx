import React, { Fragment } from 'react';
import { Row, Col, Card, Nav, Dropdown, OverlayTrigger, Tooltip, Tab } from 'react-bootstrap';
import face6 from '../../../assets/images/faces/6.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import { Link } from 'react-router-dom';

const Contacts = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm">
				<Col sm={12} lg={12} xxl={4} className="">
					<Card className=" custom-card">
						<div className="">
							<Tab.Container defaultActiveKey='tab1'>
								<div className="main-content-contacts pt-0">
									<div className="main-content-left main-content-left-contacts">
										<Nav variant='' className=" main-nav-line main-nav-line-chat  ps-3 pb-0	">
											<Nav.Link eventKey="tab1" data-bs-toggle="tab" >All Contacts</Nav.Link>
											<Nav.Link eventKey="tab2" data-bs-toggle="tab" >Favorites</Nav.Link>
										</Nav>
										<Tab.Content>
											<div className="main-contacts-list" id="mainContactList">
												<div className="main-contact-label">
													A
												</div>
												<div className="main-contact-item selected">
													<div className="online">
														<img alt="avatar" className="avatar avatar-md rounded-2" src={face2} />
													</div>
													<div className="main-contact-body">
														<h6>Abigail Johnson</h6><span className="phone">+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face3} /></div>
													<div className="main-contact-body">
														<h6>Archie Cantones</h6><span>archie@cantones.com</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div className="avatar avatar-md online bg-primary">
														A
													</div>
													<div className="main-contact-body">
														<h6>Allan Rey Palban</h6><span>allanr@palban.com</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div className="avatar avatar-md bg-secondary">
														A
													</div>
													<div className="main-contact-body">
														<h6>Aileen Mante</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-label">
													B
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face4} /></div>
													<div className="main-contact-body">
														<h6>Brandon Dilao</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face5} /></div>
													<div className="main-contact-body">
														<h6>Britney Labares</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div className="avatar avatar-md bg-danger">
														B
													</div>
													<div className="main-contact-body">
														<h6>Brateyley Cruz</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-label">
													C
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face6} /></div>
													<div className="main-contact-body">
														<h6>Camille Audrey</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face7} /></div>
													<div className="main-contact-body">
														<h6>Christian Lerio</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face8} /></div>
													<div className="main-contact-body">
														<h6>Christopher Segovia</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-label">
													D
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face9} /></div>
													<div className="main-contact-body">
														<h6>Darius Clayton</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face10} /></div>
													<div className="main-contact-body">
														<h6>Dyanne Aceron</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
												<div className="main-contact-item">
													<div><img alt="avatar" className="avatar avatar-md rounded-2" src={face11} /></div>
													<div className="main-contact-body">
														<h6>Divina Gracia</h6><span>+1-234-567-890</span>
													</div>
													<div className="main-contact-star">
														<OverlayTrigger placement="top" overlay={<Tooltip>View more</Tooltip>}>
															<Dropdown>
																<Dropdown.Toggle as='a' className="p-2 fs-16  no-caret" data-bs-toggle="dropdown">
																	<i className="fe fe-more-vertical text-dark"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item className="" ><i className="fe fe-star me-2 "></i>Add to Favorite</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-edit me-2"></i>Edit</Dropdown.Item>
																	<Dropdown.Item className="" ><i className="fe fe-trash-2 me-2"></i>Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</OverlayTrigger>
													</div>
												</div>
											</div>
										</Tab.Content>
									</div>
								</div>
							</Tab.Container>
						</div>
					</Card>
				</Col>
				<Col sm={12} lg={12} xxl={8} className="">
					<div className="">
						<Link to="#" className="main-header-arrow" id="ChatBodyHide"></Link>
						<div className="main-content-body main-content-body-contacts card custom-card">
							<div className="main-contact-info-header pt-3">
								<div className="media">
									<div className="avatar avatar-xxxl">
										<img alt="avatar" src={face6} />
										<Link to="#" className="camera-icon" >
											<i className="fe fe-camera"></i>
										</Link>
									</div>
									<div className="media-body">
										<h5>Petey Cruiser</h5>
										<p>Web Designer</p>
										<Nav className="contact-info">
											<OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
												<Link to="#" className="contact-icon border tx-inverse me-1" ><i className="fe fe-phone"></i></Link>
											</OverlayTrigger>
											<OverlayTrigger placement="top" overlay={<Tooltip>Video</Tooltip>}>
												<Link to="#" className="contact-icon border tx-inverse me-1" ><i className="fe fe-video"></i></Link>
											</OverlayTrigger>
											<OverlayTrigger placement="top" overlay={<Tooltip>message</Tooltip>}>
												<Link to="#" className="contact-icon border tx-inverse me-1" ><i className="fe fe-message-square"></i></Link>
											</OverlayTrigger>
											<OverlayTrigger placement="top" overlay={<Tooltip>Add to Group</Tooltip>}>
												<Link to="#" className="contact-icon border tx-inverse me-1" ><i className="fe fe-user-plus"></i></Link>
											</OverlayTrigger>
											<OverlayTrigger placement="top" overlay={<Tooltip>Block</Tooltip>}>
												<Link to="#" className="contact-icon border tx-inverse me-1" ><i className="fe fe-slash"></i></Link>
											</OverlayTrigger>
										</Nav>
									</div>
								</div>
								<div className="main-contact-action btn-list pt-3 pe-3">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit Profile</Tooltip>}>
										<Link to="#" className="btn ripple btn-primary text-fixed-white btn-icon" data-bs-placement="top" ><i className="fe fe-edit"></i></Link>
									</OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete Profile</Tooltip>}>
										<Link to="#" className="btn ripple btn-secondary text-fixed-white btn-icon" data-bs-placement="top" ><i className="fe fe-trash-2"></i></Link>
									</OverlayTrigger>
								</div>
							</div>
							<div className="main-contact-info-body p-4">
								<div>
									<h6>Biography</h6>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
								</div>
								<div className="media-list pb-0">
									<div className="media">
										<div className="media-body">
											<div>
												<label>Work</label> <span className="tx-medium">+1 (234) 567 8901</span>
											</div>
											<div>
												<label>Personal</label> <span className="tx-medium">+1 (498) 021 0090</span>
											</div>
										</div>
									</div>
									<div className="media">
										<div className="media-body">
											<div>
												<label>Gmail Account</label> <span className="tx-medium">sonia.taylor@gmail.com</span>
											</div>
											<div>
												<label>Other Account</label> <span className="tx-medium">me@bootstrapdash.me</span>
											</div>
										</div>
									</div>
									<div className="media">
										<div className="media-body">
											<div>
												<label>Current Address</label> <span className="tx-medium">012 Dashboard Apartments, San Francisco, California 13245</span>
											</div>
										</div>
									</div>
									<div className="media mb-0">
										<div className="media-body">
											<div>
												<label>Call History</label> <span className="tx-medium">Duration of last call: 2m 32sec</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			{/* <!-- End Row -->           */}
		</Fragment>
	);
};

export default Contacts;
