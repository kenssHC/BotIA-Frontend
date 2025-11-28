import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Table, Breadcrumb, Modal } from 'react-bootstrap';
import MultiSelectProducts from '../medios/MultiSelectProducts';
import './productos.scss';

const Productos = () => {
  const [searchText, setSearchText] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploadError, setUploadError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [data, setData] = useState([
    {
      modelo: 'All New-K3',
      introduccion: 'El Kia K3 Sedan',
      caracteristicas: 'Aros de Aleación 15"',
      colores: 'Tengo estos color...',
      texto: 'Texto',
      medios: null
    },
    // Añadiendo más datos de ejemplo para la paginación
    ...Array(15).fill(null).map((_, index) => ({
      modelo: `Modelo ${index + 2}`,
      introduccion: `Introducción ${index + 2}`,
      caracteristicas: `Características ${index + 2}`,
      colores: `Colores ${index + 2}`,
      texto: `Texto ${index + 2}`,
      medios: null
    }))
  ]);

  // Calcular el total de páginas
  const totalPages = Math.ceil(data.length / recordsPerPage);

  // Obtener los registros de la página actual
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024 * 1024) { // 1GB
        setUploadError(true);
        return;
      }
      
      const extension = file.name.split('.').pop().toLowerCase();
      if (!['xls', 'xlsx'].includes(extension)) {
        setUploadError(true);
        return;
      }
      
      setSelectedFile(file);
      setUploadError(false);
    }
  };

  const handleUpload = () => {
    // Handle the file upload logic here
    setShowUploadModal(false);
    setSelectedFile(null);
    setFileName('');
  };

  return (
    <div className="productos-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item>Fine - Tunning</Breadcrumb.Item>
          <Breadcrumb.Item active>Productos</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="productos-header">
                <h2 className="productos-title">Productos</h2>
                <Button 
                  variant="primary" 
                  className="carga-masiva-btn"
                  onClick={() => setShowUploadModal(true)}
                >
                  Carga masiva
                </Button>
              </div>

              <div className="dataset-section">
                <h3 className="dataset-title">Dataset</h3>
                <div className="dataset-header">
                  <p className="dataset-description">
                    Base de datos de todos los productos del negocio. En esta sección podrás editar y reorganizar cada campo.
                  </p>
                  <div className="dataset-controls">
                    <div className="search-container">
                      <Form.Control
                        type="text"
                        placeholder="Buscar en dataset"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="search-input"
                      />
                    </div>
                    <Button variant="outline-primary" className="download-excel-btn">
                      Descargar en excel
                    </Button>
                  </div>
                </div>

                <div className="table-responsive">
                  <Table className="table-dataset">
                    <thead>
                      <tr>
                        <th>Modelo</th>
                        <th>Introducciones de modelo</th>
                        <th>Características destacadas</th>
                        <th>Colores disponibles</th>
                        <th>Texto</th>
                        <th>Medios</th>
                        <th>
                          <Button variant="light" className="add-column-btn">
                            + Añadir columna
                          </Button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentPageData().map((item, index) => (
                        <tr key={index}>
                          <td>{item.modelo}</td>
                          <td>{item.introduccion}</td>
                          <td>{item.caracteristicas}</td>
                          <td>{item.colores}</td>
                          <td>{item.texto}</td>
                          <td>
                            <Button variant="light" className="add-media-btn">
                              +
                            </Button>
                          </td>
                          <td></td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <Button variant="light" className="add-row-btn">
                            + Añadir fila
                          </Button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
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

              <Modal 
                show={showUploadModal} 
                onHide={() => setShowUploadModal(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Carga masiva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre del archivo (opcional)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribe el nombre de tu archivo"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                      />
                    </Form.Group>

                    <div className="mb-3">
                      <h6>Recomendaciones para los archivos</h6>
                      <ul className="text-muted">
                        <li>Formatos soportados (.xls o .xlsx)</li>
                        <li>Peso máximo del archivo: 1 GB</li>
                      </ul>
                    </div>

                    <div className="upload-area border rounded p-4 text-center">
                      {selectedFile ? (
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-truncate">{selectedFile.name}</span>
                          <span className="text-muted">{(selectedFile.size / (1024 * 1024)).toFixed(2)}MB</span>
                          <Button 
                            variant="link" 
                            className="text-danger p-0"
                            onClick={() => setSelectedFile(null)}
                          >
                            ×
                          </Button>
                        </div>
                      ) : (
                        <>
                          <p className="mb-3">Suelta tu archivo aquí para cargarlo o</p>
                          <Button 
                            variant="outline-primary"
                            onClick={() => document.getElementById('fileInput').click()}
                          >
                            Seleccionar archivo
                          </Button>
                          <input
                            id="fileInput"
                            type="file"
                            accept=".xls,.xlsx"
                            onChange={handleFileSelect}
                            style={{ display: 'none' }}
                          />
                        </>
                      )}
                    </div>
                    {uploadError && (
                      <div className="text-danger mt-2">
                        El archivo debe ser formato .xls o .xlsx y no exceder 1 GB
                      </div>
                    )}
                    <div className="mt-3">
                      <a href="#" className="text-primary">Descargar plantilla de ejemplo aquí</a>
                    </div>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-primary" onClick={() => setShowUploadModal(false)}>
                    Cancelar
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={handleUpload}
                    disabled={!selectedFile || uploadError}
                  >
                    Cargar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Productos;
