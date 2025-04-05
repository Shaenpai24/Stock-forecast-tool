# Interactive Stock Market Analysis and Forecast Tool

A full-stack web application that provides interactive stock market analysis and forecasting using machine learning.

## Features

- Real-time stock data visualization
- Machine learning-based price forecasting
- Interactive user interface
- Historical data analysis
- Confidence intervals for predictions

## Tech Stack

- Frontend: React.js, Chart.js
- Backend: Flask (Python)
- Machine Learning: Prophet
- Data Source: yfinance

## Project Structure

```
.
├── frontend/           # React frontend application
├── backend/           # Flask backend server
├── requirements.txt   # Python dependencies
└── README.md         # Project documentation
```

## Setup Instructions

### Backend Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   cd backend
   python app.py
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /forecast?ticker=<symbol>&days=<number>`
  - Returns historical and forecasted stock data
  - Parameters:
    - ticker: Stock symbol (e.g., AAPL)
    - days: Number of days to forecast

## License

MIT 