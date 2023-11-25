import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_info">
          <h2>Student Special: Discounted rates </h2>
          <h2 className="info">on tropical gateways!</h2>
          <p style={{ textAlign: "center" }}>
            Let's embody your beautiful ideas together, simplify the way you
            visualize your next big things.
          </p>
        </div>
        <div className="footer_link">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Sales and Refunds</a>
          <a href="">Legal</a>
          <a href="">About</a>
          <a href="">Schedules</a>
          <a href="">Pricing</a>
          <a href="">Membership</a>
          <a href="">Joins</a>
        </div>
      </div>
    </>
  );
};
