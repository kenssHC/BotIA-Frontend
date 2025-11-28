import { Fragment } from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { reactbreadcrumb1, reactbreadcrumb2, reactbreadcrumb3, reactbreadcrumb4, reactbreadcrumb5, reactbreadcrumb6, reactbreadcrumb7 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Breadcrumbs = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Example" className="" reactCode={reactbreadcrumb1} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item >Home</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="mb-0">
                                <Breadcrumb.Item >Home</Breadcrumb.Item>
                                <Breadcrumb.Item >Library</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Example1" className="" reactCode={reactbreadcrumb2} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb-example1">
                                <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb-example1">
                                <Breadcrumb.Item  >Home</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb-example1 mb-0">
                                <Breadcrumb.Item  >Home</Breadcrumb.Item>
                                <Breadcrumb.Item  >Library</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Dividers" className="" reactCode={reactbreadcrumb3} customCardHeaderClass="justify-content-between"  >
                        <nav
                            aria-label="breadcrumb" className='divider-breadcrumb'>
                            <Breadcrumb className="mb-0">
                                <Breadcrumb.Item  >Home</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Embedded SVG icon" className="" reactCode={reactbreadcrumb4} customCardHeaderClass="justify-content-between"  >
                        <nav
                            aria-label="breadcrumb" className='svg-breadcrumb'>
                            <Breadcrumb className=" mb-0">
                                <Breadcrumb.Item  >Home</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Breadcrumb Style-1" className="" reactCode={reactbreadcrumb5} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
                                <Breadcrumb.Item  >Home</Breadcrumb.Item>
                                <Breadcrumb.Item  >Library</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Breadcrumb Style-2" className="" reactCode={reactbreadcrumb6} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
                                <Breadcrumb.Item  ><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
                                <Breadcrumb.Item  ><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Background colors" className="" reactCode={reactbreadcrumb7} customCardHeaderClass="justify-content-between"  >
                        <nav
                            aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb mb-0">
                                <Breadcrumb.Item  >Home</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Breadcrumbs;














