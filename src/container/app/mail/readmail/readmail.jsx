import React, { Fragment } from 'react';
import { Col, Row, Image, Card, Button, Nav, Badge, Dropdown } from 'react-bootstrap';
import image1 from '../../../../assets/images/faces/6.jpg';
import image2 from '../../../../assets/images/photos/1.jpg';
import image3 from '../../../../assets/images/photos/2.jpg';
import image4 from '../../../../assets/images/photos/3.jpg';
import { Link } from 'react-router-dom';

const Readmail = () => {
	return (
		<Fragment>
			{/* <!-- row opened --> */}
			<Row className=" row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} xl={3} md={12} className="">
					<Card className=" mg-b-20">
						<div className="main-content-left main-content-left-mail card-body">
							<Link variant='primary' className="btn btn-primary btn-compose" to={`${import.meta.env.BASE_URL}apps/mail/mail-compose`}>Compose</Link>
							<div className="main-mail-menu">
								<Nav className=" main-nav-column mg-b-20">
									<Nav.Item>
										<Nav.Link className=" active" ><i className="typcn typcn-mail"></i> Inbox <Badge bg="primary" className=" me-2">20</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-star-outline"></i> Starred <Badge bg="secondary" className=" me-2">3</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-bookmark"></i> Important <Badge bg="warning" className="me-2">10</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-arrow-forward-outline"></i> Sent Mail <Badge bg="info" className=" me-2">8</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-pen"></i> Drafts <Badge bg="primary" className=" me-2">15</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-cancel-outline"></i> Spam <Badge bg="danger" className="me-2">128</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-trash"></i> Trash <Badge bg="success" className="me-2">6</Badge></Nav.Link>
									</Nav.Item>
								</Nav>
								<label className="main-content-label main-content-label-sm">Label</label>
								<Nav className=" main-nav-column mg-b-20">
									<Nav.Item>
										<Nav.Link className="" ><i className="typcn typcn-folder"></i> Social <Badge bg="secondary " className="  me-2">10</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-folder"></i> Promotions <Badge bg="info " className="  me-2">22</Badge></Nav.Link>
										<Nav.Link className="" ><i className="typcn typcn-folder"></i> Updates <Badge bg="warning" className="  me-2">17</Badge></Nav.Link>
									</Nav.Item>
								</Nav>
							</div>{/*<!-- main-mail-menu --> */}
						</div>
					</Card>
				</Col>
				{/* <!-- /Col --> */}
				<Col lg={8} xl={9} md={12} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">Mail Read</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<div className="email-media">
								<div className="mt-0 d-sm-flex">
									<Image roundedCircle className="me-3  avatar avatar-xl" src={image1} alt="avatar" />
									<div className="media-body">
										<div className="float-end d-none d-md-flex mt-3 fs-15">
											<small className="me-2 fs-13 mt-1">Sep 13 , 2019 12:45 pm</small>
											<Button variant='primary-light' className="me-2 "><i className="fe fe-star " data-toggle="tooltip" title="" data-original-title="Rated"></i></Button>
											<Button variant='success-light' className="me-2  btn-icon "><i className="fa fa-reply" data-toggle="tooltip" title="" data-original-title="Reply"></i></Button>
											{/* <Button variant='warning-light' className="me-2 btn btn-icon"> */}

											<Dropdown>
												<Dropdown.Toggle variant='warning-light' className="me-2 btn btn-icon no-caret" data-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-horizontal text-dark" ></i></Dropdown.Toggle>
												<Dropdown.Menu className="">
													<Dropdown.Item className="" >Reply</Dropdown.Item>
													<Dropdown.Item className="" >Report Spam</Dropdown.Item>
													<Dropdown.Item className="" >Delete</Dropdown.Item>
													<Dropdown.Item className="" >Show Original</Dropdown.Item>
													<Dropdown.Item className="" >Print</Dropdown.Item>
													<Dropdown.Item className="" >Filter</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											{/* </Button> */}
										</div>
										<div className="media-title text-dark mt-3">Alica Nestle <span className="text-muted">( alicnestle@gmail.com )</span></div>
										<p className="mb-0">to Adam Cotter ( adamcotter@gmail.com ) </p>
										<small className="me-2 d-md-none">Dec 13 , 2018 12:45 pm</small>
										<small className="me-2 d-md-none"><i className="fe fe-star text-dark" data-toggle="tooltip" title="" data-original-title="Rated"></i></small>
										<small className="me-2 d-md-none"><i className="fa fa-reply text-dark" data-toggle="tooltip" title="" data-original-title="Reply"></i></small>
									</div>
								</div>
							</div>
							<div className="eamil-body mt-4">
								<h6>Hi Sir/Madam</h6>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
								<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
								<p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take Link trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
								<p className="mb-0">Thanking you Sir/Madam</p>
								<hr />
								<div className="email-attch">
									<div className="float-end">
										<Link to="#" ><i className="fa fa-download text-dark" data-toggle="tooltip" title="" data-original-title="Download"></i></Link>
									</div>
									<p>3 Attachments<Link to="#" className="text-primary ms-2 d-inline-flex" > View All Images</Link></p>
									<div className="emai-img">
										<div className="d-sm-flex flex-wrap">
											<div className=" m-2">
												<Link to="#" ><Image src={image2} rounded className="wd-150 mb-2 " alt="placeholder image" /></Link>
												<h6 className="mb-3 mb-lg-0">1.jpg <small className="text-muted">12kb</small></h6>
											</div>
											<div className="m-2">
												<Link to="#" ><Image src={image3} rounded className="wd-150 mb-2" alt="placeholder image" /></Link>
												<h6 className="mb-3 mb-lg-0">2.jpg <small className="text-muted">18kb</small></h6>
											</div>
											<div className="m-2">
												<Link to="#"><Image src={image4} rounded className="wd-150 mb-2" alt="placeholder image" /></Link>
												<h6>3.jpg <small className="text-muted">21kb</small></h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
						<Card.Footer className="">
							<Button variant='primary' className=" mt-1 mb-1 me-2" ><i className="fa fa-reply"></i> Reply</Button>
							<Button variant='info' className=" mt-1 mb-1" ><i className="fa fa-share"></i> Forward</Button>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
		</Fragment>
	);
};

export default Readmail;
