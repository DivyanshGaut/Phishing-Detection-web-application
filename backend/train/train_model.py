import pandas as pd
import joblib
import os
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

print("Loading dataset...")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
file_path = os.path.join(BASE_DIR, "train", "phishing_dataset.csv")
model_dir = os.path.join(BASE_DIR, "model")

df = pd.read_csv(file_path)

# Normalize column names
df.columns = df.columns.str.lower()

print("Columns:", df.columns)

selected_features = [
    'length_url',
    'nb_www',
    'ratio_digits_url',
    'longest_words_raw',
    'longest_word_path',
    'phish_hints',
    'nb_dots',
    'nb_hyphens',
    'https_token',
    'prefix_suffix'
]

# KEEP dataframe first
X = df[selected_features]
y = df['status'].map({
    'legitimate': 0,
    'phishing': 1
})
# y = df['status']

feature_names = X.columns  # ✅ now valid

print("Feature count:", X.shape[1])

# Convert to array AFTER
X = X.values

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

print("Training model...")
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

print("Accuracy:", model.score(X_test, y_test))

# Feature importance
importances = model.feature_importances_
indices = np.argsort(importances)[::-1]

print("\nFeature Importance:")
for i in range(len(feature_names)):
    print(feature_names[indices[i]], importances[indices[i]])

print("Saving model...")
os.makedirs("../model", exist_ok=True)
model_path = os.path.join(model_dir, "model.pkl")

joblib.dump(model, model_path)

print(f"Model saved at: {model_path}")

print("DONE ✅")