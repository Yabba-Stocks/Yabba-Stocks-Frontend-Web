import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../Redux/cartSlice";
import { selectCartTotals } from "../../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const { totalQuantity, totalPrice } = useSelector(selectCartTotals);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems?.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
      {cartItems?.items.length > 0 && (
        <div>
          <p>Total Items: {cartItems?.items.length}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
