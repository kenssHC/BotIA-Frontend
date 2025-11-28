import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

/**
 * Componente que muestra los controles de paginación
 */
const Paginacion = ({
  paginaActual,
  totalPaginas,
  registrosPorPagina,
  indiceInicial,
  indiceFinal,
  totalRegistros,
  onPaginaChange,
  onRegistrosPorPaginaChange
}) => {
  // Calcular los números de página a mostrar
  const paginasAMostrar = useMemo(() => {
    const paginas = [];
    let inicio;
    
    if (totalPaginas <= 5) {
      inicio = 1;
    } else if (paginaActual <= 3) {
      inicio = 1;
    } else if (paginaActual >= totalPaginas - 2) {
      inicio = totalPaginas - 4;
    } else {
      inicio = paginaActual - 2;
    }
    
    const fin = Math.min(inicio + 4, totalPaginas);
    
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    
    return paginas;
  }, [paginaActual, totalPaginas]);

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="d-flex align-items-center">
        <span className="me-2 text-muted">Mostrar</span>
        <Form.Select
          className="form-select-sm rounded-pill"
          style={{ width: '80px' }}
          value={registrosPorPagina}
          onChange={onRegistrosPorPaginaChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </Form.Select>
        <span className="ms-2 text-muted">registros por página</span>
      </div>

      <div className="d-flex align-items-center">
        <span className="me-3 text-muted">
          Mostrando {indiceInicial + 1} a {Math.min(indiceFinal, totalRegistros)} de {totalRegistros} registros
        </span>

        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
              <button className="page-link rounded-start-pill" onClick={() => onPaginaChange(1)}>Primero</button>
            </li>
            <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPaginaChange(Math.max(1, paginaActual - 1))}>&lt;</button>
            </li>

            {paginasAMostrar.map(pageNum => (
              <li key={pageNum} className={`page-item ${paginaActual === pageNum ? 'active' : ''}`}>
                <button className="page-link" onClick={() => onPaginaChange(pageNum)}>{pageNum}</button>
              </li>
            ))}

            <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => onPaginaChange(Math.min(totalPaginas, paginaActual + 1))}>&gt;</button>
            </li>
            <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
              <button className="page-link rounded-end-pill" onClick={() => onPaginaChange(totalPaginas)}>Último</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Paginacion.propTypes = {
  paginaActual: PropTypes.number.isRequired,
  totalPaginas: PropTypes.number.isRequired,
  registrosPorPagina: PropTypes.number.isRequired,
  indiceInicial: PropTypes.number.isRequired,
  indiceFinal: PropTypes.number.isRequired,
  totalRegistros: PropTypes.number.isRequired,
  onPaginaChange: PropTypes.func.isRequired,
  onRegistrosPorPaginaChange: PropTypes.func.isRequired
};

export default Paginacion;