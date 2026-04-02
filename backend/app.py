from flask import Flask, request, jsonify
import joblib
from utils.feature_extraction import extract_features
from flask_cors import CORS
import os

app = Flask(__name__)

# ✅ Proper CORS (handles preflight automatically)
CORS(app, resources={r"/*": {"origins": "*"}})

# ✅ Load model
model = joblib.load("model/model.pkl")


# ✅ Handle preflight explicitly (important for browser)
@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return jsonify({"message": "OK"}), 200

    data = request.get_json()

    # ✅ Safety check
    if not data or "url" not in data:
        return jsonify({"error": "Invalid request"}), 400

    url = data.get("url")

    try:
        features = extract_features(url)

        prediction = model.predict([features])[0]
        prob = model.predict_proba([features])[0][1]

        return jsonify({
            "prediction": "phishing" if prediction == "phishing" else "safe",
            "risk_score": round(prob * 100, 2)
        })

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": "Server error"}), 500


# ✅ Health check route (VERY IMPORTANT for testing)
@app.route("/", methods=["GET"])
def home():
    return "Backend is running ✅"


# ✅ Run server
if __name__ == "__main__":
    port = 5000
    app.run(host="0.0.0.0", port=port, debug=True)