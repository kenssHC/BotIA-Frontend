import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ListCampaigns.scss";
import { FaWhatsapp, FaChevronDown, FaTimes } from "react-icons/fa";
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Form, Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCalendar,
  faChevronDown,
  faTimes,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import ConfirmacionModal from "../../../../components/form-components/confirmacion-modal.jsx";
import { FiCopy, FiEdit2, FiTrash2 } from "react-icons/fi";
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import { Box } from "@mui/material";

// Registrar el locale español
registerLocale("es", es);

const temperatureOptions = [
  { value: "Frío", label: "Frío" },
  { value: "Tibio", label: "Tibio" },
  { value: "Caliente", label: "Caliente" },
];

export const ListCampaigns = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [showFilters, setShowFilters] = useState(false);
  const [showTemperatureDropdown, setShowTemperatureDropdown] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: {
      start: new Date("2024-11-15"),
      end: new Date("2024-12-04"),
    },
    temperature: ["Frío", "Tibio", "Caliente"],
  });
  const [campaigns, setCampaigns] = useState([
    {
      name: "Leads Fríos - Julio 2024 (Modelo A)",
      date: "20/11/2024",
      channels: ["whatsapp", "phone"],
      impacts: "3 de 5",
      active: true,
    },
    {
      name: "Leads Fríos - Julio 2024 (Modelo A)",
      date: "20/11/2024",
      channels: ["whatsapp", "phone"],
      impacts: "3 de 5",
      active: false,
    },
    {
      name: "Leads Fríos - Julio 2024 (Modelo A)",
      date: "20/11/2024",
      channels: ["whatsapp", "phone"],
      impacts: "3 de 5",
      active: false,
    },
    {
      name: "Leads Fríos - Julio 2024 (Modelo A)",
      date: "20/11/2024",
      channels: ["whatsapp", "phone"],
      impacts: "3 de 5",
      active: false,
    },
    {
      name: "Leads Fríos - Julio 2024 (Modelo A)",
      date: "20/11/2024",
      channels: ["whatsapp", "phone"],
      impacts: "3 de 5",
      active: false,
    },
  ]);
  const [selectedTemperatures, setSelectedTemperatures] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState(null);

  // Calculate total pages
  const totalPages = Math.ceil(campaigns.length / recordsPerPage);

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return campaigns.slice(startIndex, endIndex);
  };

  const handleToggleActive = (index) => {
    const newCampaigns = [...campaigns];
    newCampaigns[index].active = !newCampaigns[index].active;
    setCampaigns(newCampaigns);
  };

  const handleAddTemperature = (temperature) => {
    if (!selectedTemperatures.includes(temperature)) {
      setSelectedTemperatures([...selectedTemperatures, temperature]);
    }
    setShowTemperatureDropdown(false);
  };

  const handleRemoveTemperature = (temperature) => {
    setSelectedTemperatures(
      selectedTemperatures.filter((temp) => temp !== temperature)
    );
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

  const formatDate = (date) => {
    return format(date, "dd/MM/yyyy", { locale: es });
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      temperature: selectedTemperatures,
    }));
  }, [selectedTemperatures]);

  const handleDelete = (campaign) => {
    setCampaignToDelete(campaign);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCampaigns((prev) => prev.filter((c) => c !== campaignToDelete));
    setShowDeleteModal(false);
    setCampaignToDelete(null);
  };

  return (
    <Box>
      <Box className="breadcrumb">
        <span>Automatización</span> <span className="chevron">›</span>{" "}
        <span className="current">Campañas</span>
      </Box>
      <div className="campaigns-container">
        <div className="campaigns-header">
          <h1>Campañas</h1>
          <button
            className="new-campaign-btn"
            onClick={() => navigate("/dashboard/automatizacion/campaigns/new")}
          >
            Nueva campaña
          </button>
        </div>

        <div className="campaigns-content">
          <h2>Registro de campañas</h2>
          <p className="description">
            En esta sección podrás visualizar, duplicar, editar, activar o
            desactivar tus campañas.
          </p>

          <div className="campaigns-tools">
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
                              <FaTimes />
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

            <div className="search-container">
              <BiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar en registro de campañas"
                className="search-input"
              />
            </div>
          </div>

          <div className="campaigns-table">
            <div className="table-header">
              <div className="header-cell">Nombre</div>
              <div className="header-cell">Fecha de creación</div>
              <div className="header-cell">Canal</div>
              <div className="header-cell">Impactos aprobados</div>
              <div className="header-cell">Acciones</div>
            </div>

            <div className="table-body">
              {getCurrentPageData().map((campaign, index) => (
                <div className="table-row" key={index}>
                  <div className="cell">{campaign.name}</div>
                  <div className="cell">{campaign.date}</div>
                  <div className="cell channels">
                    <FaWhatsapp className="channel-icon whatsapp" />
                    <BsTelephone className="channel-icon phone" />
                  </div>
                  <div className="cell">{campaign.impacts}</div>
                  <div className="cell actions">
                    <Form.Check
                      type="switch"
                      id={`custom-switch-${index}`}
                      checked={campaign.active}
                      onChange={() => handleToggleActive(index)}
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
                          onClick={() => handleDelete(campaign)}
                        >
                          <RiDeleteBinLine className="me-2" /> Eliminar
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ))}
            </div>
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
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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

        <ConfirmacionModal
          show={showDeleteModal}
          onHide={() => {
            setShowDeleteModal(false);
            setCampaignToDelete(null);
          }}
          onConfirm={confirmDelete}
          title="Eliminar campaña"
          message="¿Estás seguro que deseas eliminar esta campaña? Esta acción no se puede deshacer."
          confirmButtonText="Eliminar"
          cancelButtonText="Cancelar"
        />
      </div>
    </Box>
  );
};
