import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const LoginMetrics = () => {
  const {accessMetrics} = useContext(MetricsContext);

  const chartData = {
    labels: ['Login Federado', 'Login No Federado'],
    datasets: [
      {
        data: [accessMetrics.login_federate_evt, accessMetrics.login_pass_evt],
        backgroundColor: [
          "#F7FB7A",
          "#D87AFB"
        ],
        hoverBackgroundColor: [
          "#F7FB7A",
          "#D87AFB"
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

export default LoginMetrics;