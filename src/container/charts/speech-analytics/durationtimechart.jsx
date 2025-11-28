import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class DurationTimeChart extends Component {
    constructor(props) {
        super(props);

        const durationData = this.processDurationData();

        this.state = {
            series: [{
                name: 'Cantidad de Llamadas',
                data: durationData.frequencies
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    states: {
                        hover: {
                            filter: {
                                type: 'darken',
                                value: 0.8,
                                color: '#2A437C'
                            }
                        }
                    },
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                        distributed: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                colors: Array(10).fill('#6A8BFF'),
                grid: {
                    borderColor: '#f2f5f7',
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val) {
                        return '';
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: false
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: durationData.durations,
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        maxWidth: 400
                    }
                },
                title: {
                    // text: 'Duración de Llamadas',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#444'
                    },
                },
                tooltip: {
                    theme: 'dark',
                    y: {
                        formatter: function (val) {
                            return val + ' llamadas';
                        }
                    }
                },
                legend: {
                    show: false
                }
            }
        };
    }

    processDurationData() {
        const durations = speechData['Análisis de Conversaciones']
            .map(item => item.duracion)
            .filter(duration => duration > 0);
        
        const durationFrequency = durations.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});

        const sortedEntries = Object.entries(durationFrequency)
            .sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

        return {
            durations: sortedEntries.map(([duration]) => `${duration} min`),
            frequencies: sortedEntries.map(([, count]) => count)
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
        );
    }
}