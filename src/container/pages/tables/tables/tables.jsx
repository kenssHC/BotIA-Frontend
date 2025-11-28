import { Fragment } from 'react';
import { Badge, Button, Col, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AlwaysResponsive, ActiveTables, TableWithTopCaption, TableWithCaption, HoverableRows, TableGroupDivideres, TableWithoutBorders, BasicTable, Table10data, Table11data, Table12data, Table13data, Table1data, Table2data, Table3data, Table4data, Table5data, Table6data, Table7data, Table8data, Table9data } from './tabledata';
import { datatable1, datatable10, datatable11, datatable12, datatable13, datatable14, datatable15, datatable16, datatable17, datatable18, datatable19, datatable2, datatable20, datatable21, datatable22, datatable23, datatable24, datatable25, datatable26, datatable27, datatable28, datatable29, datatable3, datatable31, datatable32, datatable4, datatable5, datatable6, datatable7, datatable8, datatable9, table1, table10, table11, table12, table13, table14, table15, table16, table17, table18, table19, table2, table20, table21, table22, table23, table24, table25, table26, table27, table28, table29, table3, table30, table31, table32, table4, table5, table6, table7, table8, table9 } from '../../../../components/prism-code/tables-prisem';
import ShowCode from '../../../../components/common/showcode/showcode';

