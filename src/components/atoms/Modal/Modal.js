import React from "react";
import "../../../styles/globalStyles.css";
import "./Modal.styles.css";

const Modal = ({ children }) => {
  return (
    <div className="bg-black-50 flex-align-center flex-justify-center w100 h100 position-absolute z-index-2">
      <div className="modal flex-align-center flex-justify-center flex-direction-column bg-white p-16 border-8">
        {children}
      </div>
    </div>
  );
};
export default Modal;
