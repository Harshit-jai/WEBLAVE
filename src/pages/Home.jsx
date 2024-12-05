import React, { useEffect } from 'react';
import '../styles/Home.css'; // Import the CSS file

function HomePage() {
  useEffect(() => {
    // Adding animation class when component is mounted
    const text = document.querySelector('.animated-text');
    text.classList.add('animate-text');
  }, []);

  return (
    <div className="home-page">
      <div className="content-container">
        <div className="left-side">
          <div className="animated-text">
            Welcome to WEBLAVE! Explore the Future.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
