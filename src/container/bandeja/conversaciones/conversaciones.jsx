import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button } from 'react-bootstrap'; // Se quita Collapse
import '../../../assets/scss/bandeja-mensajes/Mensajeria.scss'; // Asegúrate que esta ruta sea correcta
import setupAxiosInterceptors from '../../../utils/axiosConfig';

import ClientesPanel from '../../../components/bandeja-mensajes/ClientesPanel.jsx';
import InfoPanel from '../../../components/bandeja-mensajes/InfoPanel.jsx'; // Si lo usas
import ChatPanel from '../../../components/bandeja-mensajes/ChatPanel.jsx';
import FiltrosPanel from '../../../components/bandeja-mensajes/FiltrosPanel.jsx';

// Configurar interceptores de Axios
setupAxiosInterceptors();

const Conversaciones = () => {
  const [numeros, setNumeros] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false); // Estado para controlar la visibilidad del panel de filtros
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({
    sortBy: '', // 'reciente', etc.
    status: '', // 'sin_leer', 'finalizadas', etc.
  });
  const [filteredNumeros, setFilteredNumeros] = useState([]);

  // Función para obtener la lista de números (clientes)
  const fetchNumeros = useCallback(async () => {
    try {
      console.log('Intentando cargar clientes desde API...');
      const res = await axios.get('/api/messages_whatsapp/clientes/numeros');
      console.log("Respuesta completa de la API:", res);
      console.log("Datos de clientes recibidos de la API:", res.data);
      
      // Adaptamos la respuesta dependiendo de la estructura que venga del backend
      let conversaciones = [];
      
      if (res.data) {
        // Intentar diferentes estructuras de respuesta
        if (res.data.data && res.data.data.numeros_conversaciones) {
          conversaciones = res.data.data.numeros_conversaciones;
        } else if (res.data.numeros_conversaciones) {
          conversaciones = res.data.numeros_conversaciones;
        } else if (res.data.conversations) {
          conversaciones = res.data.conversations;
        } else if (res.data.data) {
          conversaciones = res.data.data;
        } else if (Array.isArray(res.data)) {
          conversaciones = res.data;
        } else {
          console.log('Estructura de respuesta no reconocida');
          conversaciones = [];
        }
      }
      
      console.log("Conversaciones procesadas:", conversaciones);
      
      // Establecer los datos recibidos, aunque sea un array vacío
      setNumeros(conversaciones || []);
      setError(null);
      
      if (conversaciones && conversaciones.length > 0) {
        console.log('Clientes cargados exitosamente desde API');
      } else {
        console.log('No hay conversaciones disponibles en el servidor');
      }
      
    } catch (err) {
      console.error('Error al cargar los clientes:', err);
      console.error('Detalles del error:', {
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        message: err.message,
        code: err.code
      });
      
      // Limpiar los datos y mostrar error
      setNumeros([]);
      
      // Mostrar error al usuario
      if (err.response?.status === 404) {
        setError('No se encontraron conversaciones');
      } else if (err.response?.status === 401) {
        setError('Error de autenticación. Por favor, inicia sesión nuevamente');
      } else if (err.response?.status >= 500) {
        setError('Error interno del servidor. Intenta más tarde');
      } else if (!err.response) {
        setError('Error de conexión. Verifica tu conexión a internet');
      } else {
        setError(`Error al conectar con el servidor: ${err.response.statusText || err.message}`);
      }
    }
  }, []);

  // Lógica de búsqueda y filtros
  const applyFiltersAndSearch = useCallback(() => {
    let currentNumeros = [...numeros]; // Usa una copia del estado 'numeros' como base

    // Lógica de Búsqueda por Nombre o Número
    if (searchText) {
      currentNumeros = currentNumeros.filter(item => {
        const phoneMatch = String(item.numero_telefono).toLowerCase().includes(searchText.toLowerCase());
        const nameMatch = item.nombre && item.nombre.toLowerCase().includes(searchText.toLowerCase());
        // Removida la lógica de 'tagsMatch' ya que no se implementará para tags
        
        return phoneMatch || nameMatch; // Solo busca por número o nombre
      });
    }

    // Lógica de Filtros Rápidos (Sin leer, Finalizadas)
    if (filters.status === 'sin_leer') {
      currentNumeros = currentNumeros.filter(item => item.nuevos_mensajes > 0);
    }

    if (filters.status === 'finalizadas') {
      currentNumeros = currentNumeros.filter(item =>
        // Asume que 'item.estado_conversacion' existe y puede ser 'finalizada'
        item.estado_conversacion && item.estado_conversacion.toLowerCase() === 'finalizada'
      );
    }

    // Lógica de Ordenamiento
    if (filters.sortBy === 'reciente') {
        currentNumeros.sort((a, b) => {
            const dateA = new Date(a.ultimo_mensaje_timestamp);
            const dateB = new Date(b.ultimo_mensaje_timestamp);

            if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
            if (isNaN(dateA.getTime())) return 1;
            if (isNaN(dateB.getTime())) return -1;

            return dateB.getTime() - dateA.getTime();
        });
    }

    setFilteredNumeros(currentNumeros);
  }, [numeros, searchText, filters]);

  // Efecto para cargar la lista de números al montar el componente
  useEffect(() => {
    fetchNumeros();
    // Opcional: Polling para actualizar la lista de clientes periódicamente
    // const pollingInterval = setInterval(fetchNumeros, 5000);
    // return () => clearInterval(pollingInterval);
  }, [fetchNumeros]);

  // Efecto para aplicar filtros y búsqueda cada vez que 'numeros', 'searchText' o 'filters' cambian
  useEffect(() => {
    if (numeros.length > 0 || searchText || Object.keys(filters).length > 0) {
      applyFiltersAndSearch();
    } else if (numeros.length === 0 && !searchText && Object.keys(filters).length === 0) {
      setFilteredNumeros([]);
    }
  }, [numeros, searchText, filters, applyFiltersAndSearch]);

  const handleFilterButtonClick = () => {
    setShowFilters(!showFilters);
  };

  // Manejador para el cambio en el input de búsqueda
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Manejador para cuando se aplican filtros desde FiltrosPanel
  const handleFiltersChange = (newFilters) => {
    setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters, ...newFilters };
        console.log("Filtros aplicados:", updatedFilters); // Log para depuración
        return updatedFilters;
    });
    setShowFilters(false); // Cierra el panel de filtros
  };

  // Previene el envío del formulario del buscador al presionar Enter
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  // Función para seleccionar un teléfono y marcar sus mensajes como leídos
  const handleSelectPhone = async (phone) => {
    setSelectedPhone(phone); // Establece el teléfono seleccionado

    try {
      console.log(`Intentando marcar mensajes como leídos para ${phone}`);
      const response = await axios.post(`/api/messages_whatsapp/conversations/${phone}/markAsRead`);
      if (response.data && response.data.success) {
        console.log(`Mensajes para ${phone} marcados como leídos.`);
        fetchNumeros(); // Refresca la lista de clientes para actualizar el badge de no leídos
      }
    } catch (error) {
      console.error("Error al marcar mensajes como leídos:", error);
      // No mostrar error al usuario, solo loggearlo
    }
  };

  return (
    <div className="bandeja-container">
      <Row className="encabezado align-items-center justify-content-between mb-3">
        <Col md={6}>
          <div className="texto">
            <h4 className="titulo">Conversaciones</h4>
            <p className="subtitulo">
              En esta sección podrás visualizar las conversaciones de todos tus clientes.
            </p>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-end align-items-center gap-3">
          <Button variant="outline-primary" className="btn-filtros" onClick={handleFilterButtonClick}>
            <i className="bi bi-sliders" /> Filtros
          </Button>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Buscar en conversaciones"
              className="busqueda"
              value={searchText}
              onChange={handleSearchInputChange}
            />
          </Form>
        </Col>
      </Row>

      {/* Renderizado condicional del panel de filtros (sin Collapse) */}
      {showFilters && (
        <div className="filtros-overlay"> {/* Esta clase manejará el posicionamiento absoluto/fijo */}
          <FiltrosPanel onApplyFilters={handleFiltersChange} filters={filters} />
        </div>
      )}

      {error && <div className="error">{error}</div>}

      <div className="contenedor-paneles d-flex">
        <ClientesPanel
          numeros={searchText || Object.keys(filters).length > 0 ? filteredNumeros : numeros}
          selectedPhone={selectedPhone}
          onSelectPhone={handleSelectPhone}
        />

        {selectedPhone ? (
          <>
            {/* <InfoPanel phoneNumber={selectedPhone} /> */}
            <ChatPanel phoneNumber={selectedPhone} />
          </>
        ) : (
          <div className="placeholder-panel">
            Selecciona un cliente para ver detalles y conversación
          </div>
        )}
      </div>
    </div>
  );
};

export default Conversaciones;