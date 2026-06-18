from fastapi import APIRouter
from pydantic import BaseModel
from ..models.injury_model import predict_injury_risk

router = APIRouter()

class BiometricData(BaseModel):
    training_load: int
    sleep_score: int
    sprint_vol: float
    age: int

@router.post("/predict-injury")
def predict_injury(data: BiometricData):
    prob = predict_injury_risk(
        load=data.training_load,
        sleep=data.sleep_score,
        sprint_vol=data.sprint_vol,
        age=data.age
    )
    
    return {"injury_probability": prob}
