import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ChatWindow from './components/ChatWindow';
import ChatBot from './components/ChatBot'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/chat" element={<ChatWindow />} />
                <Route path="/ChatBot" element={<ChatBot />} />
            </Routes>
        </Router>
    );
}

export default App;
