import React from 'react';
import Header from './components/Header';
import FederalElectionResults from './components/FederalElection';
import RelatedCoverage from './components/RelatedCoverage';
import DailyLogo from './components/DailyLogo';
import TwitterFeed from './components/TwitterFeed'; // Adjust the path as necessary
import FederalElectionCarousel from './components/FederalElectionCarousel';

//import DataVisualization from './components/DataVisualization';
import './App.css';


function App() {
    return (
        <div className="App">
            <DailyLogo/>
            <Header />
            <FederalElectionResults />
            <FederalElectionCarousel />
            <RelatedCoverage />
            <TwitterFeed />
        </div>
    );
}

export default App;
