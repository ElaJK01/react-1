import React from "react";

const Modal = ({ message, handleCloseModal }) => (
  <div className="modal">
    <div>{message}</div>
    <button className="card-content__btn modal__btn" onClick={handleCloseModal}>
      close
    </button>
  </div>
);

export default Modal;
