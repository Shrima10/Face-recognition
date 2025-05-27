import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function RegisterFace() {
  const videoRef = useRef(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => console.error("Error accessing camera:", err));
  };

  const handleRegister = async () => {
    if (!name) {
      setMessage('Please enter a name');
      return;
    }
    // Normally, capture frame and send to backend to save encoding
    try {
      const res = await axios.post('http://localhost:5000/api/face/register', { name });
      setMessage(res.data.message);
    } catch (error) {
      setMessage('Failed to register face');
    }
  };

  return (
    <div>
      <h2>Register Face</h2>
      <video ref={videoRef} width="400" height="300" />
      <br />
      <button onClick={startCamera}>Start Camera</button>
      <br />
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleRegister}>Register Face</button>
      <p>{message}</p>
    </div>
  );
}
