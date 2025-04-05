import { useState } from 'react';

export default function StockSearch({ setData }) {
  const [ticker, setTicker] = useState('');

  const fetchData = async () => {
    const res = await fetch(`http://localhost:8000/forecast/${ticker}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="my-4">
      <input
        className="border p-2"
        placeholder="Enter stock symbol (AAPL)"
        onChange={(e) => setTicker(e.target.value.toUpperCase())}
      />
      <button onClick={fetchData} className="ml-2 bg-blue-500 text-white px-4 py-2">Forecast</button>
    </div>
  );
}
