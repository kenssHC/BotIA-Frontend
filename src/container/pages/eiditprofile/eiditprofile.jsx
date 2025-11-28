import React, { Fragment } from 'react';
import { Col, Row, Card, Image, Form, Button } from 'react-bootstrap';
import image1 from '../../../assets/images/faces/6.jpg'
import { Link } from 'react-router-dom';
import Select from 'react-select';

export const Personal = [
	{ value: 'Us English', label: 'Us English' },
	{ value: 'Arabic', label: 'Arabic' },
	{ value: 'Korean', label: 'Korean' }
];

const Eiditprofile = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} className="">
					<Card className=" mg-b-20">
						<Card.Body className="">
							<div className="ps-0">
								<div className="main-profile-overview">
									<div className="main-img-user profile-user"><Image src={image1} alt="" /><Link to="#" className="fas fa-camera profile-edit"></Link></div>
									<div className="d-flex justify-content-between mg-b-20">
										<div>
											<h5 className="main-profile-name">Redashna</h5>
											<p className="main-profile-name-text">Web Designer</p>
										</div>
									</div>
									<h6>Bio</h6>
									<div className="main-profile-bio">
										pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.. <Link className="text-primary" >More</Link>
									</div>

									{/* <!-- main-profile-bio --> */}
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
									</div>
									{/* <!-- main-profile-work-list --> */}

									<hr className="mg-y-30" />
									<label className="main-content-label fs-13 mg-b-20">Social</label>
									<div className="main-profile-social-list">
										<div className="media">
											<div className="media-icon bg-primary-transparent text-primary">
												<i className="icon ion-logo-github"></i>
											</div>
											<div className="media-body">
												<span>Github</span> <Link to="#" className="text-primary" >github.com/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-success-transparent text-success flex-none">
												<i className="icon ri-twitter-x-line"></i>
											</div>
											<div className="media-body">
												<span>Twitter</span> <Link to="#" className="text-primary" >twitter.com/spruko.me</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-info-transparent text-info flex-none">
												<i className="icon ion-logo-linkedin"></i>
											</div>
											<div className="media-body">
												<span>Linkedin</span> <Link to="#" className="text-primary" >linkedin.com/in/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-danger-transparent text-danger">
												<i className="icon ion-md-link"></i>
											</div>
											<div className="media-body">
												<span>My Portfolio</span> <Link to="#" className="text-primary" >spruko.com/</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className=" mg-b-20">
						<Card.Body className="">
							<div className="main-content-label fs-13 mg-b-25">
								Conatct
							</div>
							<div className="main-profile-contact-list">
								<div className="media">
									<div className="media-icon bg-primary-transparent text-primary">
										<i className="icon ion-md-phone-portrait"></i>
									</div>
									<div className="media-body">
										<span>Mobile</span>
										<div>
											+245 354 654
										</div>
									</div>
								</div>
								<div className="media">
									<div className="media-icon bg-success-transparent text-success">
										<i className="icon ion-logo-slack"></i>
									</div>
									<div className="media-body">
										<span>Slack</span>
										<div>
											@spruko.w
										</div>
									</div>
								</div>
								<div className="media">
									<div className="media-icon bg-info-transparent text-info">
										<i className="icon ion-md-locate"></i>
									</div>
									<div className="media-body">
										<span>Current Address</span>
										<div>
											San Francisco, CA
										</div>
									</div>
								</div>
							</div>  {/*<!-- main-profile-contact-list --> */}
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- /Col --> */}

				{/* <!-- Col --> */}
				<Col lg={8} className="">
					<Card className="">
						<Card.Body className="">
							<div className="mb-4 main-content-label">Personal Information</div>
							<Form className="form-horizontal">
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Language</Form.Label>
										</Col>
										<Col md={9} className="">
											<Select name="state" options={Personal} className="basic-multi-select " isSearchable
												menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Personal[0]]}
											/>
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">Name</div>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">User Name</Form.Label>
										</Col>
										<Col md={9} className="mb-1">
											<Form.Control type="text" className="" placeholder="User Name" defaultValue="Redashna" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">First Name</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="First Name" defaultValue="Redashna" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">last Name</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="Last Name" defaultValue="Redashna" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Nick Name</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="Nick Name" defaultValue="Redash" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Designation</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="Designation" defaultValue="Web Designer" />
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">Contact Info</div>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Email<i>(required)</i></Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="Email" defaultValue="info@redash.in" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Website</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="Website" defaultValue="@spruko.w" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Phone</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="phone number" defaultValue="+245 354 654" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Address</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control as="textarea" className="" name="example-textarea-input" rows="2" placeholder="Address" defaultValue="San Francisco, CA">
											</Form.Control>
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">Social Info</div>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Twitter</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="twitter" defaultValue="twitter.com/spruko.me" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Facebook</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="facebook" defaultValue="https://www.facebook.com/Redash" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Google+</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="google" defaultValue="spruko.com" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Linked in</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="linkedin" defaultValue="linkedin.com/in/spruko" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Github</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control type="text" className="" placeholder="github" defaultValue="github.com/sprukos" />
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">About Yourself</div>
								<Form.Group className="mb-2">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Biographical Info</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Control as="textarea" className="" name="example-textarea-input" rows="4" placeholder="" defaultValue="pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.."></Form.Control>
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">Email Preferences</div>
								<Form.Group className=" mb-0">
									<Row className="">
										<Col md={3} className="">
											<Form.Label className="">Verified User</Form.Label>
										</Col>
										<Col md={9} className="">
											<Form.Check className="">
												<Form.Check.Input className="" type="checkbox" defaultValue="" />
												<Form.Check.Label className="">  Accept to receive post or page notification emails </Form.Check.Label>
											</Form.Check>
											<Form.Check className="">
												<Form.Check.Input className="" type="checkbox" defaultValue="" />
												<Form.Check.Label className="">  Accept to receive email sent to multiple recipients </Form.Check.Label>
											</Form.Check>
										</Col>
									</Row>
								</Form.Group>
							</Form>
						</Card.Body>
						<Card.Footer className="">
							<Button variant='primary' type="submit" className="waves-effect waves-light">Update Profile</Button>
						</Card.Footer>
					</Card>
				</Col>
				{/* <!-- /Col --> */}
			</Row>
			{/* <!-- row closed --> */}
		</Fragment>
	);
};
export default Eiditprofile;
