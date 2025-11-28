import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class TemasFrecuentesChart extends Component {
    constructor(props) {
        super(props);

        const topicFrequencyData = this.processTopicFrequencyData();

        this.state = {
            series: [{
                name: 'Frecuencia',
                data: topicFrequencyData.frequencies
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
                    formatter: function (val, opt) {
                        return val;
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
                    categories: topicFrequencyData.topics,
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
                            return val + " ocurrencias";
                        }
                    }
                },
                legend: {
                    show: false
                }
            }
        };
    }




    processTopicFrequencyData() {
        const temasPrincipales = speechData["Tema Principal"];
        
        // Use all topics without filtering
        const filteredTopics = temasPrincipales;
        
        // Sort topics by frequency in descending order
        const sortedTopics = [...filteredTopics].sort((a, b) => b.frecuencia - a.frecuencia);
        
        // Extract topic names and frequency values
        const topics = sortedTopics.map(item => item.tema_principal);
        const frequencies = sortedTopics.map(item => item.frecuencia);
        
        return {
            topics,
            frequencies
        };
    }



    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
            </div>
        );
    }
}