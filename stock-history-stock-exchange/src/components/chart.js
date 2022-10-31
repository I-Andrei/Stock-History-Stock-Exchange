import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
  
function MyChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Crypto Price Chart',
      },
    },
  };
  const labels = props.labelsEthereum
      
  const data = {
    labels,
    datasets: [
      {
        label: 'Crypto Price Chart',
        data: props.stocks1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <div> 
      <div style={{ position: "relative", margin: "auto", width: "80vw" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default MyChart;