from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("models/gemini-1.5-flash-latest")

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")
    prompt = f"""
Summarize the following technical space research document in structured format:

Return sections:
- Objective
- Methodologies
- Key Results
- Limitations
- Future Scope

Document:
{text}
"""
    response = model.generate_content(prompt)
    return jsonify({"summary": response.text})


@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("text", "")
    lang = data.get("language", "English")
    prompt = f"Translate the following technical document into {lang}:\n\n{text}"
    response = model.generate_content(prompt)
    return jsonify({"translation": response.text})


@app.route("/compare", methods=["POST"])
def compare():
    data = request.get_json()
    doc1 = data.get("doc1", "")
    doc2 = data.get("doc2", "")
    prompt = f"""
Compare the following two space mission documents based on:
- Mission Objective
- Technical Design
- Innovation
- Strengths & Weaknesses

Document 1:
{doc1}

Document 2:
{doc2}
"""
    response = model.generate_content(prompt)
    return jsonify({"comparison": response.text})


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    prompt = f"""
Analyze this space-related document. Extract:
- Any numerical data or statistics
- Technical specifications
- Tabular or list-based information if possible
- Insights useful for a data analyst or engineer

Document:
{text}
"""
    response = model.generate_content(prompt)
    return jsonify({"analysis": response.text})


if __name__ == "__main__":
   app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
