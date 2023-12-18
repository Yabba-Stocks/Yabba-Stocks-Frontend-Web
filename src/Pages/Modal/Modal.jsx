// Modal.js
import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    // Add your logic for handling the "Next" button click
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Modal;
