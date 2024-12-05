import React, { useState } from 'react';
import '../styles/LoginForm.css'; // Import the CSS file
import './SignupForm';

function LoginForm() {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Image */}
        <div className="left-side">
          <img src="your-image-path.jpg" alt="Login" className="login-image" />
        </div>

        {/* Right Side - Login Form */}
        <div className="right-side">
          <div className="login-form">
            <h1 className="login-title">Welcome Back!</h1>
            <p className="login-subtitle">We're glad to see you again. Login to continue!</p>

            <form className="form-content">
              <div className="form-group">
                <label htmlFor="username" className="animated-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="styled-input"
                  placeholder="Enter your username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="animated-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="styled-input"
                  placeholder="Enter your password"
                />
              </div>

              <a href="/signup" className="forgot-password">Forgot Password?</a>

              <button type="submit" className="login-button">Login</button>

              <div className="register-link">
                <p>
                  Don’t have an account?{' '}
                  <a href="/signup" className="register-line">Register</a>
                </p>
              </div>

              <a href="/" className="skip-now">Skip for now</a>

              <div className="social-login">
                <span className="social-text">Or login with</span>
                <div className="social-buttons">
                  <a href="#" className="social-icon google"><i className="bx bxl-google"></i></a>
                  <a href="#" className="social-icon linkedin"><i className="bx bxl-linkedin"></i></a>
                  <a href="#" className="social-icon github"><i className="bx bxl-github"></i></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
