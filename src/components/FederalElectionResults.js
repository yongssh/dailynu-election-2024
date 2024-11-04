import React, { useEffect, useState } from 'react';
import {Accordion, Box} from '@washingtonpost/wpds-ui-kit'

import "../App.css"
const FederalElectionResults = () => {
    return (
        <div className="dataviz-container">
            <h2>Federal Elections </h2>
            
            <div id="federal">
            <div className="presidential-dataviz">
                {/* <h3>Presidential Results</h3> */}
                
                <iframe
                    title="Presidential Election"
                    aria-label="Split Bars"
                    id="datawrapper-chart-XSYus"
                    src="https://datawrapper.dwcdn.net/XSYus/4/"
                    data-external="1"
                    scrolling='no'
                    className="responsive-iframe"  
                    ></iframe>            
                </div>
        

            <div className="congressional-dataviz">
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
          
        </div>
        
    );
};

export default FederalElectionResults;
