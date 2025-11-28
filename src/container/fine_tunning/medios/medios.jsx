import React, { useState } from 'react';
import { Card, Row, Col, Button, Breadcrumb, Dropdown, Modal, Form } from 'react-bootstrap';
import { FiMoreVertical, FiPlus, FiEdit2, FiTrash2, FiCopy, FiX } from 'react-icons/fi';
import ConfirmacionModal from '../../../components/form-components/confirmacion-modal';
import './medios.scss';
import MultiSelectProducts from './MultiSelectProducts';

const initialImages = [
  {
    id: "img1",
    src: "https://picsum.photos/id/1015/400/400",
    alt: "Imagen aleatoria 1",
    selected: false,
  },
  {
    id: "img2",
    src: "https://picsum.photos/id/1016/400/400",
    alt: "Imagen aleatoria 2",
    selected: false,
  },
  {
    id: "img3",
    src: "https://picsum.photos/id/1018/400/400",
    alt: "Imagen aleatoria 3",
    selected: false,
  },
  {
    id: "img4",
    src: "https://picsum.photos/id/1020/400/400",
    alt: "Imagen aleatoria 4",
    selected: false,
  },
  {
    id: "img5",
    src: "https://picsum.photos/id/1024/400/400",
    alt: "Imagen aleatoria 5",
    selected: false,
  },
  {
    id: "img6",
    src: "https://picsum.photos/id/1025/400/400",
    alt: "Imagen aleatoria 6",
    selected: false,
  },
  {
    id: "img7",
    src: "https://picsum.photos/id/1027/400/400",
    alt: "Imagen aleatoria 7",
    selected: false,
  },
  {
    id: "img8",
    src: "https://picsum.photos/id/1035/400/400",
    alt: "Imagen aleatoria 8",
    selected: false,
  },
  {
    id: "img9",
    src: "https://picsum.photos/id/1039/400/400",
    alt: "Imagen aleatoria 9",
    selected: false,
  },
  {
    id: "img10",
    src: "https://picsum.photos/id/1041/400/400",
    alt: "Imagen aleatoria 10",
    selected: false,
  }
];

