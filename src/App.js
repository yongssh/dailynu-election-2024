import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
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

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


    return (
        <div className="App">
                <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

                <NavBar /> 

            <div className="main-content">
                <div className="content">
                    <div id="federal" className="election-section">
                        <FederalElectionResults />
                        <FederalElectionCarousel />
                    </div>

       
                    <div id="illinois" className="election-section">
                        <StateElectionResults />
                        <StateElectionCarousel />
                    </div>

             
                    <div id="cook-county" className="election-section ">
                        <CookCountyElectionResults  />
                        <CookCountyCarousel />
                    </div>
                

                    <div id="referenda" className="election-section">
                        <ReferendumElectionResults />
                        <ReferendumCarousel />
                    </div>
                </div>
                <div className="footer"> 
                    © The Daily Northwestern<br></br>
                    Editor-in-Chief: Jacob Wendler<br></br>
                    Web Developer: Yong-Yu Huang
                </div>
            </div>
            
        </div>
    );
}

export default App;
