import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import "../App.css";
import { Info, BookmarkSolid } from "@washingtonpost/wpds-assets";

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`header-container ${animate ? "animate" : ""}`}>
        <a href="https://dailynorthwestern.com" className="daily-logo-link">
          <img
            src="THE DAILY LOGO WHITE.png"
            alt="Daily Northwestern Logo"
            className="daily-logo"
          />
        </a>

        <h1 className="hed">2024 Elections</h1>

        <div className="centered-container">
          <button className="action-button" onClick={() => setPopupOpen(true)}>
            <Info className="icon-small" />
            <span>What are we covering?</span>
          </button>
          <button
            className="action-button"
            onClick={() =>
              window.open(
                "https://dailynorthwestern.com/category/elections2024/",
                "_blank"
              )
            }
          >
            <BookmarkSolid className="icon-small" />
            <span>Read our Elections Coverage</span>
          </button>
        </div>
      </div>

      <Popup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default Header;
