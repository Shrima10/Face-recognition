import React, { useEffect, useState, useRef } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000'); // Connect to backend WS server

    ws.current.onopen = () => {
      setMessages(prev => [...prev, { from: 'system', text: 'Connected to chat server' }]);
    };

    ws.current.onmessage = (event) => {
      setMessages(prev => [...prev, { from: 'bot', text: event.data }]);
    };

    ws.current.onclose = () => {
      setMessages(prev => [...prev, { from: 'system', text: 'Disconnected from chat server' }]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (!input) return;
    ws.current.send(input);
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
  };

  return (
    <div>
      <h2>Chat Interface</h2>
      <div style={{ border: '1px solid gray', height: '300px', overflowY: 'scroll', padding: '10px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <b>{msg.from}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ask something..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
