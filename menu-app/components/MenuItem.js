"use client";

import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item-card">
      <div className="menu-item-image-box">
        <img src={item.img} alt={item.id} />
      </div>

      <div className="menu-item-info-box">
        <h3>{item.dsc}</h3>
        <h4>£{item.price}</h4>
      </div>

      <div class="menu-item-button">
        <button>+</button>
      </div>
    </div>
  );
};
export default MenuItem;
//micaela test
