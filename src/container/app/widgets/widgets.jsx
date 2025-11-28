import React, { Fragment } from 'react';
import { Badge, Card, Col, Row, Image, Table, ProgressBar } from 'react-bootstrap';
import { Widgets1, Widgets10, Widgets11, Widgets2, Widgets3, Widgets4, Widgets5, Widgets6, Widgets7, Widgets8, Widgets9 } from './widgetsdata';
import { Link } from 'react-router-dom';

const Widgets = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm">
				{Widgets1.map((idx) => (
					<Col xl={3} lg={6} md={6} sm={12} className="" key={idx.id}>
						<Card className="">
							<Card.Body className=" iconfont text-start">
								<div className="d-flex justify-content-between">
									<Card.Title className=" mb-3">{idx.title}</Card.Title>
									<i className="mdi mdi-dots-Vertical"></i>
								</div>
								<div className="d-flex mb-0">
									<div className="">
										<h4 className="mb-1 font-weight-bold">{idx.value}<span className={`${idx.percentagetext} fs-13 ms-2 `}>{idx.percentage}</span></h4>
										<p className="mb-2 fs-12 text-muted">Overview of Last month</p>
									</div>
									<div className={`card-chart bg-${idx.bgColorClass}-transparent rounded-circle ms-auto mt-0`}>
										<i className={`typcn ${idx.icon} ${idx.iconColor} fs-24`}></i>
									</div>
								</div>
								<ProgressBar now={idx.progressValue} variant={idx.color} className='progress progress-sm mt-2' />
								<small className="mb-0  text-muted">Monthly<span className="float-end text-muted">{idx.progress}</span></small>
							</Card.Body>
						</Card>
					</Col>
				))}

			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				{Widgets2.map((idx) => (
					<Col xl={3} lg={6} md={6} sm={12} key={idx.id} >
						<Card className="">
							<Card.Body className="">
								<div className="card-order">
									<h6 className="mb-2">{idx.title}</h6>
									<h2 className="text-end "><i className={`${idx.icon} icon-size float-start ${idx.iconClass}`}></i><span>{idx.amount}</span></h2>
									<p className="mb-0">{idx.label}<span className="float-end">{idx.extraInfo}</span></p>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				{Widgets3.map((idx) => (
					<Col sm={6} lg={6} xl={3} key={idx.id}>
						<Card className="">
							<Card.Body className="">
								<Row className="">
									<Col className="">
										<div className="">{idx.title}</div>
										<div className="h3 mt-2 mb-2"><b>{idx.value}</b><span className="text-success fs-13 ms-2 d-inline-flex">{idx.percentage}</span></div>
									</Col>
									<div className="col-auto align-self-center ">
										<div className="feature mt-0 mb-0">
											<i className={`${idx.icon} project bg-${idx.color}-transparent ${idx.iconColor} `}></i>
										</div>
									</div>
								</Row>
								<div className="">
									<p className="mb-1">Overview of Last month</p>
									<ProgressBar now={idx.progressValue} variant={idx.color1} className='progress progress-sm mt-2' />
									<small className="mb-0 text-muted">Monthly<span className="float-end text-muted">{idx.progress}</span></small>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				{Widgets4.map((idx) => (
					<Col xl={3} lg={6} sm={6} md={6} className="" key={idx.id}>
						<Card className=" text-center">
							<Card.Body className="">
								<div className="feature widget-2 text-center mt-0 mb-3">
									<i className={`${idx.iconClass} project ${idx.bgColorClass} mx-auto ${idx.textColorClass} `}></i>
								</div>
								<h6 className="mb-1 text-muted">{idx.title}</h6>
								<h3 className="font-weight-semibold">{idx.value}</h3>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				{Widgets5.map((idx) => (
					<Col xl={3} lg={6} md={6} sm={6} className="" key={idx.id}>
						<Card className="">
							<Card.Body className="">
								<div className="plan-card text-center">
									<i className={`fas ${idx.iconClass} text-primary plan-icon`}></i>
									<h6 className="text-dark text-uppercase mt-2">{idx.title}</h6>
									<h2 className="mb-2">{idx.value}</h2>
									<Badge bg={idx.badgeVariant} className="me-1"> {idx.badgeText}</Badge>
									<span className="text-muted">{idx.subtitle}</span>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				<Col md={12} xl={4} className="">
					<Card className="">
						<Card.Body className="">
							<div className="d-flex justify-content-between">
								<Card.Title className="">Active Projects</Card.Title>
								<i className="mdi mdi-dots-Vertical"></i>
							</div>
							<p className="fs-12 text-muted mb-2">Active projects are project you are currently and actively working on. Archived projects</p>
							{Widgets6.map((idx) => (
								<div className="list d-flex align-items-center border-bottom py-3" key={idx.id}>
									<span className="avatar avatar-md online rounded-1">
										<Image src={idx.image} rounded />
									</span>
									<div className="wrapper  ms-3">
										<p className="mb-0">
											<b>{idx.name} </b>posted in {idx.category}</p>
										<div className="d-sm-flex justify-content-between align-items-center">
											<div className="d-flex align-items-center">
												<i className="mdi mdi-clock text-muted me-1"></i>
												<p className="mb-0">{idx.message}</p>
											</div>
											<small className="text-muted ms-2 pos-absolute r-20">{idx.timeAgo}</small>
										</div>
									</div>
								</div>
							))}
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4} className="">
					<Card className="">
						<Card.Body className="">
							<div className="d-flex justify-content-between">
								<Card.Title className=" mg-b-10">Busines Team</Card.Title>
								<i className="mdi mdi-dots-Vertical"></i>
							</div>
							<p className="fs-12 text-muted mb-3">team. A group of people to complete a task, job, or project  .  <Link to="#" className="text-primary" >Learn more</Link ></p>
							<div>
								<div className="chips">
									{Widgets7.map((idx) => (
										<div className="team" key={idx.id}>
											<Link to="#" className="chip">
												<span className="avatar cover-image"><Image src={idx.image} roundedCircle /></span> {idx.name}
											</Link >
											<i className="fab fa-facebook text-primary" aria-hidden="true"></i>
											<i className="ri-twitter-x-fill lh-1 text-primary fw-bold" aria-hidden="true"></i>
											<i className="fas fa-envelope text-primary" aria-hidden="true"></i>
											<p>On the other hand, we denounce with right indignation and dislike on imagesralized</p>
										</div>
									))}
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4} className="">
					<Card className="">
						<div className="d-flex justify-content-between ps-3 pt-3 pe-3 pb-0">
							<Card.Title className="">Top countries</Card.Title>
							<i className="mdi mdi-dots-Vertical"></i>
						</div>
						<p className="fs-12 text-muted mb-2 ps-3 pb-1 pe-3">Revenue of the leading direct selling companies worldwide <Link to="#" className="text-primary" >Learn more</Link ></p>
						<Card.Body className=" pt-0">
							<Table className=" card-table country-table mb-0 border">
								<tbody>
									{Widgets8.map((idx) => (
										<tr key={idx.id}>
											<td className="w-1"><Image src={idx.image} alt="flags" className="flag wd-30 ht-20 flag-us mt-1" /></td>
											<td>{idx.country}
												<ProgressBar now={idx.progressWidth} variant={idx.progressBarClass} className='progress progress-sm mt-2' />
											</td>
											<td className="w-1 text-end"><span className="text-muted">{idx.amount}</span></td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				<Col md={12} lg={6} xl={4} sm={12} className="">
					<Card className="">
						<Card.Header className=" pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title className=" pt-2">Latest Ratings and Reviews</Card.Title>
								<i className="mdi mdi-dots-Vertical"></i>
							</div>
						</Card.Header>
						<p className="fs-12 text-muted mb-0 px-3">A review is an evaluation of a publication, service, or company .<Link to="#" className="text-primary" >Learn more</Link ></p>
						<div className="rating-scroll">
							{Widgets9.map((idx) => (
								<div className="p-3 border-bottom" key={idx.id}>
									<div className="media mt-0">
										<div className="d-flex me-3">
											<Link  to="#" >
												<Image rounded className="media-object avatar  w-7 h-7" alt="64x64" src={idx.image} />
											</Link >
										</div>
										<div className="media-body">
											<div className="d-flex">
												<h6 className="mt-0 mb-0 font-weight-semibold ">{idx.name}</h6>
												<span className="fs-12 ms-auto">
													<i className="ion ion-md-star text-warning"></i>
													<i className="ion ion-md-star text-warning"></i>
													<i className="ion ion-md-star text-warning"></i>
													<i className="ion ion-md-star text-warning"></i>
													<i className="ion ion-md-star-half text-warning"></i>
												</span>
											</div>
											<div className="d-flex">
												<p className="fs-12 text-muted mb-0">{idx.comment}</p>
												<small className="ms-auto text-end">5 reviews</small>
											</div>

										</div>
									</div>
								</div>
							))}
						</div>
					</Card>
				</Col>
				<Col md={12} lg={6} xl={4} className="">
					<Card className="">
						<Card.Header bg="transparent" className=" pd-b-0 pd-t-20 bd-b-0">
							<div className="d-flex justify-content-between">
								<Card.Title className=" mg-b-10">Sessions by Countries</Card.Title>
								<i className="mdi mdi-dots-Vertical"></i>
							</div>
							<p className="fs-12 text-muted mb-0">session by country mean that the user is from the stated country . <Link to="#" className="text-primary" >Learn more</Link ></p>
						</Card.Header>
						<Card.Body className="">
							<ul className="sales-session mb-0">
								{Widgets10.map((idx) => (
									<li key={idx.id}>
										<div className="d-flex justify-content-between">
											<h6>{idx.country}</h6>
											<p className="font-weight-semibold mb-2">{idx.amount}<span className="text-muted font-weight-normal ms-1">{idx.percentage}</span></p>
										</div>
										<ProgressBar now={idx.progress} variant={idx.color} className='progress  ht-5' />
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>

				<Col md={12} lg={12} xl={4} sm={12} className="">
					<Card className="">
						<Card.Header className="">
							<div className="d-flex justify-content-between">
								<Card.Title className="pt-2">Browser Usage</Card.Title>
								<i className="mdi mdi-dots-Vertical"></i>
							</div>
							<p className="fs-12 text-muted mb-0">Tells you where your visitors originated from, such as search engines, social networks or website referrals. <Link to="#" className="text-primary" >Learn more</Link ></p>
						</Card.Header>
						{/* <!-- card-header --> */}
						<Card.Body className=" p-0">
							<div className="browser-stats">
								{Widgets11.map((idx) => (
									<div className="d-flex align-items-center item  border-bottom" key={idx.id}>
										<div className="d-flex">
											<Image src={idx.image} alt="img" className="ht-30 wd-30 me-2" />
											<div className="">
												<h6 className="">{idx.name}</h6>
												<span className="sub-text">Mozilla Foundation, Inc.</span>
											</div>
										</div>
										<div className="ms-auto my-auto">
											<div className="d-flex">
												<span className="me-4 my-auto">{idx.visits}</span>
												<span className={`text-${idx.color} fs-15`}><i className={`fe fe-arrow-${idx.trend}`}></i>{idx.change}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</Card.Body>
					</Card>{/* <!-- card --> */}
				</Col>
			</Row>
			{/* <!-- /row --> */}
		</Fragment>
	);
};
export default Widgets;
