# 🚀 VYRONIS — AI Companion for Space Research Teams

**VYRONIS** is a lightweight full-stack AI tool designed to support space project researchers working on **lunar, orbital, or deep-space missions**.

It uses **Gemini 1.5 Flash** from Google to:
- 📄 Summarize complex mission documents
- 🌐 Translate technical reports
- 📊 Compare two mission specs
- 📈 Analyze data-heavy files

---

## ✨ Demo Video

[![Watch the Demo](https://drive.google.com/file/d/1hUMyYQvk7eKVstkYhIOYU6RAtXrj3Aoz/view?usp=drive_link)

---

## ⚙️ Stack

| Layer     | Tech                                      |
|-----------|-------------------------------------------|
| 🧠 AI      | Gemini 1.5 Flash                          |
| 🖥 Backend | Python + Flask + Gemini API               |
| 🌐 Frontend| Next.js (TypeScript, TailwindCSS)         |
| 🧠 Prompting | Direct prompt injection into Gemini     |

---

## 🔮 Features

### 1. ✍️ Summarize
Summarizes long and technical research content into clear, concise summaries.

**Prompt used:**
Summarize this technical space research document precisely:

{user_input}

text

---

### 2. 🌐 Translate
Translates any technical content into a user-specified language like Hindi, French, German, etc.

**Prompt used:**
Translate this scientific research text to {language}:

{user_input}

text

---

### 3. 📊 Compare
Compares two mission specs or project plans, identifying key differences in technology, scale, or goals.

**Prompt used:**
Compare the following two space project documents and highlight key differences:

Document A:
{doc1}

Document B:
{doc2}

text

---

### 4. 📈 Analyze
Performs a general technical analysis to extract insights, patterns, or warnings from the content.

**Prompt used:**
Analyze this data-heavy mission report for anomalies, insights, and risks:

{user_input}

text

---

## 🧪 Gemini Model Used

**Gemini 1.5 Flash**

- Fast and accurate for short-to-medium form reasoning  
- Handles technical documents with efficiency  
- API Key-based access via `google-generativeai` SDK

---

## 🔐 .env File Example

GOOGLE_API_KEY=your_gemini_api_key

text

---

## 🧱 Project Structure

/src
/app
page.tsx ← Elite UI (Tabs + Inputs + Result Card)
/backend
app.py ← Flask API using Gemini
.env ← Gemini API Key
global.css ← Tailwind with @import
tailwind.config.ts ← Theme overrides
README.md ← You're reading it!

text

---

## 🚀 How to Run

### 1. 🔙 Backend (Flask + Gemini)

cd src/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

text
> Ensure `.env` is present with your `GOOGLE_API_KEY`.

### 2. 🌐 Frontend (Next.js)

cd src
npm install
npm run dev

text

---

## 🧠 Future Scope

- 🧬 Add document upload support (PDF/CSV)
- 🌎 Real-time multilingual translation (auto-detect)
- 📥 Save & export results as PDF
- 💬 Chat-style interaction with Gemini memory
- 🔐 User login for saved history

---

## ✨ Credits

Built by Mohammad Danish Ansari  