import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const FiltrosPanel = ({ onApplyFilters, filters: initialFilters }) => {
  const [localFilters, setLocalFilters] = useState(initialFilters);

  useEffect(() => {
    // Sincroniza los filtros locales si los initialFilters cambian desde el padre
    setLocalFilters(initialFilters);
  }, [initialFilters]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(localFilters); // Envía los criterios de filtro al componente padre
  };

  const handleResetFilters = () => {
    const resetValues = { sortBy: '', status: '' }; // Los valores por defecto de tus filtros
    setLocalFilters(resetValues);
    onApplyFilters(resetValues); // También notifica al padre sobre el reseteo
  };

  return (
    <div className="filtros-panel">
      <h5>Opciones de Filtro</h5>
      <Form>
        {/* Sección de Ordenamiento */}
        <Form.Group className="mb-3">
          <Form.Label>Ordenar por:</Form.Label>
          <Form.Select 
            name="sortBy" 
            value={localFilters.sortBy} 
            onChange={handleChange}
          >
            <option value="">Ninguno</option>
            <option value="reciente">Más reciente</option>
          </Form.Select>
        </Form.Group>

        {/* Sección de Filtro por Estado */}
        <Form.Group className="mb-3">
          <Form.Label>Estado:</Form.Label>
          <Form.Select 
            name="status" // Este 'name' se usa en el objeto 'filters' del padre
            value={localFilters.status} 
            onChange={handleChange}
          >
            <option value="">Todos</option>
            <option value="sin_leer">Sin leer</option> {/* <--- ¡VERIFICAR ESTE VALUE! */}
          </Form.Select>
        </Form.Group>

        {/* Botones de acción */}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="secondary" onClick={handleResetFilters} className="btn-sm">
            Restablecer
          </Button>
          <Button variant="primary" onClick={handleApplyFilters} className="btn-sm">
            Aplicar Filtros
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FiltrosPanel;