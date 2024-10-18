// src/components/dashboard/SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';

const SalesChart = () => {
  const data = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл'],
    datasets: [
      {
        label: 'Продажи',
        data: [12, 19, 3, 5, 2, 3, 7],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box p={2}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default SalesChart;
