from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import forecast_stock

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/forecast/{ticker}")
def forecast(ticker: str):
    return forecast_stock(ticker)
