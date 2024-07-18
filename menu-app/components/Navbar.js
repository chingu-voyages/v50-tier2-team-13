import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <div className="logo-box">
      <img src="easyeats-logo-yellow.svg"/>
      </div>
      <div className="icon-box">
      <img src="shopping-cart.png"/>
        <img src="profile-user.png"/>
      </div>

    </div>
  );
};
export default Navbar;