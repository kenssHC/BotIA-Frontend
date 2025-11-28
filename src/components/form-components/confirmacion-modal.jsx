import React from 'react';
import { Button, Modal} from 'react-bootstrap';

const ConfirmacionModal = ({ show, onHide, onConfirm, title, message, confirmButtonText, cancelButtonText }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Body>
                <p><strong>{title}</strong></p>
                <p className="text-muted">{message}</p>
                <div className="d-flex justify-content-end mt-3">
                    <Button variant="outline-secondary" onClick={onHide} className="me-2">
                        {cancelButtonText || 'Cancelar'}
                    </Button>
                    <Button variant="danger" onClick={onConfirm}>
                        {confirmButtonText || 'Eliminar'}
                    </Button>
                </div> 
            </Modal.Body>

        </Modal>
    );
}

export default ConfirmacionModal;