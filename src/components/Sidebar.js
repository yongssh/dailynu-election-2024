import React from 'react';
import Introduction from './Introduction'; 
import TwitterFeed from './TwitterFeed';  
import '../App.css';                   

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="introduction">
          <Introduction />
          <TwitterFeed />
        </div>
      </div>
    );
};
  
export default Sidebar;
