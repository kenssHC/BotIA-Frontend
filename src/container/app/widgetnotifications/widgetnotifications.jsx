import React, { Fragment, useState } from 'react';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import image1 from '../../../assets/images/svgicons/no-data.svg';
import image2 from '../../../assets/images/svgicons/note_taking.svg';
import image3 from '../../../assets/images/svgicons/imac.svg';
import { Link } from 'react-router-dom';

const Widgetnotifications = () => {
	const [Basicshow1, setBasicshow1] = useState(true);
	const [Basicshow2, setBasicshow2] = useState(true);
	const [Basicshow3, setBasicshow3] = useState(true);
	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row className=" row-sm">
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					<Card className=" bd-0 mg-b-20">
						<Card.Body className="text-danger">
							<div className="main-error-wrapper">
								<i className="si si-close mg-b-20 fs-50"></i>
								<h4 className="mg-b-20">Data Not Found.</h4>
								<Button variant='outline-danger' size='sm' className="btn " >Click to view details</Button>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					<Card className=" bd-0 mg-b-20">
						<Card.Body className="text-success">
							<div className="main-error-wrapper">
								<i className="si si-check mg-b-20 fs-50"></i>
								<h4 className="mg-b-20">Submitted Successfully</h4>
								<Button variant='outline-success' size='sm' className="btn " >Click to view details</Button>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					<Card className=" bd-0 mg-b-20">
						<Card.Body className=" text-info">
							<div className="main-error-wrapper">
								<i className="si si-info mg-b-20 fs-50"></i>
								<h4 className="mg-b-20">Info Alert</h4>
								<Button variant='outline-info' size='sm' className="btn " >Click to view details</Button>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>

				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					<Card className=" bd-0 mg-b-20 bg-danger">
						<Card.Body className="text-fixed-white">
							<div className="main-error-wrapper">
								<i className="si si-close mg-b-20 fs-50"></i>
								<h4 className="mg-b-0">Data Not Found.</h4>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					<Card className=" bd-0 mg-b-20 bg-success">
						<Card.Body className=" text-fixed-white">
							<div className="main-error-wrapper">
								<i className="si si-check mg-b-20 fs-50"></i>
								<h4 className="mg-b-0">Submitted Successfully</h4>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					<Card className=" bd-0 mg-b-20 bg-info">
						<Card.Body className=" text-fixed-white">
							<div className="main-error-wrapper">
								<i className="si si-info mg-b-20 fs-50"></i>
								<h4 className="mg-b-0">Info Alert</h4>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					{Basicshow1 ?
						<div className="alert alert-danger border-0 overflow-hidden p-0 mg-b-20" role="alert">
							<div className="p-3 bg-white d-flex justify-content-between">
								<h6 className="text-danger mb-0">Error Data</h6>
								<button type="button" className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => setBasicshow1(false)}><i className="bi bi-x"></i></button>
							</div>
							<hr className="my-0" />
							<div className="p-3">
								<strong>Oh snap!</strong> Change a few things up and try submitting again.
							</div>
						</div>
						: null}
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					{Basicshow2 ?
						<div className="alert alert-success border-0 overflow-hidden p-0 mg-b-20" role="alert">
							<div className="p-3 bg-white d-flex justify-content-between">
								<h6 className="text-success mb-0">Success Data</h6>
								<button type="button" className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => setBasicshow2(false)}><i className="bi bi-x"></i></button>
							</div>
							<hr className="my-0" />
							<div className="p-3">
								<strong>Well done!</strong> You successfully read this important alert message.
							</div>
						</div>
						: null}
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					{/* <!--Page Widget Error--> */}
					{Basicshow3 ?
						<div className="alert alert-info border-0 overflow-hidden p-0 mg-b-20" role="alert">
							<div className="p-3 bg-white d-flex justify-content-between">
								<h6 className="text-info mb-0">Info Data</h6>
								<button type="button" className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => setBasicshow3(false)}><i className="bi bi-x"></i></button>
							</div>
							<hr className="my-0" />
							<div className="p-3">
								<strong>Heads up!</strong> This alert needs your attention, but it's not super important.
							</div>
						</div>
						: null}
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col xl={4} lg={4} md={6} className="">
					<div className="card mg-b-20 text-center">
						<div className="card-body h-100">
							<Image src={image1} alt="no-img" className="wd-35p" />
							<h5 className="mg-b-10 mg-t-15 fs-18">Items Not Found</h5>
							<Link to="#" className="text-dark">Check The Settings</Link>
						</div>
					</div>
				</Col>
				<div className="col-xl-4 col-lg-4 col-md-6">
					<div className="card mg-b-20 text-center">
						<div className="card-body h-100">
							<Image src={image2} alt="no-img" className="wd-35p" />
							<h5 className="mg-b-10 mg-t-15 fs-18">Its Empty In Here</h5>
							<Link to="#" className="text-dark">Check The Settings</Link>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-6">
					<div className="card mg-b-20 text-center">
						<div className="card-body h-100">
							<Image src={image3} alt="no-img" className="wd-40p" />
							<h5 className="mg-b-10 mg-t-15 fs-18">No Site Selected</h5>
							<Link to="#" className="text-dark">Check The Settings</Link>
						</div>
					</div>
				</div>
			</Row>
			{/* <!-- /row --> */}
		</Fragment>
	);
};
export default Widgetnotifications;
