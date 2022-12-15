import { MetricsContext } from "../index.js"
import { useContext, useState } from "react";
import { Chart } from 'primereact/chart';


const Interactions = () => {
  const {accessMetrics} = useContext(MetricsContext);
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

  

  const basicData = {
    labels: ['Accesos a la aplicación'],

    datasets: [
      {
        label: 'Login',
        backgroundColor: '#42A5F5',
        data: [accessMetrics.login_federate_evt + accessMetrics.login_pass_evt]
      },
      {
        label: 'Signup',
        backgroundColor: '#5CF7E9',
        data: [accessMetrics.signup_federate_evt + accessMetrics.signup_pass_evt]
      },
      {
        label: 'Block',
        backgroundColor: '#6FF75C',
        data: [accessMetrics.block_evt]
      },
      {
        label: 'Reset',
        backgroundColor: '#F7DD5C',
        data: [accessMetrics.reset_evt]
      }
    ]
  }
  return (
    <div className="card">
      <Chart type="bar" data={basicData} options={horizontalOptions} />
    </div>
  );
}

export default Interactions;