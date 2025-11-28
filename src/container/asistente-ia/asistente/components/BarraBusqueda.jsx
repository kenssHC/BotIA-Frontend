import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Form } from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';

/**
 * Componente que muestra la barra de búsqueda para filtrar informes
 */
const BarraBusqueda = ({ busqueda, onChange }) => {
  return (
    <InputGroup className="mb-4 search-input">
      <InputGroup.Text className="search-icon">
        <RiSearchLine />
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Buscar en registro de informes de análisis"
        value={busqueda}
        onChange={onChange}
      />
    </InputGroup>
  );
};

BarraBusqueda.propTypes = {
  busqueda: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BarraBusqueda;