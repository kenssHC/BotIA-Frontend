import { Fragment } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import { pagination1, pagination2, pagination3, pagination4, pagination5, pagination6, pagination7, pagination8, pagination9 } from '../../../components/prism-code/uielements-prisem';
import ShowCode from '../../../components/common/showcode/showcode';

const Paginations = () => {
    return (
        <Fragment>
            <Row>
                <Col xxl={3} xl={6}>
                    <ShowCode title="Basic Pagination" className="" reactCode={pagination1} customCardHeaderClass="justify-content-between">
                        <nav aria-label="Page navigation">
                            <Pagination as="ul" className="pagination mb-0">
                                <Pagination.Item disabled className="disabled" >Previous</Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >Next</Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode title="Pagination With Icons" className="" reactCode={pagination2} customCardHeaderClass="justify-content-between">
                        <nav aria-label="Page navigation">
                            <Pagination className="pagination mb-0">
                                <Pagination.Item className="page-item" aria-label="Previous">
                                    <span aria-hidden="true"><i className="bi bi-caret-left"></i></span></Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >3</Pagination.Item>
                                <Pagination.Item className="page-item" aria-label="Next">
                                    <span aria-hidden="true"><i className="bi bi-caret-right"></i></span></Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={12}>
                    <ShowCode title="Pagination Sizing" className="" reactCode={pagination3} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap justify-content-between gap-2">
                        <nav aria-label="...">
                            <Pagination as="ul" className="pagination pagination-sm mb-0">
                                <Pagination.Item active aria-current="page">
                                    1
                                </Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >3</Pagination.Item>
                            </Pagination>
                        </nav>
                        <nav aria-label="...">
                            <Pagination as="ul" className="pagination mb-0">
                                <Pagination.Item active aria-current="page">
                                    1
                                </Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >3</Pagination.Item>
                            </Pagination>
                        </nav>
                        <nav aria-label="...">
                            <Pagination className="pagination pagination-lg mb-0">
                                <Pagination.Item className=" active" aria-current="page">
                                    1
                                </Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >3</Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Center & Right Aligned Pagination" className="" reactCode={pagination4} customCardHeaderClass="justify-content-between" >
                        <nav aria-label="Page navigation">
                            <Pagination className="justify-content-center">
                                <Pagination.Item disabled>Previous
                                </Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >3</Pagination.Item>
                                <Pagination.Item >Next
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                        <nav aria-label="Page navigation">
                            <Pagination className="justify-content-end mb-0">
                                <Pagination.Item disabled >Previous
                                </Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >3</Pagination.Item>
                                <Pagination.Item >Next
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Active and disabled states" className="" reactCode={pagination5} customCardHeaderClass="justify-content-between" customCardBodyClass="d-flex flex-wrap" >
                        <nav aria-label="..." className="me-3">
                            <Pagination className="pagination">
                                <Pagination.Item disabled>Previous
                                </Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item active aria-current="page" >2
                                </Pagination.Item>
                                <Pagination.Item >Next
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                        <nav aria-label="...">
                            <Pagination className="pagination">
                                <Pagination.Item disabled>Previous
                                </Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item active aria-current="page">2
                                </Pagination.Item>
                                <Pagination.Item >Next
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Pagination Style-1" className="" reactCode={pagination6} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="Page navigation" className="pagination-style-1">
                            <Pagination className="pagination mb-0">
                                <Pagination.Item disabled >
                                    <i className="ri-arrow-left-s-line align-middle"></i>
                                </Pagination.Item>
                                <Pagination.Item >1</Pagination.Item>
                                <Pagination.Item active >2</Pagination.Item>
                                <Pagination.Item ><i className="bi bi-three-dots"></i>
                                </Pagination.Item>
                                <Pagination.Item >21</Pagination.Item>
                                <Pagination.Item >
                                    <i className="ri-arrow-right-s-line align-middle"></i>
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Pagination Style-2" className="" reactCode={pagination7} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="Page navigation" className="pagination-style-2">
                            <Pagination className="mb-0 flex-wrap">
                                <Pagination.Item disabled >Prev
                                </Pagination.Item>
                                <Pagination.Item active >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item     >
                                    <i className="bi bi-three-dots"></i>
                                </Pagination.Item>
                                <Pagination.Item >17</Pagination.Item>
                                <Pagination.Item className='pagination-next' >
                                    next
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Pagination Style-3" className="" reactCode={pagination8} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="Page navigation" className="pagination-style-3">
                            <Pagination className=" mb-0 flex-wrap">
                                <Pagination.Item disabled>Prev
                                </Pagination.Item>
                                <Pagination.Item active >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >
                                    <i className="bi bi-three-dots"></i>
                                </Pagination.Item>
                                <Pagination.Item >16</Pagination.Item>
                                <Pagination.Item className="pagination-next" >next </Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Pagination Style-4" className="" reactCode={pagination9} customCardHeaderClass="justify-content-between"  >
                        <nav aria-label="Page navigation" className="pagination-style-4">
                            <Pagination className="mb-0 flex-wrap">
                                <Pagination.Item disabled >
                                    Prev
                                </Pagination.Item>
                                <Pagination.Item active >1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                                <Pagination.Item >
                                    <i className="bi bi-three-dots"></i>
                                </Pagination.Item>
                                <Pagination.Item >16</Pagination.Item>
                                <Pagination.Item >17</Pagination.Item>
                                <Pagination.Item className="pagination-next" >
                                    next
                                </Pagination.Item>
                            </Pagination>
                        </nav>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Paginations;










