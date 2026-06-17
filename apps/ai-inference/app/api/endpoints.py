from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class BiometricData(BaseModel):
    training_load: int
    sleep_score: int
    sprint_vol: float
    age: int

@router.post("/predict-injury")
def predict_injury(data: BiometricData):
    # Stub for the logistic regression model
    # P(Injury|X) = 1 / (1 + e^(-(B0 + B1*Load + B2*Sleep + B3*Sprint + y*Age)))
    # Placeholder coefficients
    b0, b1, b2, b3, y = -5.0, 0.01, -0.05, 0.02, 0.05
    
    logit = b0 + (b1 * data.training_load) + (b2 * data.sleep_score) + (b3 * data.sprint_vol) + (y * data.age)
    import math
    prob = 1.0 / (1.0 + math.exp(-logit))
    
    return {"injury_probability": prob}
