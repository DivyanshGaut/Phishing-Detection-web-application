def format_response(prediction, probability):
    return {
        "is_phishing": bool(prediction),
        "confidence": float(probability)
    }