import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSend = async () => {
        const userMessage = { role: 'user', content: userInput };
        setMessages((prev) => [...prev, userMessage]);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:5000/chat/response',
                { message: userInput },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const botMessage = { role: 'bot', content: response.data.reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            alert('Error communicating with server');
        }
        setUserInput('');
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;
