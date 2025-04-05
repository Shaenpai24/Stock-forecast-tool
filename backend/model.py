import yfinance as yf
from prophet import Prophet
import pandas as pd

def forecast_stock(ticker):
    df = yf.download(ticker, period='6mo')[['Close']].reset_index()
    df.columns = ['ds', 'y']

    model = Prophet()
    model.fit(df)
    future = model.make_future_dataframe(periods=7)
    forecast = model.predict(future)

    return forecast[['ds', 'yhat']].tail(7).to_dict(orient='records')
