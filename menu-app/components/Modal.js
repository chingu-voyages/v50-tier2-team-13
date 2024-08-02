import React from "react";
import "../styles/globals.css";

export default function Modal({ setShowModal, modalItem }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={() => setShowModal(false)}>Close</button>
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