const Tables = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Tables" className="" reactCode={table1} dataCode={datatable1} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Created On</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BasicTable.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.createdOn}</td>
                                            <td>{idx.number}</td>
                                            <td><Badge bg={`outline-${idx.statusColor}`} className="badge">{idx.status}</Badge></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Bordered Tables" className="" reactCode={table2} dataCode={datatable2} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">User</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table1data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <span className={`avatar avatar-xs me-2 ${idx.class1} avatar-rounded`}>
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.name}
                                                </div>
                                            </th>
                                            <td><Badge bg={idx.color} className={`badge ${idx.class}`}>{idx.text}</Badge></td>
                                            <td>{idx.mail}</td>
                                            <td>
                                                <div className="hstack gap-2 flex-wrap">
                                                    <Link to="#" className="text-info fs-14 lh-1"><i
                                                        className="ri-edit-line"></i></Link>
                                                    <Link to="#" className="text-danger fs-14 lh-1"><i
                                                        className="ri-delete-bin-5-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Bordered Primary" className="" reactCode={table3} dataCode={datatable3} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table bordered className="table text-nowrap  border-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Order</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table2data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">
                                                {idx.order}
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.name}
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Booked</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Bordered Success" className="" reactCode={table4} dataCode={datatable4} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table bordered className="table text-nowrap border-success">
                                <thead>
                                    <tr>
                                        <th scope="col">Order</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table3data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">
                                                {idx.order}
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.name}
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success-transparent">Delivered</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Bordered warning" className="" reactCode={table5} dataCode={datatable5} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table bordered className="table text-nowrap table-bordered border-warning">
                                <thead>
                                    <tr>
                                        <th scope="col">Order</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table4data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">
                                                {idx.order}
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.name}
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Accepted</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Table Without Borders" className="" reactCode={table6} dataCode={datatable6} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table borderless className="text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableWithoutBorders.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.transactionId}</td>
                                            <td>{idx.created}</td>
                                            <td><span className={`badge bg-${idx.statusColor}`}>{idx.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Group Divideres" className="" reactCode={table7} dataCode={datatable7} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Seller</th>
                                        <th scope="col">Sale Percentage</th>
                                        <th scope="col">Quantity Sold</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {TableGroupDivideres.map(idx => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.product}</th>
                                            <td>{idx.seller}</td>
                                            <td><Link to="#" className={`text-${idx.color}`}>{idx.quantitySold}<i
                                                className={`ri-arrow-${idx.arrow}-fill ms-1`}></i></Link></td>
                                            <td>250/1786</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Striped rows" className="" reactCode={table8} dataCode={datatable8} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table striped className="table text-nowrap table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table5data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.order}</th>
                                            <td>{idx.date}</td>
                                            <td>{idx.name}</td>
                                            <td>
                                                <Button variant='success' className="btn btn-sm btn-wave">
                                                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Striped columns" className="" reactCode={table9} dataCode={datatable9} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table striped="columns" className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table5data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.order}</th>
                                            <td>{idx.date}</td>
                                            <td>{idx.name}</td>
                                            <td>
                                                <Button variant='' className="btn btn-sm btn-danger btn-wave">
                                                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Primary Table" className="" reactCode={table10} dataCode={datatable10} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table variant='primary' className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table6data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Secondary Table" className="" reactCode={table11} dataCode={datatable11} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table variant='secondary' className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table6data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Warning Table" className="" reactCode={table12} dataCode={datatable12} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table variant='warning' className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table6data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Danger Table" className="" reactCode={table13} dataCode={datatable13} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table variant='danger' className="table text-nowrap table-danger">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table6data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Dark Table" className="" reactCode={table14} dataCode={datatable14} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table variant='dark' className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table6data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Success Table" className="" reactCode={table15} dataCode={datatable15} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table striped variant='success' className="table text-nowrap table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table6data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Hoverable Rows" className="" reactCode={table16} dataCode={datatable16} customCardBodyClass="p-0" customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table hover className="text-nowrap table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Manager</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Team</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {HoverableRows.map(idx => (
                                        <tr key={idx.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>{idx.name}</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">{idx.email}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`badge bg-${idx.categoryColor}-transparent`}>{idx.category}</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {idx.teem.map((idx) => (
                                                        <span className="avatar avatar-sm avatar-rounded" key={idx.id}>
                                                            <img src={idx.img1} alt='img' />
                                                        </span>
                                                    ))}

                                                    <Link to="#" className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded">
                                                        {idx.teem.length > 3 ? `+${idx.teem.length - 3}` : ''}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={idx.status} />
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Hoverable rows With striped rows" className="" reactCode={table17} dataCode={datatable17} customCardBodyClass="p-0" customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table striped hover className="table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table7data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.text1}</th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>{idx.name}</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">{idx.mail}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><Badge bg={idx.color} className={`badge ${idx.class}`}><i
                                                className={`ri-${idx.icon} align-middle me-1`}></i>{idx.text2}</Badge></td>
                                            <td>{idx.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Table Head Primary" className="" reactCode={table18} dataCode={datatable18} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table8data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.text}</td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#"
                                                        className="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                                            className="ri-download-2-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                            className="ri-edit-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head warning" className="" reactCode={table19} dataCode={datatable19} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-warning">
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table9data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.text}</td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Success" className="" reactCode={table20} dataCode={datatable20} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-success">
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table9data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.text}</td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Info" className="" reactCode={table21} dataCode={datatable21} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-info">
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table9data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.text}</td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Secondary" className="" reactCode={table22} dataCode={datatable22} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-secondary">
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table9data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.text}</td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Danger" className="" reactCode={table23} dataCode={datatable23} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-danger">
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table9data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.text}</td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Table Foot" className="" reactCode={table24} dataCode={datatable24} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Team</th>
                                        <th scope="col">Matches Won</th>
                                        <th scope="col">Win Ratio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table10data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row"> {idx.text1}</th>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3} </td>
                                            <td>
                                                <span className="badge bg-primary">{idx.text4}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="table-primary">
                                    <tr>
                                        <th scope="row"> Total </th>
                                        <td>United States</td>
                                        <td>558</td>
                                        <td><span className="badge bg-primary">56%</span></td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Table With Caption" className="" reactCode={table25} dataCode={datatable25} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <caption>Top 3 Countries</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Medals Won</th>
                                        <th scope="col">No Of Athletes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableWithCaption.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.country}</td>
                                            <td>{idx.medalsWon}<i className="ri-medal-line mx-2"></i></td>
                                            <td>{idx.noOfAthletes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Table With Top Caption" className="" reactCode={table26} dataCode={datatable26} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap caption-top">
                                <caption>Top IT Companies</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Revenue</th>
                                        <th scope="col">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableWithTopCaption.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">{idx.id}</th>
                                            <td>{idx.name}</td>
                                            <td>{idx.revenue}</td>
                                            <td>{idx.country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Active Tables" className="" reactCode={table27} dataCode={datatable27} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Created On</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ActiveTables.map((idx) => (
                                        <tr className="table-active" key={idx.id}>
                                            <th scope="row">{idx.name}</th>
                                            <td>{idx.createdOn}</td>
                                            <td>{idx.number}</td>
                                            <td><span className={`badge bg-${idx.statusColor}`}>{idx.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Small Tables" className="" reactCode={table28} dataCode={datatable28} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table size="sm" className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Created Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table11data.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <Form.Check id={idx.id} className="" type="checkbox" value="" />
                                                    <Form.Label className="" htmlFor="checkebox-sm">
                                                        {idx.name}
                                                    </Form.Label>
                                                </div>
                                            </th>
                                            <td>{idx.date}</td>
                                            <td><Badge bg={idx.class} className="badge">{idx.text}</Badge></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Color variants tables" className="" reactCode={table29} dataCode={datatable29} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Color</th>
                                        <th scope="col">Client</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table12data.map((idx) => (
                                        <tr key={idx.id} className={idx.class1}>
                                            <th scope="row">{idx.text}</th>
                                            <td>{idx.name}</td>
                                            <td><Badge bg={idx.color} className={`badge ${idx.class2}`}>Processed</Badge></td>
                                            <td>{idx.quantity}</td>
                                            <td>{idx.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Nesting" className="" reactCode={table30} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table striped bordered className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}>
                                            <Table className="table text-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Aplhabets</th>
                                                        <th scope="col">Users</th>
                                                        <th scope="col">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">A</th>
                                                        <td>Dino King</td>
                                                        <td>dinoking231@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">B</th>
                                                        <td>Poppins sams</td>
                                                        <td>pops@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">C</th>
                                                        <td>Brian Shaw</td>
                                                        <td>swanbrian@gmail.com</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Jimmy</td>
                                        <td>the Ostrich</td>
                                        <td>Dummy Text</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Cobra Kai</td>
                                        <td>the Snake</td>
                                        <td>Another Name</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Always responsive" className="" reactCode={table31} dataCode={datatable31} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Form.Check className="" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
                                        <th scope="col">Team Head</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Gmail</th>
                                        <th scope="col">Team</th>
                                        <th scope="col">Work Progress</th>
                                        <th scope="col">Revenue</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AlwaysResponsive.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row">
                                                <Form.Check className="=" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.teemHead}
                                                </div>
                                            </td>
                                            <td>{idx.category}</td>
                                            <td><span className={`badge bg-${idx.color}-transparent`}>{idx.role}</span></td>
                                            <td>{idx.gmail}</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {idx.team.slice(0, 5).map((idx) => (
                                                        <span className="avatar avatar-sm avatar-rounded" key={idx.id}>
                                                            <img src={idx.img1} alt='img' />
                                                        </span>
                                                    ))}

                                                    <Link to="#" className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" >
                                                        {idx.moreImg}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={idx.workProgress} />
                                            </td>
                                            <td>{idx.revenue}</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Vertical alignment" className="" reactCode={table32} dataCode={datatable32} customCardHeaderClass="justify-content-between">
                        <div className="table-responsive">
                            <Table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-25">Heading 1</th>
                                        <th scope="col" className="w-25">Heading 2</th>
                                        <th scope="col" className="w-25">Heading 3</th>
                                        <th scope="col" className="w-25">Heading 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Table13data.map((idx) => (
                                        <tr key={idx.id} className={idx.class1}>
                                            <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                            <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                            <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
                                            <td>This here is some placeholder text, intended to take up
                                                quite a
                                                bit of vertical space, to demonstrate how the vertical
                                                alignment
                                                works in the preceding cells.</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Tables;
