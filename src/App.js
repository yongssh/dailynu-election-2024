// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import DailyLogo from './components/DailyLogo';
import FederalElectionResults from './components/FederalElectionResults';
import FederalElectionCarousel from './components/FederalElectionCarousel';
import HorizontalDivider from './components/HorizontalDivider';
import StateElectionResults from './components/StateElectionResults';
import StateElectionCarousel from './components/StateElectionCarousel';
import CookCountyElectionResults from './components/CookCountyElectionResults';
import CookCountyCarousel from './components/CookCountyCarousel';
import ReferendumElectionResults from './components/ReferendumElectionResults';
import ReferendumCarousel from './components/ReferendumCarousel';
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
                <DailyLogo toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
                <Header />
            </div>

            <div id="sidebar" className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <Sidebar onClose={toggleSidebar} />
            </div>

            <div className="main-content">
                <div className="content">
                    {/* Federal Section */}
                    <div id="federal" className="election-section">
                        <FederalElectionResults />
                        <FederalElectionCarousel />
                    </div>
                    <HorizontalDivider />

                    {/* State Section */}
                    <div id="illinois" className="election-section">
                        <StateElectionResults />
                        <StateElectionCarousel />
                    </div>
                    <HorizontalDivider />

                    {/* Cook County Section */}
                    <div id="cook-county" className="election-section">
                        <CookCountyElectionResults />
                        <CookCountyCarousel />
                    </div>
                    <HorizontalDivider />

                    {/* Referendum Section */}
                    <div id="referenda" className="election-section">
                        <ReferendumElectionResults />
                        <ReferendumCarousel />
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
