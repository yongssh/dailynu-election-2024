// Sidebar.js
import React from 'react';
import Introduction from './Introduction'; 
import TwitterFeed from './TwitterFeed';  
import { ChevronLeft } from "@washingtonpost/wpds-assets";  
import '../App.css';                   

const Sidebar = ({ onClose }) => {
    return (
        <div className="sidebar active">
            {/* Button to close the sidebar */}
              <button className="sidebar-close" onClick={onClose} aria-label="Close Sidebar">
            <ChevronLeft />
        </button>
            <div className="introduction">
                <Introduction />
                <TwitterFeed />
            </div>
        </div>
    );
};

export default Sidebar;
