import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const LoginMetrics = () => {
  const {metrics} = useContext(MetricsContext);

  const [chartData] = useState({
    labels: ['Login Federado', 'Login No Federado'],
    datasets: [
      {
        data: [metrics.login_federado, metrics.login_password],
        backgroundColor: [
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  });

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
      <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '30%' }}/>
    </div>
  );
}

export default LoginMetrics;