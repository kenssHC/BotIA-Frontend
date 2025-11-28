import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Filemangerdata1, Filemangerdata2, Filemangerdata3 } from './filemangerdata';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


const Filemanger = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	// Filter the data based on the search term
	const filteredData = Filemangerdata3.filter(idx =>
		idx.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Fragment>
			{/* <!-- row --> */}
			<Row>
				<Col lg={4} xl={3}>
					<Card>
						<div className="main-content-left main-content-left-mail card-body">
							<Link to="#" className="btn btn-primary btn-compose" id="btnCompose" data-bs-target="#Vertically" data-bs-toggle="modal" onClick={handleShow} ><i className="fa fa-plus mx-2"></i> Create Folder</Link>
							<Modal centered show={showModal} onHide={handleClose} id="uploadModal" tabIndex="-1" aria-labelledby="uploadModalLabel">
								<Modal.Header closeButton>
									<Modal.Title id="uploadModalLabel">Add New File</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<FilePond server="https://httpbin.org/post" allowMultiple={false} className="dropzone" />
								</Modal.Body>
								<Modal.Footer>
									<Button variant="primary" onClick={handleClose}>Add</Button>
									<Button variant="secondary" onClick={handleClose}>Cancel</Button>
								</Modal.Footer>
							</Modal>
							<div className="main-mail-menu">
								<nav className="nav main-nav-column">
									{Filemangerdata1.map((idx) => (
										<Link to="#" key={idx.id} className={`nav-link thumb ${idx.isActive ? 'active' : ''}`}><i className={idx.icon}></i> {idx.text}</Link>
									))}
								</nav>
							</div>{/*<!-- main-mail-menu --> */}
							<div className="border rounded-2 mt-3">
								<div className="card-header bg-transparent fw-bold"><i className="fe fe-hard-drive me-2 d-inline-flex"></i>Storage</div>
								<div className="card-body pt-0">
									<div className="progress ht-5 fileprogress mg-b-10">
										<div className="progress-bar progress-bar-xs wd-15p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div className="text-muted fw-semibold fs-13 mb-1">26.24 GB Used of 128GB</div>
									<div className="fs-13 text-primary fw-semibold">Upgrade Storage</div>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col lg={8} xl={9} >
					<Row>
						<Col className="col-6">
							<div className="fs-20 file-list">
								FIle Manager
							</div>
						</Col>
						<Col className="col-6 col-auto file-1">
							<div className="input-group">
								<input type="text" className="form-control text-truncate" placeholder="Search folder....." aria-label="Search folder....." onChange={handleSearch} />
								<button className="btn btn-danger" type="button">Search</button>
							</div>
						</Col>
					</Row>
					<div className="file-list fs-16">All Files</div>
					<Row className=" mt-4">
						{Filemangerdata2.map((idx) => (
							<Col md={6} xl={3} key={idx.id}>
								<Card >
									<Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerlist`}>
										<Card.Body >
											<div className="fs-16 mb-1">
												{idx.icon}
												<span className="text-primary">{idx.title}</span>
												<div className="float-end fs-13 text-muted mt-1">{idx.size}</div>
											</div>
										</Card.Body>
									</Link>
								</Card>
							</Col>
						))}
					</Row>
					<div className="text-muted mb-2 fs-16">Folders</div>
					<Row >
						{filteredData.map((idx) => (
							<Col xl={3} md={4} sm={6} key={idx.id}>
								<Card className=" p-0 ">
									<div className="d-flex align-items-center px-3 pt-3">
										<div className="form-check form-check-md">
											<input className="form-check-input" type="checkbox" value="" />
										</div>
										<Dropdown className="float-end ms-auto">
											<Dropdown.Toggle as="a" className="option-dots no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
											<Dropdown.Menu className="rounded-7">
												<Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
												<Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
												<Dropdown.Item><i className="fe fe-download me-2"></i> Download</Dropdown.Item>
												<Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<Card.Body className=" pt-0 text-center">
										<div className="file-manger-icon">
											<Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerlist`}>
												<img src={idx.image} alt="img" className="rounded-7" />
											</Link>
										</div>
										<h6 className="mb-1 fw-semibold">{idx.title}</h6>
										<span className="text-muted fs-11">{idx.size}</span>
									</Card.Body>
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
			{/* <!-- End Row -->      */}
		</Fragment>
	);
};

export default Filemanger;
