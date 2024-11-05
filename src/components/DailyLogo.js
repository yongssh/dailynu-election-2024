import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "@washingtonpost/wpds-assets";

import "../App.css"; 


const DailyLogo = ({ toggleSidebar, sidebarOpen }) => {
    return (
        <div className="daily-logo-container">
            <a href="https://dailynorthwestern.com" className="daily-logo-link">
                <img src="dailylogo.svg" alt="Daily Northwestern Logo" className="daily-logo" />
            </a>
            <div className="centered-container">
            <button
                    id="toggle-sidebar"
                    className="sidebar-toggle"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    {sidebarOpen ? <ChevronLeft /> : <ChevronRight className="menu-icon"/>}
                </button>
                <a href="https://dailynorthwestern.com/category/elections2024/" className="coverage-link">
                    Read Our Coverage
                </a>
              
            </div>
        </div>
    );
};

export default DailyLogo;
