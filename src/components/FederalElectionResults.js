import React, { useEffect, useState } from 'react';
import {Accordion, Box} from '@washingtonpost/wpds-ui-kit'

import "../App.css"
const FederalElectionResults = () => {
    return (
        <section className="dataviz-container">
            <h2>Federal Elections </h2>
            
            <div id="federal">
            {/* <iframe src="https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/115532/17115.html" width="100%" frameborder="0" scrolling="no" marginheight="0" title="Interactive Embed"></iframe>
            <iframe src="https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/114037/17425.html" class="ap-embed overflow-hidden border-none" width="100%" scrolling="no" ></iframe> */}
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
