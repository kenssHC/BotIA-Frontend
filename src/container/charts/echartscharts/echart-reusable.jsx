import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const ReuseeCharts = ({option, height}) => {

    const chartRef = useRef(null);
    const [chartWidth, setChartWidth] = useState('100%');

    useEffect(() => {
        if (chartRef.current) {
            const myChart = chartRef.current.getEchartsInstance();
            myChart.setOption(option);

            const resizeHandler = () => {
                const parentWidth = chartRef.current?.props?.style?.width;
                if (parentWidth) {
                    setChartWidth(parentWidth);
                }
                myChart.resize();
            };

            resizeHandler();
            window.addEventListener('resize', resizeHandler);
            return () => {
                window.removeEventListener('resize', resizeHandler);
                myChart.dispose(); 
            };
        }
    }, [option]);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <ReactECharts ref={chartRef} option={option} style={{ width: chartWidth, height: height }} />
        </div>
    );
}

export default ReuseeCharts