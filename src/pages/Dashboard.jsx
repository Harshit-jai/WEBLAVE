import React, { useEffect, useState } from "react";
import axios from "axios";
import "..styles/Dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data for the dashboard
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user-data"); // Replace with your backend endpoint
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch dashboard data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  if (error) {
    return <div className="dashboard-error">{error}</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {userData?.name || "User"}!</h1>
      <div className="dashboard-stats">
        <div className="stat">
          <h3>Total Actions</h3>
          <p>{userData?.totalActions || 0}</p>
        </div>
        <div className="stat">
          <h3>Messages</h3>
          <p>{userData?.messages || 0}</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <h2>Actions</h2>
        <button
          className="action-btn"
          onClick={() => alert("Action triggered!")}
        >
          Perform Action
        </button>
      </div>

      <div className="dashboard-logs">
        <h2>Recent Activity</h2>
        <ul>
          {userData?.recentActivity?.map((activity, index) => (
            <li key={index}>{activity}</li>
          )) || <p>No recent activity</p>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
