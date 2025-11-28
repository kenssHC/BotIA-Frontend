import React, { Fragment } from 'react';
import { Row, Col, Nav, Card, Badge, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Language, Timezone } from './mailsettingdata';

const Mailsettings = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} xl={3} className="">
					<Card className=" mg-b-20">
						<div className="main-content-left main-content-left-mail card-body">
							<Link  className="btn btn-primary btn-compose" to={`${import.meta.env.BASE_URL}apps/mail/mail-compose`} id="btnCompose">Compose</Link>
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

				{/* <!-- Col --> */}
				<Col lg={8} xl={9} className="">
					<Card className="">
						<Card.Body className="">
							<Form className="form-horizontal">
								<div className="mb-4 main-content-label">Account</div>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">User Name</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="User Name" defaultValue="Redashna" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Email</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="Email" defaultValue="info@redash.in" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Language</Form.Label>
										</Col>
										<Col md={9} className="">
											<Select name="state" options={Language} className="basic-multi-select " isSearchable
												menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Language[0]]}
											/>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Timezone</Form.Label>
										</Col>
										<Col md={9} className="">
											<Select name="state" options={Timezone} className="basic-multi-select " isSearchable
												menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Timezone[0]]}
											/>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Verification</Form.Label>
										</Col>
										<Col md={9} className=" ">
											<Form.Check aria-label='option-1' label="Email" />
											<Form.Check aria-label='option-2' label="SMS" defaultChecked />
											<Form.Check aria-label='option-3' label="Phone" />
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">Secuirity Settings</div>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Login Verification</Form.Label>
										</Col>
										<Col md={9} className="">
											<Link className="text-primary" >Settup Verification</Link>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Password Verification</Form.Label>
										</Col>
										<Col md={9} className="=">
											<Form.Check aria-label='option-1' label=" Require Personal Details" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className=" mb-2">
									<Row className="">
										<Col md={3} className="">
										</Col>
										<Col md={9} className="">
											<Link className="mg-e-20 text-primary" >Deactivate Account</Link>
											<Link className="text-primary" >Change Password</Link>
										</Col>
									</Row>
								</Form.Group>
							</Form>
						</Card.Body>
						<Card.Footer className=" bg-white">
							<div className="float-end"><Button variant="success" className="">Save Changes</Button></div>
						</Card.Footer>
					</Card>
				</Col>
				{/* <!-- /Col --> */}

				{/* <!-- div --> */}
				<div className="main-mail-compose">
					<div>
						<Container fluid className="">
							<div className="main-mail-compose-box">
								<div className="main-mail-compose-header">
									<span>New Message</span>
									<Nav className="">
										<Nav.Item>
											<Nav.Link className="" ><i className="fas fa-minus"></i></Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="" ><i className="fas fa-compress"></i></Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link className="" ><i className="fas fa-times"></i></Nav.Link>
										</Nav.Item>
									</Nav>
								</div>
								<div className="main-mail-compose-body p-0">
									<Form.Group className=" pd-10 mb-0">
										<Form.Label className="">To</Form.Label>
										<div>
											<Form.Control className="" placeholder="Enter recipient's email address" type="text" />
										</div>
									</Form.Group>
									<Form.Group className=" pd-10 mb-0">
										<Form.Label className="">Subject</Form.Label>
										<div>
											<Form.Control className="" type="text" />
										</div>
									</Form.Group>
									<Form.Group className=" pd-10 mb-0">
										<Form.Control as="textarea" className="=" placeholder="Write your message here..." rows="8"></Form.Control>
									</Form.Group>
									<Form.Group className="form-group pd-10 mb-0">
										<Nav className="">
											<Nav.Item>
												<Nav.Link className="" data-bs-toggle="tooltip" title="Add attachment"><i className="fas fa-paperclip"></i></Nav.Link>
											</Nav.Item>
											<Nav.Item><Nav.Link className="" data-bs-toggle="tooltip" title="Add photo"><i className="far fa-image"></i></Nav.Link></Nav.Item>
											<Nav.Item><Nav.Link className="" data-bs-toggle="tooltip" title="Add link"><i className="fas fa-link"></i></Nav.Link></Nav.Item>
											<Nav.Item><Nav.Link className="" data-bs-toggle="tooltip" title="Emoticons"><i className="far fa-smile"></i></Nav.Link></Nav.Item>
											<Nav.Item> <Nav.Link className="" data-bs-toggle="tooltip" title="Discard"><i className="far fa-trash-alt"></i></Nav.Link></Nav.Item>
										</Nav>
										<Button variant='primary' className="">Send</Button>
									</Form.Group>
								</div>
							</div>
						</Container>
					</div>
				</div>
				{/* <!-- /div --> */}
			</Row>
			{/* <!-- /row --> */}
		</Fragment>
	);
};

export default Mailsettings;
