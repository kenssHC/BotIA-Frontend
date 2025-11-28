import React, { Fragment, useState } from 'react';
import { Row, Col, Nav, Card, Tab, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import face9 from '../../../../assets/images/faces/9.jpg';
import ecommers1 from '../../../../assets/images/ecommerce/jpg/7.jpg';
import { Link } from 'react-router-dom';
import { Chatdata } from './chat-data';
import SimpleBar from 'simplebar-react';

const Chat = () => {
	const [mainImgSrc, setMainImgSrc] = useState({
		imgSrc: face9,
		name: 'Reynante Labares',
	});
	const handleLinkClick = (imgSrc, name) => {
		setMainImgSrc({
			imgSrc: imgSrc || defaultImage,
			name: name || 'Default Name'
		});
	};
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm mb-4">
				<Col xl={12} className="">
					<Row className="">
						<Col xl={12} xxl={3} lg={12} className="">
							<Card className="overflow-hidden">
								<div className="main-content-app">
									<Tab.Container defaultActiveKey="tab1">
										<div className="main-content-left main-content-left-chat overflow-hidden">
											<Nav variant='' className=" main-nav-line main-nav-line-chat">
												<Nav.Item>
													<Nav.Link eventKey='tab1' data-bs-toggle="tab" >Recent Chat</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey='tab2' data-bs-toggle="tab" >Groups</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey='tab3' data-bs-toggle="tab" >Calls</Nav.Link>
												</Nav.Item>
											</Nav>
											<Tab.Content>
												<SimpleBar className="main-chat-list" id="ChatList" >
												{Chatdata.map((idx) => (
												<div className={`media ${idx.class}`} key={idx.id} onClick={() => handleLinkClick(idx.imgSrc, idx.name)}>
													<div className="main-img-user avatar avatar-md">
													<img src={idx.imgSrc} alt="" />
													{/* Conditionally render the <span> */}
													{idx.showSpan && <span>{idx.unread}</span>} {/* This condition could be based on any field in idx */}
													</div>
													<div className="media-body">
													<div className="media-contact-name">
														<span>{idx.name}</span> <span>{idx.time}</span>
													</div>
													<p>{idx.message}</p>
													</div>
												</div>
												))}
												</SimpleBar>
											</Tab.Content>
											{/* <!-- main-chat-list --> */}
										</div>
									</Tab.Container>
								</div>
							</Card>
						</Col>
						<Col lg={12} xl={12} xxl={6} >
							<Card className="overflow-hidden">
								<div className="main-content-app">
									<Link to="#" className="main-header-arrow" id="ChatBodyHide"></Link>
									<div className="main-content-body main-content-body-chat">
										<div className="main-chat-header">
											<div className="main-img-user avatar avatar-md"><img alt="" src={mainImgSrc.imgSrc} /></div>
											<div className="main-chat-msg-name">
												<h6>{mainImgSrc.name}</h6><small>Last seen: 2 minutes ago</small>
											</div>
											<nav className="nav">
												<Link to="#" className="nav-link"><i className="icon ion-md-more"></i></Link>
												<OverlayTrigger placement="top" overlay={<Tooltip >Call</Tooltip>}>
													<Link to="#" className="nav-link" ><i className="fe fe-star"></i></Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip >Trash</Tooltip>}>
													<Link to="#" className="nav-link" ><i className="fe fe-trash"></i></Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip >View Info</Tooltip>}>
													<Link to="#" className="nav-link" ><i className="fe fe-alert-circle"></i></Link>
												</OverlayTrigger>
											</nav>
										</div>
										{/* <!-- main-chat-header --> */}

										<SimpleBar className="main-chat-body" id="ChatBody" >
											<div className="content-inner">
												<label className="main-chat-time"><span>3 days ago</span></label>
												<div className="media flex-row-reverse">
													<div className="main-img-user avatar avatar-md"><img alt="" src={face9} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper right">
															Nulla consequat massa quis enim. Donec pede justo, fringilla vel...
														</div>
														<div className="main-msg-wrapper right">
															rhoncus ut, imperdiet a, venenatis vitae, justo...
														</div>
														<div className=" p-0"><img alt="" className="wd-100 ht-100 rounded-2" src={ecommers1} /></div>
														<div>
															<span>9:48 am</span> <Link to="#" ><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div>
												<div className="media">
													<div className="main-img-user avatar avatar-md"><img alt="" src={mainImgSrc.imgSrc} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper left">
															Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
														</div>
														<div>
															<span>9:32 am</span> <Link to="#" ><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div>
												<div className="media flex-row-reverse">
													<div className="main-img-user avatar avatar-md"><img alt="" src={face9} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper right">
															Nullam dictum felis eu pede mollis pretium
														</div>
														<div>
															<span>11:22 am</span> <Link to="#" ><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div><label className="main-chat-time"><span>Yesterday</span></label>
												<div className="media">
													<div className="main-img-user avatar avatar-md"><img alt="" src={mainImgSrc.imgSrc} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper left">
															Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
														</div>
														<div>
															<span>9:32 am</span> <Link to="#" ><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div>
												<div className="media flex-row-reverse">
													<div className="main-img-user avatar avatar-md"><img alt="" src={face9} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper right">
															Donec quam felis, ultricies nec, pellentesque euerdiet a, venenatis vitae, justo.
														</div>
														<div className="main-msg-wrapper right">
															Nullam dictum felis eu pede mollis pretium
														</div>
														<div>
															<span>9:48 am</span> <Link to="#" ><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div><label className="main-chat-time"><span>Today</span></label>
												<div className="media">
													<div className="main-img-user avatar avatar-md"><img alt="" src={mainImgSrc.imgSrc} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper left">
															Maecenas tempus, tellus eget condimentum rhoncus
														</div>
														<div className="main-msg-wrapper left">
															Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
														</div>
														<div>
															<span>10:12 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div>
												<div className="media flex-row-reverse">
													<div className="main-img-user avatar avatar-md"><img alt="" src={face9} /></div>
													<div className="media-body">
														<div className="main-msg-wrapper right">
															Maecenas tempus, tellus eget condimentum rhoncus
														</div>
														<div className="main-msg-wrapper right">
															Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
														</div>
														<div>
															<span>09:40 am</span> <Link to="#" ><i className="icon ion-android-more-horizontal"></i></Link>
														</div>
													</div>
												</div>
											</div>
										</SimpleBar>
										<div className="main-chat-footer">
											<nav className="nav">
											</nav><input className="form-control" placeholder="Type your message here..." type="text" />
											<OverlayTrigger placement='top'  overlay={<Tooltip>Add Emoticons</Tooltip>}>
												<Link to="#" className="nav-link me-2"><i className="fe fe-paperclip"></i></Link>
											</OverlayTrigger>
											<Link to="#" className="main-msg-send" ><i className="fe fe-send"></i></Link>
										</div>
									</div>
								</div>
							</Card>
						</Col>
						<div className="col-lg-12 col-xl-12 col-xxl-3">
							<Card className="overflow-hidden">
								<div className="main-content-app">
									<SimpleBar className="card-body p-0 chat-main" id="ChatMain" >
										<Dropdown className="float-end m-4">
											<Dropdown.Toggle as="a" className="option-dots text-dark no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
												<Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
												<Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
										<div className="text-center border-bottom chat-image p-4 mb-4 mt-3">
											<div className="avatar avatar-xxl  mb-3 mx-auto">
												<Link className="" to={`${import.meta.env.BASE_URL}pages/profile`}><img alt="avatar" className="rounded-circle" src={mainImgSrc.imgSrc} /></Link>
											</div>
											<Link to={`${import.meta.env.BASE_URL}pages/profile`}><h5 className="mb-1 text-dark">{mainImgSrc.name}</h5></Link>
											<p className="text-muted mt-0 mb-1 pt-0 fs-13">Senior Web Designer</p>
											<p className="text-muted mt-0 pt-0 fs-13 mb-0">+123(45)-678-90</p>
										</div>
										<div className="">
											<div className="px-4">
												<h6 className="mb-3">Contact Details :</h6>
												<div className="d-flex">
													<div>
														<Link to="#" className="nav-link border rounded-pill chat-profile me-2" ><i className="fe fe-shield"></i></Link>
													</div>
													<div className="ms-2">
														<p className="fs-13 fw-semibold mb-0">Id</p>
														<p className="fs-12 text-muted">2E345D4.</p>
													</div>
												</div>
												<div className="d-flex">
													<div>
														<Link to="#" className="nav-link border rounded-pill chat-profile me-2" ><i className="fe fe-mail"></i></Link>
													</div>
													<div className="ms-2">
														<p className="fs-13 fw-semibold mb-0">Email</p>
														<p className="fs-12 text-muted">ryangracie435@gmail.com.</p>
													</div>
												</div>
												<div className="d-flex mt-2">
													<div>
														<Link to="#" className="nav-link border rounded-pill chat-profile me-2" ><i className="fe fe-map-pin"></i></Link>
													</div>
													<div className="ms-2">
														<p className="fs-13 fw-semibold mb-0">Address</p>
														<p className="fs-12 text-muted">2nd street,houston texas,united states.</p>
													</div>
												</div>
											</div>
											<div className="px-4">
												<h6 className="mb-0">Shared Files :</h6>
												<div className="card custom-card shadow-none border-0 bg-transparent">
													<div className="card-body pb-0 px-0">
														<div className="border-0 p-0 mb-4">
															<div className="media mt-0">
																<div className="ps-0 me-3"><i className="fa fa-folder-open shared-files text-muted"></i></div>
																<div className="media-body">
																	<div className="d-flex align-items-center">
																		<div className="mt-0">
																			<h5 className="mb-1 fs-13 fw-semibold text-dark"> Ex Document</h5>
																			<p className="mb-0 fs-13 text-muted">ppt<span className="fs-11 ms-2">1.2 mb</span></p>
																		</div>
																		<span className="ms-auto wd-45p fs-16 ">
																			<span id="spark1" className="wd-100p"></span>
																			<span className="float-end badge">
																				<span className="op-7 text-muted fw-semibold">4 hrs ago </span>
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="border-0 p-0 mb-4">
															<div className="media mt-0">
																<div className="ps-0 me-3"><i className="fa fa-image shared-files text-muted"></i></div>
																<div className="media-body">
																	<div className="d-flex align-items-center">
																		<div className="mt-0">
																			<h5 className="mb-1 fs-13 fw-semibold text-dark">Sam Photo</h5>
																			<p className="mb-0 fs-13 text-muted">img<span className="fs-11 ms-2">12 mb</span></p>
																		</div>
																		<span className="ms-auto wd-45p fs-16 ">
																			<span id="spark2" className="wd-100p"></span>
																			<span className="float-end badge">
																				<span className="op-7 text-muted fw-semibold">4 hrs ago </span>
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="border-0 p-0 mb-0">
															<div className="media mt-0">
																<div className="ps-0 me-3"><i className="fa fa-envelope shared-files text-muted"></i></div>
																<div className="media-body">
																	<div className="d-flex align-items-center">
																		<div className="mt-0">
																			<h5 className="mb-1 fs-13 fw-semibold text-dark"> video</h5>
																			<p className="mb-0 fs-13 text-muted">Video<span className="fs-12 ms-2">16 mb</span></p>
																		</div>
																		<span className="ms-auto wd-45p fs-16 ">
																			<span id="spark3" className="wd-100p"></span>
																			<span className="float-end badge">
																				<span className="op-7 text-muted fw-semibold">22 mins ago </span>
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</SimpleBar>
								</div>
							</Card>
						</div>
					</Row>
				</Col>
			</Row>
			{/* <!-- row --> */}
		</Fragment>
	);
};

export default Chat;
