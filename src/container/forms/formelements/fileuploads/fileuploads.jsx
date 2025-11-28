import { Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Fileuploads = () => {

    const [files, setFiles] = useState({});
    const handleFileUpdate = (fileItems, pondName) => {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [pondName]: fileItems.map((fileItem) => fileItem.file),
      }));
    };

    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Bootstrap File Input
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Default file input example</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Multiple files input example</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Group controlId="formFileDisabled" className="mb-3">
                                <Form.Label>Disabled file input example</Form.Label>
                                <Form.Control type="file" disabled />
                            </Form.Group>
                            <Form.Group controlId="formFileSm" className="mb-3">
                                <Form.Label>Small file input example</Form.Label>
                                <Form.Control type="file" size="sm" />
                            </Form.Group>
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label>Large file input example</Form.Label>
                                <Form.Control type="file" size="lg" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <h6 className="mb-3">Filepond:</h6>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Multiple Upload
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond"
                                        files={files['multiUpload'] || []} onupdatefiles={(fileItems) => handleFileUpdate(fileItems, 'multiUpload')}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Single Upload
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond single-fileupload"
                                        files={files['singleUpload']} onupdatefiles={(fileItems) => handleFileUpdate(fileItems, 'singleUpload')}
                                        allowMultiple={true}
                                        maxFiles={1}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Dropzone
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FilePond className="multiple-filepond"
                             files={files['dropzone'] || []} onupdatefiles={(fileItems) => handleFileUpdate(fileItems, 'dropzone')}
                               
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your file here or click '
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Fileuploads;
