import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FiCopy, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Form, Dropdown, Modal } from 'react-bootstrap';
import ConfirmacionModal from '../../../components/form-components/confirmacion-modal.jsx';
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';
import './gestor-citas.scss';
import { useNavigate } from 'react-router-dom';

const remindersMock = [
  { name: '¡Tu cita está confirmada!', channel: 'whatsapp', active: false },
  { name: 'Cita confirmada – ¡No faltes!', channel: 'llamada', active: true },
  { name: '¡Solo queda 5 días para tu cita!', channel: 'whatsapp', active: false },
  { name: '¡El éxito está a un paso! Tu cita confirmada', channel: 'whatsapp', active: false },
  { name: 'Agenda confirmada: ¡No faltes a tu oportunidad!', channel: 'llamada', active: false },
];

export const GestorCitas = () => {
  const [reminders, setReminders] = useState(remindersMock);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [addMenuAnchor, setAddMenuAnchor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reminderToDelete, setReminderToDelete] = useState(null);
  const navigate = useNavigate();

  const totalPages = Math.ceil(reminders.length / recordsPerPage);
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return reminders.slice(startIndex, endIndex);
  };

  const handleSwitch = (idx) => {
    const newReminders = [...reminders];
    newReminders[idx].active = !newReminders[idx].active;
    setReminders(newReminders);
  };

  const handleMenuOpen = (event, idx) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(idx);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  const handleAddMenuOpen = (event) => {
    setAddMenuAnchor(event.currentTarget);
  };
  const handleAddMenuClose = () => {
    setAddMenuAnchor(null);
  };

  const handleDeleteClick = (reminder) => {
    setReminderToDelete(reminder);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setReminders(prev => prev.filter(r => r !== reminderToDelete));
    setShowDeleteModal(false);
    setReminderToDelete(null);
  };

  return (
    <Box>
      <Box className="main-content-wrapper">
        <Box className="breadcrumb">
          <span>Automatización</span> <span className="chevron">›</span>{' '}
          <span className="current">Gestor de citas</span>
        </Box>
        <Box className="main-card">
          <Box className="header-row">
            <Typography variant="h4" className="title">
              Gestor de citas
            </Typography>
            <Button
              variant="contained"
              className="nuevo-recordatorio-btn"
              onClick={handleAddMenuOpen}
            >
              Nuevo recordatorio
            </Button>
            <Menu
              anchorEl={addMenuAnchor}
              open={Boolean(addMenuAnchor)}
              onClose={handleAddMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={() => { handleAddMenuClose(); navigate('/automatizacion/gestor-citas/nuevo/whatsapp'); }}>
                <FaWhatsapp className="icon-wsp" /> WhatsApp
              </MenuItem>
              <MenuItem onClick={() => { handleAddMenuClose(); navigate('/automatizacion/gestor-citas/nuevo/llamadas'); }}>
                <BsTelephone className="icon-call" /> Llamadas
              </MenuItem>
            </Menu>
          </Box>
          <hr className="divider" />
          <Box className="subtitle-block">
            <Typography variant="h6" className="subtitle">
              Registro de recordatorios de citas
            </Typography>
            <Typography className="desc">
              En esta sección podrás visualizar, duplicar, editar, activar o
              desactivar los recordatorios de las citas agendadas.
            </Typography>
          </Box>
          <Box className="table-block">
            <Box className="table-responsive">
              <table className="reminders-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Canal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentPageData().map((reminder, idx) => (
                    <tr key={idx}>
                      <td>{reminder.name}</td>
                      <td>
                        {reminder.channel === 'whatsapp' ? (
                          <FaWhatsapp className="icon-wsp" />
                        ) : (
                          <BsTelephone className="icon-call" />
                        )}
                      </td>
                      <td className="actions-cell">
                        <Form.Check
                          type="switch"
                          id={`custom-switch-${idx}`}
                          checked={reminder.active}
                          onChange={() =>
                            handleSwitch((currentPage - 1) * recordsPerPage + idx)
                          }
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
                              onClick={() => handleDeleteClick(reminder)}
                            >
                              <RiDeleteBinLine className="me-2" /> Eliminar
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Box className="pagination-row">
              <span>Registros por página:&nbsp;</span>
              <select
                value={recordsPerPage}
                onChange={e => {
                  setRecordsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="records-select"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <div className="pagination-controls">
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  {'<'}
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`page-btn${currentPage === i + 1 ? ' active' : ''}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  {'>'}
                </button>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <ConfirmacionModal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
          setReminderToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Eliminar recordatorio"
        message="¿Estás seguro que deseas eliminar este recordatorio? Esta acción no se puede deshacer."
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
      />
    </Box>
  );
};

export default GestorCitas;
