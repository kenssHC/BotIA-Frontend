import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

/**
 * Componente que muestra un modal de confirmación para eliminar un informe
 */
const ModalConfirmacion = ({ show, onHide, onConfirm }) => {
  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Body>
        <p><strong>¿Te gustaría eliminar permanentemente este registro de análisis?</strong></p>
        <p className="text-muted">Una vez eliminado, dejará de ser accesible.</p>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-secondary" onClick={onHide} className="me-2">
            Cancelar
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Eliminar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ModalConfirmacion.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default ModalConfirmacion;