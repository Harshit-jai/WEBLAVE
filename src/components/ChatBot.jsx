import React, { useState } from 'react';
import '../styles/ChatBot.css'; // Import the CSS file

function ChatApp() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { user: 'WEBLAVE', text: 'Hello! How can I assist you today?' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { user: 'You', text: message }]);
      setMessage('');
    }
  };

  const handleClearChat = () => {
    setChatHistory([]); // Clear the chat history
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">Home</li>
          <li className="sidebar-item">Messages</li>
          <li className="sidebar-item">Settings</li>
          <li className="sidebar-item">Assistant</li>
          <li className="sidebar-item">Agents</li>
          <li className="sidebar-item">Create Own Bot</li>
          <li className="sidebar-item">Knowledge Contents</li>
          <li className="sidebar-item">Integration</li>
        </ul>
      </div>

      <div className="chat-container">
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${message.user === 'You' ? 'user-message' : 'bot-message'}`}
            >
              <strong>{message.user}:</strong>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
          <button onClick={handleClearChat} className="clear-button">Clear Chat</button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
