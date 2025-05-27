import React, { useEffect, useRef, useState } from 'react';

export default function LiveRecognition() {
  const videoRef = useRef(null);
  const [message, setMessage] = useState('Starting camera...');

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setMessage('Camera started. Recognizing faces...');
      })
      .catch(err => {
        console.error(err);
        setMessage('Failed to access camera');
      });

    // TODO: Implement periodic capture + send frame to backend for recognition

  }, []);

  return (
    <div>
      <h2>Live Recognition</h2>
      <video ref={videoRef} width="400" height="300" />
      <p>{message}</p>
    </div>
  );
}
