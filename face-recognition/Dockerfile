# Use an official Python base image with necessary build tools
FROM python:3.10-slim

# Install system dependencies (needed for dlib, face-recognition, etc.)
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    libopenblas-dev \
    liblapack-dev \
    libx11-dev \
    libgtk-3-dev \
    libboost-python-dev \
    python3-dev \
    && apt-get clean

# Set working directory
WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the app
COPY . .

# Expose a default port (optional, e.g., if using Flask)
EXPOSE 5000

# Command to run your face recognition server (you can change it)
CMD ["python", "register_face.py"]
