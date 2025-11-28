import React, { useState, useRef } from 'react';
import { Card, Row, Col, Button, Form, Table, Breadcrumb, Dropdown, Modal, Spinner, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FiDownload, FiUpload, FiMoreVertical, FiEdit2, FiCopy, FiTrash2, FiX, FiMinus, FiPlus } from 'react-icons/fi';
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';
import ConfirmacionModal from '../../../components/form-components/confirmacion-modal';
import './tiendas.scss';

const departamentosData = {
  Huaraz: ['Miraflores', 'Independencia'],
  Lima: ['Miraflores', 'Surco', 'San Isidro'],
  Cusco: ['Wanchaq', 'Santiago'],
};
const diasSemana = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
];

function SucursalModal({ show, onHide }) {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    departamento: 'Huaraz',
    distrito: 'Miraflores',
    telefono: '',
    horarios: [{ dia: 'Lunes', desde: '09:00', hasta: '12:00' }],
    slotsIlimitados: false,
    tiempoSlot: '',
    atencionesPorSlot: 1,
    enlaceUbicacion: '',
    archivos: [],
  });
  const [errores, setErrores] = useState({});
  const [subiendo, setSubiendo] = useState([]);
  const fileInputRef = useRef();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (name === 'departamento') {
      setForm(f => ({
        ...f,
        distrito: departamentosData[value][0]
      }));
    }
  };
  const handleHorarioChange = (idx, field, value) => {
    setForm(f => {
      const horarios = [...f.horarios];
      horarios[idx][field] = value;
      return { ...f, horarios };
    });
  };
  const addHorario = () => setForm(f => ({
    ...f,
    horarios: [...f.horarios, { dia: 'Lunes', desde: '', hasta: '' }]
  }));
  const removeHorario = idx => setForm(f => ({
    ...f,
    horarios: f.horarios.filter((_, i) => i !== idx)
  }));
  const incSlots = () => setForm(f => ({ ...f, atencionesPorSlot: f.atencionesPorSlot + 1 }));
  const decSlots = () => setForm(f => ({ ...f, atencionesPorSlot: Math.max(1, f.atencionesPorSlot - 1) }));
  const handleFileInput = e => {
    const files = Array.from(e.target.files).slice(0, 2 - form.archivos.length);
    if (!files.length) return;
    subirArchivos(files);
  };
  const handleDrop = e => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).slice(0, 2 - form.archivos.length);
    if (!files.length) return;
    subirArchivos(files);
  };
  const subirArchivos = files => {
    files.forEach(file => {
      setSubiendo(s => [...s, file.name]);
      setTimeout(() => {
        setForm(f => ({
          ...f,
          archivos: [...f.archivos, { file, estado: 'ok' }]
        }));
        setSubiendo(s => s.filter(n => n !== file.name));
      }, 1200);
    });
  };
  const removeArchivo = idx => setForm(f => ({
    ...f,
    archivos: f.archivos.filter((_, i) => i !== idx)
  }));
  const validar = () => {
    const err = {};
    if (!form.nombre.trim()) err.nombre = 'Obligatorio';
    if (!form.direccion.trim()) err.direccion = 'Obligatorio';
    if (!form.telefono.trim()) err.telefono = 'Obligatorio';
    if (!/^[0-9\-+() ]{6,}$/.test(form.telefono)) err.telefono = 'Teléfono inválido';
    if (!form.enlaceUbicacion.trim()) err.enlaceUbicacion = 'Obligatorio';
    if (form.enlaceUbicacion && !/^https?:\/\//.test(form.enlaceUbicacion)) err.enlaceUbicacion = 'URL inválida';
    if (form.horarios.some(h => !h.desde || !h.hasta)) err.horarios = 'Completa todos los horarios';
    if (!form.slotsIlimitados && !form.tiempoSlot) err.tiempoSlot = 'Obligatorio';
    return err;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const err = validar();
    setErrores(err);
    if (Object.keys(err).length === 0) {
      onHide();
    }
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      aria-modal="true"
      role="dialog"
      className="modal-sucursal"
      backdropClassName="modal-backdrop"
    >
      <div className="modal-header d-flex justify-content-between align-items-center">
        <h2 className="mb-0 fs-4">Sucursal</h2>
        <Button variant="link" aria-label="Cerrar" onClick={onHide} className="p-0">
          <FiX size={28} />
        </Button>
      </div>
      <Modal.Body>
        <Form onSubmit={handleSubmit} autoComplete="off" className="form-sucursal">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre</Form.Label>
            <Form.Control
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Escribe el nombre de la sucursal"
              value={form.nombre}
              onChange={handleChange}
              isInvalid={!!errores.nombre}
              required
            />
            <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="direccion">Dirección</Form.Label>
            <Form.Control
              id="direccion"
              name="direccion"
              type="text"
              placeholder="Escribe la dirección de la sucursal"
              value={form.direccion}
              onChange={handleChange}
              isInvalid={!!errores.direccion}
              required
            />
            <Form.Control.Feedback type="invalid">{errores.direccion}</Form.Control.Feedback>
          </Form.Group>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="departamento">Departamento</Form.Label>
                <Form.Select
                  id="departamento"
                  name="departamento"
                  value={form.departamento}
                  onChange={handleChange}
                  aria-label="Departamento"
                >
                  {Object.keys(departamentosData).map(dep => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="distrito">Distrito</Form.Label>
                <Form.Select
                  id="distrito"
                  name="distrito"
                  value={form.distrito}
                  onChange={handleChange}
                  aria-label="Distrito"
                >
                  {departamentosData[form.departamento].map(dis => (
                    <option key={dis} value={dis}>{dis}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="telefono">Teléfono</Form.Label>
            <Form.Control
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="Escribe el teléfono de contacto"
              value={form.telefono}
              onChange={handleChange}
              isInvalid={!!errores.telefono}
              required
            />
            <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Horario de atención</Form.Label>
            <div className="horarios-container">
              {form.horarios.map((h, idx) => (
                <Row key={idx} className="horario-row mb-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Días</Form.Label>
                      <Form.Select
                        value={h.dia}
                        onChange={e => handleHorarioChange(idx, 'dia', e.target.value)}
                        aria-label="Día"
                        className="form-select-custom"
                      >
                        {diasSemana.map(dia => (
                          <option key={dia} value={dia}>{dia}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Desde (horas)</Form.Label>
                      <div className="time-input-container">
                        <Form.Control
                          type="time"
                          value={h.desde}
                          onChange={e => handleHorarioChange(idx, 'desde', e.target.value)}
                          aria-label="Desde"
                          required
                          className="time-input"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Hasta (horas)</Form.Label>
                      <div className="time-input-container">
                        <Form.Control
                          type="time"
                          value={h.hasta}
                          onChange={e => handleHorarioChange(idx, 'hasta', e.target.value)}
                          aria-label="Hasta"
                          required
                          className="time-input"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="d-flex align-items-end">
                    {form.horarios.length > 1 && (
                      <Button
                        variant="outline-primary"
                        onClick={() => removeHorario(idx)}
                        className="remove-horario-btn"
                        aria-label="Eliminar horario"
                      >
                        <FiMinus className="minus-icon" />
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Button
                variant="link"
                onClick={addHorario}
                className="add-horario-btn"
                aria-label="Añadir horario"
              >
                <span className="plus-icon">+</span> Añadir horarios
              </Button>
            </div>
            {errores.horarios && (
              <div className="text-danger small mt-2">{errores.horarios}</div>
            )}
          </Form.Group>
          <div className="slots-section mb-3">
            <div className="d-flex align-items-center justify-content-between mb-1">
              <div>
                <Form.Label className="mb-0" style={{ fontWeight: 600 }}>Slots ilimitados</Form.Label>
                <div className="text-muted small" style={{ marginTop: 2 }}>Establecer si la sucursal dispondrá de horarios con espacios ilimitados.</div>
              </div>
              <Form.Check
                type="switch"
                id="slotsIlimitados"
                name="slotsIlimitados"
                checked={form.slotsIlimitados}
                onChange={handleChange}
                aria-label="Slots ilimitados"
                className="ms-3"
                style={{ marginBottom: 0 }}
              />
            </div>
            {!form.slotsIlimitados && (
              <Row className="mt-3 align-items-end">
                <Col md={6} className="mb-3 mb-md-0">
                  <Form.Group>
                    <div className="d-flex align-items-center mb-1">
                      <Form.Label htmlFor="tiempoSlot" className="mb-0">Tiempo de slots</Form.Label>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-tiempo-slot">Es el limite de atención límite por cliente.</Tooltip>}
                      >
                        <span className="ms-1" style={{ cursor: 'pointer', color: '#6366f1', fontSize: 18 }}><i className="bi bi-info-circle" /></span>
                      </OverlayTrigger>
                    </div>
                    <div className="time-input-container">
                      <Form.Control
                        id="tiempoSlot"
                        name="tiempoSlot"
                        type="time"
                        value={form.tiempoSlot}
                        onChange={handleChange}
                        isInvalid={!!errores.tiempoSlot}
                        required
                        className="time-input"
                        placeholder="00:00"
                      />
                    </div>
                    <Form.Control.Feedback type="invalid">{errores.tiempoSlot}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <div className="d-flex align-items-center mb-1">
                      <Form.Label className="mb-0">Atenciones por slots</Form.Label>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-atenciones-slot">Cantidad de clientes atendidos por sesión.</Tooltip>}
                      >
                        <span className="ms-1" style={{ cursor: 'pointer', color: '#6366f1', fontSize: 18 }}><i className="bi bi-info-circle" /></span>
                      </OverlayTrigger>
                    </div>
                    <div className="numeric-stepper d-flex align-items-center">
                      <Button variant="outline-secondary" onClick={decSlots} aria-label="Menos atenciones" tabIndex={0} className="stepper-btn">-</Button>
                      <Form.Control
                        type="number"
                        min={1}
                        value={form.atencionesPorSlot}
                        readOnly
                        className="mx-2 text-center stepper-input"
                        style={{ width: 60 }}
                        aria-label="Atenciones por slot"
                      />
                      <Button variant="outline-secondary" onClick={incSlots} aria-label="Más atenciones" tabIndex={0} className="stepper-btn">+</Button>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            )}
          </div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="enlaceUbicacion">Enlace de ubicación</Form.Label>
            <Form.Control
              id="enlaceUbicacion"
              name="enlaceUbicacion"
              type="url"
              placeholder="Introduce el enlace de la ubicación"
              value={form.enlaceUbicacion}
              onChange={handleChange}
              isInvalid={!!errores.enlaceUbicacion}
              required
            />
            <Form.Control.Feedback type="invalid">{errores.enlaceUbicacion}</Form.Control.Feedback>
          </Form.Group>
          <div className="file-upload-section mb-3">
            <Form.Label>Imagen o video</Form.Label>
            <div
              className="file-drop-area mb-2"
              onDrop={handleDrop}
              onDragOver={e => e.preventDefault()}
              tabIndex={0}
              aria-label="Zona para soltar archivos"
            >
              Suelta tu archivo aquí para cargarlo o
              <br />JPG, PNG o MP4 con un tamaño máximo de 100 MB
              <br />Cantidad permitida: 2 archivos.
              <br />
              <Button
                variant="outline-primary"
                className="mt-2"
                onClick={() => fileInputRef.current.click()}
                aria-label="Seleccionar archivo"
              >
                <FiUpload className="me-2" /> Seleccionar archivo
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.png,.mp4"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileInput}
                aria-label="Seleccionar archivo"
              />
            </div>
            <div className="file-list">
              {form.archivos.map((a, idx) => (
                <div key={idx} className="file-item d-flex align-items-center justify-content-between mb-1">
                  <span>
                    {a.file.type.startsWith('image') ? (
                      <i className="bi bi-file-earmark-image me-2" aria-label="Imagen"></i>
                    ) : (
                      <i className="bi bi-file-earmark-play me-2" aria-label="Video"></i>
                    )}
                    {a.file.name} <span className="text-muted">{(a.file.size / 1024 / 1024).toFixed(2)} MB</span>
                    {subiendo.includes(a.file.name) && <Spinner animation="border" size="sm" className="ms-2" />}
                  </span>
                  <Button
                    variant="link"
                    size="sm"
                    aria-label="Eliminar archivo"
                    onClick={() => removeArchivo(idx)}
                    tabIndex={0}
                  >
                    <FiTrash2 />
                  </Button>
                </div>
              ))}
              {subiendo.length > 0 && (
                <div className="text-info small">Subiendo archivos...</div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button variant="secondary" onClick={onHide} type="button">
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Crear sucursal
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const Tiendas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTienda, setSelectedTienda] = useState(null);
  const [data] = useState([
    {
      id: 1,
      nombre: 'Tienda Miraflores',
      direccion: 'Av. Larco 456 - Miraflores',
      telefono: '263-4567',
      horario: 'Lunes a viernes 09:00 AM - 12:00 PM',
      departamento: 'Lima',
      distrito: 'Miraflores'
    },
    // Add more dummy data for pagination
    ...Array(15).fill(null).map((_, index) => ({
      id: index + 2,
      nombre: `Tienda ${index + 2}`,
      direccion: `Dirección ${index + 2}`,
      telefono: '263-4567',
      horario: 'Lunes a viernes 09:00 AM - 12:00 PM',
      departamento: 'Lima',
      distrito: 'Miraflores'
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

  const [showModal, setShowModal] = useState(false);

  const handleDelete = (tienda) => {
    setSelectedTienda(tienda);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedTienda) {
      setData(prevData => prevData.filter(item => item.id !== selectedTienda.id));
      setShowDeleteModal(false);
      setSelectedTienda(null);
    }
  };

  return (
    <div className="tiendas-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item>Fine - Tunning</Breadcrumb.Item>
          <Breadcrumb.Item active>Tiendas</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="header">
                <h2 className="productos-title">Tiendas</h2>
                <Button
                  variant="primary"
                  className="nueva-sucursal"
                  onClick={() => setShowModal(true)}
                >
                  Nueva sucursal
                </Button>
              </div>
              <div className="sucursales-section">
                <div className="section-header">
                  <h3>Lista de sucursales</h3>
                  <p>
                    En esta sección podrás consultar la información detallada de
                    cada sucursal de tu negocio.
                  </p>
                </div>
                <div className="actions-bar">
                  <Button variant="outline-primary" className="download-btn">
                    <FiDownload /> Descargar en excel
                  </Button>
                  <Button variant="outline-secondary" className="upload-btn">
                    <FiUpload /> Carga masiva
                  </Button>
                </div>
                <div className="table-responsive">
                  <Table className="tiendas-table">
                    <thead>
                      <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Horario de atención</th>
                        <th>Departamento</th>
                        <th>Distrito</th>
                        <th className="actions-header">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentPageData().map((tienda) => (
                        <tr key={tienda.id}>
                          <td>{tienda.id}</td>
                          <td>{tienda.nombre}</td>
                          <td>{tienda.direccion}</td>
                          <td>{tienda.telefono}</td>
                          <td>{tienda.horario}</td>
                          <td>{tienda.departamento}</td>
                          <td>{tienda.distrito}</td>
                          <td>
                            <Dropdown align="end">
                              <Dropdown.Toggle
                                variant="light"
                                className="action-toggle"
                              >
                                <FiMoreVertical />
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item className="dropdown-item">
                                  <FiCopy /> Duplicar
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item">
                                  <FiEdit2 /> Editar
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item d-flex align-items-center text-danger"
                                  onClick={() => handleDelete(tienda)}
                                >
                                  <FiTrash2 /> Eliminar
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
                      onChange={(e) =>
                        setRecordsPerPage(Number(e.target.value))
                      }
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
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </Button>
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 1 &&
                          pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <Button
                            key={pageNumber}
                            variant="link"
                            className={`page-number ${
                              pageNumber === currentPage ? "active" : ""
                            }`}
                            onClick={() => setCurrentPage(pageNumber)}
                          >
                            {pageNumber}
                          </Button>
                        );
                      } else if (
                        pageNumber === currentPage - 2 ||
                        pageNumber === currentPage + 2
                      ) {
                        return (
                          <span key={pageNumber} className="page-ellipsis">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                    <Button
                      variant="link"
                      className="page-nav"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
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
      <SucursalModal show={showModal} onHide={() => setShowModal(false)} />
      <ConfirmacionModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Eliminar sucursal"
        message={`¿Estás seguro que deseas eliminar la sucursal "${selectedTienda?.nombre}"?`}
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
      />
    </div>
  );
};

export default Tiendas; 