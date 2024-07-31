import React from "react";
import "../styles/globals.css";

export default function Modal({ setShowModal, modalItem }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={() => setShowModal(false)}>Close</button>
        <img src={modalItem.img} alt={modalItem.id} />

        <div className="model-content">
          <p>This where modal will be</p>
        </div>
      </div>
    </div>
  );
}
