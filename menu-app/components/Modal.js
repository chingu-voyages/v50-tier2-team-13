import React, { useState } from "react";
import "../styles/globals.css";
import { IoIosArrowBack } from "react-icons/io";
import ItemAdded from "./ItemAdded";

export default function Modal({ setShowModal, modalItem, AddItemToOrder }) {
  const [showItemAdded, setShowItemAdded] = useState(false);
  const handleModalClick = (e) => {
    e.preventDefault();
    AddItemToOrder(modalItem);
    setShowItemAdded(true);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="go-back">
          <IoIosArrowBack
            className="back-arrow"
            onClick={() => setShowModal(false)}
          />
          <p>Back</p>
        </div>

        <div className="modal-content">
          <div className="modal-item-image-box">
            <img src={modalItem.img} alt={modalItem.id} />
          </div>
          <div className="modal-item-info-box">
            <h3 className="modal-item-desc">{modalItem.dsc}</h3>
            <h4>£{modalItem.price}</h4>
          </div>
          <hr></hr>
          <div className="modal-button">
            <button onClick={handleModalClick}>Add to Cart</button>
          </div>
        </div>
      </div>
      {showItemAdded && <ItemAdded />}
    </div>
  );
}
