import ApexCharts from 'apexcharts';
import { useEffect, React } from 'react';

// Humidity
// Wind
// Precipitation
// UV Index 

// Feels like
// Chances of rain

export default function Chart() {
    useEffect(()=> {
    var options = {
        chart: {
          type: 'bar'
        },
        series: [{
          name: 'sales',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }
    
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
  
      return () => {
        chart.destroy(); // Cleanup function to destroy the chart instance
      };
    }, []); // Empty dependency array to ensure it runs only once after mounting

    return(
        <div id="chart"></div>

    )
}