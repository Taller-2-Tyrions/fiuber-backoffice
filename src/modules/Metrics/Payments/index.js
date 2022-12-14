import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const Payments = () => {
  const {paymentsMetrics} = useContext(MetricsContext);

  const chartData = {
    labels: ['Pagos Fallidos', 'Pagos Exitosos'],
    datasets: [
      {
        data: [paymentsMetrics.payments_fail, paymentsMetrics.payments_success],
        backgroundColor: [
          "#FB7A7A",
          "#84FB7A"
        ],
        hoverBackgroundColor: [
          "#FB7A7A",
          "#84FB7A"
        ]
      }]
  }

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

export default Payments;