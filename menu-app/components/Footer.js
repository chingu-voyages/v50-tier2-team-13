import React from "react";
import "../styles/globals.css";

function Footer() {
  return (
    <footer>
      <div className="footer-slogan">
        <img src="easyeats-logo-black.svg" alt="easyeats-logo-black.svg" />
        <h5>Dining choices made simple!</h5>
      </div>

      <div className="footer-nav">
        <h5>Home</h5>
        <h5>About us</h5>
        <h5>Contact</h5>
        <h5>FAQ</h5>
        <h5>little logo</h5>
      </div>

      <div className="details-below footer">
        <hr></hr>
        <h5>
          <ul className="db-main">
            <li style={{ listStyleType: "none" }}>2024 EasyEats</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
