import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const SignUp = () => {
  const {accessMetrics} = useContext(MetricsContext);

  const chartData = {
    labels: ['Signup Federado', 'Signup No Federado'],
    datasets: [
      {
        data: [accessMetrics.signup_federate_evt, accessMetrics.signup_pass_evt],
        backgroundColor: [
          "#7A8CFB",
          "#FBD67A"
        ],
        hoverBackgroundColor: [
          "#7A8CFB",
          "#FBD67A"
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

export default SignUp;