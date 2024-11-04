import React, { useEffect, useState } from 'react';
import {Accordion, Box} from '@washingtonpost/wpds-ui-kit'

import "../App.css"
const FederalElectionResults = () => {
    return (
        <section className="dataviz-container">
            <h2>Federal Elections </h2>
            
            <section id="federal">
            <div className="presidential-dataviz">
                {/* <h3>Presidential Results</h3> */}
                
                <iframe
                    title="Presidential Election"
                    aria-label="Split Bars"
                    id="datawrapper-chart-XSYus"
                    src="https://datawrapper.dwcdn.net/XSYus/4/"
                    data-external="1"
                    scrolling='no'
                    style={{border: "none", width: "400px", height: "200px" }}
                ></iframe>            
                </div>
        

            <div className="congressional-dataviz">
                {/* <h3>Congressional Results</h3> */}
            <iframe title="US House - 7" 
            aria-label="Election Donut" 
            id="datawrapper-chart-772Sh" 
            src="https://datawrapper.dwcdn.net/772Sh/1/" 
            frameborder="0" 
            // style="width: 0; min-width: 100% !important; border: none;" 
            height="163" 
            data-external="1">

           </iframe>
           </div>
           </section>
          
        </section>
        
    );
};

export default FederalElectionResults;
