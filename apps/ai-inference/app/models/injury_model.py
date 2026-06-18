import math

# Initial base weights for the logistic regression model
# In a production environment, these would be loaded from a pre-trained model file.
INITIAL_WEIGHTS = {
    "bias": -3.0,
    "load_factor": 0.005,
    "sleep_factor": -0.1,
    "sprint_factor": 0.002,
    "age_factor": 0.05
}

def predict_injury_risk(load: int, sleep: int, sprint_vol: float, age: int) -> float:
    """
    Calculates the probability of injury given player biometric and workload data
    using a logistic regression approach.
    """
    w = INITIAL_WEIGHTS
    
    logit = (
        w["bias"] + 
        (w["load_factor"] * load) + 
        (w["sleep_factor"] * sleep) + 
        (w["sprint_factor"] * sprint_vol) + 
        (w["age_factor"] * age)
    )
    
    probability = 1.0 / (1.0 + math.exp(-logit))
    return probability
