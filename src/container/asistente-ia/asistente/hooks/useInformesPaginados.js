import { useState, useMemo } from 'react';

/**
 * Hook personalizado para manejar la paginación y filtrado de informes
 * @param {Array} informes - Lista completa de informes
 * @returns {Object} - Objeto con estados y funciones para manejar la paginación y filtrado
 */
const useInformesPaginados = (informes) => {
  const [busqueda, setBusqueda] = useState('');
  const [registrosPorPagina, setRegistrosPorPagina] = useState(5);
  const [paginaActual, setPaginaActual] = useState(1);

  // Filtrar informes basados en la búsqueda (memoizado para evitar recálculos innecesarios)
  const informesFiltrados = useMemo(() => {
    return informes.filter(informe =>
      informe.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      informe.fecha.toLowerCase().includes(busqueda.toLowerCase()) ||
      informe.periodicidad.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [informes, busqueda]);

  // Calcular paginación (memoizado)
  const paginacion = useMemo(() => {
    const totalPaginas = Math.ceil(informesFiltrados.length / registrosPorPagina);
    const indiceInicial = (paginaActual - 1) * registrosPorPagina;
    const indiceFinal = indiceInicial + registrosPorPagina;
    const informesPaginados = informesFiltrados.slice(indiceInicial, indiceFinal);

    return {
      totalPaginas,
      indiceInicial,
      indiceFinal,
      informesPaginados
    };
  }, [informesFiltrados, registrosPorPagina, paginaActual]);

  // Función para manejar cambios en la búsqueda
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1); // Resetear a la primera página cuando se busca
  };

  // Función para manejar cambios en registros por página
  const handleRegistrosPorPaginaChange = (e) => {
    setRegistrosPorPagina(Number(e.target.value));
    setPaginaActual(1); // Resetear a la primera página cuando se cambia el número de registros
  };

  // Función para ajustar la paginación después de eliminar un informe
  const ajustarPaginacion = (informesPaginadosActuales) => {
    if (paginaActual > 1 && informesPaginadosActuales.length === 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return {
    busqueda,
    registrosPorPagina,
    paginaActual,
    informesFiltrados,
    ...paginacion,
    setBusqueda,
    setRegistrosPorPagina,
    setPaginaActual,
    handleBusquedaChange,
    handleRegistrosPorPaginaChange,
    ajustarPaginacion
  };
};

export default useInformesPaginados;