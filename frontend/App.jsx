import { useState } from 'react';
import StockSearch from './components/StockSearch';
import ForecastChart from './components/ForecastChart';

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">📊 Stock Forecast</h1>
      <StockSearch setData={setData} />
      <ForecastChart data={data} />
    </div>
  );
}

export default App;
