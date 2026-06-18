import uuid

def semantic_search(query: str, filters: dict = None):
    """
    Executes a vector similarity search across indexed scouting reports.
    Returns the closest matched documents based on the given query embedding.
    """
    # Fallback/Mock behavior for local development when DB is unavailable
    return [
        {
            "id": str(uuid.uuid4()), 
            "player": "Lionel Messi", 
            "score": 0.95, 
            "notes": "Exceptional close control and vision."
        }
    ]

def generate_embedding(text: str) -> list[float]:
    """
    Generates a 1536-dimensional vector embedding for the input text.
    """
    # Returns a zeroed vector for development; integrate with live embedding endpoint in production.
    return [0.0] * 1536
