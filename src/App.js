import React, { useState } from 'react';
import Header from './components/Header';
import FederalElectionResults from './components/FederalElectionResults';
import DailyLogo from './components/DailyLogo';
import TwitterFeed from './components/TwitterFeed';
import FederalElectionCarousel from './components/FederalElectionCarousel';
import HorizontalDivider from './components/HorizontalDivider';
import CongressionalElectionResults from './components/CongressionalElectionResults';
import ReferendumElectionResults from './components/ReferendumElectionResults';
import ReferendumCarousel from './components/ReferendumCarousel';
import StateElectionResults from './components/StateElectionResults';
import StateElectionCarousel from './components/StateElectionCarousel';
import CookCountyElectionResults from './components/CookCountyElectionResults';
import CookCountyCarousel from './components/CookCountyCarousel';
import Introduction from './components/Introduction';
import Sidebar from './components/Sidebar';
import './App.css';



function App() {
  
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };


    return (
        <div className="App">
            <div className="fixed-header">
                <DailyLogo />
                <Header/>
            </div>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <Sidebar />
            </div>

            <div className="main-content">
{/* 
                {/* This button will only show on mobile
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    {sidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button> */}

                <div className="content">
                    {/* Federal Section */}
                    <div className="election-section">
                        
                            <FederalElectionResults />
                    
                            <FederalElectionCarousel />
                    
                    </div>

                    <HorizontalDivider />

                    {/* State Section */}
                    <div className="election-section">

                            <StateElectionResults />
                            <StateElectionCarousel />
   
                    </div>

                    <HorizontalDivider />

                    {/* Cook County Section */}
                    <div className="election-section">
                        <div>
                            <CookCountyElectionResults />
                        </div>
                        <div className="carousel-container">
                            <CookCountyCarousel />
                        </div>
                    </div>

                    <HorizontalDivider />

                    <div className="election-section">
                        <div>
                            <ReferendumElectionResults />
                        </div>
                        <div className="carousel-container">
                            <ReferendumCarousel />
                        </div>
                    </div>
                </div>
                <div className="footer"> 
                © The Daily Northwestern
            </div>
            </div>

            
        </div>
    );
}

export default App;
