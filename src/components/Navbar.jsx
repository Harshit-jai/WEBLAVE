import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>WEBLAVE</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/ChatBot">ChatBot</Link>
            </div>
        </nav>
    );
};

export default Navbar;
