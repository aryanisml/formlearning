import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


export default function FunnelChart() {
  const data = {
    labels: ['Step 1', 'Step 2', 'Step 3'],
    datasets: [{
      data: [100, 60, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return (
    <Doughnut
      data={data}
      options={{
      //  cutoutPercentage: 60,
        rotation: -0.5 * Math.PI,
        circumference: 1.5 * Math.PI,
      }}
    />
  );
}
