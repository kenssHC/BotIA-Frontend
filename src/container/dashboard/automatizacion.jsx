import React, { Fragment, useState } from "react";
import {
  Card,
  Col,
  Row,
  Breadcrumb,
  Button,
  Nav,
  Tab,
  Modal,
  Form,
} from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCalendar,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./automatizacion.scss";
import ReactApexChart from 'react-apexcharts';

const Automatizacion = () => {
  const [activeTab, setActiveTab] = useState("campanas");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: {
      start: "15/11/2024",
      end: "04/12/2024",
    },
    temperature: ["Frío", "Tibio", "Caliente"],
  });

  const funnelData = {
    envios: 5000,
    visto: 3800,
    respondido: 2200,
    desuscrito: 1500,
  };

  // Colores de Resumen.jsx
  const funnelColors = {
    envios: '#E8EAF6',
    visto: '#C5CAE9',
    respondido: '#9FA8DA',
    desuscrito: '#6A8BFF',
  };

  const evolutionColors = [
    '#6A8BFF', // desuscritos
    '#8095E4', // respondido
    '#B6C5FF', // vistos
    '#E8EAF6', // envios
  ];

  const evolutionData = [
    {
      month: "Ene",
      desuscritos: 150,
      respondido: 280,
      vistos: 420,
      envios: 800,
    },
    {
      month: "Feb",
      desuscritos: 160,
      respondido: 290,
      vistos: 410,
      envios: 780,
    },
    {
      month: "Mar",
      desuscritos: 155,
      respondido: 285,
      vistos: 415,
      envios: 790,
    },
    {
      month: "Abr",
      desuscritos: 165,
      respondido: 295,
      vistos: 425,
      envios: 810,
    },
    {
      month: "May",
      desuscritos: 160,
      respondido: 290,
      vistos: 420,
      envios: 800,
    },
    {
      month: "Jun",
      desuscritos: 155,
      respondido: 285,
      vistos: 415,
      envios: 790,
    },
    {
      month: "Jul",
      desuscritos: 150,
      respondido: 280,
      vistos: 410,
      envios: 780,
    },
    {
      month: "Ago",
      desuscritos: 550,
      respondido: 280,
      vistos: 410,
      envios: 780,
    },
    {
      month: "Set",
      desuscritos: 160,
      respondido: 290,
      vistos: 420,
      envios: 800,
    },
    {
      month: "Oct",
      desuscritos: 155,
      respondido: 285,
      vistos: 415,
      envios: 790,
    },
    {
      month: "Nov",
      desuscritos: 165,
      respondido: 295,
      vistos: 425,
      envios: 810,
    },
    {
      month: "Dic",
      desuscritos: 160,
      respondido: 290,
      vistos: 420,
      envios: 800,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}, 2024</p>
          <p className="tooltip-value">
            {payload[0].value} {payload[0].name}
          </p>
        </div>
      );
    }
    return null;
  };

  const handleRemoveTemperature = (temp) => {
    setFilters((prev) => ({
      ...prev,
      temperature: prev.temperature.filter((t) => t !== temp),
    }));
  };

  const FilterModal = () => (
    <Modal
      show={showFilters}
      onHide={() => setShowFilters(false)}
      dialogClassName="filter-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          Filtros
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="filters-container">
          <div className="filter-group">
            <div className="filter-label">
              <Form.Label>Fecha</Form.Label>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="date-range">
              <div className="date-input">
                <span className="date-label">Del</span>
                <div className="input-with-icon">
                  <Form.Control
                    type="text"
                    value={filters.dateRange.start}
                    readOnly
                  />
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
              </div>
              <div className="date-input">
                <span className="date-label">Al</span>
                <div className="input-with-icon">
                  <Form.Control
                    type="text"
                    value={filters.dateRange.end}
                    readOnly
                  />
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
              </div>
              <Button variant="outline-danger" className="remove-filter">
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </div>

          <div className="filter-group">
            <div className="filter-label">
              <Form.Label>Temperatura</Form.Label>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="temperature-tags">
              <div className="selected-temperatures">
                {filters.temperature.map((temp) => (
                  <div key={temp} className="temperature-tag">
                    {temp}
                    <Button
                      variant="link"
                      className="remove-tag"
                      onClick={() => handleRemoveTemperature(temp)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline-danger" className="remove-filter">
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </div>

          <Button variant="primary" className="add-filter-btn">
            + Añadir filtro
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );

  const EmbudoInteraccionesVisual = () => {
    const steps = [
      { porcentaje: '100%', label: 'Envíos', value: '5,000', color: '#E8EAF6', width: '100%' },
      { porcentaje: '76%', label: 'Visto', value: '3,800', color: '#C5CAE9', width: '85%' },
      { porcentaje: '57.8%', label: 'Respondido', value: '2,200', color: '#9FA8DA', width: '70%' },
      { porcentaje: '68.2%', label: 'Desuscrito', value: '1,500', color: '#6A8BFF', width: '55%' },
    ];
    return (
      <div style={{ width: '100%', padding: '8px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: step.color,
              borderRadius: 12,
              padding: '18px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 500,
              fontSize: 20,
              color: '#222',
              minWidth: 220,
              width: step.width,
              margin: '0 auto',
              boxShadow: '0 1px 4px 0 rgba(80,80,120,0.03)'
            }}>
              <span style={{ fontWeight: 700, fontSize: 24, color: (step.color === '#6A8BFF' || step.color === '#8095E4') ? '#fff' : '#6A8BFF', minWidth: 70 }}>{step.porcentaje}</span>
              <span style={{ opacity: 0.7, marginLeft: 16, flex: 1 }}>{step.label}</span>
              <span style={{ fontWeight: 700, fontSize: 20, marginLeft: 16 }}>{step.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const EmbudoRecordatoriosVisual = () => {
    const steps = [
      { porcentaje: '100%', label: 'Enviados', value: '10,000', color: '#6A8BFF', width: '100%' },
      { porcentaje: '78%', label: 'Vistos', value: '7,800', color: '#8095E4', width: '80%' },
      { porcentaje: '52%', label: 'Respondidos', value: '5,200', color: '#B6C5FF', width: '60%' },
    ];
    return (
      <div style={{ width: '100%', padding: '8px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: step.color,
              borderRadius: 12,
              padding: '18px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 500,
              fontSize: 20,
              color: '#fff',
              minWidth: 220,
              width: step.width,
              margin: '0 auto',
              boxShadow: '0 1px 4px 0 rgba(80,80,120,0.03)'
            }}>
              <span style={{ fontWeight: 700, fontSize: 24, minWidth: 70 }}>{step.porcentaje}</span>
              <span style={{ opacity: 0.7, marginLeft: 16, flex: 1 }}>{step.label}</span>
              <span style={{ fontWeight: 700, fontSize: 20, marginLeft: 16 }}>{step.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const DonutReagendamiento = () => {
    const series = [80, 20];
    const labels = ['Sí', 'No'];
    const colors = ['#6A8BFF', '#B6C5FF'];
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 260 }}>
        <div style={{ width: 220, height: 220, position: 'relative' }}>
          <ReactApexChart
            options={{
              chart: { type: 'donut', height: 220 },
              labels,
              colors,
              dataLabels: { enabled: false },
              legend: { show: false },
              plotOptions: { pie: { donut: { size: '75%' } } },
              stroke: { width: 0 }
            }}
            series={series}
            type="donut"
            height={220}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#222', lineHeight: 1 }}>80%</span>
          </div>
        </div>
        <div style={{ marginLeft: 32 }}>
          {labels.map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', marginBottom: i < labels.length - 1 ? 12 : 0 }}>
              <span style={{ width: 14, height: 14, borderRadius: '50%', background: colors[i], display: 'inline-block', marginRight: 8 }}></span>
              <span style={{ color: '#222', fontWeight: 500, marginRight: 8 }}>{label}</span>
              <span style={{ color: '#222', fontWeight: 700, minWidth: 40, textAlign: 'right', display: 'inline-block' }}>{series[i]}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Embudo visual para mensajes de recuperación
  const EmbudoRecuperacionVisual = () => {
    const steps = [
      { porcentaje: '100%', label: 'Enviados', value: '10,000', color: '#6A8BFF', width: '100%' },
      { porcentaje: '85%', label: 'Vistos', value: '8,500', color: '#8095E4', width: '80%' },
      { porcentaje: '47%', label: 'Respondidos', value: '4,700', color: '#B6C5FF', width: '60%' },
    ];
    return (
      <div style={{ width: '100%', padding: '8px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: step.color,
              borderRadius: 12,
              padding: '18px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 500,
              fontSize: 20,
              color: '#fff',
              minWidth: 220,
              width: step.width,
              margin: '0 auto',
              boxShadow: '0 1px 4px 0 rgba(80,80,120,0.03)'
            }}>
              <span style={{ fontWeight: 700, fontSize: 24, minWidth: 70 }}>{step.porcentaje}</span>
              <span style={{ opacity: 0.7, marginLeft: 16, flex: 1 }}>{step.label}</span>
              <span style={{ fontWeight: 700, fontSize: 20, marginLeft: 16 }}>{step.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Gráfico de evolución para mensajes de recuperación
  const evolucionRecuperacionData = [
    { month: 'Ene', enviados: 10000, vistos: 8500, respondidos: 4700 },
    { month: 'Feb', enviados: 9500, vistos: 8000, respondidos: 4200 },
    { month: 'Mar', enviados: 9800, vistos: 8300, respondidos: 4500 },
    { month: 'Abr', enviados: 10200, vistos: 8700, respondidos: 4800 },
    { month: 'May', enviados: 10500, vistos: 9000, respondidos: 5000 },
    { month: 'Jun', enviados: 9900, vistos: 8200, respondidos: 4300 },
    { month: 'Jul', enviados: 9700, vistos: 8100, respondidos: 4100 },
    { month: 'Ago', enviados: 10100, vistos: 8600, respondidos: 4700 },
    { month: 'Set', enviados: 10400, vistos: 8900, respondidos: 4950 },
    { month: 'Oct', enviados: 10800, vistos: 9200, respondidos: 5200 },
    { month: 'Nov', enviados: 11000, vistos: 9400, respondidos: 5400 },
    { month: 'Dic', enviados: 11200, vistos: 9600, respondidos: 5600 },
  ];

  const EvolucionRecuperacionChart = () => {
    const colors = ['#6A8BFF', '#8095E4', '#B6C5FF'];
    return (
      <div style={{ width: '100%', height: 340 }}>
        <ResponsiveContainer width="100%" height={340}>
          <AreaChart data={evolucionRecuperacionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#7987a1' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#7987a1' }} />
            <Tooltip contentStyle={{ fontSize: 14 }} />
            <Area type="monotone" dataKey="respondidos" stackId="1" stroke={colors[0]} fill={colors[0]} name="Respondidos" />
            <Area type="monotone" dataKey="vistos" stackId="1" stroke={colors[1]} fill={colors[1]} name="Vistos" />
            <Area type="monotone" dataKey="enviados" stackId="1" stroke={colors[2]} fill={colors[2]} name="Enviados" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="automatizacion-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Automatización</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="automatizacion-main-container">
        <div className="page-header">
          <h5 className="page-title">Automatización</h5>
          <div className="automatizacion-separador"></div>
        </div>

        <Tab.Container defaultActiveKey="campanas">
          <Nav
            variant="pills"
            className="nav nav-tabs automatizacion-tab-style nav-justified mb-3 d-sm-flex d-block"
            id="automatizacionTab"
            role="tablist"
          >
            <Nav.Item>
              <Nav.Link
                eventKey="campanas"
                id="campanas-tab"
                type="button"
                className="border-0 bg-transparent"
              >
                Campañas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="recordatorios"
                id="recordatorios-tab"
                type="button"
                className="border-0 bg-transparent"
              >
                Recordatorios de citas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="mensajes"
                id="mensajes-tab"
                type="button"
                className="border-0 bg-transparent"
              >
                Mensajes de recuperación
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="campanas">
              <h2 className="section-title">Campañas</h2>
              <p className="section-description">
                Esta sección muestra el conteo y la evolución de los mensajes
                enviados, vistos, respondidos y desuscritos.
              </p>

              <Row className="row-sm">
                <Col lg={6}>
                  <Card className="custom-card">
                    <Card.Body>
                      <h3 className="card-title">Embudo de interacciones</h3>
                      <div className="card-title-separator" style={{ borderBottom: '1px solid #e9ecef', marginBottom: 16, marginTop: 8 }} />
                      <EmbudoInteraccionesVisual />
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="custom-card">
                    <Card.Body>
                      <h3 className="card-title">Evolución de las interacciones</h3>
                      <div className="card-title-separator" style={{ borderBottom: '1px solid #e9ecef', marginBottom: 16, marginTop: 8 }} />
                      <div className="evolution-chart">
                        <ResponsiveContainer width="100%" height={340}>
                          <AreaChart
                            data={evolutionData}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              vertical={false}
                            />
                            <XAxis
                              dataKey="month"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: "#7987a1" }}
                            />
                            <YAxis
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: "#7987a1" }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                              type="monotone"
                              dataKey="desuscritos"
                              stackId="1"
                              stroke={evolutionColors[0]}
                              fill={evolutionColors[0]}
                              name="Desuscritos"
                            />
                            <Area
                              type="monotone"
                              dataKey="respondido"
                              stackId="1"
                              stroke={evolutionColors[1]}
                              fill={evolutionColors[1]}
                              name="Respondido"
                            />
                            <Area
                              type="monotone"
                              dataKey="vistos"
                              stackId="1"
                              stroke={evolutionColors[2]}
                              fill={evolutionColors[2]}
                              name="Vistos"
                            />
                            <Area
                              type="monotone"
                              dataKey="envios"
                              stackId="1"
                              stroke={evolutionColors[3]}
                              fill={evolutionColors[3]}
                              name="Envíos"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="recordatorios">
              <div className="section-header">
                <h2 className="section-title">Recordatorios de citas</h2>
                <p className="section-description">
                  En este apartado podrás visualizar los recordatorios de citas a través de las siguientes métricas: enviados, vistos y respondidos.
                </p>
              </div>
              <Row>
                <Col md={6}>
                  <Card className="custom-card">
                    <Card.Header>
                      <Card.Title>Progreso de los recordatorios de citas</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <EmbudoRecordatoriosVisual />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="custom-card">
                    <Card.Header>
                      <Card.Title>Reagendamiento</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <DonutReagendamiento />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="mensajes">
              <div className="section-header">
                <h2 className="section-title">Mensajes de recuperación</h2>
                <p className="section-description">
                  En este apartado podrás visualizar los mensajes de recuperación diseñados para reducir el abandono, a través de las siguientes métricas: enviados, vistos y respondidos.
                </p>
              </div>
              <Row>
                <Col md={6}>
                  <Card className="custom-card">
                    <Card.Header>
                      <Card.Title>Progreso de los mensajes de recuperación</Card.Title>
                    </Card.Header>
                    <Card.Body style={{ minHeight: 340, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%' }}>
                        <EmbudoRecuperacionVisual />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="custom-card">
                    <Card.Header>
                      <Card.Title>Evolución de los mensajes de recuperación</Card.Title>
                    </Card.Header>
                    <Card.Body style={{ minHeight: 340, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%' }}>
                        <EvolucionRecuperacionChart />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <FilterModal />
      </div>
    </div>
  );
};

export default Automatizacion;
