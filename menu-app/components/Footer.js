import React from "react";
import "../styles/globals.css";

function Footer() {
  return (
    <footer>
      <div className="footer-slogan">
        <div className="easy-eats-slogan">
          <img
            className="footer-title"
            src="easyeats-logo-without-space.svg"
            alt="easyeats-logo-black.svg"
          />
          <h5>Dining choices made simple!</h5>
        </div>

        <div className="footer-nav">
          <div>
            <h5>Home</h5>
            <h5>About us</h5>
            <h5>Contact</h5>
            <h5>FAQ</h5>
          </div>

          <div className="footer-logos">
            <img
              src="/github.png"
              href="https://github.com/chingu-voyages/v50-tier2-team-13"
              alt="Github v50-tier2-team-13"
            />
            <img src="/facebook.png" href="" alt="facebook" />
            <img src="/instagram.png" href="" alt="instagram" />
            <img src="/twitterx.png" href="" alt="twitter" />
          </div>
        </div>
      </div>

      <div className="details-below footer">
        <hr></hr>
        <h5>
          <ul className="db-main">
            <li style={{ listStyleType: "none" }}> ©2024 EasyEats</li>
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
//
