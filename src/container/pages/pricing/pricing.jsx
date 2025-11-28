import React, { Fragment } from 'react';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Pricingdata1, Pricingdata2, Pricingdata3 } from './pricingdata';

const Pricing = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="">
				{Pricingdata1.map(plan => (
					<Col sm={6} lg={6} xl={3} className="" key={plan.id}>
						<Card className="pricing-card">
							<Card.Body className="text-center">
								<div className="card-category">{plan.category}</div>
								<div className="display-5 my-4">${plan.price}</div>
								<ul className="list-unstyled leading-loose">
								<li><strong>{plan.number}</strong> Ads</li>
									{plan.features.map((feature, index) => (
										<li key={index}>
											{feature.isAvailable ? <span> <i className="fe fe-check text-success me-2"></i> {feature.text}</span> : <span><i className="fe fe-x text-danger me-2"></i> {feature.text}</span>}
										</li>
									))}
								</ul>
								<div className="text-center mt-6">
									<Button variant={plan.buttonVariant} className="btn btn-block">
										{plan.buttonText}
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			<Card.Title className="my-4">Pricing cards 4 colums</Card.Title>
			{/* <!-- row --> */}
			<Row className="">
				{Pricingdata2.map((idx) => (
					<Col sm={6} lg={6} xl={3} className="" key={idx.id}>
						<div className="panel price panel-color">
							<div className={`panel-heading ${idx.bgColor} p-0 text-center`}>
								<h3>{idx.category}</h3>
							</div>
							<div className="panel-body text-center">
								<p className="lead"><strong>${idx.price} /</strong> month</p>
							</div>
							<ListGroup as="ul" variant="flush" className="text-center">
								{idx.features.map((feature, index) => (
									<ListGroup.Item as="li" key={index} className={index === idx.features.length - 1 ? "border-bottom-0" : ""}>
										<strong>{feature.amount}</strong> {feature.text}
									</ListGroup.Item>
								))}
							</ListGroup>
							<div className="panel-footer text-center">
								<Button variant={idx.buttonVariant} className="" >Purchase Now!</Button>
							</div>
						</div>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Card.Title className="my-4">Column pricing table</Card.Title>
			<Row className="">
				{Pricingdata3.map((idx) => (
					<Col sm={6} lg={6} xl={3} className="" key={idx.id}>
						<Card>
							<Card.Body className=" text-center pricing">
								<div className="card-category">{idx.category}</div>
								<div className="display-4 my-4">${idx.price}</div>
								<ul className="list-unstyled leading-loose">
									{idx.features.map((feature) => (
										<li key={feature.id}>
											<strong>{feature.amount}</strong> {feature.text}
										</li>
									))}
								</ul>
								<div className="text-center mt-4">
									<Button variant={idx.buttonVariant} className="btn-block">Buy Now</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- row closed -->   */}
		</Fragment>
	);
};
export default Pricing;
