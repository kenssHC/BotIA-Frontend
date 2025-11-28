import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./base-datos.scss";
import { HiAdjustments } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Box } from "@mui/material";
import { Dropdown, Button, Modal, Form } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronDown, faTimes, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaDownload, FaTrashAlt, FaFileExcel, FaExclamationTriangle, FaUpload } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ConfirmacionModal from '../../components/form-components/confirmacion-modal';

registerLocale("es", es);

const temperatureOptions = [
  { value: "Frío", label: "Frío" },
  { value: "Tibio", label: "Tibio" },
  { value: "Caliente", label: "Caliente" },
];

export const BaseDatos = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [showTemperatureDropdown, setShowTemperatureDropdown] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: {
      start: new Date(),
      end: new Date(),
    },
    temperature: [],
  });
  const [selectedTemperatures, setSelectedTemperatures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploadError, setUploadError] = useState(false);
  const [nombreBD, setNombreBD] = useState('');
  const [etiquetaBD, setEtiquetaBD] = useState('');
  const [archivos, setArchivos] = useState([]);
  const fileInputRef = React.useRef();
  const MAX_SIZE_MB = 1024;
  const SUPPORTED_FORMATS = ['.xls', '.xlsx'];

  const handleAddTemperature = (temperature) => {
    if (!selectedTemperatures.includes(temperature)) {
      setSelectedTemperatures([...selectedTemperatures, temperature]);
    }
    setShowTemperatureDropdown(false);
  };

  const handleRemoveTemperature = (temperature) => {
    setSelectedTemperatures(selectedTemperatures.filter((temp) => temp !== temperature));
  };

  const handleDateChange = (date, type) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [type]: date,
      },
    }));
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      temperature: selectedTemperatures,
    }));
  }, [selectedTemperatures]);

  // Datos de ejemplo (reemplazar por datos reales en producción)
  const data = [
    {
      nombre: 'Base de datos 1', etiqueta: 'Clientes', idLead: '100202', fechaCreacion: '12/11/24', fechaDerivacion: '12/11/24', tiempoDerivacion: '01:00', origen: 'WhatsApp Inbound', contactado: 'Sí', nombrePersona: 'Carlos', apellido: 'Arauco', dni: '46168480', celular: '958970108', correo: 'carlosfelipe.ag@...', temperatura: 'Frío', marca: 'KIA', idProducto: '30457', productos: 'Picanto', tienda: 'Surquillo', departamento: 'Lima', distrito: 'Surquillo'
    },
    {
      nombre: 'Base de datos 2', etiqueta: 'Región A', idLead: '100203', fechaCreacion: '12/11/24', fechaDerivacion: '12/11/24', tiempoDerivacion: '01:00', origen: 'WhatsApp Out..', contactado: 'No', nombrePersona: 'Roxana', apellido: 'Cueto', dni: '23342343', celular: '999888777', correo: 'roxana@gmail...', temperatura: 'No contactado', marca: 'KIA', idProducto: '30457', productos: 'Picanto', tienda: 'Trujillo', departamento: 'La Libertad', distrito: 'Trujillo'
    },
    {
      nombre: 'Base de datos 1', etiqueta: 'Clientes', idLead: '100204', fechaCreacion: '12/11/24', fechaDerivacion: '12/11/24', tiempoDerivacion: '01:00', origen: 'Messenger', contactado: 'Sí', nombrePersona: 'Alejandro', apellido: 'Arévalo', dni: '23423433', celular: '999666555', correo: 'alejandro@gmail...', temperatura: 'Caliente', marca: 'KIA', idProducto: '30457', productos: 'Picanto', tienda: 'San Miguel', departamento: 'Lima', distrito: 'San Miguel'
    },
    {
      nombre: 'Base de datos 4', etiqueta: 'Urgente', idLead: '100205', fechaCreacion: '12/11/24', fechaDerivacion: '12/11/24', tiempoDerivacion: '01:00', origen: 'Instagram', contactado: 'Sí', nombrePersona: 'Jose', apellido: 'Perez', dni: '23543454', celular: '999666556', correo: 'pedro@gmail.com', temperatura: 'Descartado', marca: 'KIA', idProducto: '30457', productos: 'Picanto', tienda: 'Piura', departamento: 'Piura', distrito: 'Piura'
    }
  ];

  // Calcular total de páginas
  const totalPages = Math.ceil(data.length / recordsPerPage);

  // Obtener los registros de la página actual
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Manejar selección individual
  const handleRowSelect = (rowIdx) => {
    setSelectedRows((prev) =>
      prev.includes(rowIdx)
        ? prev.filter((idx) => idx !== rowIdx)
        : [...prev, rowIdx]
    );
  };

  // Manejar selección global
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(getCurrentPageData().map((_, idx) => (currentPage - 1) * recordsPerPage + idx));
    } else {
      setSelectedRows((prev) => prev.filter(idx => {
        const pageIdx = idx - (currentPage - 1) * recordsPerPage;
        return pageIdx < 0 || pageIdx >= getCurrentPageData().length;
      }));
    }
  };

  // Limpiar selección
  const clearSelection = () => setSelectedRows([]);

  // Eliminar seleccionados (solo ejemplo, aquí solo limpia selección)
  const deleteSelected = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    setSelectedRows([]);
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const nuevosArchivos = files.map(file => {
      const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
      let error = '';
      if (!SUPPORTED_FORMATS.includes(ext)) {
        error = 'Formato no soportado';
      } else if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        error = 'Archivo demasiado grande';
      }
      return {
        file,
        name: file.name,
        size: file.size,
        error,
        status: error ? 'error' : 'ok',
      };
    });
    setArchivos([...archivos, ...nuevosArchivos]);
    fileInputRef.current.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileChange({ target: { files: e.dataTransfer.files } });
  };

  const handleRemove = (idx) => {
    setArchivos(archivos.filter((_, i) => i !== idx));
  };

  const handleRetry = (idx) => {
    setArchivos(archivos.map((a, i) => i === idx ? { ...a, error: '', status: 'ok' } : a));
  };

  return (
    <Box>
      <Box className="breadcrumb">
        <span>Base de datos</span>
      </Box>
      <div className="base-datos-container">
        <div className="base-datos-header">
          <h1>Base de datos</h1>
          <button
            className="new-record-btn"
            onClick={() => setShowUploadModal(true)}
          >
            Nueva base de datos
          </button>
        </div>

        <div className="base-datos-content">
          <h2>Registro de datos</h2>
          <p className="description">
            En esta sección podrás visualizar, editar y gestionar los registros
            de tu base de datos.
          </p>

          <div className="base-datos-tools">
            <div className="filters-section">
              <button
                className="filter-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <HiAdjustments />
                Filtros
              </button>

              {showFilters && (
                <div className="filters-dropdown">
                  <div className="filter-row">
                    <div className="filter-field">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          className="filter-dropdown-toggle"
                        >
                          Fecha <FontAwesomeIcon icon={faChevronDown} />
                        </Dropdown.Toggle>
                      </Dropdown>
                      <div className="date-range">
                        <span>Del</span>
                        <div className="date-input">
                          <DatePicker
                            selected={filters.dateRange.start}
                            onChange={(date) => handleDateChange(date, "start")}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            locale="es"
                            selectsStart
                            startDate={filters.dateRange.start}
                            endDate={filters.dateRange.end}
                            placeholderText="Seleccionar fecha"
                          />
                          <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <span>Al</span>
                        <div className="date-input">
                          <DatePicker
                            selected={filters.dateRange.end}
                            onChange={(date) => handleDateChange(date, "end")}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            locale="es"
                            selectsEnd
                            startDate={filters.dateRange.start}
                            endDate={filters.dateRange.end}
                            minDate={filters.dateRange.start}
                            placeholderText="Seleccionar fecha"
                          />
                          <FontAwesomeIcon icon={faCalendar} />
                        </div>
                      </div>
                      <Button variant="link" className="remove-filter">
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </div>
                  </div>

                  <div className="filter-row">
                    <div className="filter-field">
                      <Dropdown
                        show={showTemperatureDropdown}
                        onToggle={() =>
                          setShowTemperatureDropdown(!showTemperatureDropdown)
                        }
                      >
                        <Dropdown.Toggle
                          variant="light"
                          className="filter-dropdown-toggle"
                        >
                          Temperatura <FontAwesomeIcon icon={faChevronDown} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="temperature-dropdown">
                          {temperatureOptions.map((option) => (
                            <Dropdown.Item
                              key={option.value}
                              onClick={() => handleAddTemperature(option.value)}
                              className={
                                selectedTemperatures.includes(option.value)
                                  ? "selected"
                                  : ""
                              }
                            >
                              {option.label}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="selected-temperatures">
                        {selectedTemperatures.map((temp) => (
                          <div key={temp} className="temperature-tag">
                            {temp}
                            <button
                              type="button"
                              className="remove-tag"
                              onClick={() => handleRemoveTemperature(temp)}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <Button variant="link" className="remove-filter">
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </div>
                  </div>

                  <button className="add-filter-btn">+ Añadir filtro</button>
                </div>
              )}
            </div>

            <div
              className="search-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flex: 1,
              }}
            >
              <BiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar en registro de datos"
                className="search-input"
              />
              <button className="excel-download-btn">
                <FaDownload style={{ marginRight: 8 }} /> Descargar en excel
              </button>
              <span className="excel-settings-btn">
                <FiSettings />
              </span>
            </div>
          </div>
        </div>

        <div className="base-datos-table-wrapper">
          <table className="base-datos-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={
                      getCurrentPageData().length > 0 &&
                      getCurrentPageData().every((_, idx) =>
                        selectedRows.includes(
                          (currentPage - 1) * recordsPerPage + idx
                        )
                      )
                    }
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
                <th>Nombre de la Base de datos</th>
                <th>Etiqueta</th>
                <th>ID lead</th>
                <th>Fecha de creación</th>
                <th>Fecha de derivación</th>
                <th>Tiempo de derivación</th>
                <th>Origen</th>
                <th>Contactado</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Temperatura</th>
                <th>Marca</th>
                <th>ID producto</th>
                <th>Productos</th>
                <th>Tienda</th>
                <th>Departamento</th>
                <th>Distrito</th>
              </tr>
            </thead>
            <tbody>
              {getCurrentPageData().map((row, idx) => {
                const globalIdx = (currentPage - 1) * recordsPerPage + idx;
                return (
                  <tr key={idx}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(globalIdx)}
                        onChange={() => handleRowSelect(globalIdx)}
                      />
                    </td>
                    <td>{row.nombre}</td>
                    <td>
                      <span className="etiqueta">{row.etiqueta}</span>
                    </td>
                    <td>{row.idLead}</td>
                    <td>{row.fechaCreacion}</td>
                    <td>{row.fechaDerivacion}</td>
                    <td>{row.tiempoDerivacion}</td>
                    <td>{row.origen}</td>
                    <td>{row.contactado}</td>
                    <td>{row.nombrePersona}</td>
                    <td>{row.apellido}</td>
                    <td>{row.dni}</td>
                    <td>{row.celular}</td>
                    <td>{row.correo}</td>
                    <td>{row.temperatura}</td>
                    <td>{row.marca}</td>
                    <td>{row.idProducto}</td>
                    <td>{row.productos}</td>
                    <td>{row.tienda}</td>
                    <td>{row.departamento}</td>
                    <td>{row.distrito}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* PAGINACIÓN */}
        <div className="pagination-container">
          <div className="records-per-page">
            <span>Registros por página:</span>
            <select
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="records-select"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="pagination-controls">
            <button
              className="page-nav"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    className={`page-number ${
                      pageNumber === currentPage ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
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
            <button
              className="page-nav"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      {/* ALERTA DE SELECCIÓN FLOTANTE */}
      {selectedRows.length > 0 && (
        <div className="selection-alert-floating">
          <button className="close-btn" onClick={clearSelection}>
            <IoClose size={24} />
          </button>
          <span className="selected-count">
            {selectedRows.length} registro{selectedRows.length > 1 ? "s" : ""}{" "}
            seleccionados
          </span>
          <button className="delete-btn" onClick={deleteSelected}>
            <FaTrashAlt style={{ marginRight: 6 }} /> Eliminar
          </button>
        </div>
      )}
      <ConfirmacionModal
        show={showConfirmModal}
        onHide={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="¿Estás seguro que deseas eliminar los registros seleccionados?"
        message={`Esta acción no se puede deshacer. Se eliminarán ${
          selectedRows.length
        } registro${selectedRows.length > 1 ? "s" : ""}.`}
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
      />

      {/* Modal Nueva Base de Datos */}
      <Modal
        show={showUploadModal}
        onHide={() => setShowUploadModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Añadir base de datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de la base de datos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe el nombre de tu archivo"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
              <Form.Label>Etiqueta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe el nombre de identificación de tu base de datos"
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
                  <span className="text-muted">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)}MB
                  </span>
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
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Seleccionar archivo
                  </Button>
                  <input
                    id="fileInput"
                    type="file"
                    accept=".xls,.xlsx"
                    onChange={handleFileSelect}
                    style={{ display: "none" }}
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
              <a href="#" className="text-primary">
                Descargar plantilla de ejemplo aquí
              </a>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            onClick={() => setShowUploadModal(false)}
          >
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
    </Box>
  );
};
