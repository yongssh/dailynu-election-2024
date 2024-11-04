import React, { useEffect, useState } from 'react';
import {Accordion, Box} from '@washingtonpost/wpds-ui-kit'

import "../App.css"
const FederalElectionResults = () => {
    return (
        <section className="dataviz-container">
            <h2>Federal Elections </h2>
            
            <div id="federal">
            <div className="dataviz">
                {/* <h3>Presidential Results</h3> */}
                
                <iframe 
                title="US Presidential Election"
                aria-label="Bar Chart" 
                id="datawrapper-chart-JzSDb" 
                src="https://datawrapper.dwcdn.net/JzSDb/2/" 
                scrolling="no" 
                frameborder="0" 
                className="responsive-iframe"
                 data-external="1"></iframe>           
            </div>
        

            <div className="dataviz">
                {/* <h3>Congressional Results</h3> */}
            <iframe title="US House IL-9 Election" 
            aria-label="Bar Chart" 
            id="datawrapper-chart-RueGZ" 
            src="https://datawrapper.dwcdn.net/RueGZ/6/" 
            scrolling="no" 
            frameborder="0" 
            className="responsive-iframe"

            data-external="1">
            </iframe>


           </div>
           </div>
          
        </section>
        
    );
};

export default FederalElectionResults;
