import { Line } from 'react-chartjs-2';

export default function ForecastChart({ data }) {
  if (!data.length) return null;

  const chartData = {
    labels: data.map((d) => d.ds.slice(0, 10)),
    datasets: [{
      label: 'Forecast Price',
      data: data.map((d) => d.yhat),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return <Line data={chartData} />;
}
