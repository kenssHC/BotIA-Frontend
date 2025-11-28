import React, { Fragment } from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Filemangerlistdata1 } from './filemangerlistdata';


const Filemangerlist = () => {
	return (
		<Fragment>
			<Row >
				<Col lg={12} xl={12}>
					<Row >
						<Col className="col-6">
							<div className="fs-20 mb-4  text-white">
								Files List
							</div>
						</Col>
						<Col className="col-6 col-auto file-1">
							<div className="input-group mb-2">
								<input type="text" className="form-control text-truncate" placeholder="Search folder....." aria-label="Search folder....." />
								<button className="btn btn-danger" type="button">Search</button>
							</div>
						</Col>
					</Row>
					<Row >
						{Filemangerlistdata1.map((idx) => (
							<Col xl={3} md={4} sm={6} key={idx.id}>
								<Card className=" p-0 ">
									<div className="d-flex align-items-center px-3 pt-3">
										<div className="float-end ms-auto">
											<Dropdown className=" ms-auto">
												<Dropdown.Toggle variant='' aria-label="anchor" className="option-dots no-caret" data-bs-toggle="dropdown" aria-expanded="false" >
													<i className="fe fe-more-vertical"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu className="dropdown-menu-end">
													<li><Dropdown.Item href="#"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item></li>
													<li ><Dropdown.Item href="#"><i className="fe fe-share me-2"></i> Share</Dropdown.Item></li>
													<li ><Dropdown.Item href="#"><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item></li>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
									<div className="card-body pt-0 text-center">
										<div className="file-manger-icon">
											<Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
												<img src={idx.imageSrc} alt="img" className="rounded-7" />
											</Link>
										</div>
										<h6 className="mb-1 font-weight-semibold">{idx.title}</h6>
										<span className="text-muted">{idx.size}</span>
									</div>
								</Card>
							</Col>
						))}
					</Row>
					<ul className="pagination float-end mb-4">
						<li className="page-item page-prev disabled">
							<Link to="#" className="page-link" tabIndex="-1">Prev</Link>
						</li>
						<li className="page-item active"><Link to="#" className="page-link" >1</Link></li>
						<li className="page-item"><Link to="#" className="page-link" >2</Link></li>
						<li className="page-item"><Link to="#" className="page-link" >3</Link></li>
						<li className="page-item page-next">
							<Link to="#" className="page-link" >Next</Link>
						</li>
					</ul>
				</Col>
			</Row>
			{/* <!-- End Row --> */}
		</Fragment >
	);
};

export default Filemangerlist;