const AddMediaModal = ({ show, onHide }) => {
  const [selectedProductNames, setSelectedProductNames] = useState([]);
  const [fileName, setFileName] = useState('');

  const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
    { id: 4, name: 'Producto 4' },
  ];

  const productNames = products.map(p => p.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Productos seleccionados:', selectedProductNames);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered className="add-media-modal">
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title as="h2" className="modal-title-bold">Añadir medios</Modal.Title>
          <Button variant="link" onClick={onHide} className="close-button">
            <FiX />
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-4">
            <Form.Label>Nombre del archivo (opcional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe el nombre de tu archivo"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </Form.Group>

          <MultiSelectProducts
            options={productNames}
            selected={selectedProductNames}
            onChange={setSelectedProductNames}
          />

          <div className="recommendations-section">
            <h6>Recomendaciones para los archivos</h6>
            <ul className="text-muted">
              <li>Formatos soportados (.jpg, .jpeg, .png, PDF, MP4, o H.264)</li>
              <li>Peso máximo del archivo: 256 MB</li>
            </ul>
          </div>

          <Form.Group className="mb-4">
            <Form.Label>Archivo</Form.Label>
            <div className="upload-section">
              <div className="upload-area">
                <p>Suelta tu archivo aquí para cargarlo o</p>
                <Button variant="outline-primary" className="select-file-btn">
                  <FiPlus className="me-2" /> Seleccionar archivo
                </Button>
              </div>
            </div>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Añadir
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

const Medios = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState(null);

  const handleImageSelect = (id) => {
    const updatedImages = images.map(img => ({
      ...img,
      selected: img.id === id ? !img.selected : false
    }));
    setImages(updatedImages);
    setSelectedImage(updatedImages.find(img => img.selected) || null);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleDelete = (image) => {
    setMediaToDelete(image);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (mediaToDelete) {
      setImages(prevImages => prevImages.filter(img => img.id !== mediaToDelete.id));
      if (selectedImage && selectedImage.id === mediaToDelete.id) {
        setSelectedImage(null);
      }
      setShowDeleteModal(false);
      setMediaToDelete(null);
    }
  };

  return (
    <div className="medios-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item>Fine - Tunning</Breadcrumb.Item>
          <Breadcrumb.Item active>Medios</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="header">
                <h2 className="medios-title">Medios</h2>
                <Button 
                  variant="primary" 
                  className="anadir-medio"
                  onClick={() => setShowAddModal(true)}
                >
                  <FiPlus className="me-1" /> Añadir medio
                </Button>
              </div>

              <div className="biblioteca-section">
                <div className="section-header">
                  <h3>Biblioteca de medios</h3>
                  <p>Banco de imágenes, videos y documentos de todos los productos del negocio.</p>
                </div>

                <Row>
                  <Col lg={selectedImage ? 8 : 12}>
                    <div className="media-grid">
                      {images.map((image) => (
                        <div 
                          key={image.id} 
                          className={`media-item ${image.selected ? 'selected' : ''}`}
                          onClick={() => handleImageSelect(image.id)}
                        >
                          <div className="media-item-header">
                            <div className="checkbox-wrapper">
                              <input
                                type="checkbox"
                                checked={image.selected}
                                onChange={() => handleImageSelect(image.id)}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle variant="link" className="more-options">
                                <FiMoreVertical />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>
                                  <FiCopy /> Duplicar
                                </Dropdown.Item>
                                <Dropdown.Item>
                                  <FiEdit2 /> Editar
                                </Dropdown.Item>
                                <Dropdown.Item 
                                  className="delete"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(image);
                                  }}
                                >
                                  <FiTrash2 /> Eliminar
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <img src={image.src} alt={image.alt} />
                        </div>
                      ))}
                    </div>
                  </Col>
                  
                  {selectedImage && (
                    <Col lg={4}>
                      <div className="details-panel">
                        <div className="metadata-container">
                          <div className="metadata-header">
                            <div className="file-info">
                              <span className="file-name">Imagen-1.jpg</span>
                              <span className="file-size">200 MB</span>
                            </div>
                            <Dropdown align="start" className="actions-menu">
                              <Dropdown.Toggle variant="link" className="action-toggle">
                                <FiMoreVertical />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item className="action-item">
                                  <FiCopy className="action-icon" />
                                  Duplicar
                                </Dropdown.Item>
                                <Dropdown.Item className="action-item">
                                  <FiEdit2 className="action-icon" />
                                  Editar
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item 
                                  className="action-item delete"
                                  onClick={() => handleDelete(selectedImage)}
                                >
                                  <FiTrash2 className="action-icon" />
                                  Eliminar
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="preview-container">
                            <img 
                              src={selectedImage.src} 
                              alt={selectedImage.alt}
                              className="preview-image"
                            />
                          </div>
                          <div className="metadata-details">
                            <h4>Información</h4>
                            <table className="metadata-table">
                              <tbody>
                                <tr>
                                  <td>Nombre</td>
                                  <td>Imagen-1.jpg</td>
                                </tr>
                                <tr>
                                  <td>Tamaño</td>
                                  <td>200 MB</td>
                                </tr>
                                <tr>
                                  <td>Formato</td>
                                  <td>JPG</td>
                                </tr>
                                <tr>
                                  <td>Fecha de carga</td>
                                  <td>{formatDate('2024-11-22')}</td>
                                </tr>
                                <tr>
                                  <td>Dimensiones</td>
                                  <td>960×840</td>
                                </tr>
                                <tr>
                                  <td>Enlace</td>
                                  <td>
                                    <a href="https://novaly.com/.../7hints=off" target="_blank" rel="noopener noreferrer">
                                      https://novaly.com/.../7hints=off
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <AddMediaModal 
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
      />

      <ConfirmacionModal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
          setMediaToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Eliminar medio"
        message="¿Estás seguro que deseas eliminar este medio? Esta acción no se puede deshacer."
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
      />
    </div>
  );
};

export default Medios;
