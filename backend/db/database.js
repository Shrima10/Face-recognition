// Simple in-memory DB for demo, replace with real DB as needed
const faceDB = {};

function addFace(name, encoding, timestamp) {
  faceDB[name] = { encoding, timestamp };
}

function getFace(name) {
  return faceDB[name];
}

function getAllFaces() {
  return faceDB;
}

module.exports = { addFace, getFace, getAllFaces };
