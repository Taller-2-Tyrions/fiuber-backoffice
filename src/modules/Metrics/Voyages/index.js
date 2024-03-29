import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const Voyages = () => {
  const {voyagesMetrics} = useContext(MetricsContext);

  const chartData = {
    labels: ['Viajes VIP', 'Viajes NO VIP'],
    datasets: [
      {
        data: [voyagesMetrics.vip_voyages, voyagesMetrics.no_vip_voyages],
        backgroundColor: [
          "#CEFB7A",
          "#FB7AE0"
        ],
        hoverBackgroundColor: [
          "#CEFB7A",
          "#FB7AE0"
        ]
      }]
  };

  const [lightOptions] = useState({
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
  });
  
  return (
    <div className="card flex justify-content-center">
      <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '50%' }}/>
    </div>
  );
}

export default Voyages;