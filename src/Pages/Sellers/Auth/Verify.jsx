// Login.js
import React, { useState } from "react";
import "./Auth.css";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { FaAnglesRight } from "react-icons/fa6";
import logo from "../../../assets/assets/Yabba-white.png";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/plans");
  };

  const handleForgotPassword = () => {
    // Add your logic for handling the forgot password
    console.log("Forgot Password. Redirecting to forgot password page...");
  };

  const showForgotPassword = () => {
    setIsForgotPasswordVisible(true);
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
        <h2>Verify Account</h2>
        <p className="p-have-auth">
          Didn't get a mail?{" "}
          <span onClick={() => navigate("/seller")} className="auth-yellow">
            Resend
          </span>
        </p>
        <br />
        <div className="login-third-div-p">
          <label>Otp:</label>
          <input
            className="login-input-wrapper-input"
            type="email"
            value={email}
            placeholder="Enter your OTP"
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="p-auth" onClick={showForgotPassword}></p>
          <br />
          <div className="auth-button-div">
            <button className="auth-button" onClick={handleLogin}>
              Verify
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

export default Verify;
