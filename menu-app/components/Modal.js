import React from "react";
import "../styles/globals.css";

export default function Modal({ setShowModal, modalItem }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={() => setShowModal(false)}>Close</button>
        <div className="model-content">
          <div className="modal-item-image-box">
            <img src={modalItem.img} alt={modalItem.id} />
          </div>
          <div className="modal-item-info-box">
            <h3>{modalItem.dsc}</h3>
            <h4>£{modalItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
