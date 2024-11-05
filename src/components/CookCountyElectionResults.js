import React from 'react';
import { Accordion, Box } from '@washingtonpost/wpds-ui-kit';

import "../App.css";

const CookCountyElectionResults = () => {
    return (
        <section className="dataviz-container cook-county">
            <h2>Cook County Elections</h2>
            
            <div id="cook-county">
                <div className="dataviz">
                    <iframe 
                        title="IL State's Attorney Election" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-45p8N" 
                        src="https://datawrapper.dwcdn.net/45p8N/2/" 
                        scrolling="no" 
                        frameBorder="0" 
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
                        frameBorder="0" 
                        className="responsive-iframe" 
                        data-external="1">
                    </iframe>
                </div>

                <div className="dataviz">
                    <iframe 
                        title="Cook County Circuit Court Clerk Election" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-O4mY6" 
                        src="https://datawrapper.dwcdn.net/O4mY6/1/" 
                        scrolling="no" 
                        frameBorder="0" 
                        className="responsive-iframe" 
                        data-external="1">
                    </iframe>
                </div>

                <div className="dataviz">
                    <iframe 
                        title="Metropolitan Water Reclamation District Election (1/2)" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-d7sIr" 
                        src="https://datawrapper.dwcdn.net/d7sIr/3/" 
                        scrolling="no" 
                        frameBorder="0" 
                        className="responsive-iframe" 
                        data-external="1">
                    </iframe>
                </div>

                <div className="dataviz">
                    <iframe 
                        title="Metropolitan Water Reclamation District Election (2/2)" 
                        aria-label="Bar Chart" 
                        id="datawrapper-chart-l7XDX" 
                        src="https://datawrapper.dwcdn.net/l7XDX/2/" 
                        scrolling="no" 
                        frameBorder="0" 
                        className="responsive-iframe" 
                        data-external="1">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default CookCountyElectionResults;
