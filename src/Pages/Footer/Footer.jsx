// Footer.js

import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import logo from "../../assets/assets/Yabba-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Yabbastocks Logo" />
        </div>
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <a href="/about">About Yabbastocks</a>
          <a href="/careers">Careers</a>
          <a href="/press">Press Center</a>
          <a href="/investor-relations">Investor Relations</a>
        </div>
        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <a href="/sell-products">Sell on Yabbastocks</a>
          <a href="/sell-services">Sell Services on Yabbastocks</a>
          <a href="/associates">Become a Seller</a>
          <a href="/advertise">Advertise Your Products</a>
        </div>
        <div className="footer-section">
          <h3>YabbaStocks Payment Products</h3>
          <a href="/shop-with-points">Shop with Points</a>
          <a href="/reload-your-balance">Reload Your Balance</a>
          <a href="/currency-converter">Yabbastocks Currency Converter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
