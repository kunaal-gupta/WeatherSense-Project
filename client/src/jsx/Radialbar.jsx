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
        dataLabels: {
          name: {
            fontSize: '20px',
            color: 'red',
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '21px',
            color: 'undefined',
            formatter: function (val) {
              return val + "%";
            },
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      colors: ['blue', 'orange'],

      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 150]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Chances of Rain', 'UV Index'],
  };

  return (
    <div id="chart" style={{ width: '25em', height: '10em' }}>
      <ReactApexChart options={options} series={series} type="radialBar"/>
    </div>
  );
}
