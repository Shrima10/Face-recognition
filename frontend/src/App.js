import React from 'react';
import RegisterFace from './components/RegisterFace';
import LiveRecognition from './components/LiveRecognition';
import ChatInterface from './components/ChatInterface';

export default function App() {
  const [tab, setTab] = React.useState('register');

  return (
    <div>
      <nav>
        <button onClick={() => setTab('register')}>Register Face</button>
        <button onClick={() => setTab('live')}>Live Recognition</button>
        <button onClick={() => setTab('chat')}>Chat</button>
      </nav>

      {tab === 'register' && <RegisterFace />}
      {tab === 'live' && <LiveRecognition />}
      {tab === 'chat' && <ChatInterface />}
    </div>
  );
}
