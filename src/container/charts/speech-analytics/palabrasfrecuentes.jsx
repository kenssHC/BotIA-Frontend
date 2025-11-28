import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class PalabrasFrecuentesChart extends Component {
    constructor(props) {
        super(props);

        const wordFrequencyData = this.processWordFrequencyData();

        this.state = {
            series: [{
                name: 'Frecuencia',
                data: wordFrequencyData.frequencies
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
                        return val + ' veces';
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
                    categories: wordFrequencyData.words,
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
                            return val + ' ocurrencias';
                        }
                    }
                },
                legend: {
                    show: false
                }
            }
        };
    }

    processWordFrequencyData() {

        const palabrasFrecuentes = speechData["Palabras Frecuentes"] || [];
        
  
        const validWords = palabrasFrecuentes.filter(item => item.palabra && item.frecuencia);
        
      
        const sortedWords = validWords.sort((a, b) => b.frecuencia - a.frecuencia);
    
        const topWords = sortedWords.slice(0, 15);
        
        const words = topWords.map(item => item.palabra);
        const frequencies = topWords.map(item => item.frecuencia);
        
        return {
            words,
            frequencies
        };
    }

    isCommonWord(word) {
        const commonWords = ['de', 'la', 'el', 'en', 'y', 'a', 'los', 'del', 'las', 'un', 'por', 'con', 'una', 'su', 'para'];
        return commonWords.includes(word);
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
        );
    }
}