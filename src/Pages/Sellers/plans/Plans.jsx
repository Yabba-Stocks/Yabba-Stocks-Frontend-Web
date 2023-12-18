// SubscriptionPage.js

import React from "react";
import "./Plans.css";
import { useNavigate } from "react-router-dom";

const SubscriptionPage = () => {
    const navigate = useNavigate()
  return (
    <div className="subscription-page">
      <h1>Subscribe to our <span className="plans-span">Plans</span></h1>
      <div className="subscription-plans" onClick={()=>navigate('/paysell')}>
        <div className="plan">
          <h2>Free Plan</h2>
          <p>Access to basic features</p>
          <ul className="ui-sub">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </li>
            ))}
          </ul>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p>Unlock advanced features</p>
          <ul className="ui-sub">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </li>
            ))}
          </ul>
        </div>
        <div className="plan">
          <h2>Professional Plan</h2>
          <p>For power users and businesses</p>
          <ul className="ui-sub">
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
