import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState("");
  const [isEmail, setIsEmail] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (/^\d{10}$/.test(value)) {
      setIsEmail(false); // 10-digit number → OTP input
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setIsEmail(true); // Valid email → Password input
    } else {
      setIsEmail(null); // Reset when invalid
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="close-btn" onClick={() => window.history.back()}>
          ✖
        </button>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter Email or Phone"
          value={input}
          onChange={handleInputChange}
          className="input-field"
        />
        {isEmail === true && (
          <input type="password" placeholder="Enter Password" className="input-field" />
        )}
        {isEmail === false && (
          <input type="text" placeholder="Enter 4-digit OTP" maxLength="4" className="input-field" />
        )}
        <Link to="/"> <button className="login-btn">Login</button></Link>
        
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
