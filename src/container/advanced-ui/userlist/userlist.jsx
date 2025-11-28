import React, { Fragment } from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import face3 from '../../../assets/images/faces/3.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import { Link } from 'react-router-dom';


const Userlist = () => {
	const users = [
		{ id: 1, name: 'Socrates Itumay', position: 'Project Manager', email: 'socrates23@gmail.com', phone: '0-235-657-24587', location: 'California, USA', avatar: face2, },
		{ id: 2, name: 'Reynante Labares', position: 'Web Designer', email: 'reynante23@gmail.com', phone: '0-235-657-24587', location: 'Wales, UK', avatar: face3, },
		{ id: 3, name: 'Owen Bongcaras', position: 'App Developer', email: 'owenbong@gmail.com', phone: '0-235-657-24587', location: '0-235-657-24587', avatar: face4, },
		{ id: 4, name: 'Stephen Metcalfe', position: 'Administrator', email: 'stephne@gmail.com', phone: '0-235-657-24587', location: 'London, UK', avatar: face8, },
	];

	const userslist = [
		{ id: 1, name: 'Mariane Galeon', position: 'Administrator', email: 'mariane28@gmail.com', phone: '0-235-657-24587', location: 'Scotland, UK', avatar: face5, },
		{ id: 2, name: 'Joyce Chua', position: 'App Designer', email: 'joyce78@gmail.com', phone: '0-235-657-24587', location: 'Washington, USA', avatar: face6, },
		{ id: 3, name: 'Petey Cruiser', position: 'Web Developer', email: 'petey78@gmail.com', phone: '0-235-657-24587', location: 'England, UK', avatar: face7, },
	];
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row >
				{users.map(user => (
					<Col sm={12} md={6} lg={6} xl={3} key={user.id}>
						<Card className="custom-card">
							<Card.Body className="text-center">
								<div className="user-lock text-center">
									<img alt="avatar" className="rounded-circle" src={user.avatar} />
								</div>
								<h5 className="mb-1 mt-3 card-title">{user.name}</h5>
								<p className="mb-2 mt-1">{user.position}</p>
								<p className="text-muted text-center mt-0">
									Lorem Ipsum is not simply random text to popular belief Contrary.
								</p>
								<div className="mt-2 user-info btn-list d-grid">
									<Link to="#" className="btn btn-outline-light btn-block fw-normal">
										<i className="fe fe-mail me-2 mx-1 d-inline-flex"></i>
										<span>{user.email}</span>
									</Link>
									<Link to="#" className="btn btn-outline-light btn-block fw-normal">
										<i className="fe fe-phone me-2 mx-1 d-inline-flex "></i>
										<span>{user.phone}</span>
									</Link>
									<Link to="#" className="btn btn-outline-light btn-block fw-normal">
										<i className="fe fe-map-pin me-2 mx-1 d-inline-flex"></i>
										<span>{user.location}</span>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
				{userslist.map(user => (
					<Col sm={12} md={4} key={user.id}>
						<Card className="custom-card">
							<Card.Body className="text-center">
								<div className="user-lock text-center">
									<img alt="avatar" className="rounded-circle" src={user.avatar} />
								</div>
								<h5 className="mb-1 mt-3 card-title">{user.name}</h5>
								<p className="mb-2 mt-1">{user.position}</p>
								<p className="mb-1">
									<i className="fe fe-phone me-2 d-inline-flex"></i>{user.email}
								</p>
								<div className="d-lg-flex mt-2 align-items-center justify-content-center text-center">
									<p className="mb-2 me-3">
										<i className="fe fe-map-pin me-2 d-inline-flex"></i>{user.location}
									</p>
									<p className="mb-2">
										<i className="fe fe-phone me-2 d-inline-flex"></i>{user.phone}
									</p>
								</div>
								<p className="text-muted text-center mt-1">
									Lorem Ipsum is not simply random text to popular belief Contrary.
								</p>
								<div className="justify-content-center text-center mt-3 d-flex">
									<Link to="#" className="btn ripple btn-primary btn-icon me-3">
										<i className="fe fe-message-square"></i>
									</Link>
									<Link to="#" className="btn ripple btn-secondary btn-icon me-3">
										<i className="fe fe-edit-2"></i>
									</Link>
									<Link to="#" className="btn ripple btn-info btn-icon me-3">
										<i className="fe fe-eye"></i>
									</Link>
									<Link to="#" className="btn ripple btn-danger btn-icon">
										<i className="fe fe-trash-2"></i>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- row closed -->  */}
		</Fragment>
	);
};

export default Userlist;
