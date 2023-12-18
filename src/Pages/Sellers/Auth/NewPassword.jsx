// Login.js
import React, { useState } from "react";
import "./Auth.css";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { FaAnglesRight } from "react-icons/fa6";
import logo from "../../../assets/assets/Yabba-white.png";
import { useNavigate } from "react-router-dom";
const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/seller");
  };

  const handleForgotPassword = () => {
    // Add your logic for handling the forgot password
    console.log("Forgot Password. Redirecting to forgot password page...");
  };

  const showForgotPassword = () => {
    navigate("/forgot");
  };

  const hideForgotPassword = () => {
    setIsForgotPasswordVisible(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-first-div">
      <div className="login-second-div">
        <h2>New Pasword</h2>
        <p className="p-have-auth">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="auth-yellow">
            Register
          </span>
        </p>

        <br />
        <div className="login-third-div-p">
          <div className="password-input-container">
            <label>Password:</label>
            <div className="password-input-wrapper">
              <input
                className="login-input-wrapper-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your email password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="toggle-password-icon"
                onClick={handleTogglePassword}
              >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </div>
            </div>
          </div>

          <br />
          <div className="auth-button-div">
            <button className="auth-button" onClick={handleLogin}>
              Submit
              <span className="span-auth">
                {" "}
                <FaAnglesRight />
              </span>{" "}
            </button>
          </div>

          <img src={logo} alt="logo" width="120px" />
        </div>
      </div>
    </div>
  );
};

export default Password;
