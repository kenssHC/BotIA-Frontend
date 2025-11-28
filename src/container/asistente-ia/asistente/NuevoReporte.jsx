import React, { useState } from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { RiCheckLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import reportService from '../../../services/reportService';

const NuevoReporte = ({ onVolver }) => {
    const [paso, setPaso] = useState(1);
    const [frecuencia, setFrecuencia] = useState('daily');
    const [diasSeleccionados, setDiasSeleccionados] = useState([]);
    const [horaEnvio, setHoraEnvio] = useState('09:00');
    const [diaMensual, setDiaMensual] = useState(1);
    const [nombreReporte, setNombreReporte] = useState('');
    const [instrucciones, setInstrucciones] = useState('');
    const [creandoReporte, setCreandoReporte] = useState(false);

    const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    const diasSemanaDisplay = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const toggleDia = (dia) => {
        setDiasSeleccionados(prev =>
            prev.includes(dia) ? prev.filter(d => d !== dia) : [...prev, dia]
        );
    };

    const mapFrecuenciaToBackend = (freq) => {
        const map = {
            'Diaria': 'daily',
            'Semanal': 'weekly',
            'Mensual': 'monthly'
        };
        return map[freq] || freq;
    };

    const buildFrequencyDetails = () => {
        switch (frecuencia) {
            case 'daily':
                // Para frecuencia diaria, enviamos los días seleccionados
                return { days: diasSeleccionados };
            
            case 'weekly':
                // Para frecuencia semanal, enviamos el primer día seleccionado
                return { day: diasSeleccionados[0] || 'lunes' };
            
            case 'monthly':
                // Para frecuencia mensual, enviamos el día del mes
                return { dayOfMonth: diaMensual };
            
            default:
                return {};
        }
    };

    const handleCrearReporte = async () => {
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

        setCreandoReporte(true);
        
        try {
            const reporteData = {
                name: nombreReporte.trim(),
                instruction: instrucciones.trim(),
                frequency: frecuencia,
                frequencyDetails: buildFrequencyDetails(),
                time: horaEnvio,
                isActive: true
            };

            console.log('Datos del reporte a enviar:', reporteData);

            const response = await reportService.createReport(reporteData);
            
            console.log('Respuesta completa del servicio:', response);
            
            if (response.success && response.data) {
                toast.success('🎉 Reporte creado correctamente', {
                    position: "top-right",
                    autoClose: 3000,
                });

                // Enviar correo de confirmación después de crear el reporte
                try {
                    toast.info('📧 Enviando correo de confirmación...', {
                        position: "top-right",
                        autoClose: 2000,
                    });

                    // Obtener email del usuario actual
                    const userInfo = reportService.getUserFromToken();
                    const userEmail = userInfo?.email;

                    if (userEmail) {
                        // Enviar confirmación usando el endpoint que no valida días
                        const confirmationResult = await reportService.sendReportConfirmation(
                            userEmail,
                            instrucciones,
                            response.data.name
                        );
                        
                        if (confirmationResult.success) {
                            toast.success('📧 Correo de confirmación enviado exitosamente', {
                                position: "top-right",
                                autoClose: 4000,
                            });

                            toast.info('⏰ Los reportes programados llegarán según la frecuencia configurada', {
                                position: "top-right",
                                autoClose: 5000,
                            });
                        }
                    } else {
                        console.warn('No se pudo obtener el email del usuario');
                        toast.info('📅 Reporte creado. Los envíos programados llegarán según la frecuencia configurada', {
                            position: "top-right",
                            autoClose: 4000,
                        });
                    }
                } catch (confirmationError) {
                    console.warn('Error al enviar confirmación:', confirmationError);
                    toast.info('📅 Reporte creado correctamente. Los envíos programados funcionarán según la frecuencia configurada', {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }

                // Preparar datos para el componente padre
                const nuevoReporte = {
                    id: response.data.id,
                    nombre: response.data.name,
                    fecha: new Date().toLocaleDateString('es-ES'),
                    periodicidad: reportService.mapFrequency(response.data.frequency),
                    activo: response.data.isActive,
                    instruction: response.data.instruction,
                    time: response.data.time,
                    frequency: response.data.frequency,
                    frequencyDetails: response.data.frequencyDetails,
                    createdAt: response.data.createdAt
                };

                console.log('Datos del nuevo reporte transformados:', nuevoReporte);

                onVolver(nuevoReporte);
            } else {
                console.error('Respuesta sin éxito o sin data:', response);
                throw new Error(response.message || 'Error al crear el reporte');
            }
        } catch (error) {
            console.error('Error completo creando reporte:', error);
            console.error('Response de error:', error.response);
            
            let errorMessage = 'Error al crear el reporte';
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
            setCreandoReporte(false);
        }
    };

    const handleFrecuenciaChange = (nuevaFrecuencia) => {
        setFrecuencia(nuevaFrecuencia);
        setDiasSeleccionados([]);
    };



    const renderPaso1 = () => (
        <>
            <h5 className='section-subtitle'>Configuración de envío</h5>
            <p className='section-description'>Selecciona la frecuencia del reporte a enviar: diaria, semanal o mensual.</p>

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
            <p className='section-description'>Aquí puedes definir el tipo de análisis que deseas recibir.</p>

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
                    Máximo 1000 caracteres. Sé específico para obtener mejores resultados. Se enviará un correo de confirmación al crear el reporte, y los reportes programados llegarán automáticamente según la frecuencia configurada.
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
                    onClick={handleCrearReporte}
                    disabled={creandoReporte || !nombreReporte.trim() || !instrucciones.trim()}
                >
                    {creandoReporte ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Creando...
                        </>
                    ) : (
                        'Crear reporte'
                    )}
                </Button>
            </div>
        </>
    );

    return (
        <Card className="card-asistente-ia">
            <div className="header-section d-flex justify-content-between align-items-center">
                <h3 className="title">Asistente IA - Nuevo Reporte</h3>
                <Button 
                    variant="outline-secondary" 
                    onClick={() => onVolver(null)}
                    disabled={creandoReporte}
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

export default NuevoReporte;
