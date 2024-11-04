import React, { useEffect, useState } from 'react';
import {Accordion, Box} from '@washingtonpost/wpds-ui-kit'

import "../App.css"
const StateElectionResults = () => {
    return (
        <section className="dataviz-container">
            <h2>Illinois Elections </h2>
                
            <a id="illinois">
            <div className="presidential-dataviz">
                {/* <h3>Presidential Results</h3> */}

                <iframe 
                title="IL House 17 Election" 
                aria-label="Bar Chart" 
                id="datawrapper-chart-SmxdY" 
                src="https://datawrapper.dwcdn.net/SmxdY/5/" 
                scrolling="no" 
                frameborder="0" 
                className="responsive-iframe"
                height="143" data-external="1">

                </iframe>
                </div>
    
            <div className="congressional-dataviz">
                {/* <h3>Congressional Results</h3> */}
                <iframe title="IL State House 18 Election" 
                aria-label="Bar Chart" 
                id="datawrapper-chart-LQziq"
                src="https://datawrapper.dwcdn.net/LQziq/2/" 
                scrolling="no" 
                frameborder="0" 
                className="responsive-iframe"
                width="600" 
                height="143" d
                ata-external="1">
                </iframe>
           </div>
           </a>
        </section>
        
    );
};

export default StateElectionResults;
