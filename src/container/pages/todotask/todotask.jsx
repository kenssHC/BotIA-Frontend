import React, { Fragment } from 'react';
import { Row, Col, Card, Image, Dropdown, Button, ListGroup, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Todotaskdata1, Todotaskdata2, Todotaskdata3 } from './todotaskdata';

const Todotask = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={9} md={12} className="">
					<Row className="row-sm">
						{/* <!-- col --> */}
						<Col lg={12} className="">
							<Card className="mg-b-20">
								<Card.Body className=" d-flex p-3">
									<div className="main-content-label mb-0 mg-t-8">User Today Tasks</div>
									<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Add New User</Tooltip>}>
										<div className="ms-auto"><Link to="#" className="d-block fs-20"  ><i className="si si-plus text-muted"></i></Link> </div>
									</OverlayTrigger>
								</Card.Body>
							</Card>
						</Col>
						{/* <!-- /col --> */}

						{/* <!-- col --> */}
						{Todotaskdata1.map((idx) => (
							<Col md={6} xl={4} className="" key={idx.id}>
								<Card className="mg-b-20">
									<Card.Body className=" p-0">
										<div className="todo-widget-header d-flex pb-2 pd-20">
											<Dropdown className="drop-down-profile">
												<Dropdown.Toggle as="div" data-bs-toggle="dropdown"className="no-caret" >
													<Image roundedCircle src={idx.profileImage} alt="" className=" avatar avatar-lg " />
													<span className={`assigned-task ${idx.badgeclr}`}>{idx.badgenum}</span>
													<Dropdown.Menu className=" fs-13">
														<div className="main-header-profile px-3 pt-2">
															<div className="fs-16 h5 mg-b-0">Redashna Pechon</div>
															<span>Web Designer</span>
														</div>
														<Dropdown.Item className="" >View Total Tasks</Dropdown.Item>
														<Dropdown.Item className="" >Completed Tasks</Dropdown.Item>
														<Dropdown.Item className="" >Settings</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown.Toggle>
											</Dropdown>
											<div className="ms-auto d-flex">
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-placement="top" data-bs-toggle="tooltip" title="archive" className="px-2 text-muted"><i className="fas fa-envelope-open-text"></i></Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Move to spam</Tooltip>}>
													<Link to="#" data-bs-placement="top" data-bs-toggle="tooltip" title="Move to spam" className="px-2 text-muted"><i className="fas fa-exclamation-circle"></i></Link>
												</OverlayTrigger>
												<Dropdown className="px-2">
													<Dropdown.Toggle variant='' as='a' className="text-muted no-caret" data-bs-toggle="dropdown"><i className="fas fa-ellipsis-v"></i></Dropdown.Toggle>
													<Dropdown.Menu className=" fs-13 dropleft">
														<Dropdown.Item className="" >Mark As Unread</Dropdown.Item>
														<Dropdown.Item className="" >Mark As Important</Dropdown.Item>
														<Dropdown.Item className="" >Add to Tasks</Dropdown.Item>
														<Dropdown.Item className="" >Add Star</Dropdown.Item>
														<Dropdown.Item className="" >Move to</Dropdown.Item>
														<Dropdown.Item className="" >Mute</Dropdown.Item>
														<Dropdown.Item className="" >Move to Trash</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</div>
										<div className="p-4">
											<span className="fs-12 text-muted">10.54am</span><span className="badge bg-primary-transparent text-primary ms-auto float-end">New task</span>
											<h5 className="fs-14 mb-0 mg-t-5 text-capitalize">{idx.title}</h5>
										</div>
										<div className="p-4 border-top">
											<span className="fs-12 text-muted">10.54am</span><span className="badge bg-danger-transparent text-danger ms-auto float-end">Pending task</span>
											<h5 className="fs-14 mb-0 mg-t-5 text-capitalize">{idx.description}</h5>
										</div>
									</Card.Body>
									<Card.Footer className="bg-white">
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Assign Task</Tooltip>}>
											<Button variant="primary">Assign</Button>
										</OverlayTrigger>
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >View Task</Tooltip>}>
											<Button variant="outline-primary" className=" ms-auto float-end" data-bs-placement="top" data-bs-toggle="tooltip" title="View Task">View All</Button>
										</OverlayTrigger>
									</Card.Footer>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
				{/* <!-- /col --> */}

				{/* <!-- col --> */}
				<Col lg={12} xl={3} className="">
					<Card className="card--events mg-b-20">
						<Card.Body className="">
							<div className="pd-20">
								<div className="main-content-label">Tasks</div>
								<p className="mg-b-0">It is Very Easy to Customize and it uses in website apllication.</p>
							</div>
							<ListGroup className=" to-do-tasks ">
								{Todotaskdata2.map((idx) => (
									<ListGroup.Item className="" key={idx.id}>
										<div className={`event-indicator ${idx.bgColor}`}></div>
										<h6 className="mg-t-5">{idx.task}</h6>
									</ListGroup.Item>
								))}
							</ListGroup>
						</Card.Body>
					</Card>
					<Card className="">
						<Card.Body className=" p-0">
							<div className="pd-t-20 pd-s-20 pd-e-20">
								<div className="main-content-label">Recent Tasks</div>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							</div>
							{Todotaskdata3.map((idx) => (
								<div className="d-flex p-3 border-top" key={idx.id}>

									<label className="ckbox"><Form.Check.Input className="" type="checkbox" defaultValue="" defaultChecked={idx.cheacked} /><span>{idx.title}</span></label>
									<span className="ms-auto">
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark' >Edit</Tooltip>}>
											<i className="si si-pencil text-primary me-2" ></i>
										</OverlayTrigger>
										<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
											<i className="si si-trash text-danger me-2"></i>
										</OverlayTrigger>
									</span>
								</div>
							))}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed -->         */}
		</Fragment>
	);
};
export default Todotask;
