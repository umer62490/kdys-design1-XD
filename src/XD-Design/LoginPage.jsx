import React, { useState } from 'react';
import MainLogo from "../assets/KDYS-LOGO.png"; // Logo image
import Layer from "../assets/kdys-layer.png"; // Background layer image
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "../XD-Design/Login.css"; // Your CSS file

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission (page refresh)

    // Example: Perform validation or send data to an API
    if (username === '' || password === '') {
      alert('Please fill in both fields.');
    } else {
      // If the form is successfully submitted, navigate to the dashboard
      console.log('Form submitted:', { username, password });
      alert('Login Successful');

      // Redirect to the /dashboard page using useNavigate
      navigate('/dashboard'); // This will navigate to the dashboard page
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      {/* Corrected the form element */}
      <form onSubmit={handleLogin} className="form-container">
        <img className="main-logo" src={MainLogo} alt="Logo" />
        <div className="form">
          <img className="top-layer" src={Layer} alt="Background" />
          {/* Welcome message */}
          <p className="welcome-text">Welcome!</p>
          <p className="login-details">Please enter your login details</p>

          {/* Username input with an envelope icon */}
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              value={username}
            />
          </div>

          {/* Password input with a lock icon */}
          <div className="input-container">
            <FaLock className="input-icon" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'} // Toggle between 'password' and 'text'
              value={password}
              placeholder="Password"
            />
            {/* Eye icon to toggle password visibility */}
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Remember me checkbox and forgot password link */}
          <div className="checkbox-container">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
