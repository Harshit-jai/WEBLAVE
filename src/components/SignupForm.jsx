
import React from 'react';
import '../styles/SignupForm.css'; // Updated CSS file with unique class names
import Image from '../images/loginpage_bg.jpg'; // Adjust path as necessary

function SignupForm() {
  return (
    <div className="register-page-container">
      <div className="register-image-container">
        <img src={Image} alt="Background" className="register-image" />
      </div>
      <div className="register-form-container">
        <div className="register-form">
          <h1 className="register-title">Create Your Account</h1>
          <form className="register-form-content">
            <div className="register-form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div className="register-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="register-form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="register-form-group">
              <button type="submit" className="register-button">Sign Up</button>
            </div>
          </form>
          <div className="register-extra-links">
            <p>
              Already have an account? <a href="/login" className="register-login-link">Login</a>
            </p>
          </div>
          <div className="register-social-login">
            <p className="register-social-text">Or sign up with</p>
            <div className="register-social-icons">
              <a href="#" className="register-social-icon google">Google</a>
              <a href="#" className="register-social-icon linkedin">LinkedIn</a>
              <a href="#" className="register-social-icon github">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

