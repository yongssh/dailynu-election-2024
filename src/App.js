import React from 'react';
import Header from './components/Header';
import PresidentialElectionResults from './components/PresidentialElectionResults';
import DailyLogo from './components/DailyLogo';
import TwitterFeed from './components/TwitterFeed';
import FederalElectionCarousel from './components/FederalElectionCarousel';
import HorizontalDivider from './components/HorizontalDivider'
import CongressionalElectionResults from './components/CongressionalElectionResults';
import ReferendumElectionResults from './components/ReferendumElectionResults';
import StateElectionResults from './components/StateElectionResults';
import CookCountyElectionResults from './components/CookCountyElectionResults';

// styling
import './App.css';

function App() {
    return (
        <div className="App">
            <DailyLogo/>
            <Header />
            
            <PresidentialElectionResults />
            <CongressionalElectionResults/>
            <FederalElectionCarousel />
            <HorizontalDivider/>
            <CookCountyElectionResults />
            <StateElectionResults />
            <ReferendumElectionResults />
            <TwitterFeed />
        </div>
    );
}

export default App;
