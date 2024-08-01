"use client";

import React from "react";
import CheckOutItem from "./CheckoutItem";

const MenuItem = ({ item, AddItemToOrder }) => {

  return (
    <div className="menu-item-card">
      <div className="menu-item-image-box">
        <img src={item.img} alt={item.id} />
      </div>

      <div className="menu-item-info-box">
        <h3>{item.dsc}</h3>
        <h4>£{item.price}</h4>
      </div>

      <div className="menu-item-button">
        <button onClick={(e) => {
          e.preventDefault();
          AddItemToOrder(item)}
        }>+</button>
      </div>
    </div>
  );
};
export default MenuItem;
