import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import { Card, Row, Col, Form, Button, Dropdown, Modal } from 'react-bootstrap';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import './calendario.scss';

// Configurar moment y date-fns en español
moment.locale('es');
registerLocale('es', es);
setDefaultLocale('es');

// Crear el localizador para el calendario
const localizer = momentLocalizer(moment);

// Nombres personalizados para los días de la semana
const diasSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

// Nombres de los meses en español
const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const Calendario = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Recordatorio de contacto con cliente 2, Producto KIA',
      start: new Date(2024, 10, 20, 9, 0),
      end: new Date(2024, 10, 20, 10, 0),
      cliente: 'Cliente 2',
      documento: '12345678',
      telefono: '987654321',
      sucursal: 'Miraflores',
      producto: 'KIA',
      tipo: 'Recordatorio de contacto'
    },
    // Agregar más eventos de ejemplo
    {
      id: 2,
      title: 'Recordatorio de contacto con cliente 2, Producto KIA',
      start: new Date(2024, 10, 20, 10, 0),
      end: new Date(2024, 10, 20, 11, 0),
    },
    {
      id: 3,
      title: 'Recordatorio de contacto con cliente 2, Producto KIA',
      start: new Date(2024, 10, 20, 11, 0),
      end: new Date(2024, 10, 20, 12, 0),
    }
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [multipleEvents, setMultipleEvents] = useState([]);
  const [showMultipleEvents, setShowMultipleEvents] = useState(false);
  const [newEvent, setNewEvent] = useState({
    tipo: 'Registro de cita',
    cliente: '',
    tipoDocumento: 'DNI',
    documento: '',
    telefono: '',
    sucursal: 'Miraflores',
    producto: 'KIA',
    start: new Date(),
    end: new Date(moment().add(1, 'hour')),
  });

  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No hay eventos en este rango',
    showMore: (total) => `+ Ver más (${total})`,
    work_week: 'Semana laboral',
    yesterday: 'Ayer',
    tomorrow: 'Mañana',
    header: {
      date: 'Fecha',
      time: 'Hora',
      event: 'Evento',
    },
    days: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },
    months: {
      january: 'Enero',
      february: 'Febrero',
      march: 'Marzo',
      april: 'Abril',
      may: 'Mayo',
      june: 'Junio',
      july: 'Julio',
      august: 'Agosto',
      september: 'Septiembre',
      october: 'Octubre',
      november: 'Noviembre',
      december: 'Diciembre',
    }
  };

  const handleEventClick = (event) => {
    const eventsAtSameTime = events.filter(e => 
      moment(e.start).isSame(event.start) && 
      moment(e.end).isSame(event.end)
    );

    if (eventsAtSameTime.length > 1) {
      setMultipleEvents(eventsAtSameTime);
      setShowMultipleEvents(true);
    } else {
      setSelectedEvent(event);
      setShowEventModal(true);
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleNewEvent = () => {
    setShowNewEventModal(true);
  };

  const handleSaveNewEvent = () => {
    const eventToAdd = {
      ...newEvent,
      id: events.length + 1,
      title: `${newEvent.tipo} - ${newEvent.cliente}, Producto ${newEvent.producto}`
    };
    setEvents([...events, eventToAdd]);
    setShowNewEventModal(false);
    setNewEvent({
      tipo: 'Registro de cita',
      cliente: '',
      tipoDocumento: 'DNI',
      documento: '',
      telefono: '',
      sucursal: 'Miraflores',
      producto: 'KIA',
      start: new Date(),
      end: new Date(moment().add(1, 'hour')),
    });
  };

  return (
    <div className="calendario-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="calendario-title">Calendario</h1>
        <Button variant="primary" className="nuevo-evento-btn" onClick={handleNewEvent}>
          Nuevo evento
        </Button>
      </div>

      <Card className="calendario-card">
        <Card.Body>
          <div className="tienda-section mb-4">
            <h2>Tienda</h2>
            <p className="text-muted">
              En esta sección podrás ver los registros de citas y recordatorio de contacto.
            </p>
            
            <Row className="filtros-container">
              <Col md={3}>
                <Form.Group>
                  <Form.Select>
                    <option>Departamento</option>
                    <option>Departamento 1</option>
                    <option>Departamento 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Select>
                    <option>Tienda</option>
                    <option>Tienda 1</option>
                    <option>Tienda 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="search-container">
                  <Form.Control 
                    type="search" 
                    placeholder="Buscar en calendario"
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <Row>
            <Col md={8}>
              <div className="calendar-wrapper">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  views={['month', 'week', 'day']}
                  defaultView="month"
                  selectable
                  messages={messages}
                  onSelectEvent={handleEventClick}
                  onNavigate={(date) => {
                    setSelectedDate(date);
                  }}
                  formats={{
                    monthHeaderFormat: 'MMMM YYYY',
                    weekdayFormat: 'dddd',
                    dayHeaderFormat: 'dddd D [de] MMMM',
                    dayRangeHeaderFormat: ({ start, end }) => 
                      `${moment(start).format('D [de] MMMM')} - ${moment(end).format('D [de] MMMM')}`,
                  }}
                  culture="es"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="events-sidebar">
                <div className="date-header">
                  {moment(selectedDate).format('dddd, D [de] MMMM')}
                </div>
                <div className="events-list">
                  {events.map((event) => (
                    <div key={event.id} className="event-item">
                      <div className="event-time">
                        <div className="time-block">
                          <span className="hour">{moment(event.start).format('HH:mm')}</span>
                          <span className="duration">1 hora</span>
                        </div>
                        <Dropdown className="event-actions">
                          <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Editar</Dropdown.Item>
                            <Dropdown.Item>Eliminar</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="event-content">
                        <p className="event-title">{event.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal para ver evento */}
      <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <>
              <p><strong>Tipo:</strong> {selectedEvent.tipo}</p>
              <p><strong>Cliente:</strong> {selectedEvent.cliente}</p>
              <p><strong>Documento:</strong> {selectedEvent.documento}</p>
              <p><strong>Teléfono:</strong> {selectedEvent.telefono}</p>
              <p><strong>Sucursal:</strong> {selectedEvent.sucursal}</p>
              <p><strong>Producto:</strong> {selectedEvent.producto}</p>
              <p><strong>Fecha:</strong> {moment(selectedEvent.start).format('DD/MM/YYYY')}</p>
              <p><strong>Hora:</strong> {moment(selectedEvent.start).format('HH:mm')} - {moment(selectedEvent.end).format('HH:mm')}</p>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal para múltiples eventos */}
      <Modal show={showMultipleEvents} onHide={() => setShowMultipleEvents(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eventos en este horario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {multipleEvents.map((event, index) => (
            <div key={event.id} className="mb-3 p-2 border rounded" onClick={() => {
              setSelectedEvent(event);
              setShowMultipleEvents(false);
              setShowEventModal(true);
            }}>
              <h6>{event.title}</h6>
              <p className="mb-0">
                <small>{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</small>
              </p>
            </div>
          ))}
        </Modal.Body>
      </Modal>

      {/* Modal para nuevo evento */}
      <Modal show={showNewEventModal} onHide={() => setShowNewEventModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nuevo evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="d-block">Tipo de evento</Form.Label>
              <div className="d-flex gap-4">
                <Form.Check
                  type="radio"
                  id="tipo-cita"
                  label="Registro de cita"
                  name="tipoEvento"
                  checked={newEvent.tipo === 'Registro de cita'}
                  onChange={() => setNewEvent({...newEvent, tipo: 'Registro de cita'})}
                  className="custom-radio"
                />
                <Form.Check
                  type="radio"
                  id="tipo-recordatorio"
                  label="Recordatorio de contacto"
                  name="tipoEvento"
                  checked={newEvent.tipo === 'Recordatorio de contacto'}
                  onChange={() => setNewEvent({...newEvent, tipo: 'Recordatorio de contacto'})}
                  className="custom-radio"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre del cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escriba el nombre del cliente"
                value={newEvent.cliente}
                onChange={(e) => setNewEvent({...newEvent, cliente: e.target.value})}
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={8}>
                <Form.Group>
                  <Form.Label>Documento de identidad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el documento de identidad"
                    value={newEvent.documento}
                    onChange={(e) => setNewEvent({...newEvent, documento: e.target.value})}
                  />
                  <Form.Text className="text-muted">
                    DNI, Carnet de extranjería o RUC
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el teléfono"
                    value={newEvent.telefono}
                    onChange={(e) => setNewEvent({...newEvent, telefono: e.target.value})}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Sucursal</Form.Label>
                  <Form.Select
                    value={newEvent.sucursal}
                    onChange={(e) => setNewEvent({...newEvent, sucursal: e.target.value})}
                  >
                    <option value="Miraflores">Sucursal Miraflores</option>
                    {/* Agregar más sucursales según sea necesario */}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Producto</Form.Label>
                  <Form.Select
                    value={newEvent.producto}
                    onChange={(e) => setNewEvent({...newEvent, producto: e.target.value})}
                  >
                    <option value="KIA">KIA</option>
                    {/* Agregar más productos según sea necesario */}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha</Form.Label>
                  <div className="custom-datepicker-wrapper">
                    <DatePicker
                      selected={newEvent.start}
                      onChange={(date) => {
                        const start = moment(date).set({
                          hour: moment(newEvent.start).get('hour'),
                          minute: moment(newEvent.start).get('minute')
                        }).toDate();
                        const end = moment(start).add(1, 'hour').toDate();
                        setNewEvent({...newEvent, start, end});
                      }}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      calendarClassName="custom-calendar"
                      locale="es"
                      calendarStartDay={0}
                      formatWeekDay={day => diasSemana[new Date(day).getDay()]}
                      showPopperArrow={false}
                      fixedHeight
                      renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                      }) => (
                        <div className="custom-calendar-header">
                          <button
                            type="button"
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                            className="prev-month-btn"
                          >
                            ‹
                          </button>
                          <div className="current-month">
                            {`${meses[date.getMonth()]} ${date.getFullYear()}`}
                          </div>
                          <button
                            type="button"
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                            className="next-month-btn"
                          >
                            ›
                          </button>
                        </div>
                      )}
                      customInput={
                        <Form.Control
                          type="text"
                          placeholder="DD/MM/AAAA"
                        />
                      }
                      inline={false}
                      popperPlacement="bottom-start"
                      popperModifiers={[
                        {
                          name: "offset",
                          options: {
                            offset: [0, 10]
                          }
                        }
                      ]}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Hora inicio</Form.Label>
                  <Form.Control
                    type="time"
                    value={moment(newEvent.start).format('HH:mm')}
                    onChange={(e) => {
                      const [hours, minutes] = e.target.value.split(':');
                      const start = moment(newEvent.start).set({
                        hour: parseInt(hours),
                        minute: parseInt(minutes)
                      }).toDate();
                      const end = moment(start).add(1, 'hour').toDate();
                      setNewEvent({...newEvent, start, end});
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Hora fin</Form.Label>
                  <Form.Control
                    type="time"
                    value={moment(newEvent.end).format('HH:mm')}
                    onChange={(e) => {
                      const [hours, minutes] = e.target.value.split(':');
                      const end = moment(newEvent.end).set({
                        hour: parseInt(hours),
                        minute: parseInt(minutes)
                      }).toDate();
                      setNewEvent({...newEvent, end});
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowNewEventModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveNewEvent}>
            Crear evento
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Calendario; 