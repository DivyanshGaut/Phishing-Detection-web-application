from flask import Flask, request, jsonify
import joblib
from utils.feature_extraction import extract_features
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)
port = int(os.environ.get("PORT", 5000))
app.run(host="0.0.0.0", port=port)
model = joblib.load("model/model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    url = data.get("url")

    features = extract_features(url)

    prediction = model.predict([features])[0]
    prob = model.predict_proba([features])[0][1]

    return jsonify({
        # "prediction": int(prediction)
        "prediction": 1 if prediction == "phishing" else 0,
        "risk_score": round(prob * 100, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)