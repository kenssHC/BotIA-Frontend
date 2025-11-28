import React, { Fragment } from 'react';
import { Card, Col, Row, Breadcrumb, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './resumen.scss';
// Embudos (ECharts)
import ReuseeCharts from '../charts/echartscharts/echart-reusable';
import { Funnelechart } from '../charts/echartscharts/echartdata';
// Barras (ApexCharts)
import { Stacked100bar } from '../charts/apexcharts/barcharts/barchartdata';
// Donut/Pie (ApexCharts)
import { Simpledonut } from '../charts/apexcharts/piecharts/piechartdata';
// RadialBar (ApexCharts)
import ReactApexChart from 'react-apexcharts';

const Resumen = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
     <div className="resumen-container">
        <div className="breadcrumb-header">
                <Breadcrumb>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active>Resumen</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="resumen-main-container">
                <div className="page-header">
                    <h3 className="page-title">Resumen</h3>
                    <div className="resumen-separador"></div>
                </div>
                <Row className="row-sm g-3">
                  {/* Embudo de conversión y Lead scoring */}
                  <Col xl={6}>
                    <Card className="custom-card">
                      <Card.Header>
                        <Card.Title>Embudo de conversión</Card.Title>
                      </Card.Header>
                      <Card.Body
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: 380,
                        }}
                      >
                        <div style={{ width: 420, maxWidth: "100%" }}>
                          <EmbudoConversionVisual />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card className="custom-card">
                      <Card.Header>
                        <Card.Title>Lead scoring</Card.Title>
                      </Card.Header>
                      <Card.Body
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: 380,
                        }}
                      >
                        <div style={{ width: 420, maxWidth: "100%" }}>
                          <LeadScoringBar height={320} />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="row-sm g-3 mt-2">
                  {/* Conversaciones abandonadas y Utilidad de información */}
                  <Col xl={6}>
                    <Card className="custom-card">
                      <Card.Header>
                        <Card.Title>Conversaciones abandonadas</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <ConversacionesAbandonadasArea />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card className="custom-card">
                      <Card.Header>
                        <Card.Title>Utilidad de información</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div
                          style={{
                            maxWidth: 420,
                            margin: "0 auto",
                            height: 320,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <UtilidadInformacionDonut height={260} />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="row-sm g-3 mt-2">
                  {/* Asistencia humana y Tipo de conversación */}
                  <Col xl={6}>
                    <Card className="custom-card">
                      <Card.Header>
                        <Card.Title>Asistencia humana</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div style={{ maxWidth: 420, margin: "0 auto" }}>
                          <AsistenciaHumanaDonut />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                        <Card.Title>Tipo de conversación</Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <div style={{ maxWidth: 420, margin: "0 auto" }}>
                          <TipoConversacionPie />
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

const AsistenciaHumanaDonut = () => {
    const series = [80, 20];
    const options = {
        chart: {
            type: 'donut',
            height: 320,
        },
        labels: ['Sí', 'No'],
        colors: ['#6A8BFF', '#B6C5FF'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                }
            }
        },
        stroke: {
            width: 0
        }
    };
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 220, height: 220, position: 'relative' }}>
                <ReactApexChart options={options} series={series} type="donut" height={220} />
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
                    <span style={{ fontSize: 48, fontWeight: 700, color: '#000', lineHeight: 1 }}>80%</span>
                </div>
            </div>
            <div style={{ marginLeft: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#6A8BFF', display: 'inline-block', marginRight: 8 }}></span>
                    <span style={{ color: '#222', fontWeight: 500, marginRight: 8 }}>Sí</span>
                    <span style={{ color: '#222', fontWeight: 700, minWidth: 40, textAlign: 'right', display: 'inline-block' }}>80%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#B6C5FF', display: 'inline-block', marginRight: 8 }}></span>
                    <span style={{ color: '#222', fontWeight: 500, marginRight: 8 }}>No</span>
                    <span style={{ color: '#222', fontWeight: 700, minWidth: 40, textAlign: 'right', display: 'inline-block' }}>20%</span>
                </div>
            </div>
        </div>
    );
};

const UtilidadInformacionDonut = ({ height = 220 }) => {
    const series = [20, 10, 70];
    const labels = ['Sí', 'No', 'No responde'];
    const colors = ['#6A8BFF', '#B6C5FF', '#E8EAF6'];
    const centerValue = 70;
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height }}>
            <div style={{ width: height, height: height, position: 'relative' }}>
                <ReactApexChart
                    options={{
                        chart: { type: 'donut', height: height },
                        labels,
                        colors,
                        dataLabels: { enabled: false },
                        legend: { show: false },
                        plotOptions: { pie: { donut: { size: '75%' } } },
                        stroke: { width: 0 }
                    }}
                    series={series}
                    type="donut"
                    height={height}
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
                    <span style={{ fontSize: 48, fontWeight: 700, color: '#222', lineHeight: 1 }}>{centerValue}%</span>
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

