import React, { useState } from 'react';
import { Card, Col, Row, Form, Button, Table, Dropdown, Modal } from 'react-bootstrap';
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';
import './preguntas-frecuentes.scss';
import { Breadcrumb } from 'react-bootstrap';

const PreguntasFrecuentes = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(6);
  const [newResponse, setNewResponse] = useState({
    tipo: 'Pregunta frecuente',
    pregunta: '',
    respuesta: ''
  });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResponse(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para guardar la nueva respuesta
    console.log('Nueva respuesta:', newResponse);
    handleCloseModal();
  };

  const faqData = [
    {
      tipo: 'Pregunta frecuente',
      pregunta: '¿Cómo puedo realizar un pedido?',
      respuesta: 'Para realizar un pedido, simplemente selecciona...'
    },
    {
      tipo: 'Pregunta frecuente',
      pregunta: '¿Cuáles son los métodos de pago disponibles?',
      respuesta: 'Aceptamos pagos a través de tarjetas de crédito...'
    },
    {
      tipo: 'Pregunta frecuente',
      pregunta: '¿Cómo puedo cambiar o cancelar mi pedido?',
      respuesta: 'Si deseas modificar o cancelar tu pedido...'
    },
    {
      tipo: 'Pregunta frecuente',
      pregunta: '¿Cuánto tiempo tarda el envío?',
      respuesta: 'Los envíos estándar suelen tardar entre 3 y 7 días...'
    },
    {
      tipo: 'Objeción frecuente',
      pregunta: 'El precio es demasiado alto. No puedo pagar...',
      respuesta: 'Entiendo que el precio es una preocupación...'
    },
    {
      tipo: 'Objeción frecuente',
      pregunta: 'Quiero pensarlo un poco más antes de tomar...',
      respuesta: 'Es completamente natural querer reflexionar...'
    }
  ];

  // Calcular el total de páginas
  const totalPages = Math.ceil(faqData.length / recordsPerPage);

  // Obtener los registros de la página actual
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return faqData.slice(startIndex, endIndex);
  };

  return (
    <div className="preguntas-frecuentes-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item>Fine - Tunning</Breadcrumb.Item>
          <Breadcrumb.Item active>Respuestas frecuentes</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3><strong>Respuestas frecuentes</strong></h3>
              <div className="header-right">
                <Button variant="primary" onClick={handleShowModal}>Nueva respuesta</Button>
              </div>
            </Card.Header>
            <Card.Body>
               <div className="faq-description">
                <strong><h4>Lista de respuestas frecuentes</h4></strong>
              </div>

              <div className="faq-description">
                <p>En esta sección podrás personalizar las preguntas y objeciones frecuentes del negocio.</p>
              </div>
              
              <div className="search-container">
                <Form.Control 
                  type="text" 
                  placeholder="Buscar en lista de respuestas frecuentes"
                  className="search-input"
                />
              </div>

              <div className="table-responsive">
                <Table className="faq-table">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Pregunta u objeción</th>
                      <th>Respuesta</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCurrentPageData().map((item, index) => (
                      <tr key={index}>
                        <td>{item.tipo}</td>
                        <td>{item.pregunta}</td>
                        <td>{item.respuesta}</td>
                        <td>
                          <Dropdown align="end">
                            <Dropdown.Toggle as="span" variant="link" className="icono-dropdown p-0">
                              <RiMore2Fill className="text-muted" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item className="d-flex align-items-center">
                                <RiFileCopyLine className="me-2" /> Duplicar
                              </Dropdown.Item>
                              <Dropdown.Item className="d-flex align-items-center">
                                <RiPencilLine className="me-2" /> Editar
                              </Dropdown.Item>
                              <Dropdown.Item className="d-flex align-items-center text-danger">
                                <RiDeleteBinLine className="me-2" /> Eliminar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <div className="pagination-container">
                <div className="records-per-page">
                  <span>Registros por página:</span>
                  <Form.Select 
                    value={recordsPerPage}
                    onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                    className="records-select"
                  >
                    <option value={6}>6</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </Form.Select>
                </div>
                <div className="pagination-controls">
                  <Button 
                    variant="link" 
                    className="page-nav"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    ‹
                  </Button>
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Mostrar siempre las primeras 6 páginas, la última y las páginas alrededor de la actual
                    if (
                      pageNumber <= 6 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={pageNumber}
                          variant="link"
                          className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      );
                    } else if (
                      (pageNumber === 7 && totalPages > 7) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNumber} className="page-ellipsis">...</span>;
                    }
                    return null;
                  })}
                  <Button 
                    variant="link" 
                    className="page-nav"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    ›
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal de Nueva Respuesta */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva respuesta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="mb-4">
              <Form.Label className="form-label-bold">Tipo y descripción de la respuesta</Form.Label>
              <Form.Group className="mb-3">
                <Form.Label className="form-label-light">Tipo</Form.Label>
                <Form.Select 
                  name="tipo"
                  value={newResponse.tipo}
                  onChange={handleInputChange}
                  className="form-select-custom"
                >
                  <option>Pregunta frecuente</option>
                  <option>Objeción frecuente</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label-light">Pregunta u objeción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escribe una pregunta u objeción"
                  name="pregunta"
                  value={newResponse.pregunta}
                  onChange={handleInputChange}
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label-light">Respuesta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe una respuesta a la pregunta u objeción"
                  name="respuesta"
                  value={newResponse.respuesta}
                  onChange={handleInputChange}
                  className="form-control-custom"
                />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Crear respuesta
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PreguntasFrecuentes;
