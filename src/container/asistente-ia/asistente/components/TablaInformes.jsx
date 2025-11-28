import React from 'react';
import PropTypes from 'prop-types';
import { Table, Form, Dropdown } from 'react-bootstrap';
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';

/**
 * Componente que muestra la tabla de informes con sus acciones
 */
const TablaInformes = ({ informes, onToggleActivo, onEliminar }) => {
  return (
    <div className="report-table-container">
      <Table hover responsive className="align-middle text-nowrap mb-0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de creación</th>
            <th>Periodicidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {informes.map((informe, idx) => (
            <tr key={idx}>
              <td>{informe.nombre}</td>
              <td>{informe.fecha}</td>
              <td>{informe.periodicidad}</td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <Form.Check
                    type="switch"
                    id={`custom-switch-${idx}`}
                    checked={informe.activo}
                    onChange={() => onToggleActivo(informe)}
                    className="custom-switch"
                  />

                  <Dropdown align="end">
                    <Dropdown.Toggle
                      as="span"
                      variant="link"
                      className="icono-dropdown p-0"
                      aria-expanded="false"
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
                        onClick={() => onEliminar(informe)}
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
  );
};

TablaInformes.propTypes = {
  informes: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      periodicidad: PropTypes.string.isRequired,
      activo: PropTypes.bool
    })
  ).isRequired,
  onToggleActivo: PropTypes.func.isRequired,
  onEliminar: PropTypes.func.isRequired
};

export default TablaInformes;