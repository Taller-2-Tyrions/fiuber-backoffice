import { Chart } from 'primereact/chart';
import { useState } from 'react';


const Metrics = () => {
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
  });



    return (
      <div className="card">
        <h5>Horizontal</h5>
        <Chart type="bar" data={basicData} options={horizontalOptions} />
      </div>
    );
  };
  
  export default Metrics;