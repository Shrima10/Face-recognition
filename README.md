# 👤 Face Recognition Platform with Real-Time Chat (Katomaran AI Hackathon)

This is a full-stack browser-based platform built for the **Katomaran AI Hackathon**. It lets users register their faces using a webcam, recognize faces in real-time, and chat with an AI to ask about face registration history.

---

## ✅ Features

### 1. Face Registration
- Uses the webcam to capture a user's face
- User enters a name for the captured face
- Face encoding is extracted and saved using Python Flask API

### 2. Live Face Recognition
- Webcam continuously scans for registered faces
- Shows names with bounding boxes in real-time
- Supports detection of multiple faces

### 3. Chat with AI (RAG)
- Ask questions like:
  - “Who was the last person registered?”
  - “When was Karthik registered?”
  - “How many people are registered?”
- Uses LangChain + FAISS + OpenAI GPT to answer
- Chat happens in real-time using WebSocket

---

## 🧱 Architecture Diagram

     +--------------------+           +-------------------+
     |    React Frontend  | <-------> |   Node.js Server  |
     | (Webcam UI + Chat) |           | (APIs + WebSocket)|
     +---------+----------+           +--------+----------+
               |                             |
    +----------v-----------+     +-----------v------------+
    | Python Face Recog API|     | Python RAG (Langchain) |
    | (Flask or FastAPI)   |     | (FAISS + OpenAI GPT-4) |
    +----------+-----------+     +-----------+------------+
               |                             |
           +---v---+                 +-------v-------+
           |Database| <------------- |  Vector Store  |
           |(JSON or SQLite)        |                 |
           +------------------------+-----------------+

---

## 🛠️ Tech Stack

| Module          | Technology           |
|------------------|----------------------|
| Frontend         | React.js             |
| Backend API      | Node.js + Express    |
| WebSocket Server | Node.js + `ws`       |
| Face Recognition | Python + Flask + OpenCV + `face_recognition` |
| Chatbot (RAG)    | Python + LangChain + FAISS + OpenAI GPT       |
| Database         | JSON or SQLite (your choice)         |

---

## 📁 Folder Structure
face recognition/
├── client/ # React frontend (UI + webcam + chat)
├── server/ # Node.js backend (API + WebSocket)
├── face-recognition/ # Python Flask face encoding API
├── rag-engine/ # Python RAG engine (LangChain + FAISS + GPT)
└── README.md

---

## 🚀 How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/Shrima10/face recognition.git
cd face recognition.git

cd face-recognition
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate (Windows)
pip install flask opencv-python face_recognition numpy
python app.py

cd ../backend
npm install
node index.js

cd ../frontend
npm install
npm start

cd ../rag-engine
pip install openai langchain faiss-cpu
python rag.py "How many users are registered?"


This project is a part of a hackathon run by "https://katomaran.com"
