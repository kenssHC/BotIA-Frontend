import { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicTable, ResponsiveDataTable, Savetable, data } from './deletedrow';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Datatables = () => {

    const getProductsMini = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(data), 1000); 
        });
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let isMounted = true;
    
        getProductsMini().then(data => {
            if (isMounted) {
                setProducts(data);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []); 

    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Datatable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <BasicTable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Responsive Datatable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <ResponsiveDataTable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sortable DataTable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive  ">
                                <Card>
                                    <DataTable value={products} stripedRows tableStyle={{ minWidth: '50rem' }}>
                                        <Column field="name" header="Name"></Column>
                                        <Column field="position" header="Position"></Column>
                                        <Column field="office" header="Office"></Column>
                                        <Column field="age" header="Age"></Column>
                                        <Column field="salary" header="Salary"></Column>
                                    </DataTable>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Scroll Data Table
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive  ">
                                <Card>
                                    <DataTable value={products} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                                        <Column field="name" header="Name"></Column>
                                        <Column field="position" header="Position"></Column>
                                        <Column field="office" header="Office"></Column>
                                        <Column field="age" header="Age"></Column>
                                        <Column field="salary" header="Salary"></Column>
                                    </DataTable>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Delete Row Datatable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="deleted-table table-responsive">
                                <div className="text-center">
                                </div>
                                <Savetable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Datatables;
