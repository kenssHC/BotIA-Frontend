import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class SentimentColumnChart extends Component {
    constructor(props) {
        super(props);

        
        const sentimentData = this.processSentimentData();

        this.state = {
            series: sentimentData.percentages,
            options: {
                chart: {
                    type: 'pie',
                    height: 320,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                labels: ['Negativo', 'Positivo', 'Neutro'],
                colors: ["#6C8AFF", "#8FA7FF", "#B6C5FF"],
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val.toFixed(2) + '%';
                    },
                    style: {
                        fontSize: '12px',
                        colors: ["#ffffff"],
                        fontWeight: 600
                    },
                    dropShadow: {
                        enabled: false
                    }
                },
                stroke: {
                    width: 0
                },
                plotOptions: {
                    pie: {
                        expandOnClick: true,
                        donut: {
                            size: '0%'
                        }
                    }
                },
                legend: {
                    position: 'right',
                    fontSize: '13px',
                    fontWeight: 400,
                    formatter: function(seriesName, opts) {
                        return seriesName + ' ' + opts.w.globals.series[opts.seriesIndex] + '%';
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val.toFixed(2) + '%';
                        }
                    }
                },
                title: {
                    text: 'Tipos de sentimiento',
                    align: 'left',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#444'
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        };
    }

    processSentimentData() {
    
        const counts = {
            negative: 0,
            positive: 0,
            neutral: 0
        };

        const conversations = speechData["Análisis de Conversaciones"];
        
        conversations.forEach(item => {
            if (item.sentimiento === "positivo") {
                counts.positive++;
            } else if (item.sentimiento === "negativo") {
                counts.negative++;
            } else if (item.sentimiento === "neutral") {
                counts.neutral++;
            }
        });
        
        const total = conversations.length;
        const percentages = [
            parseFloat(((counts.negative / total) * 100).toFixed(2)),
            parseFloat(((counts.positive / total) * 100).toFixed(2)),
            parseFloat(((counts.neutral / total) * 100).toFixed(2))
        ];
        
        return { counts, percentages };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={300} />
        );
    }
}

export class EmotionColumnChart extends Component {
    constructor(props) {
        super(props);

        
        const emotionData = this.processEmotionData();

        this.state = {
            series: emotionData.values,
            options: {
                chart: {
                    type: 'donut',
                    height: 320,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '65%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    offsetY: 0
                                },
                                value: {
                                    show: true,
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + '%';
                                    }
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#8c9097',
                                    formatter: function (w) {
                                        return '100%';
                                    }
                                }
                            }
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val.toFixed(0) + '%';
                    },
                    style: {
                        fontSize: '12px',
                        colors: ["#ffffff"],
                        fontWeight: 600
                    },
                    dropShadow: {
                        enabled: false
                    }
                },
                colors: ["#3949AB", "#4876e6", "#7986CB", "#9FA8DA", "#C5CAE9", "#E8EAF6", "#B0BEC5"],
                labels: emotionData.labels,
                legend: {
                    position: 'right',
                    fontSize: '13px',
                    fontWeight: 400,
                    formatter: function(seriesName, opts) {
                        return seriesName + ' ' + opts.w.globals.series[opts.seriesIndex] + '%';
                    }
                },
                stroke: {
                    width: 0
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + '%';
                        }
                    }
                },
                title: {
                    text: 'Tipos de emociones',
                    align: 'left',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#444'
                    }
                }
            }
        };
    }

    processEmotionData() {
        const conversations = speechData["Análisis de Conversaciones"];
        const emotionMap = new Map();
        
      
        conversations.forEach(conv => {
            const emotion = conv.emocion;
            if (emotion) {
                emotionMap.set(emotion, (emotionMap.get(emotion) || 0) + 1);
            }
        });
        
       
        const emotionArray = Array.from(emotionMap, ([emotion, count]) => ({
            emotion,
            count,
            percentage: (count / conversations.length) * 100
        }));
        
        emotionArray.sort((a, b) => b.count - a.count);
        
     
        const topEmotions = emotionArray.slice(0, 6);
        
    
        const otherEmotions = emotionArray.slice(6);
        const otherPercentage = otherEmotions.reduce((sum, item) => sum + item.percentage, 0);
        
      
        const values = [...topEmotions.map(item => parseFloat(item.percentage.toFixed(1)))];
        if (otherPercentage > 0) {
            values.push(parseFloat(otherPercentage.toFixed(1)));
        }
        
        const labels = [...topEmotions.map(item => item.emotion)];
        if (otherPercentage > 0) {
            labels.push('Otros');
        }
        
        return {
            values,
            labels
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={300} />
        );
    }
}