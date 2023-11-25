import React from "react";
import "./Navabr.css";
export const Navbar = () => {
  return (
    <>
      <nav class="navigation">
        <div class="left-space"></div>
        <div class="centered-items">
          <a href="#" className="ai-item">
            Home
          </a>
          <a href="#" className="ai-item">
            About
          </a>
          <a href="#" className="ai-item">
            Schedules
          </a>
          <a href="#" className="ai-item">
            Membership
          </a>
          <a href="#" className="ai-item">
            Pricing
          </a>
        </div>
        <div class="end-buttons">
          <button className="btn">Offers</button>
          <button className="button">Courses</button>
        </div>
      </nav>
    </>
  );
};
