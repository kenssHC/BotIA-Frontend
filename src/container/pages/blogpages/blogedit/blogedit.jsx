
import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, FormGroup, FormLabel, Row, Form } from 'react-bootstrap';
import Editor from 'suneditor-react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import Select from 'react-select';
import { Category, Instructor } from './blogeditdata';
import { Link } from 'react-router-dom';

const Blogedit = () => {
	const [files, setFiles] = useState([]);
	return (
		<Fragment>
			{/* <!-- Start::row-1 --> */}
			<Row >
				<Col lg={12} md={12} >
					<Card className=" custom-card">
						<CardHeader >
							<h3 className="card-title">Edit Post</h3>
						</CardHeader>
						<CardBody >
							<Form.Group className="mb-3">
								<Form.Label htmlFor="project-name" className="form-label text-muted">Title:</Form.Label>
								<div className="input-group">
									<Form.Control id="project-name" type="text" className="form-control text-dark" defaultValue="Best place for vacation" />
								</div>
							</Form.Group>
							<FormGroup className=" mb-3">
								<FormLabel htmlFor="product-category-add">Category</FormLabel>
								<Select name="state" options={Category} className="basic-multi-select " isSearchable
									menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Category[0]]}
								/>

							</FormGroup>
							<FormGroup className=" mb-3">
								<FormLabel htmlFor="instructor" className=" text-muted">Instructor:</FormLabel>
								<Select name="state" options={Instructor} className="basic-multi-select " isSearchable
									menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Instructor[0]]}
								/>
							</FormGroup>
							<Form.Group className="mb-3">
								<Form.Label className="text-muted">Type of mode</Form.Label>
								<div className="d-flex align-items-center">
									<Form.Check
										type="radio"
										id="Radio-sm"
										name="mode"
										label="Online"
										defaultChecked
										className="me-3"
									/>
									<Form.Check
										type="radio"
										id="Radio-sm2"
										name="mode"
										label="Offline"
									/>
								</div>
							</Form.Group>
							<Col sm={12} md={12} xl={12} className=" mb-3">
								<Card className="card custom-card">
									<Card.Header>
										<Card.Title>
											Description:
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<Editor placeholder={'Write something...'} />
									</Card.Body>
								</Card>

							</Col>
							<Form.Group className="mb-3">
								<Form.Label className="text-muted">Course Type</Form.Label>
								<div className="d-flex align-items-center">
									<Form.Check
										type="radio"
										id="flexRadioDefault1"
										name="flexRadioDefault"
										label="Free"
										defaultChecked
										className="me-3"
									/>
									<Form.Check
										type="radio"
										id="flexRadioDefault2"
										name="flexRadioDefault"
										label="Paid"
									/>
								</div>
							</Form.Group>
							<div className="p-4 border mb-3 ">
								
							<FilePond className="multiple-filepond"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
								
							</div>
							<FormGroup className=" mb-3">
								<FormLabel htmlFor="videoUrl" className="l text-muted">Upload Video URL:</FormLabel>
								<div className="input-group">
									<input id="videoUrl" type="text" className="form-control text-dark" placeholder="https://videos.com" defaultValue="https://www.youtube.com/embed/tMWkeBIohBs" />
								</div>
							</FormGroup>
							<Form.Group className="mb-0">
								<Form.Label className="text-muted">Course Post Package:</Form.Label>
								<div className="border p-3 rounded">
									<div className="d-sm-flex align-items-start">
										<div className="me-3">
											<Form.Check type="radio" id="flexRadio1" name="flexRadio" label="30 Days Free" />
										</div>
										<div className="mt-2 mt-sm-0 me-3">
											<Form.Check type="radio" id="flexRadio2" name="flexRadio" label="60 Days / $20" defaultChecked />
										</div>
										<div className="mt-2 mt-sm-0 me-3">
											<Form.Check type="radio" id="flexRadio3" name="flexRadio" label="6 Months / $50" />
										</div>
										<div className="mt-2 mt-sm-0">
											<Form.Check type="radio" id="flexRadio4" name="flexRadio" label="1 Year / $80" />
										</div>
									</div>
								</div>
							</Form.Group>
						</CardBody>
						<CardFooter >
							<Link to="#" className="btn btn-primary float-end mb-1 mb-sm-0">Publish Now</Link>
							<Link to="#" className="btn btn-secondary float-end me-2 mb-1 mb-sm-0">Save to Draft</Link>
						</CardFooter>
					</Card>
				</Col>
			</Row>
			{/* <!--End::row-1 --> */}
		</Fragment>
	)
}
export default Blogedit;




