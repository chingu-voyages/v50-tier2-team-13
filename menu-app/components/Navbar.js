import React from "react";

const Navbar = ({handleCreditToggle}) => {

  return (
    <div className="nav-bar-container">
      <div className="logo-box">
      <img src="easyeats-logo-yellow.svg"/>
      </div>
      <div className="icon-box">
      <img src="shopping-cart.png"/>
        <img onClick={handleCreditToggle} alt="user-icon" src="profile-user.png"/>
      </div>

    </div>
  );
};
export default Navbar;