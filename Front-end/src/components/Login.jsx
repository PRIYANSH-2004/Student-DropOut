import React, { useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      // Dummy user data for authentication
      const userData = { name: username };
      login(userData);
      window.location.href = '/';
    } else {
      setError('Both fields are required');
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear error when toggling
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <div className="login-buttons">
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            <button type="button" onClick={handleToggle} className="toggle-button">
              {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
