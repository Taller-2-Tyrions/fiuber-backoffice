import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const Interactions = () => {
  const {metrics} = useContext(MetricsContext);
  console.log(metrics);
  let horizontalOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: .8,
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  };

  

  const [basicData] = useState({
    labels: ['Accesos a la aplicación'],

    datasets: [
      {
        label: 'Login',
        backgroundColor: '#42A5F5',
        data: [metrics.login_federate_evt + metrics.login_pass_evt]
      },
      {
        label: 'Signup',
        backgroundColor: '#5CF7E9',
        data: [metrics.login_federate_evt + metrics.login_pass_evt]
      },
      {
        label: 'block_evt',
        backgroundColor: '#6FF75C',
        data: [metrics.block_evt]
      },
      {
        label: 'reset_evt',
        backgroundColor: '#F7DD5C',
        data: [metrics.reset_evt]
      }
    ]
  });
  return (
    <div className="card">
      <Chart type="bar" data={basicData} options={horizontalOptions} />
    </div>
  );
}

export default Interactions;