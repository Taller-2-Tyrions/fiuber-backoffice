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
        data: [metrics.login_federado + metrics.login_password]
      },
      {
        label: 'Signup',
        backgroundColor: '#5CF7E9',
        data: [metrics.login_federado + metrics.login_password]
      },
      {
        label: 'Blocks',
        backgroundColor: '#6FF75C',
        data: [metrics.blocks]
      },
      {
        label: 'Resets',
        backgroundColor: '#F7DD5C',
        data: [metrics.resets]
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