const TipoConversacionPie = () => {
    const series = [25, 25, 25, 25];
    const labels = ['Otros', 'Venta', 'Reclama', 'Postventa'];
    const colors = ['#6A8BFF', '#8095E4', '#B6C5FF', '#E8EAF6'];
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 220, height: 220, position: 'relative' }}>
                <ReactApexChart
                    options={{
                        chart: { type: 'pie', height: 320 },
                        labels,
                        colors,
                        dataLabels: { enabled: false },
                        legend: { show: false },
                        stroke: { width: 0 }
                    }}
                    series={series}
                    type="pie"
                    height={220}
                />
            </div>
            <div style={{ marginLeft: 32 }}>
                {labels.map((label, i) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', marginBottom: i < labels.length - 1 ? 12 : 0 }}>
                        <span style={{ width: 14, height: 14, borderRadius: '50%', background: colors[i], display: 'inline-block', marginRight: 8 }}></span>
                        <span style={{ color: '#222', fontWeight: 500, marginRight: 8 }}>{label}</span>
                        <span style={{ color: '#222', fontWeight: 700, minWidth: 40, textAlign: 'right', display: 'inline-block' }}>25%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LeadScoringBar = ({ height = 320 }) => {
    const series = [{
        name: 'Lead scoring',
        data: [55, 30, 15]
    }];
    const categories = ['Frío', 'Tibio', 'Caliente'];
    const colors = ['#6A8BFF', '#8095E4', '#B6C5FF'];
    return (
        <div style={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                {categories.map((cat, i) => (
                    <div key={cat} style={{ display: 'flex', alignItems: 'center', marginRight: i < categories.length - 1 ? 24 : 0 }}>
                        <span style={{ width: 14, height: 14, borderRadius: '50%', background: colors[i], display: 'inline-block', marginRight: 8 }}></span>
                        <span style={{ color: '#8c9097', fontWeight: 500, fontSize: 16 }}>{cat}</span>
                    </div>
                ))}
            </div>
            <ReactApexChart
                options={{
                    chart: {
                        type: 'bar',
                        stacked: false,
                        toolbar: { show: false },
                        height: height,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '100%',
                            barHeight: '100%',
                            distributed: true,
                            dataLabels: {
                                position: 'center',
                            },
                            borderRadius: 0,
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: (val, opts) => `${val}%`,
                        style: {
                            fontSize: '16px',
                            fontWeight: 700,
                            colors: ['#fff']
                        },
                    },
                    xaxis: {
                        categories: categories,
                        labels: { show: false },
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        labels: {
                            show: true,
                            formatter: (val) => val === 0 || val === 100 ? val : '',
                            style: {
                                colors: '#8c9097',
                                fontSize: '14px',
                                fontWeight: 500,
                            },
                        },
                    },
                    grid: {
                        show: false,
                        padding: { left: 20, right: 20 },
                    },
                    legend: { show: false },
                    colors,
                    tooltip: { enabled: false },
                    fill: { opacity: 1 },
                    states: { hover: { filter: { type: 'none' } } },
                    bar: { borderRadius: 0 },
                }}
                series={[{ data: [55, 30, 15] }]}
                type="bar"
                height={height}
            />
        </div>
    );
};

const EmbudoConversionVisual = () => {
    // Puedes ajustar estos datos según tu necesidad
    const steps = [
        { porcentaje: '100%', label: 'Leads', value: '1,000', color: '#E8EAF6', width: '100%' },
        { porcentaje: '80%', label: 'Contactados', value: '800', color: '#C5CAE9', width: '85%' },
        { porcentaje: '62.5%', label: 'Derivados', value: '500', color: '#9FA8DA', width: '70%' },
        { porcentaje: '60%', label: 'Citados', value: '300', color: '#6A8BFF', width: '55%' },
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

const ConversacionesAbandonadasArea = () => {
    // Datos de ejemplo (puedes ajustarlos a tu necesidad real)
    const series = [
        {
            name: 'Contactados',
            data: [1000, 1000, 1000, 1000]
        },
        {
            name: 'Abandonos',
            data: [null, 300, 300, 300]
        },
        {
            name: 'Recuperados',
            data: [null, null, 100, 100]
        }
    ];
    const categories = ['Inicio', 'Abandonos', 'Recuperados', 'Fin'];
    const colors = ['#6A8BFF', '#8095E4', '#B6C5FF'];
    return (
        <div style={{ maxWidth: 420, margin: '0 auto' }}>
            <ReactApexChart
                options={{
                    chart: {
                        type: 'area',
                        height: 320,
                        toolbar: { show: false },
                    },
                    colors,
                    dataLabels: { enabled: false },
                    stroke: { curve: 'smooth', width: 3 },
                    xaxis: {
                        categories,
                        labels: { style: { colors: '#8c9097', fontWeight: 600 } },
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                    },
                    yaxis: {
                        min: 0,
                        max: 1000,
                        labels: { style: { colors: '#8c9097', fontWeight: 600 } },
                    },
                    legend: {
                        show: true,
                        position: 'top',
                        horizontalAlign: 'center',
                        labels: { colors: '#8c9097' },
                        fontWeight: 600,
                    },
                    fill: {
                        type: 'solid',
                        opacity: 0.25
                    },
                    grid: { show: false },
                    tooltip: { enabled: true },
                }}
                series={series}
                type="area"
                height={320}
            />
        </div>
    );
};

export default Resumen;