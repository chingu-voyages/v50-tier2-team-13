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
            <a href="https://github.com/chingu-voyages/v50-tier2-team-13">
              <img src="/github.png" alt="Github v50-tier2-team-13" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="/facebook.png" href="" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/instagram.png" href="" alt="instagram" />
            </a>
            <a href="https://x.com/">
              <img src="/twitterx.png" href="" alt="twitter" />
            </a>
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
