// PaymentPage.js
import React, { useState } from "react";
import "../../Payment/Pay.css";
import Modal from "./Modal"; // Import the Modal component
import { useNavigate } from "react-router-dom";

const PaymentPages = () => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [pin, setPin] = useState("");
  const [expiry, setExpiry] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayment = () => {
    setIsModalOpen(true);
    // Here, you would typically integrate with a payment gateway (e.g., Stripe) to process the payment.
    // For simplicity, we'll just log the entered information to the console.
    console.log("Payment details:", { email, cardNumber, cvv, pin, expiry });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
 <div className="sellers-first-pay">
       <div className="payment-page">
      {/* Wrap the payment content with the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-payment-content">
          <h2>Payment Successful!</h2>
          {/* Add any additional success message or redirection logic here */}
        </div>
      </Modal>

      <div className="payment-sections">
        <h2>Payment Details</h2>
        <form>
          <label className="input-pay-label">Email:</label>
          <input
            className="input-pay"
            style={{
                width:'auto'
            }}
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="input-pay-label">Card Number:</label>
          <input
            className="input-pay"
            style={{
                width:'auto'
            }}
            placeholder="Enter your card number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <label className="input-pay-label">CVV:</label>
          <input
            className="input-pay"
            style={{
                width:'auto'
            }}
            placeholder="Enter your CVV"
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />

          <label className="input-pay-label">PIN:</label>
          <input
            className="input-pay"
            style={{
                width:'auto'
            }}
            placeholder="Enter your PIN"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />

          <label className="input-pay-label">Expiry Date:</label>
          <input
            className="input-pay"
            style={{
                width:'auto'
            }}
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />

          <button
            className="input-pay-button"
            type="button"
   //         onClick={handlePayment}
          >
            Pay Now
          </button>
        </form>{" "}
      </div>
    </div>
 </div>
  );
};

export default PaymentPages;
