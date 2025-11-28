import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class ConversationAnalysisChart extends Component {
    constructor(props) {
        super(props);

        // Process the first 10 conversations for visualization
        const conversations = speechData["Análisis de Conversaciones"].slice(0, 10);
        const fileNames = conversations.map(conv => conv.nombre_archivo);
        const turnosAgente = conversations.map(conv => conv.turnos_agente);
        const turnosCliente = conversations.map(conv => conv.turnos_cliente);
        const ratioTurnos = conversations.map(conv => conv.ratio_turnos);

        this.state = {
            series: [{
                name: 'Turnos Agente',
                type: 'column',
                data: turnosAgente
            }, {
                name: 'Turnos Cliente',
                type: 'column',
                data: turnosCliente
            }, {
                name: 'Ratio Turnos',
                type: 'line',
                data: ratioTurnos
            }],
            options: {
                chart: {
                    height: 320,
                    type: 'line',
                    stacked: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1, 4]
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                colors: ["#8095E4", "#6A8BFF", "#f5b849"],// colores para las barras 
                xaxis: {
                    categories: fileNames,
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                        rotate: -45,
                        rotateAlways: true
                    }
                },
                yaxis: [
                    {
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#8e54e9'
                        },
                        labels: {
                            style: {
                                colors: '#8e54e9',
                            },
                            formatter: function (value) {
                                return parseFloat(value).toFixed(1);
                            }
                        },
                        title: {
                            text: "Turnos Agente",
                            style: {
                                color: '#8e54e9',
                            }
                        }
                    },
                    {
                        seriesName: 'Turnos Cliente',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#4876e6'
                        },
                        labels: {
                            style: {
                                colors: '#4876e6',
                            },
                            formatter: function (value) {
                                return parseFloat(value).toFixed(1);
                            }
                        },
                        title: {
                            text: "Turnos Cliente",
                            style: {
                                color: '#4876e6',
                            }
                        }
                    },
                    {
                        seriesName: 'Ratio Turnos',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#f5b849'
                        },
                        labels: {
                            show: false, // Ocultar los números/valores en el eje Y
                            style: {
                                colors: '#f5b849',
                            },
                        },
                        title: {
                            text: "",
                            style: {
                                color: '#f5b849',
                            }
                        }
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'topLeft',
                        offsetY: 30,
                        offsetX: 60
                    },
                    y: {
                        formatter: function(value, { seriesIndex }) {
                            
                            if (seriesIndex === 0 || seriesIndex === 1) {
                                return parseFloat(value).toFixed(1);
                            }
                            
                            return value;
                        }
                    }
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={320} />
        );
    }
}