import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { RiCheckLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import reportService from '../../../services/reportService';

const EditarReporte = ({ onCancelar, onReporteActualizado, reporte }) => {
    const [paso, setPaso] = useState(1);
    const [frecuencia, setFrecuencia] = useState('daily');
    const [diasSeleccionados, setDiasSeleccionados] = useState([]);
    const [horaEnvio, setHoraEnvio] = useState('09:00');
    const [diaMensual, setDiaMensual] = useState(1);
    const [nombreReporte, setNombreReporte] = useState('');
    const [instrucciones, setInstrucciones] = useState('');
    const [actualizandoReporte, setActualizandoReporte] = useState(false);

    const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    const diasSemanaDisplay = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    // Cargar datos del reporte a editar
    useEffect(() => {
        if (reporte) {
            setNombreReporte(reporte.nombre || '');
            setInstrucciones(reporte.instruction || '');
            setFrecuencia(reporte.frequency || 'daily');
            setHoraEnvio(reporte.time || '09:00');
            
            // Configurar días según la frecuencia
            if (reporte.frequencyDetails) {
                const details = reporte.frequencyDetails;
                if (details.days && Array.isArray(details.days)) {
                    setDiasSeleccionados(details.days);
                } else if (details.day) {
                    setDiasSeleccionados([details.day]);
                } else if (details.dayOfMonth) {
                    setDiaMensual(details.dayOfMonth);
                }
            }
        }
    }, [reporte]);

    const toggleDia = (dia) => {
        setDiasSeleccionados(prev =>
            prev.includes(dia) ? prev.filter(d => d !== dia) : [...prev, dia]
        );
    };

    const buildFrequencyDetails = () => {
        switch (frecuencia) {
            case 'daily':
                return { days: diasSeleccionados };
            case 'weekly':
                return { day: diasSeleccionados[0] || 'lunes' };
            case 'monthly':
                return { dayOfMonth: diaMensual };
            default:
                return {};
        }
    };

    const handleActualizarReporte = async () => {
        // Validaciones
        if (!nombreReporte.trim()) {
            toast.error('El nombre del reporte es obligatorio', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        if (!instrucciones.trim()) {
            toast.error('Las instrucciones del análisis son obligatorias', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        if (frecuencia !== 'monthly' && diasSeleccionados.length === 0) {
            toast.error('Debes seleccionar al menos un día', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        setActualizandoReporte(true);
        
        try {
            const reporteData = {
                name: nombreReporte.trim(),
                instruction: instrucciones.trim(),
                frequency: frecuencia,
                frequencyDetails: buildFrequencyDetails(),
                time: horaEnvio,
                isActive: reporte.activo
            };

            console.log('Datos del reporte a actualizar:', reporteData);

            const response = await reportService.updateReport(reporte.id, reporteData);
            
            console.log('Respuesta completa del servicio:', response);
            
            if (response.success && response.data) {
                toast.success('Reporte actualizado correctamente', {
                    position: "top-right",
                    autoClose: 3000,
                });

                // Preparar datos actualizados para el componente padre
                const reporteActualizado = {
                    ...reporte,
                    nombre: response.data.name,
                    instruction: response.data.instruction,
                    time: response.data.time,
                    frequency: response.data.frequency,
                    frequencyDetails: response.data.frequencyDetails,
                    periodicidad: reportService.mapFrequency(response.data.frequency)
                };

                console.log('Datos del reporte actualizado:', reporteActualizado);

                onReporteActualizado(reporteActualizado);
            } else {
                console.error('Respuesta sin éxito o sin data:', response);
                throw new Error(response.message || 'Error al actualizar el reporte');
            }
        } catch (error) {
            console.error('Error completo actualizando reporte:', error);
            console.error('Response de error:', error.response);
            
            let errorMessage = 'Error al actualizar el reporte';
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error.message) {
                errorMessage = error.message;
            }

            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 5000,
            });
        } finally {
            setActualizandoReporte(false);
        }
    };

    const handleFrecuenciaChange = (nuevaFrecuencia) => {
        setFrecuencia(nuevaFrecuencia);
        setDiasSeleccionados([]);
    };

    const renderPaso1 = () => (
        <>
            <h5 className='section-subtitle'>Configuración de envío</h5>
            <p className='section-description'>Modifica la frecuencia del reporte a enviar: diaria, semanal o mensual.</p>

            <div className="mb-4 d-flex gap-2">
                {[
                    { key: 'daily', label: 'Diaria' },
                    { key: 'weekly', label: 'Semanal' }, 
                    { key: 'monthly', label: 'Mensual' }
                ].map(opcion => (
                    <Button
                        key={opcion.key}
                        variant={frecuencia === opcion.key ? 'primary' : 'outline-primary'}
                        onClick={() => handleFrecuenciaChange(opcion.key)}
                    >
                        {opcion.label}
                    </Button>
                ))}
            </div>

            <Row>
                <Col md={6}>
                    <Card body>
                        <Form.Label>
                            {frecuencia === 'daily' ? 'Días de la semana' : 
                             frecuencia === 'weekly' ? 'Día de la semana' : 
                             'Día del mes'}
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-2">
                            {frecuencia === 'monthly' ? (
                                <Form.Group controlId="diaMensual" className="w-100">
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        max={31}
                                        value={diaMensual}
                                        onChange={(e) => setDiaMensual(Number(e.target.value))}
                                        className="mb-2"
                                    />
                                    <Form.Text className="text-muted">
                                        Si se elige un día inexistente, se usará el último del mes.
                                    </Form.Text>
                                </Form.Group>
                            ) : (
                                diasSemanaDisplay.map((diaDisplay, index) => {
                                    const diaKey = diasSemana[index];
                                    return (
                                        <Form.Check
                                            key={diaKey}
                                            inline
                                            label={diaDisplay}
                                            type={frecuencia === 'daily' ? 'checkbox' : 'radio'}
                                            name="dias"
                                            id={`dia-${diaKey}`}
                                            checked={diasSeleccionados.includes(diaKey)}
                                            onChange={() => {
                                                if (frecuencia === 'weekly') {
                                                    setDiasSeleccionados([diaKey]);
                                                } else {
                                                    toggleDia(diaKey);
                                                }
                                            }}
                                        />
                                    );
                                })
                            )}
                        </div>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card body>
                        <Form.Group controlId="horaEnvio">
                            <Form.Label>Horario de envío</Form.Label>
                            <Form.Control
                                type="time"
                                value={horaEnvio}
                                onChange={(e) => setHoraEnvio(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Hora en la que se enviará el reporte automáticamente.
                            </Form.Text>
                        </Form.Group>
                    </Card>
                </Col>
            </Row>

            <div className="mt-4 d-flex justify-content-end">
                <Button 
                    onClick={() => setPaso(2)}
                    disabled={frecuencia !== 'monthly' && diasSeleccionados.length === 0}
                >
                    Continuar
                </Button>
            </div>
        </>
    );

    const renderPaso2 = () => (
        <>
            <h5 className='section-subtitle'>¿Qué te gustaría analizar?</h5>
            <p className='section-description'>Modifica el tipo de análisis que deseas recibir.</p>

            <Form.Group className="mb-4" controlId="nombreReporte">
                <Form.Label><strong>Nombre del informe</strong></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Escribe el nombre de tu informe"
                    value={nombreReporte}
                    onChange={(e) => setNombreReporte(e.target.value)}
                    maxLength={100}
                />
                <Form.Text className="text-muted">
                    Máximo 100 caracteres
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="instrucciones">
                <Form.Label><strong>Instrucciones para el análisis</strong></Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Describe con detalle qué tipo de informe te gustaría recibir. Por ejemplo: 'Analizar las ventas del último mes por región y producto'"
                    value={instrucciones}
                    onChange={(e) => setInstrucciones(e.target.value)}
                    maxLength={1000}
                />
                <Form.Text className="text-muted">
                    Máximo 1000 caracteres. Sé específico para obtener mejores resultados.
                </Form.Text>
            </Form.Group>

            {/* Resumen de configuración */}
            <Card className="mb-4 bg-light">
                <Card.Body>
                    <h6 className="mb-3">Resumen de configuración:</h6>
                    <ul className="list-unstyled mb-0">
                        <li><strong>Frecuencia:</strong> {
                            frecuencia === 'daily' ? 'Diaria' :
                            frecuencia === 'weekly' ? 'Semanal' : 'Mensual'
                        }</li>
                        {frecuencia === 'monthly' ? (
                            <li><strong>Día del mes:</strong> {diaMensual}</li>
                        ) : (
                            <li><strong>Días:</strong> {diasSeleccionados.length > 0 ? 
                                diasSeleccionados.map(dia => dia.charAt(0).toUpperCase() + dia.slice(1)).join(', ') : 
                                'Ninguno seleccionado'
                            }</li>
                        )}
                        <li><strong>Hora:</strong> {horaEnvio}</li>
                    </ul>
                </Card.Body>
            </Card>

            <div className="mt-4 d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => setPaso(1)}>
                    Regresar
                </Button>
                <Button 
                    variant="primary" 
                    onClick={handleActualizarReporte}
                    disabled={actualizandoReporte || !nombreReporte.trim() || !instrucciones.trim()}
                >
                    {actualizandoReporte ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Actualizando...
                        </>
                    ) : (
                        'Actualizar reporte'
                    )}
                </Button>
            </div>
        </>
    );

    const handleCancelar = () => {
        if (paso === 2) {
            // Si está en el paso 2, regresar al paso 1
            setPaso(1);
        } else {
            // Si está en el paso 1, regresar a la lista principal
            onCancelar();
        }
    };

    return (
        <Card className="card-asistente-ia">
            <div className="header-section d-flex justify-content-between align-items-center">
                <h3 className="title">Asistente IA - Editar Reporte</h3>
                <Button 
                    variant="outline-secondary" 
                    onClick={handleCancelar}
                    disabled={actualizandoReporte}
                >
                    Cancelar
                </Button>
            </div>
            
            {/* Encabezado de pasos */}
            <div className="wizard-header mb-4 d-flex align-items-center gap-2">
                <div className={`step-circle ${paso > 1 ? 'completed' : 'active'}`}>
                    {paso > 1 ? <RiCheckLine size={16} /> : '1'}
                </div>
                <span className={`step-label ${paso === 1 ? 'active' : ''}`}>Configuración de envío</span>

                <div className="step-line" />

                <div className={`step-circle ${paso === 2 ? 'active' : ''}`}>
                    2
                </div>
                <span className={`step-label ${paso === 2 ? 'active' : ''}`}>¿Qué te gustaría analizar?</span>
            </div>

            <div className="content-section">
                {paso === 1 ? renderPaso1() : renderPaso2()}
            </div>
        </Card>
    );
};

export default EditarReporte;