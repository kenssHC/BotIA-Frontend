import React, { Fragment } from 'react';
import { Row, Col, Card, Button, Nav, Badge, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mailcompose = () => {
	return (
		<Fragment>
			{/* <!-- row opened --> */}
			<Row className=" row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} xl={3} md={12} className="">
					<Card className=" mg-b-20">
						<div className="main-content-left main-content-left-mail card-body">
							<Link className='btn btn-primary btn-compose' >Compose</Link>
							<div className="main-mail-menu">
								<Nav className=" main-nav-column mg-b-20">
									<Nav.Item>
										<Nav.Link className=" " ><i className="typcn typcn-mail"></i> Inbox <Badge bg="primary" className=" me-2">20</Badge></Nav.Link>
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
							<Card.Title className=" mt-2 mb-1">Compose new message</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<Form >
								<Form.Group className="">
									<Row className=" align-items-center mb-3">
										<label className="col-sm-2">To</label>
										<Col sm={10} className="">
											<Form.Control type="text" className="" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="">
									<Row className=" align-items-center mb-3">
										<label className="col-sm-2">Subject</label>
										<Col sm={10} className="">
											<Form.Control type="text" className="" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="">
									<Row className=" align-items-center mb-3">
										<label className="col-sm-2">CC</label>
										<Col sm={10} className="">
											<Form.Control type="text" className="" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="">
									<Row className=" align-items-center mb-3">
										<label className="col-sm-2">BC</label>
										<Col sm={10} className="">
											<Form.Control type="text" className="" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="">
									<Row className=" ">
										<label className="col-sm-2">Message</label>
										<Col sm={10} className="">
											<Form.Control as='textarea' rows="10" className=""></Form.Control>
										</Col>
									</Row>
								</Form.Group>
							</Form>
						</Card.Body>
						<div className="card-footer d-sm-flex align-items-center p-3">
							<div className="mt-sm-2 mt-0 mb-2">
								<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Attach</Tooltip>}>
									<Button variant='white' className=" btn-icon  me-1" ><i className="fe fe-paperclip text-muted fs-20"></i></Button>
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Link</Tooltip>}>
									<Button variant='white' className=" btn-icon  me-1" ><i className="fe fe-link-2 text-muted fs-20"></i></Button>
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Photos</Tooltip>}>
									<Button variant='white' className=" btn-icon  me-1" ><i className="fe fe-image text-muted fs-20"></i></Button>
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Delete</Tooltip>}>
									<Button variant='white' className=" btn-icon  me-1" ><i className="fe fe-trash-2 text-muted fs-20"></i></Button>
								</OverlayTrigger>
							</div>
							<div className="btn-list ms-auto">
								<Button variant="danger" type="button" className="  btn-space">Cancel</Button>
								<Button variant="primary" type="submit" className="  btn-space">Send message</Button>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
		</Fragment>
	);
};
export default Mailcompose;
