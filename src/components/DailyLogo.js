// DailyLogo.js
import React, { useState } from 'react';
import { ChevronLeft } from "@washingtonpost/wpds-assets";
import { FaBars } from 'react-icons/fa';

const DailyLogo = ({ toggleSidebar, sidebarOpen }) => {
    return (
        <div className="daily-logo-container">
            <a href="https://dailynorthwestern.com" className="daily-logo-link">
                <img src="dailylogo.svg" alt="Daily Northwestern Logo" className="daily-logo" />
            </a>
            <div className="centered-container">
                <a href="https://dailynorthwestern.com/category/elections2024/" className="coverage-link">
                    Read Our Coverage
                </a>
                <button
                    id="toggle-sidebar"
                    className="sidebar-toggle"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    {sidebarOpen ? <ChevronLeft /> : <FaBars />}
                </button>
            </div>
        </div>
    );
};

export default DailyLogo;
