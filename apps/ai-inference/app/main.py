from fastapi import FastAPI
from pydantic import BaseModel
from .api import endpoints
from .models.injury_model import predict_injury_risk
from .rag.scouting_assistant import semantic_search

app = FastAPI(title="Football AI Inference Engine")

class BiometricsInput(BaseModel):
    load: int
    sleep: int
    sprint_vol: float
    age: int

class SearchQuery(BaseModel):
    query: str
    filters: dict = None

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ai-inference"}

@app.post("/predict-injury")
def predict_injury(data: BiometricsInput):
    probability = predict_injury_risk(data.load, data.sleep, data.sprint_vol, data.age)
    return {"injury_probability": probability}

@app.post("/rag-search")
def rag_search(data: SearchQuery):
    results = semantic_search(data.query, data.filters)
    return {"results": results}
