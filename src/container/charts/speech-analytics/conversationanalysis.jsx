import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from "../../../db/speech.json";

export class ConversationAnalysisPie extends Component {
    constructor(props) {
        super(props);

        
        const conversationData = speechData["Análisis de Conversaciones"][0];
        

        const total = conversationData.tiempo_promedio_pausas + 
                     conversationData.cambios_hablante + 
                     conversationData.tiempo_respuesta;

        const tiempoPausasPercent = (conversationData.tiempo_promedio_pausas / total) * 100;
        const cambiosHablantePercent = (conversationData.cambios_hablante / total) * 100;
        const tiempoRespuestaPercent = (conversationData.tiempo_respuesta / total) * 100;

        this.state = {
            series: [
                tiempoPausasPercent,
                cambiosHablantePercent,
                tiempoRespuestaPercent
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'pie',
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                colors: ["#465CAA", "#8095E4", "#6A8BFF"],
                labels: [
                    'Tiempo Promedio Pausas', 
                    'Cambios de Hablante', 
                    'Tiempo de Respuesta'
                ],
                legend: {
                    position: "right",
                    offsetY: 50,
                    offsetX: 0,
                    fontSize: "14px",
                    markers: {
                        width: 12,
                        height: 12,
                        radius: 6
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 5
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(val, opts) {
                        return val.toFixed(1) + '%';
                    },
                    textAnchor: 'start',
                    distributed: true,
                    style: {
                        fontSize: '18px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold'
                    },
                    background: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: false
                    },
                    position: function(val, opts) {
                        if (opts.seriesIndex === 0) {
                            return 'outside';
                        }
                        return 'center';
                    },
                    offset: function(val, opts) {
                        if (opts.seriesIndex === 0) {
                            return 20;
                        }
                        return 0;
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10
                        },
                        customScale: 0.9,
                        donut: {
                            size: '65%'
                        },
                        offsetY: 0
                    }
                },
                tooltip: {
                    y: {
                        formatter: function(value, { seriesIndex }) {
                            if (seriesIndex === 0) {
                                return value.toFixed(2) + 's (promedio)';
                            } else if (seriesIndex === 1) {
                                return value + ' cambios';
                            } else {
                                return value.toFixed(2) + 's';
                            }
                        }
                    }
                },
                title: {
                    // text: 'Análisis de Conversaciones',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                subtitle: {
                    // text: 'Métricas de pausas y cambios de hablante',
                    align: 'center',
                    style: {
                        fontSize: '13px',
                        color: '#8c9097'
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart 
                    options={this.state.options} 
                    series={this.state.series} 
                    type="pie" 
                    height={350} 
                />
            </div>
        );
    }
}

export class ConversationAnalysisDonut extends Component {
    constructor(props) {
        super(props);

 
        const conversations = speechData["Análisis de Conversaciones"];
        let totalTiempoPausas = 0;
        let totalCambiosHablante = 0;
        let totalTiempoRespuesta = 0;
        
        conversations.forEach(conv => {
            totalTiempoPausas += conv.tiempo_promedio_pausas || 0;
            totalCambiosHablante += conv.cambios_hablante || 0;
            totalTiempoRespuesta += conv.tiempo_respuesta || 0;
        });
        
        const avgTiempoPausas = totalTiempoPausas / conversations.length;
        const avgCambiosHablante = totalCambiosHablante / conversations.length;
        const avgTiempoRespuesta = totalTiempoRespuesta / conversations.length;

        this.state = {
            series: [
                parseFloat(avgTiempoPausas.toFixed(2)),
                parseFloat(avgCambiosHablante.toFixed(2)),
                parseFloat(avgTiempoRespuesta.toFixed(2))
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'donut',
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                colors: ["#845adf", "#23b7e5", "#f5b849"],
                labels: [
                    'Tiempo Promedio Pausas', 
                    'Cambios de Hablante', 
                    'Tiempo de Respuesta'
                ],
                legend: {
                    position: "bottom",
                    formatter: function(seriesName, opts) {
                        return seriesName + ": " + opts.w.globals.series[opts.seriesIndex];
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(val, opts) {
                        return val.toFixed(1) + '%';
                    },
                    dropShadow: {
                        enabled: false
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true,
                                    label: 'Total',
                                    formatter: function (w) {
                                        return 'Análisis';
                                    }
                                },
                                value: {
                                    formatter: function (value) {
                                        return value;
                                    }
                                }
                            }
                        }
                    }
                },
                title: {
                    text: 'Promedios de Análisis de Conversaciones',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                subtitle: {
                    text: 'Valores promedio de todas las conversaciones',
                    align: 'center',
                    style: {
                        fontSize: '13px',
                        color: '#8c9097'
                    },
                },
                tooltip: {
                    y: {
                        formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                            const label = w.config.labels[seriesIndex];
                            if (label === 'Tiempo Promedio Pausas') {
                                return value + 's (promedio)';
                            } else if (label === 'Cambios de Hablante') {
                                return value + ' cambios (promedio)';
                            } else {
                                return value + 's (promedio)';
                            }
                        }
                    }
                },
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart 
                    options={this.state.options} 
                    series={this.state.series} 
                    type="donut" 
                    height={350} 
                />
            </div>
        );
    }
}