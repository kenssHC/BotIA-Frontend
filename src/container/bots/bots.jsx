import React, { useState } from 'react';
import { Card, Row, Col, Button, Table, Breadcrumb, Form } from 'react-bootstrap';
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ConfirmacionModal from '../../components/form-components/confirmacion-modal';
import './bots.scss';

const Bots = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [botToDelete, setBotToDelete] = useState(null);
  const [data, setData] = useState([
    {
      nombre: 'Bot 1 de WhatsApp',
      tipoAtencion: 'Outbound',
      rol: 'Vendedor',
      canal: 'whatsapp',
      activo: true
    },
    {
      nombre: 'Asistente de soporte',
      tipoAtencion: 'Inbound',
      rol: 'Asistente comercial',
      canal: 'telefono',
      activo: true
    },
    {
      nombre: 'Chatbot de ventas',
      tipoAtencion: 'Outbound',
      rol: 'Capacitador',
      canal: 'whatsapp',
      activo: false
    }
  ]);

  // Calcular el total de páginas
  const totalPages = Math.ceil(data.length / recordsPerPage);

  // Obtener los registros de la página actual
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleToggleActivo = (index) => {
    const newData = [...data];
    newData[index].activo = !newData[index].activo;
    setData(newData);
  };

  const handleDeleteClick = (bot) => {
    setBotToDelete(bot);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (botToDelete) {
      const newData = data.filter(bot => bot !== botToDelete);
      setData(newData);
      setShowDeleteModal(false);
      setBotToDelete(null);
    }
  };

  return (
    <div className="bots-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item active>Bots</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="bots-header">
                <h1 className="bots-title">Bots</h1>
                <Button 
                  variant="primary" 
                  className="nuevo-bot-btn"
                  onClick={() => navigate('/bots/nuevo')}
                >
                  Nuevo bot
                </Button>
              </div>

              <hr className="separator" />

              <div className="bots-section">
                <h3 className="section-title">Registro de bots</h3>
                <p className="section-description">
                  En esta sección podrás configurar y visualizar todos los bots potenciados con I.A.
                </p>

                <div className="table-responsive">
                  <Table className="table-bots">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Tipo de atención</th>
                        <th>Rol</th>
                        <th>Canal</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentPageData().map((item, index) => (
                        <tr key={index}>
                          <td>{item.nombre}</td>
                          <td>{item.tipoAtencion}</td>
                          <td>{item.rol}</td>
                          <td>
                            {item.canal === 'whatsapp' ? (
                              <i className="ri-whatsapp-line"></i>
                            ) : (
                              <i className="ri-phone-line"></i>
                            )}
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <Form.Check
                                type="switch"
                                id={`custom-switch-${index}`}
                                checked={item.activo}
                                onChange={() => handleToggleActivo(index)}
                                className="custom-switch"
                              />

                              <Dropdown align="end">
                                <Dropdown.Toggle
                                  as="span"
                                  variant="link"
                                  className="icono-dropdown p-0"
                                >
                                  <RiMore2Fill className="text-muted" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                  <Dropdown.Item className="d-flex align-items-center">
                                    <RiFileCopyLine className="me-2" /> Duplicar
                                  </Dropdown.Item>
                                  <Dropdown.Item className="d-flex align-items-center">
                                    <RiPencilLine className="me-2" /> Editar
                                  </Dropdown.Item>
                                  <Dropdown.Item 
                                    className="d-flex align-items-center text-danger"
                                    onClick={() => handleDeleteClick(item)}
                                  >
                                    <RiDeleteBinLine className="me-2" /> Eliminar
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
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
                      <option value={5}>5</option>
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
                      &lt;
                    </Button>
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      if (
                        pageNumber === 1 ||
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
                        pageNumber === currentPage - 2 ||
                        pageNumber === currentPage + 2
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
                      &gt;
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ConfirmacionModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title="¿Te gustaría eliminar permanentemente este bot?"
        message="Una vez eliminado, dejará de ser accesible."
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
      />
    </div>
  );
};

export default Bots;
