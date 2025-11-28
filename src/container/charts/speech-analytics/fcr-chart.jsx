import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import speechData from '../../../db/speech.json';

export class FCRChart extends Component {
    constructor(props) {
        super(props);

        const fcrData = this.processFCRData();

        this.state = {
            series: fcrData.series,
            options: {
                chart: {
                    type: 'donut',
                    height: 320,
                },
                labels: ['Resueltas', 'No resueltas'],
                colors: ["#6A8BFF", "#B6C5FF"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 0
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    offsetY: -10,
                                    color: '#666'
                                },
                                value: {
                                    show: true,
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    color: '#444',
                                    offsetY: 6,
                                    formatter: (val) => val + '%'
                                },
                                total: {
                                    show: true,
                                    showAlways: false,
                                    label: 'Total',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: '#444',
                                    formatter: (w) => {
                                        const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                        return total + '%';
                                    }
                                }
                            }
                        }
                    }
                },
                legend: {
                    position: 'right',
                    fontSize: '13px',
                    fontWeight: 400,
                    formatter: function (seriesName, opts) {

                        return seriesName + ' ' + opts.w.globals.series[opts.seriesIndex] + '%';
                    }
                },
                tooltip: {
                    y: {
                        formatter: (val) => val + '%'
                    }
                },
                title: {
                    //   text: 'FCR (First Call Resolution)',
                    align: 'left',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#444'
                    }
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                ]
            }
        };
    }

    processFCRData() {
        const conversations = speechData["Análisis de Conversaciones"];
        let resolvedCount = 0;
        let unresolvedCount = 0;

        conversations.forEach(conv => {
            if (conv.first_call_resolution === 'Sí') {
                resolvedCount++;
            } else {
                unresolvedCount++;
            }
        });

        const total = resolvedCount + unresolvedCount;
        const resolvedPercentage = ((resolvedCount / total) * 100).toFixed(0);
        const unresolvedPercentage = ((unresolvedCount / total) * 100).toFixed(0);

        return {
            series: [parseFloat(resolvedPercentage), parseFloat(unresolvedPercentage)],
            resolvedPct: resolvedPercentage,
            unresolvedPct: unresolvedPercentage
        };
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height={300}
            />
        );
    }
}
