import React from "react";
import ReactApexChart from 'react-apexcharts';

export default function WindGraph() {
  const series = [180, 120];
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,

        track: {
          background: '#fff',
          strokeWidth: '10%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      type: 'pattern',
      colors: ['blue', 'orange'],
      pattern: {
        style: 'slantedLines',
        width: 1,
        height: 1,
        strokeWidth: 1,
      },
    },
    labels: ['Chances of Rain', 'Humidity'],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" />
      <div className="chart-labels">
        <div className="chart-label chart-label-small" style={{ backgroundColor: 'orange', color: 'white', marginBottom: '1%' }}>Humidity</div>
        <div className="chart-label chart-label-small" style={{ backgroundColor: 'blue', color: 'white' }}>Chances of Rain</div>
      </div>
    </div>
  );
}
