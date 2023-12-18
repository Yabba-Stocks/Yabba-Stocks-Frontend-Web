import React from "react";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import "./Cart.css"; // Assuming you have a CSS file for styling

const CartButtons = ({ quantity, onAdd, onDecrease }) => {
  return (
    <div className="cart-button">
      <div className="cart-button-add" onClick={onAdd}>
        <MdAdd />
      </div>
      <div className="cart-button-qty">{quantity}</div>
      <div className="cart-button-minus" onClick={onDecrease}>
        <FiMinus />
      </div>
    </div>
  );
};

export default CartButtons;
