import React from "react";
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
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate()
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
    <div className="cart-div">
      {cartItems?.items?.length > 0 ? (
        <div>
          <h2>Your Cart</h2>
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
                    <p className="cart-img-h3-p"> ${item.price} </p>
                  </div>
                </div>
                <div className="cart-right">
                  <div>
                    <div
                      style={{
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div className="cart-button">
                        <div
                          className="cart-button-add"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          <MdAdd />
                        </div>
                        <div className="cart-button-qty">{item?.quantity}</div>
                        <div
                          className="cart-button-minus"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          <FiMinus />
                        </div>
                      </div>
                      <RiDeleteBin6Line
                        color="#ffffff45"
                        onClick={() => handleRemoveFromCart(item.id)}
                      />
                    </div>
                  </div>
                  <div>${item?.price * item?.quantity}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="last-last">
            <div>
              {cartItems?.items.length > 0 && (
                <div>
                  <p className="p-color" onClick={handleClearCart}>
                    Clear Cart
                  </p>
                </div>
              )}
            </div>
            <div>
              {cartItems?.items.length > 0 && (
                <div>
                  <div className="div-checkout">
                    <p>Total Price:</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <button  onClick={()=>navigate('/pay')}
                    className="button-cart-ch"
                    // onClick={}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Your Cart is Empty
          </h2>
          <div
            style={{
              width: 300,
            }}
          >
            <button className="button-cart-ch" onClick={()=>navigate('/')}>Continue Shopping</button>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
