import React, { useState } from "react";
import "./NavigationBar.css";
import logo from "../../assets/assets/Yabba-white.png";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          <div className="burger-menu" onClick={toggleSidebar}>
            {isSidebarOpen ? "✕" : "☰"} {/* "X" or Burger Icon */}
          </div>
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              width="200px"
              height="30px"
              style={{
                borderRadius: 2,
              }}
            />
          </div>
        </div>
        <div className="menu">
          <ul className={`menu-list ${isSidebarOpen ? "open" : ""}`}>
            <li>Photos</li>
            <li>Illustrations</li>
            <li>Vectors</li>
            <li>Title Pack</li>
            <li>Audio/Instrumentals</li>
            <li>Templates</li>
            <li>Freebies</li>
            <li>Fonts</li>
            <li>Plugins</li>
            <li>
              {" "}
              <button className="sell-button-mini">Start Selling</button>
            </li>
            <li>
              <button className="signin-button-mini">Sign In</button>
            </li>
          </ul>
          <div>
            {/* <button className="sell-button">Start Selling</button> */}
            <button className="signin-button">Start Selling</button>
          </div>
          <div className="navbar-cart-div" onClick={() => navigate("/cart")}>
            <MdShoppingCart className="icon-cart-navbar" />
            {cartItems?.items?.length > 0 ? (
              <p className="navbar-cart-p">{cartItems?.items?.length}</p>
            ) : null}
          </div>
          <div
            style={{
              marginLeft: 32,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
