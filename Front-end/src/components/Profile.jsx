// src/components/Profile.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="profile">
      <h2>Welcome, {user.username}!</h2>
      {user.role === 'student' && (
        <div className="course-list">
          <h3>Your Course List & Grades</h3>
          <ul>
            <li>Course 1 - Grade: A</li>
            <li>Course 2 - Grade: B</li>
            {/* Add more courses as needed */}
          </ul>
        </div>
      )}
      {user.role === 'admin' && (
        <div className="admin-info">
          <h3>Admin Dashboard</h3>
          {/* Add admin-specific content */}
        </div>
      )}
    </div>
  );
}

export default Profile;
