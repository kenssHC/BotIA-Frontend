import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import './informacion-negocio.scss';
import { Breadcrumb } from 'react-bootstrap';

const InformacionNegocio = () => {
  return (
    <div className="main-container container-fluid">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item>Fine - Tunning</Breadcrumb.Item>
          <Breadcrumb.Item active>Información del negocio</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Header>
              <h3>
                <strong>Información del negocio</strong>
              </h3>
              <p className="text-muted">
                En esta sección podrás personalizar la información del negocio.
              </p>
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="form-section">
                  <h4>Datos de contacto</h4>

                  <Form.Group className="mb-3">
                    <Form.Label>Razón social</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Escribe la razón social"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>RUC</Form.Label>
                    <Form.Control type="text" placeholder="Escribe el RUC" />
                  </Form.Group>

                  <Row>
                    <Col md={8}>
                      <Form.Group className="mb-3">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Escribe la dirección del negocio"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select>
                          <option value="">Huaraz</option>
                          {/* Add more departments as needed */}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={8}>
                      <Form.Group className="mb-3">
                        <Form.Label>Contacto</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Escribe el nombre del contacto"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Teléfono de contacto</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Escribe el teléfono de contacto"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div className="form-section">
                  <h4>Redes sociales y página web</h4>

                  <Form.Group className="mb-3">
                    <Form.Label>Página web</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://novaley.com.pe/"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://facebook.com/tuempresa"
                     
                    />
                  
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>WhatsApp</Form.Label>
                    <Form.Control type="text" placeholder="+51945678965" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Youtube</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://youtube.com/c/tuempresa"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://linkedin.com/company/tuempresa"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>TikTok</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://tiktok.com/@tuempresa"
                    />
                  </Form.Group>
                </div>

                <div className="form-section">
                  <h4>Historia de la marca</h4>
                  <p className="text-muted">
                    En esta sección podrás contar la historia de tu marca.
                  </p>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                </div>

                <div className="form-section">
                  <h4>Personalidad de la marca</h4>
                  <p className="text-muted">
                    En esta sección podrás describir la personalidad de tu
                    marca.
                  </p>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                </div>

                <div className="form-buttons">
                  <Button variant="secondary" className="me-2">
                    Cancelar
                  </Button>
                  <Button variant="primary">Guardar</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InformacionNegocio;
