"use client";

import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const MenuItem = ({ item, AddItemToOrder }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="menu-item-card">
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          modalItem={item}
          AddItemToOrder={AddItemToOrder}
        />
      )}
      <div className="menu-item-image-box">
        <img src={item.img} alt={item.id} />
      </div>
      <div className="menu-item-info-box">
        <h3>{item.dsc}</h3>
        <h4>£{item.price}</h4>
      </div>
      <div className="menu-item-button">
        <button onClick={() => setShowModal(true)}>+</button>
      </div>
    </div>
  );
};
export default MenuItem;
