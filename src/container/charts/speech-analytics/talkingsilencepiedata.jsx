import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class TalkingSilencePieChart extends Component {
    constructor(props) {
        super(props);

     
        const { hablaPercentage, silencioPercentage } = this.processTalkingSilenceData();

        this.state = {
            series: [hablaPercentage, silencioPercentage],
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
                colors: ["#6A8BFF", "#8095E4"],
                labels: ['Tiempo de Habla', 'Tiempo de Silencio'],
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
                    formatter: function(val) {
                        return val.toFixed(1) + '%';
                    },
                    dropShadow: {
                        enabled: false
                    }
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val.toFixed(1) + '%';
                        }
                    }
                },
                title: {
                    // text: 'Promedio de tiempo de silencio',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
            }
        };
    }

    processTalkingSilenceData() {

        const conversations = speechData["Análisis de Conversaciones"];
        
   
        let totalHabla = 0;
        let totalSilencio = 0;
        let totalDuration = 0;
        
        conversations.forEach(conv => {
            totalHabla += conv.tiempo_habla;
            totalSilencio += conv.tiempo_silencio;
            totalDuration += conv.duracion;
        });
        

        const hablaPercentage = (totalHabla / totalDuration) * 100;
        const silencioPercentage = (totalSilencio / totalDuration) * 100;
        
        return { hablaPercentage, silencioPercentage };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={300} />
        );
    }
}