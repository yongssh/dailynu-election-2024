import React, { useEffect, useState } from 'react';
import {Accordion, Box} from '@washingtonpost/wpds-ui-kit'

import "../App.css"
const StateElectionResults = () => {
    return (
        <section className="dataviz-container">
            <h2>Cook County Elections </h2>
            
            <section >
            <div className="dataviz">
                {/* <h3>Presidential Results</h3> */}
               
                <iframe title="IL State's Attorney Election" 
                aria-label="Bar Chart" 
                id="datawrapper-chart-45p8N" 
                src="https://datawrapper.dwcdn.net/45p8N/2/" 
                scrolling="no" 
                frameborder="0" 
                className="responsive-iframe"
                data-external="1">
                </iframe>           
            </div>
    
            <div className="dataviz">
                <iframe 
                title="IL's Cook County Clerk Election" 
                aria-label="Bar Chart" 
                id="datawrapper-chart-HkPqH" 
                src="https://datawrapper.dwcdn.net/HkPqH/2/" 
                scrolling="no" 
                frameborder="0" 
                className="responsive-iframe" 
                data-external="1"></iframe>
            </div>

            <div className="dataviz">
            <iframe 
                title="Cook County Circuit Court Clerk Election" 
                aria-label="Bar Chart" 
                id="datawrapper-chart-O4mY6" 
                src="https://datawrapper.dwcdn.net/O4mY6/1/" 
                scrolling="no" 
                frameborder="0" 
                className="responsive-iframe" 
                data-external="1">

            </iframe>
            </div>

           
        </section>
        </section>
        
    );
};

export default StateElectionResults;
