// PaymentPage.js
import React, { useState } from "react";
import "./Pay.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../Redux/cartSlice";
import { selectCartTotals } from "../../Redux/cartSlice";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const PaymentPage = () => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [pin, setPin] = useState("");
  const [expiry, setExpiry] = useState("");
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { totalQuantity, totalPrice } = useSelector(selectCartTotals);
  const dispatch = useDispatch();
  const handlePayment = () => {
    // Here, you would typically integrate with a payment gateway (e.g., Stripe) to process the payment.
    // For simplicity, we'll just log the entered information to the console.
    console.log("Payment details:", { email, cardNumber, cvv, pin, expiry });
  };

  return (
    <div className="payment-page">
      <div className="payment-section">
        <h2>Payment Details</h2>
        <form>
          <label className="input-pay-label">Email:</label>
          <input
            className="input-pay"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="input-pay-label">Card Number:</label>
          <input
            className="input-pay"
            placeholder="Enter your card number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <label className="input-pay-label">CVV:</label>
          <input
            className="input-pay"
            placeholder="Enter your CVV"
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />

          <label className="input-pay-label">PIN:</label>
          <input
            className="input-pay"
            placeholder="Enter your PIN"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />

          <label className="input-pay-label">Expiry Date:</label>
          <input
            className="input-pay"
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />

          <button
            className="input-pay-button"
            type="button"
            onClick={handlePayment}
          >
            Pay Now
          </button>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul className="div-ui">
          {cartItems?.items.map((item) => (
            <li className="cart-div-li" key={item.id}>
              <div className="cart-img-h3">
                <img
                  src={item?.imageUrl[0] ? item?.imageUrl[0] : item?.imageUrl}
                  alt={item?.name}
                  height="100px"
                  width="100px"
                />
                <div>
                  <h3 className="cart-img-h3-h3"> {item.name} </h3>
                  <p className="cart-img-h3-p">
                    {" "}
                    ${item.price} ({item?.quantity})
                  </p>
                </div>
              </div>
              <div className="cart-right">
                <div></div>
                <div>${item?.price * item?.quantity}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="last-last">
          <div></div>
          <div>
            {cartItems?.items.length > 0 && (
              <div>
                <div className="div-checkout">
                  <p>Total Price:</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
