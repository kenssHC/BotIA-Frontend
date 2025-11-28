import React, { Fragment } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Faqsdata } from './faqsdata';
const Faqs = () => {
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className="">
				<Col md={12} className="">
					<Card className="">
						{Faqsdata.map((idx) => (
							<Card.Body className=" border-bottom" key={idx.id}>
								<h4 className="fw-semibold fs-15">{idx.title}</h4>
								<p className="text-muted mb-0 fs-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
							</Card.Body>
						))}
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
		</Fragment>
	);
};
export default Faqs;
