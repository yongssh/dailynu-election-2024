import React from "react";
import Introduction from "./Introduction";
import { Close } from "@washingtonpost/wpds-assets";
import "../App.css";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="popup">
        <button className="popup-close" onClick={onClose} aria-label="Close Popup">
          <Close className="icon-small" />
        </button>
        <h2 className="popup-title">What are we covering?</h2>
        <div className="popup-content">
          <Introduction />
        </div>
      </div>
    </>
  );
};

export default Popup;
