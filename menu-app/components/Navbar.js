import React from "react";

const Navbar = ({ handleCreditToggle, handleOrderToggle }) => {
  return (
    <div className="nav-bar-container">
      <div className="logo-box">
        <img src="easyeats-logo-yellow.svg" alt="EasyEats Logo" />
      </div>
      <div className="icon-box">
        <img
          onClick={(e) => {
            e.preventDefault();
            handleOrderToggle();
          }}
          src="shopping-cart.png"
          alt="Shopping Cart"
        />

        <img
          onClick={(e) => {
            e.preventDefault();
            handleCreditToggle();
          }}
          alt="user-icon"
          src="profile-user.png"
        />
      </div>
    </div>
  );
};
export default Navbar;
