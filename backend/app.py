from flask import Flask, request, jsonify
import joblib
from utils.feature_extraction import extract_features
from flask_cors import CORS
import os

app = Flask(__name__)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response
# CORS(app)
CORS(app, resources={r"/*": {"origins": "https://phishing-detection-web-application.vercel.app"}})

model = joblib.load("model/model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    url = data.get("url")

    features = extract_features(url)

    prediction = model.predict([features])[0]
    prob = model.predict_proba([features])[0][1]

    return jsonify({
        "prediction": "phishing" if prediction == "phishing" else "safe",
        "risk_score": round(prob * 100, 2)
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)