import React, { Fragment, useState } from 'react';
import { Card, Row, Col, Button, Nav, Badge, ButtonGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Maildata1 } from './maildata';

const Mail = () => {
	const [isAllChecked, setIsAllChecked] = useState(false);

	// State to track individual checkboxes
	const [checkedItems, setCheckedItems] = useState(
		Maildata1.reduce((acc, item) => {
			acc[item.id] = false;
			return acc;
		}, {})
	);

	const handleSelectAllChange = () => {
		const newCheckedState = !isAllChecked;
		setIsAllChecked(newCheckedState);
		setCheckedItems(
			Maildata1.reduce((acc, item) => {
				acc[item.id] = newCheckedState;
				return acc;
			}, {})
		);
	};
	const handleCheckboxChange = (id) => {
		setCheckedItems((prevState) => {
			const newState = { ...prevState, [id]: !prevState[id] };
			const allChecked = Object.values(newState).every(Boolean);
			setIsAllChecked(allChecked);
			return newState;
		});
	};

	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm main-content-mail">
				<Col xl={3} lg={4} md={12} className="">
					<Card className="">
						<Card.Body className="">
							<div className="main-content-left main-content-left-mail">
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
											<Nav.Link className=""   ><i className="typcn typcn-folder"></i> Social <Badge bg="secondary " className="  me-2">10</Badge></Nav.Link>
											<Nav.Link className=""   ><i className="typcn typcn-folder"></i> Promotions <Badge bg="info " className="  me-2">22</Badge></Nav.Link>
											<Nav.Link className=""   ><i className="typcn typcn-folder"></i> Updates <Badge bg="warning" className="  me-2">17</Badge></Nav.Link>
										</Nav.Item>
									</Nav>
									<label className="main-content-label main-content-label-sm">Tags</label>
									<Nav className=" main-nav-column">
										<Nav.Item>
											<Nav.Link className=""   ><i className="typcn typcn-social-twitter-circular"></i> Twitter <Badge bg="warning" className=" me-2">2</Badge></Nav.Link>
											<Nav.Link className=""   ><i className="typcn typcn-social-github-circular"></i> Github <Badge bg="secondary" className="  me-2">32</Badge></Nav.Link>
											<Nav.Link className=""   ><i className="typcn typcn-social-google-plus-circular"></i> Google <Badge bg="info" className=" me-2">7</Badge></Nav.Link>
										</Nav.Item>
									</Nav>
								</div>{/* <!-- main-mail-menu --> */}

							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={9} lg={8} md={12} className="">
					<Card className="">
						<Card.Body className="main-content-body main-content-body-mail">
							<div className="main-mail-header">
								<div>
									<h4 className="main-content-title mg-b-5">Inbox</h4>
									<p>You have 2 unread messages</p>
								</div>
								<div>
									<span>1-50 of 1200</span>
									<ButtonGroup className="" role="group">
										<Button variant="outline-secondary" className="  border-end-0" disabled type="button"><i className="icon ion-ios-arrow-back"></i></Button>
										<Button variant="outline-secondary" className=" " type="button"><i className="icon ion-ios-arrow-forward"></i></Button>
									</ButtonGroup>
								</div>
							</div>{/* <!-- main-mail-list-header --> */}

							<div className="main-mail-options">
								<input className="form-check-input check-all" type="checkbox" checked={isAllChecked} onChange={handleSelectAllChange} id="checkebox-sm" />
								<div className="btn-group">
									<button className="btn btn-light"><i className="typcn typcn-arrow-sync"></i></button>
									<button className="btn btn-light disabled"><i className="typcn typcn-archive"></i></button>
									<button className="btn btn-light disabled"><i className="typcn typcn-info-outline"></i></button>
									<button className="btn btn-light disabled"><i className="typcn typcn-trash"></i></button>
									<button className="btn btn-light disabled"><i className="typcn typcn-folder"></i></button>
									<button className="btn btn-light disabled"><i className="typcn typcn-tag"></i></button>
								</div>
							</div>{/* <!-- main-mail-options --> */}
							<div className="main-mail-list">
								{Maildata1.map((idx) => (
									<div className="main-mail-item mail-list unread" key={idx.id}>
										<div className="main-mail-checkbox">
											<input className="form-check-input" type="checkbox" checked={checkedItems[idx.id] || false} onChange={() => handleCheckboxChange(idx.id)} />
										</div>
										<div className={`main-mail-star ${idx.isStarred ? 'active' : ''}`}>
											<i className="typcn typcn-star"></i>
										</div>
										<div className="main-img-user avatar avatar-md rounded-2">
											<Image src={idx.image} alt="" />
										</div>
										<div className="main-mail-body">
											<div className="main-mail-from">
												{idx.from}
											</div>
											<div className="main-mail-subject text-wrap">
												<strong>{idx.subject}</strong> <span>{idx.body}</span>
											</div>
										</div>
										{idx.hasAttachment && (
											<div className="main-mail-attachment">
												<i className="typcn typcn-attachment"></i>
											</div>
										)}
										<div className="main-mail-date">
											{idx.date}
										</div>
									</div>
								))}
							</div>
							<div className="mg-lg-b-30"></div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}
		</Fragment>
	);
};
export default Mail;
