import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Editor1 from 'suneditor-react';

const Sunedtior = () => {
    const defultContent = `<h4><strong class="ql-size-large">Sunedtior Snow</strong> is a free, open source <a href="" rel="noopener noreferrer" target="_blank">Sun Editor</a> built for the modern web. With its <a href=""  rel="noopener noreferrer" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
    <ol>
    <li>Write text select and edit with multiple options.</li>
    <li>This is Sunedtior snow editor.</li>
    <li>Easy to customize and flexible.</li>
    </ol>
    <h4>Sunedtior officially supports a standard toolbar theme <a href=""  rel="noopener noreferrer" target="_blank">"Snow"</a> and a floating tooltip theme <a href="" rel="noopener noreferrer" target="_blank">"Bubble"</a></h4>
    `

    const defultContent1 = `<h4><strong class="ql-size-large">Sunedtior Bubble</strong> is a free, open source <Link to="#"  rel="noopener noreferrer" target="_blank">Sun Editor</Link> built for the modern web. With its <Link  rel="noopener noreferrer" target="_blank">modular architecture</Link> and expressive API, it is completely customizable to fit any need.</h4>
    
    <ol>
    <li>Write text select and edit with multiple options.</li>
    <li>This is Sunedtior bubble editor.</li>
    <li>Easy to customize and flexible.</li>
    </ol>
    <h4>Sunedtior officially supports a standard toolbar theme <Link to="#" rel="noopener noreferrer" target="_blank">"Snow"</Link> and a floating tooltip theme <Link  to="#" com/Sunedtiorjs/ rel="noopener noreferrer" target="_blank">"Bubble</Link>
    </h4>`
    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>
                                Suneditor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {/* <div className="sunedtior"> */}
                                <Editor1 defaultValue={defultContent} setDefaultStyle='height:200px' />
                            {/* </div> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>
                                Suneditor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Editor1 defaultValue={defultContent1} setDefaultStyle='height:200px' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Sunedtior;

