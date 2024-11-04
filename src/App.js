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
import { ChevronRight, ChevronLeft } from "@washingtonpost/wpds-assets";
import { Menu } from "@washingtonpost/wpds-assets";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    return (
        <div className="App">
            <div className="fixed-header">
            <button id="toggle-sidebar" className="sidebar-toggle" onClick={toggleSidebar}>
                    {sidebarOpen ? <ChevronLeft /> : <Menu />}
                </button>
                <DailyLogo />
                <Header />
            </div>

            <div id="sidebar" className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <Sidebar onClose={toggleSidebar} />
            </div>

            <div className="main-content">
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
                        <CookCountyElectionResults />
                        <CookCountyCarousel />
                    </div>
                    <HorizontalDivider />

                    {/* Referendum Section */}
                    <div className="election-section">
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
