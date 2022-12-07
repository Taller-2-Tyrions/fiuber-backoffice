import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const SignUp = () => {
  const {metrics} = useContext(MetricsContext);

  const [chartData] = useState({
    labels: ['Signup Federado', 'Signup No Federado'],
    datasets: [
      {
        data: [metrics.signup_federate_evt, metrics.signup_pass_evt],
        backgroundColor: [
          "#7A8CFB",
          "#FBD67A"
        ],
        hoverBackgroundColor: [
          "#7A8CFB",
          "#FBD67A"
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

export default SignUp;