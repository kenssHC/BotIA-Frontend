import React, { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import { Card, Col, Row, Table, Form, Button, Dropdown, Modal } from 'react-bootstrap';
import { RiMore2Fill, RiFileCopyLine, RiPencilLine, RiDeleteBinLine, RiPlayLine, RiEyeLine } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../assets/scss/asistente-ia/_asistente-ia.scss';
import NuevoReporte from './NuevoReporte';
import EditarReporte from './EditarReporte';
import ConfirmacionModal from '../../../components/form-components/confirmacion-modal';
import BusquedaBar from '../../../components/form-components/busqueda-bar';
import reportService from '../../../services/reportService';

const AsistenteIA = () => {
  const [informes, setInformes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [registrosPorPagina, setRegistrosPorPagina] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [reporteAEliminar, setReporteAEliminar] = useState(null);
  const [mostrarNuevoReporte, setMostrarNuevoReporte] = useState(false);
  const [reporteAEditar, setReporteAEditar] = useState(null);
  const [mostrarEditarReporte, setMostrarEditarReporte] = useState(false);
  const [showDetallesModal, setShowDetallesModal] = useState(false);
  const [reporteAVer, setReporteAVer] = useState(null);
  
  const informesRef = useRef(informes);
  useEffect(() => {
    informesRef.current = informes;
  }, [informes]);

  const cargarReportes = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const response = await reportService.getAllReports(100, 0);
      if (response.success && response.data) {
        const reportesTransformados = response.data.map(report => 
          reportService.transformReportForFrontend(report)
        );
        setInformes(reportesTransformados);
      } else {
        throw new Error(response.message || 'Error al cargar reportes');
      }
    } catch (error) {
      const errorMessage = error.message || 'Error al cargar los reportes';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const isScheduledForToday = useCallback((report, currentDayName, currentDayOfMonth) => {
    switch (report.frequency) {
      case 'daily': return Array.isArray(report.frequencyDetails) && report.frequencyDetails.map(d => d.toLowerCase()).includes(currentDayName);
      case 'weekly': return typeof report.frequencyDetails === 'string' && report.frequencyDetails.toLowerCase() === currentDayName;
      case 'monthly': return Number(report.frequencyDetails) === currentDayOfMonth;
      default: return false;
    }
  }, []);

  useEffect(() => {
    cargarReportes();

    const intervalId = setInterval(() => {
      const reportsToCheck = informesRef.current;
      if (!reportsToCheck || reportsToCheck.length === 0) return;

      const now = new Date();
      const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
      const currentDayName = dayNames[now.getDay()].toLowerCase();
      const currentDayOfMonth = now.getDate();
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      reportsToCheck.forEach(reporte => {
        if (!reporte.activo) {
          return; // Si el reporte está inactivo, lo ignora y no continúa.
        }

        if (reporte.time === currentTime && isScheduledForToday(reporte, currentDayName, currentDayOfMonth)) {
          console.log(`[Frontend Scheduler] ¡COINCIDENCIA! Disparando ejecución automática para Reporte ID: ${reporte.id}`);
          toast.info(`🤖 Ejecutando reporte programado: "${reporte.nombre}"...`);
          
          reportService.executeReportImmediate(reporte.id)
            .then(result => {
              if(result.success){
                console.log(`[Frontend Scheduler] Reporte ID ${reporte.id} ejecutado exitosamente.`);
                toast.success(`Reporte "${reporte.nombre}" enviado a tu correo.`);
              } else {
                throw new Error(result.data?.message || 'Falló la ejecución programada.');
              }
            })
            .catch(err => {
              console.error(`[Frontend Scheduler] Falló la ejecución del reporte ID ${reporte.id}:`, err);
              toast.error(`❌ Error al ejecutar "${reporte.nombre}": ${err.message}`);
            });
        }
      });
    }, 60000); // Se ejecuta cada minuto

    return () => {
      clearInterval(intervalId);
      console.log('[Frontend Scheduler] Reloj detenido.');
    };
  }, [cargarReportes, isScheduledForToday]);

  const handleToggleActivo = async (reporte) => {
    try {
      const nuevoEstado = !reporte.activo;
      await reportService.updateReport(reporte.id, { isActive: nuevoEstado });
      setInformes(prev => prev.map(inf => inf.id === reporte.id ? { ...inf, activo: nuevoEstado } : inf));
      toast.success(`Reporte ${nuevoEstado ? 'activado' : 'desactivado'} correctamente`);
    } catch (error) { toast.error('Error al actualizar el estado del reporte'); }
  };
  
  const handleDuplicarReporte = async (reporte) => {
    try {
      const reporteDuplicado = await reportService.duplicateReport(reporte.id);
      if (reporteDuplicado.success) {
        await cargarReportes();
        toast.success('Reporte duplicado correctamente');
      }
    } catch (error) { toast.error('Error al duplicar el reporte'); }
  };

  const handleEjecutarReporte = async (reporte) => {
    toast.info(`🚀 Ejecutando manualmente: "${reporte.nombre}"...`);
    try {
      const resultado = await reportService.executeReportImmediate(reporte.id);
      if (resultado.success) {
        toast.success(`Reporte "${reporte.nombre}" enviado a tu correo.`);
      } else {
        throw new Error(resultado.data?.message || 'Falló la ejecución manual.');
      }
    } catch (error) {
      toast.error(error.message || 'Error al ejecutar el reporte manualmente.');
    }
  };

  const eliminarInforme = async () => {
    if (!reporteAEliminar) return;
    try {
      await reportService.deleteReport(reporteAEliminar.id);
      await cargarReportes();
      setShowModal(false);
      setReporteAEliminar(null);
      toast.success('Reporte eliminado correctamente');
    } catch (error) { toast.error('Error al eliminar el reporte'); }
  };

  const handleNuevoReporte = async (nuevoReporteData) => {
    setMostrarNuevoReporte(false);
    if (nuevoReporteData) {
      await cargarReportes();
    }
  };

  const handleEditarReporte = (reporte) => {
    setReporteAEditar(reporte);
    setMostrarEditarReporte(true);
  };

  const handleActualizarReporte = async (reporteEditado) => {
    setMostrarEditarReporte(false);
    setReporteAEditar(null);
    if (reporteEditado) {
      await cargarReportes();
    }
  };

  const handleCancelarEdicion = () => {
    setMostrarEditarReporte(false);
    setReporteAEditar(null);
  };

  const handleVerDetalles = (reporte) => {
    setReporteAVer(reporte);
    setShowDetallesModal(true);
  };

  const formatearDetallesHorarios = (reporte) => {
    if (!reporte) return '';
    
    let detalles = '';
    
    switch (reporte.frequency) {
      case 'daily':
        if (Array.isArray(reporte.frequencyDetails)) {
          const dias = reporte.frequencyDetails.map(dia => 
            dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase()
          ).join(', ');
          detalles = `Se ejecutará diariamente los días: ${dias} a las ${reporte.time || 'No especificada'}`;
        } else {
          detalles = `Se ejecutará diariamente a las ${reporte.time || 'No especificada'}`;
        }
        break;
      case 'weekly':
        const diaCapitalizado = typeof reporte.frequencyDetails === 'string' 
          ? reporte.frequencyDetails.charAt(0).toUpperCase() + reporte.frequencyDetails.slice(1).toLowerCase()
          : 'No especificado';
        detalles = `Se ejecutará semanalmente los ${diaCapitalizado} a las ${reporte.time || 'No especificada'}`;
        break;
      case 'monthly':
        detalles = `Se ejecutará mensualmente el día ${reporte.frequencyDetails || 'No especificado'} a las ${reporte.time || 'No especificada'}`;
        break;
      default:
        detalles = 'Frecuencia no especificada';
    }
    
    return detalles;
  };

  if (mostrarNuevoReporte) { return (<NuevoReporte onVolver={handleNuevoReporte} />); }
  if (mostrarEditarReporte) { return (<EditarReporte reporte={reporteAEditar} onCancelar={handleCancelarEdicion} onReporteActualizado={handleActualizarReporte} />); }

  const informesFiltrados = informes.filter(informe =>
    (informe.nombre && informe.nombre.toLowerCase().includes(busqueda.toLowerCase())) ||
    (informe.fecha && informe.fecha.toLowerCase().includes(busqueda.toLowerCase())) ||
    (informe.periodicidad && informe.periodicidad.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const totalPaginas = Math.ceil(informesFiltrados.length / registrosPorPagina);
  const indiceInicial = (paginaActual - 1) * registrosPorPagina;
  const indiceFinal = indiceInicial + registrosPorPagina;
  const informesPaginados = informesFiltrados.slice(indiceInicial, indiceFinal);
  
  return (
    <Fragment>
      <Row>
        <Col xl={12}>
          <Card className='card-asistente-ia'>
            <div className="header-section">
              <h3 className='title'>Asistente IA</h3>
              <Button className='new-report-button' onClick={() => setMostrarNuevoReporte(true)} disabled={loading}>Nuevo reporte</Button>
            </div>
            <div className="content-section">
              <h5 className='section-subtitle'>Registro de informes de análisis</h5>
              <p className='section-description'>Visualiza, duplica, edita, activa o pausa los informes de análisis que el asistente de IA te enviará por correo.</p>
            </div>
            <BusquedaBar placeHolder="Buscar en registro de informes de análisis" value={busqueda} onChange={(value) => { setBusqueda(value); setPaginaActual(1); }}/>
            
            {loading && (<div className="text-center p-4"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando...</span></div><p className="mt-2">Cargando reportes...</p></div>)}
            {error && !loading && (<div className="alert alert-danger" role="alert"><strong>Error:</strong> {error}<Button variant="outline-primary" size="sm" className="ms-2" onClick={cargarReportes}>Reintentar</Button></div>)}
            
            {!loading && !error && (
              <>
                <div className="report-table-container">
                  <Table hover responsive className="align-middle text-nowrap mb-0">
                    <thead><tr><th>Nombre</th><th>Fecha de creación</th><th>Periodicidad</th><th>Estado</th><th>Acciones</th></tr></thead>
                    <tbody>
                      {informesPaginados.length === 0 ? (
                        <tr><td colSpan="5" className="text-center py-4">{informes.length === 0 ? 'No hay reportes creados' : 'No se encontraron reportes con esos criterios'}</td></tr>
                      ) : (
                        informesPaginados.map((informe) => (
                          <tr key={informe.id}>
                            <td>{informe.nombre}</td>
                            <td>{informe.fecha}</td>
                            <td>{informe.periodicidad}</td>
                            <td><span className={`badge ${informe.activo ? 'bg-success' : 'bg-secondary'}`}>{informe.activo ? 'Activo' : 'Inactivo'}</span></td>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <Form.Check type="switch" id={`switch-${informe.id}`} checked={informe.activo} onChange={() => handleToggleActivo(informe)} className="custom-switch" />
                                <Dropdown>
                                  <Dropdown.Toggle as="span" variant="link" className="icono-dropdown p-0" style={{ cursor: 'pointer' }}>
                                    <RiMore2Fill className="text-muted" size={18} />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item className="d-flex align-items-center" onClick={() => handleVerDetalles(informe)}>
                                      <RiEyeLine className="me-2" /> Ver detalles
                                    </Dropdown.Item>
                                    <Dropdown.Item className="d-flex align-items-center" onClick={() => handleDuplicarReporte(informe)}>
                                      <RiFileCopyLine className="me-2" /> Duplicar
                                    </Dropdown.Item>
                                    <Dropdown.Item className="d-flex align-items-center" onClick={() => handleEditarReporte(informe)}>
                                      <RiPencilLine className="me-2" /> Editar
                                    </Dropdown.Item>
                                    <Dropdown.Item className="d-flex align-items-center" onClick={() => handleEjecutarReporte(informe)}>
                                      <RiPlayLine className="me-2" /> Ejecutar ahora
                                    </Dropdown.Item>
                                    <Dropdown.Item className="d-flex align-items-center text-danger" onClick={() => { setReporteAEliminar(informe); setShowModal(true); }}>
                                      <RiDeleteBinLine className="me-2" /> Eliminar
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                      {/* Agregar filas vacías para mantener mínimo de 3 filas */}
                            {informesPaginados.length < 3 && Array.from({ length: 3 - informesPaginados.length }).map((_, index) => (
                                <tr key={`empty-${index}`} style={{ height: '60px' }}>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            ))}
                    </tbody>
                  </Table>
                </div>
                {informesFiltrados.length > 0 && (
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-muted">Mostrar</span>
                      <Form.Select className="form-select-sm rounded-pill" style={{ width: '80px' }} value={registrosPorPagina} onChange={(e) => { setRegistrosPorPagina(Number(e.target.value)); setPaginaActual(1); }}>
                        <option value="5">5</option><option value="10">10</option><option value="25">25</option>
                      </Form.Select>
                      <span className="ms-2 text-muted">registros por página</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-3 text-muted">Mostrando {indiceInicial + 1} a {Math.min(indiceFinal, informesFiltrados.length)} de {informesFiltrados.length} registros</span>
                      <nav>
                        <ul className="pagination pagination-sm mb-0">
                          <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}><button className="page-link rounded-start-pill" onClick={() => setPaginaActual(1)}>Primero</button></li>
                          <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}><button className="page-link" onClick={() => setPaginaActual(p => Math.max(1, p - 1))}>&lt;</button></li>
                          {Array.from({ length: Math.min(5, totalPaginas) }, (_, i) => {
                            let pageNum;
                            if (totalPaginas <= 5) { pageNum = i + 1; }
                            else if (paginaActual <= 3) { pageNum = i + 1; }
                            else if (paginaActual >= totalPaginas - 2) { pageNum = totalPaginas - 4 + i; }
                            else { pageNum = paginaActual - 2 + i; }
                            return (<li key={pageNum} className={`page-item ${paginaActual === pageNum ? 'active' : ''}`}><button className="page-link" onClick={() => setPaginaActual(pageNum)}>{pageNum}</button></li>);
                          })}
                          <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}><button className="page-link" onClick={() => setPaginaActual(p => Math.min(totalPaginas, p + 1))}>&gt;</button></li>
                          <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}><button className="page-link rounded-end-pill" onClick={() => setPaginaActual(totalPaginas)}>Último</button></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </>
            )}
            <ConfirmacionModal show={showModal} onHide={() => { setShowModal(false); setReporteAEliminar(null); }} onConfirm={eliminarInforme} title="¿Te gustaría eliminar permanentemente este registro de análisis?" message="Una vez eliminado, dejará de ser accesible y se cancelarán todos los envíos programados." confirmButtonText="Eliminar" cancelButtonText="Cancelar" />
            
            {/* Modal de detalles del reporte */}
            <Modal show={showDetallesModal} onHide={() => { setShowDetallesModal(false); setReporteAVer(null); }} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>Detalles del Reporte</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {reporteAVer && (
                  <div className="report-details">
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <strong>Nombre del reporte:</strong>
                        <p className="mb-2">{reporteAVer.nombre}</p>
                      </div>
                      <div className="col-md-6">
                        <strong>Estado:</strong>
                        <p className="mb-2">
                          <span className={`badge ${reporteAVer.activo ? 'bg-success' : 'bg-secondary'}`}>
                            {reporteAVer.activo ? 'Activo' : 'Inactivo'}
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <strong>Fecha de creación:</strong>
                        <p className="mb-2">{reporteAVer.fecha}</p>
                      </div>
                      <div className="col-md-6">
                        <strong>Periodicidad:</strong>
                        <p className="mb-2">{reporteAVer.periodicidad}</p>
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <div className="col-12">
                        <strong>Programación detallada:</strong>
                        <div className="alert alert-info mt-2">
                          <RiEyeLine className="me-2" />
                          {formatearDetallesHorarios(reporteAVer)}
                        </div>
                      </div>
                    </div>
                    
                    {reporteAVer.description && (
                      <div className="row mb-3">
                        <div className="col-12">
                          <strong>Descripción:</strong>
                          <p className="mb-2">{reporteAVer.description}</p>
                        </div>
                      </div>
                    )}
                    
                    {reporteAVer.query && (
                      <div className="row mb-3">
                        <div className="col-12">
                          <strong>Consulta:</strong>
                          <div className="bg-light p-3 rounded mt-2">
                            <code>{reporteAVer.query}</code>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {reporteAVer.recipients && (
                       <div className="row mb-3">
                         <div className="col-12">
                           <strong>Destinatarios:</strong>
                           <p className="mb-2">{Array.isArray(reporteAVer.recipients) ? reporteAVer.recipients.join(', ') : reporteAVer.recipients}</p>
                         </div>
                       </div>
                     )}
                     
                     <div className="row mb-3">
                       <div className="col-12">
                         <strong>Instrucciones para el análisis:</strong>
                         <div className="bg-light p-3 rounded mt-2">
                           <div className="d-flex align-items-start">
                             <RiEyeLine className="me-2 mt-1 text-primary" />
                             <div>
                               <p className="mb-2"><strong>Objetivo del reporte:</strong> Generar un análisis detallado basado en los datos disponibles según la consulta configurada.</p>
                               <p className="mb-2"><strong>Frecuencia de ejecución:</strong> {reporteAVer.periodicidad}</p>
                               <p className="mb-2"><strong>Formato de entrega:</strong> El reporte será enviado por correo electrónico en formato estructurado.</p>
                               <p className="mb-0"><strong>Procesamiento:</strong> El asistente de IA analizará los datos y generará insights relevantes automáticamente.</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowDetallesModal(false); setReporteAVer(null); }}>
                  Cerrar
                </Button>
                {reporteAVer && (
                  <Button variant="primary" onClick={() => {
                    setShowDetallesModal(false);
                    setReporteAVer(null);
                    handleEditarReporte(reporteAVer);
                  }}>
                    Editar reporte
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
          </Card>
        </Col>
      </Row>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </Fragment>
  );
};
export default AsistenteIA;